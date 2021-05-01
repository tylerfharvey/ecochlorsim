"use strict";
class PID {
    constructor(Input, Setpoint, Kp, Ki, Kd, ControllerDirection) {
        this.input = Input;
        this.setpoint = Setpoint;
        this.inAuto = false;
        this.setOutputLimits(0, 100); // default output limits
        this.SampleTime = 1000; // default Controller Sample Time is 0.1 seconds
        this.setTunings(Kp, Ki, Kd);
        this.setControllerDirection(ControllerDirection);
        this.lastTime = this.millis() - this.SampleTime;
        this.ITerm = 0;
        this.output = 0;
    }
    setInput(current_value) {
        this.input = current_value;
    }
    setPoint(current_value) {
        this.setpoint = current_value;
    }
    millis() {
        return moment().valueOf();
    }
    /**
     * Compute()
     * This, as they say, is where the magic happens.  this function should be called
     * every time "void loop()" executes.  the function will decide for itself whether a new
     * pid Output needs to be computed.  returns true when the output is computed,
     * false when nothing has been done.
     */
    compute() {
        if (!this.inAuto) {
            return false;
        }
        const now = this.millis();
        const timeChange = (now - this.lastTime)
        if (timeChange >= this.SampleTime) {
            // Compute all the working error variables
            const input = this.input
            const error = this.setpoint - input
            const PTerm = this.kp * error
            this.ITerm += (this.ki * error) * this.setDirection
            if (this.ITerm > this.outMax) {
                this.ITerm = this.outMax
            } else if (this.ITerm < this.outMin) {
                this.ITerm = this.outMin
            }
            const dInput = input - this.lastInput
            const DTerm = this.kd * dInput
            // Compute PID Output
            let output = (PTerm + this.ITerm - DTerm)
            if (output > this.outMax) {
                output = this.outMax
            }
            else if (output < this.outMin) {
                output = this.outMin
            }
            this.output = output
            // Remember some variables for next time
            this.lastInput = input
            this.lastTime = now
            return true
        }
        else {
            return false
        }
    }
    /**
     * SetTunings(...)
     * This function allows the controller's dynamic performance to be adjusted.
     * it's called automatically from the constructor, but tunings can also
     * be adjusted on the fly during normal operation
     */
    setTunings(Kp, Ki, Kd) {
        if (Kp < 0 || Ki < 0 || Kd < 0) {
            return;
        }
        this.dispKp = Kp;
        this.dispKi = Ki;
        this.dispKd = Kd;
        this.SampleTimeInSec = (this.SampleTime) / 1000;
        this.kp = Kp;
        this.ki = Ki * this.SampleTimeInSec;
        this.kd = Kd / this.SampleTimeInSec;
    }
    /**
     * SetSampleTime(...)
     * sets the period, in Milliseconds, at which the calculation is performed
     */
    setSampleTime(NewSampleTime) {
        if (NewSampleTime > 0) {
            var ratio = NewSampleTime / (1.0 * this.SampleTime);
            this.ki *= ratio;
            this.kd /= ratio;
            this.SampleTime = Math.round(NewSampleTime);
        }
    }
    /**
     * SetOutput( )
     * Set output level if in manual mode
     */
    setOutput(val) {
        if (val > this.outMax) {
            this.output = val;
        }
        else if (val < this.outMin) {
            val = this.outMin;
        }
        this.output = val;
    }
    /**
     * SetOutputLimits(...)
     * This function will be used far more often than SetInputLimits.  while
     * the input to the controller will generally be in the 0-1023 range (which is
     * the default already,)  the output will be a little different.  maybe they'll
     * be doing a time window and will need 0-8000 or something.  or maybe they'll
     * want to clamp it from 0-125.  who knows.  at any rate, that can all be done here.
     */
    setOutputLimits(Min, Max) {
        if (Min >= Max) {
            return;
        }
        this.outMin = Min;
        this.outMax = Max;
        if (this.inAuto) {
            if (this.output > this.outMax) {
                this.output = this.outMax;
            }
            else if (this.output < this.outMin) {
                this.output = this.outMin;
            }
            if (this.ITerm > this.outMax) {
                this.ITerm = this.outMax;
            }
            else if (this.ITerm < this.outMin) {
                this.ITerm = this.outMin;
            }
        }
    }
    /**
     * SetMode(...)
     * Allows the controller Mode to be set to manual (0) or Automatic (non-zero)
     * when the transition from manual to auto occurs, the controller is
     * automatically initialized
     */
    setMode(Mode) {
        var newAuto;
        if (Mode == PID.AUTOMATIC) {
            newAuto = 1;
        }
        else if (Mode == PID.MANUAL) {
            newAuto = 0;
        }
        else {
            throw new Error("Incorrect Mode Chosen");
        }
        if (newAuto == !this.inAuto) { //we just went from manual to auto
            this.initialize();
        }
        this.inAuto = newAuto;
    }
    /**
     * Initialize()
     * does all the things that need to happen to ensure a bumpless transfer
     * from manual to automatic mode.
     */
    initialize() {
        this.ITerm = this.output;
        this.lastInput = this.input;
        if (this.ITerm > this.outMax) {
            this.ITerm = this.outMax;
        }
        else if (this.ITerm < this.outMin) {
            this.ITerm = this.outMin;
        }
    }
    /**
     * SetControllerDirection(...)
     * The PID will either be connected to a DIRECT acting process (+Output leads
     * to +Input) or a REVERSE acting process(+Output leads to -Input.)  we need to
     * know which one, because otherwise we may increase the output when we should
     * be decreasing.  This is called from the constructor.
     */
    setControllerDirection(ControllerDirection) {
        if (ControllerDirection == 0 || ControllerDirection.toString().toLowerCase() == 'direct') {
            this.setDirection = 1;
        }
        else if (ControllerDirection == 1 || ControllerDirection.toString().toLowerCase() == 'reverse') {
            this.setDirection = -1;
        }
        else {
            throw new Error("Incorrect Controller Direction Chosen");
        }
    }
    /**
     * Status Functions
     * Just because you set the Kp=-1 doesn't mean it actually happened.  these
     * functions query the internal state of the PID.  they're here for display
     * purposes.  this are the functions the PID Front-end uses for example
     */
    getKp() {
        return this.dispKp;
    }
    getKd() {
        return this.dispKd;
    }
    getKi() {
        return this.dispKi;
    }
    getMode() {
        return this.inAuto ? "Auto" : "Manual";
    }
    getDirection() {
        return this.controllerDirection;
    }
    getOutput() {
        return this.output;
    }
    getInput() {
        return this.input;
    }
    getSetPoint() {
        return this.setpoint;
    }
}

// Constants for backward compatibility
PID.AUTOMATIC = 1;
PID.MANUAL = 0;
PID.DIRECT = 0;
PID.REVERSE = 1;

class SensorSim {
    constructor(rOver, rUnder) {
        this.target = 0
        this.adj = 1.0
        this.raUp = 10000
        this.raDn = 10000
        this.rOver = rOver
        this.rUnder = rUnder
        this.enable = false
        this.fail = false
        this.prOn = false
        this.value = 0
        this.sdValue = 0
        this.onTime = 0
        this.offTime = 0
    }
    Sim(enable, fail) {
        const on = enable & !fail
        if (on && !this.prOn) {
            //Sensor turned on
            this.onTime = moment().valueOf()
        } else if (!on && this.prOn) {
            //Sensor turned off
            this.offTime = moment().valueOf()
            this.sdValue = this.value
        }
        const upet = moment().valueOf() - this.onTime
        const dnet = moment().valueOf() - this.offTime
        let base
        if (this.onTime > this.offTime) {
            //Sensor is on
            if (upet < this.raUp) {
                //Network 2,3,4 Sensor is newly on A
                base = this.target * (upet) / this.raUp
            } else {
                //Network 5 Sensor is stable B
                base = this.target
            }
        } else {
            if (dnet < this.raDn) {
                //Network 6,7,8 Sensor is newly off C
                base = this.sdValue * (1 - dnet/ this.raUp)
            } else {
                //Network 9 Sensor is off D
                base = 0
            }
        }

        const random = this.rUnder + (this.rOver - this.rUnder) * Math.random()
        this.value = base * this.adj * random
        this.prOn = on
        return this.value
    }
}
class DPSim {
    constructor() {
        this.filterPressure = 0
        this.outletTarget = 0
        this.dP = 0
        this.adj = 1.0
        this.raUp = 10000
        this.raDn = 10000
        this.enable = false
        this.fail1 = false
        this.fail2 = false
        this.prOn = false
        this.value = 0
        this.sdValue = 0
        this.onTime = 0
        this.offTime = 0
    }
    SimDP(enable, fail1, fail2) {
        const on = enable & !fail1
        if (on && !this.prOn) {
            //Sensor turned on
            this.onTime = moment().valueOf()
        } else if (!on && this.prOn) {
            //Sensor turned off
            this.offTime = moment().valueOf()
            this.sdValue = this.value
        }
        const upet = moment().valueOf() - this.onTime
        const dnet = moment().valueOf() - this.offTime
        let rampPer
        if (this.onTime > this.offTime) {
            //Sensor is on
            if (upet < this.raUp) {
                //Network 2,3,4 Sensor is newly on A
                rampPer = upet / this.raUp
            } else {
                //Network 5 Sensor is stable B
                rampPer = 1
            }
        } else {
            if (dnet < this.raDn) {
                //Network 6,7,8 Sensor is newly off C
                rampPer = (1 - dnet / this.raDn)
            } else {
                //Network 9 Sensor is off D
                rampPer = 0
            }
        }
        if (!fail1) {
            if (!fail2) { 
                this.value = this.dP * rampPer * this.adj + this.filterPressure
            } else if (fail2) {
                this.value = (this.dP * this.adj + this.outletTarget) * rampPer
            }
        } else if (fail1) {
            this.value = 0
        }
        this.prOn = on
        return this.value
    }
}
class TimerON {
    constructor(PT) {
        this.PT = PT * 1000;
        this.preIN = true;
        this.onTime = moment().valueOf();
        this.Q = false;
        this.ET = 0 
    }
    TON(IN) {
        if (IN) {
            if (!this.preIN) {
                this.onTime = moment().valueOf()
            }
            this.ET = moment().valueOf() - this.onTime
            this.Q = this.ET > this.PT
        } else if (!IN){
            this.ET = 0
            this.Q = false
        }
        this.preIN = IN
        return this.Q
    }
}
class TimerP {
    constructor(PT) {
        this.PT = PT * 1000;
        this.preIN = true;
        this.onTime = 0;
        this.Q = false;
        this.ET = 0 
    }
    TP(IN) {
        const nowT = moment().valueOf()
        if (IN && !this.preIN && nowT > this.onTime + this.PT) {this.onTime = nowT}
        if (nowT > this.onTime + this.PT) {
            //past the end of the pulse
            if (IN) {
                this.ET = this.PT
                this.Q = true
            } else {
                this.ET = 0
                this.Q = false
            }
        } else {
            this.ET = nowT - this.onTime
            this.Q = true
        }
        this.preIN = IN
        return this.Q
    }
}
class TimerOFF {
    constructor(PT) {
        this.PT = PT * 1000;
        this.preIN = false;
        this.offTime = 0;
        this.Q = false;
        this.ET = 0 
    }
    TOF(IN) {
        if (IN) {
            this.Q = true
            this.ET = 0
        } else if (!IN){
            if (this.preIN) {
                this.offTime = moment().valueOf()
            }
            this.ET = moment().valueOf() - this.offTime
            this.Q = this.ET < this.PT
        }
        this.preIN = IN
        return this.Q
    }
}
class PTrig {
    constructor() {
        this.pre = false
        this.Q = false
    }
    pTrig(clk) {
        if (clk && !this.pre) {
            this.Q = true
        } else {
            this.Q = false
        }
        this.pre = clk
        return this.Q
    }
}
class ValveFlush {
    constructor(timer) {
        this.cvAuto = true
        this.cvOpenManual = false
        this.cvCloseManual = false
        this.cvOpenAuto = false
        this.cvCloseAuto = false
        this.cvZSO = false
        this.cvZSC = false
        this.systemBallast = false
        this.systemManual = false
        this.cycleRunning = false
        this.cvOpenDO = false
        this.cvOpenFault = false
        this.cvCloseFault = false
        this.cvStatus = 0
        this.tmrCVOpen = new TimerON(timer)
        this.tmrCVClose = new TimerON(timer)
    }
    valveUpdate(powOn, fAlmRes) {
        //Network 1
        let bTop = this.systemBallast && this.cvAuto && (this.cvOpenAuto || (this.cvOpenDO && this.cycleRunning)) && !this.cvCloseAuto
        let bBot = this.systemManual && !this.cvAuto && (this.cvOpenManual || this.cvOpenDO) && !this.cvCloseManual
        this.cvOpenDO = powOn && (bTop || bBot) && !this.cvOpenFault 
        //Network 2
        bTop = this.tmrCVOpen.TON(this.cvOpenDO && !this.cvZSO)
        bBot = this.cvOpenFault && !fAlmRes
        this.cvOpenFault = bTop || bBot
        //Network 3
        bTop = this.tmrCVClose.TON(!this.cvOpenDO && !this.cvZSC)
        bBot = this.cvCloseFault && fAlmRes
        this.cvCloseFault = bTop || bBot
        //Network 4
        if (this.cvZSC) {this.cvStatus = 0}
        //Network 5
        if (this.cvZSO) {this.cvStatus = 1}
        //Network 6
        if (this.cvOpenFault || this.cvCloseFault) {this.cvStatus = 2}
    }
}
class Scanner {
    constructor(timer) {
        this.smAuto = true
        this.smMotorManual = false
        this.smFilterManual = false
        this.smMotorAuto = false
        this.smFilterAuto = false
        this.smStopAuto = false
        this.smOverload = false
        this.smMotorPosition = false
        this.smFilterPosition = false
        this.smRunHourReset = false
        this.enable = false
        this.smStopManual = false
        this.systemBallast = false
        this.systemManual = false
        this.cycleRunning = false
        this.smAlarmReset = false
        this.filterPark = false
        this.smMotorDO = false
        this.smFilterDO = false
        this.smOverloadFault = false
        this.smMotorFault = false
        this.smFilterFault = false
        this.smRunHoursReset = 0
        this.smRunHoursNReset = 0
        this.smStatus = 0
        this.tmrsmToMot = new TimerON(timer)
        this.tmrsmToFil = new TimerON(timer)
    }
    scannerUpdate() {
        //Network 1
        let b1 = this.systemBallast && this.smAuto && (this.smMotorAuto || this.filterPark || (this.smMotorDO && this.cycleRunning))
        let b2 = this.systemManual && !this.smAuto && !this.smStopManual && (this.smMotorManual || this.smMotorDO)
        let b3 = !this.smFilterAuto && !this.smStopAuto && !this.smMotorFault && !this.smOverloadFault && !this.smFilterDO && !this.smMotorPosition
        //console.log(`enable-${this.enable} && (b1-${b1} || b2-${b2}) && b3-${b3} `)
        this.smMotorDO = this.enable && (b1 || b2) && b3 
        //Network 2 -- not used
        //Network 3
        b1 = this.systemBallast && this.smAuto && (this.smFilterAuto || (this.smFilterDO && this.cycleRunning))
        b2 = this.systemManual && !this.smAuto && !this.smStopManual && (this.smFilterManual || this.smFilterDO)
        b3 = !this.smMotorAuto && !this.smStopAuto && !this.smFilterFault && !this.smOverloadFault && !this.smMotorDO && !this.smFilterPosition
        this.smFilterDO = this.enable && (b1 || b2) && b3 
        //Network 4
        this.smOverloadFault = !this.smOverload
        //Network 5
        b1 = this.tmrsmToMot.TON(this.smMotorDO && !this.smMotorPosition)
        b2 = this.smMotorFault && !this.smAlarmReset
        this.smMotorFault = b1 || b2
        //Network 6
        b1 = this.tmrsmToFil.TON(this.smFilterDO && !this.smFilterPosition)
        b2 = this.smFilterFault && !this.smAlarmReset
        this.smFilterFault = b1 || b2
        //Network 7, 8, 9, 10, 11 -- Not Used RunHours
        //Network 12
        if (!this.enable && !this.smOverloadFault && !this.smMotorFault && !this.smFilterFault) {this.smStatus = 0}
        //Network 13
        if (this.enable && !this.smOverloadFault && !this.smMotorFault && !this.smFilterFault && !this.smMotorDO && !this.smFilterDO) {this.smStatus = 1}
        //Network 14
        if ((this.smMotorDO || this.smFilterDO) && !this.smOverloadFault && !this.smMotorFault && !this.smFilterFault) {this.smStatus = 2}
        //Network 15
        if (this.smOverloadFault || this.smMotorFault) {this.smFilterFault = 3}
    }
}
class Counter {
    constructor() {
        this.cV = 0
        this.lastCU = false
        this.lastCD = false 
    }
    countUp(cU) {
        if (cU && !this.lastCU) {
            this.cV += 1
        }
        this.lastCU = cU
    }
    countDn(cD) {
        if (cD && !this.lastCD) {
            this.cV -= 1
        }
        this.lastCD = cD
    }
}
