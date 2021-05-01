//plc1 simulation
const bwts_PLC1 = () => {
    plc1_2GeneratorSimulation()
    plc1_3Alarms()
    plc1_8Calculations()
}
const plc1_2GeneratorSimulation = () => {
    //Network 1
    mGenRunning = (mGeneratorEnable && ((p1FIT100Final > 5.5 && p1PIT400Final < -385.7) || (mGenRunning)))
    //Network 2
    mPumpMotiveRunCmd = gMotiveShutdown.TOF(mGenRunning)
    //Network 3
    mValveFlushMx = gFlushTimer.TOF(mGenRunning) && !mGeneratorEnable
    OITTextReactorFlushColor = mValveFlushMx
    //Network 4
    zFIT100 = z03PCVA09 || z04PCVA10 || z38P100 || z43FIT100
    fIT100.target = p1FIT100Target
    p1FIT100Final = fIT100.Sim(fPumpMotive, zFIT100)
    //Network 5
    zPIT400 = z03PCVA09 || z04PCVA10 || z38P100 || z43FIT100
    pIT400.target = p1PIT400Target
    p1PIT400Final = pIT400.Sim(fPumpMotive, zPIT400)
    //Network 6
    zAIT400 = z38P100 || z39P200 || z40P300 || z41AIT400
    aIT400.raUp = p1AIT400RampUpEt
    aIT400.raDn = p1AIT400RampDownEt
    p1AIT400Final = aIT400.Sim(mGenRunning, zAIT400)
    //Network 7
    zFIT200 = z44FIT200
    p1FIT200Final = fIT200.Sim(fPumpMotive, zFIT200)
    //Network 8
    zFIT300 = z45FIT300
    p1FIT300Final = fIT300.Sim(fPumpMotive, zFIT300)
}
const plc1_3Alarms = () => {
    //Network 1 Acid Pump Fault
    if (gStartupAlarmDelay.Q && mGenRunning && (!aPumpAcidRunConfirm || z39P200)) {
        pmpAcidAlm = true
        mSilenceReset = true
    }
    //Network 2
    if (gStartupFlow.TON(mGeneratorEnable && p1FIT100Final < f2SPDis)) {
        strtUpAlrmFlow = true
        mSilenceReset = true 
    }
    //Network 3
    if (gStartupVac.TON(mGeneratorEnable && p1PIT400Final > -350)) {
        strtUpAlrmVac = true
        mSilenceReset = true 
    }
    //Network 4
    if (gStartupAlarmDelay.Q && mGenRunning && (p1FIT100Final < f1SPDis)) {
        flowLvl1 = true
    }
    //Network 5
    if (gStartupAlarmDelay.Q && mGenRunning && (p1FIT100Final < f2SPDis)) {
        flowLvl2 = true
        mSilenceReset = true
    }
    //Network 6
    if (gStartupAlarmDelay.Q && mGenRunning && (p1PIT400Final > v1SPDis)) {
        vacLvl1 = true
    }
    //Network 7
    if (gStartupAlarmDelay.Q && mGenRunning && (p1PIT400Final > v2SPDis)) {
        vacLvl2 = true
        mSilenceReset = true
    }
    //Network 8
    if (gStartupEfficiencyDelay.TON(gStartupFlow.q) && effcncy < eff1SP) {
        effLvl1 = true
    }
    //Network 9
    if (gStartupAlarmDelay.Q && mGenRunning && (!bPumpPurateRunConfirm || z40P300)) {
        pmpPurateAlm = true
        mSilenceReset = true
    }
    //Network 10
    if (alarmReset) {
        pmpAcidAlm = false
        strtUpAlrmFlow = false 
        strtUpAlrmVac = false 
        flowLvl1 = false 
        flowLvl2 = false
        vacLvl1 = false
        vacLvl2 = false
        effLvl1 = false
        pmpPurateAlm = false 
    }
}
const plc1_8Calculations = () => {
    //Network 1
    aCalculatedFlowRate = setRate * 48.5
    //Network 2
    if (!mFilterOnlyMode && !mTFilterOnlyMode && !calibEn) {
        fIT200.target = setRate * 48.5
    } else {
        fIT200.target = 0
    }
    //Network 3
    bCalculatedFlowRate = setRate * 47.77
    //Network 4
    if (!mFilterOnlyMode && !mTFilterOnlyMode && !calibEn) {
        fIT300.target = setRate * 47.77
    } else {
        fIT300.target = 0
    }
    //Network 5
    if (p1FIT100Final > 0) {
        aIT400.target = setRate * 1000 / p1FIT100Final 
    } else {
        aIT400.target = 0
    }
    //Network 6
    setRate = mFlowBallastTotal * fPDose / 1000
    if (setRate < stLwDis) {
        setRate = stLwDis
    }
    if (setRate > stHiDis) {
        setRate = stHiDis
    }
    //Network 7
    if (mGeneratorEnable && !gStartupIncrease.Q && startupIncEnabled) {
        setRate += incRate
    }
    //Network 8
    aPRDis = p1FIT100Final * p1AIT400Final / 1000
    //Network 9 - Not needed
    //Network 10 - Not needed
    //Network 11 - Not needed
    //Network 12
    gStartupAlarmDelay.TON(mGeneratorEnable)
    //Network 13
    if (p1FIT100Final !== 0 && p1AIT400Final !== 0) {
        effcncy = 100 * (p1FIT100Final * p1AIT400Final) / (setRate * 1000)
        effcncyRate = p1FIT100Final * p1AIT400Final / 1000
    } else {
        effcncy = 0
        effcncyRate = 0
    }
    //Network 14
    gStartupIncrease.TON(mGenRunning)
    //Network 15
    startupIncStopped = (mGenRunning && (!gStartupIncrease.Q && startupIncOITAbort) || startupIncStopped)
    //Network 16
    if (!mGenRunning) {
        startupIncOITAbort = false
    }
    //Network 17
    startupIncEnabled = startupIncOITEnable && mGenRunning && !gStartupIncrease.Q && !startupIncStopped
    //Network 18
    if (mGenRunning && mValveAcidOpenLS) {
        acidPumpColor = 1 
    } else {
        acidPumpColor = 0
    }
    if (mGenRunning && mValvePurateOpenLS) {
        puratePumpColor = 1
    } else {
        puratePumpColor = 0
    }
    if (fPumpMotive) {
        MotiveH2OPumpColor = 1
    } else {
        MotiveH2OPumpColor = 0
    } 
    //Network 19
    if (!mGenRunning && !mPumpMotive) {
        pipingColorStatus = 0
    } else if (!mGenRunning && mPumpMotive && !mValveFlushMx) {
        pipingColorStatus = 1
    } else if (mGenRunning) {
        pipingColorStatus = 2
    } else if (!mGenRunning && mPumpMotive && mValveFlushMx) {
        pipingColorStatus = 3
    }
    //Network 20
    if (mGenAlarm) {
        statUnit = 1
    } else if (!mGenAlarm && mGeneratorEnable && !mGenRunning) {
        statUnit = 3
    } else if (!mGenAlarm && !mGeneratorEnable && mGenRunning & !mPumpMotiveRunCmd) {
        statUnit = 6        
    } else if (!mGenAlarm && mGenRunning) {
        statUnit = 7        
    }
}
