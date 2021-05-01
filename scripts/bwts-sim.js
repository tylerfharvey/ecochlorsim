const bwtsSimulate = async () => {
    bwts_PLC1()
    bwts_PLC2()
    bwts_PLC3()
    plc3_OB35_2SecInterupt()
    hmiUpdate()
    bwtsAddButtons(!alarmDisp)
    while (true) {
        await halfSecond()
        bwts_inputs()
        bwts_PLC1()
        bwts_PLC2()
        bwts_PLC3()
        alarmsCheck()
        await halfSecond()
        bwts_inputs()
        bwts_PLC1()
        bwts_PLC2()
        bwts_PLC3()
        hmiUpdate()
        alarmsCheck()
        await halfSecond()
        bwts_inputs()
        bwts_PLC1()
        bwts_PLC2()
        bwts_PLC3()
        alarmsCheck()
        await halfSecond()
        bwts_inputs()
        bwts_PLC1()
        bwts_PLC2()
        bwts_PLC3()
        alarmsCheck()
        plc3_OB35_2SecInterupt()
        hmiUpdate()
        bwtsAddButtons(!alarmDisp)
    }
}
//wait for 0.5 second
const halfSecond = () =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        (true) ? resolve(0) : reject(0)
    }, 500) 
})
const initializeSliders = () => {
    //stbd
    document.querySelector('#stbd-flow').value = p3FITS01Target / 100
    document.querySelector('#stbd-adj-flow-value').textContent = `${p3FITS01Target} m3/hr`
    document.querySelector('#stbd-dp').value = p3PITS01Target * 20
    document.querySelector('#stbd-adj-dp-value').textContent = `${p3PITS01Target} bar`
    document.querySelector('#stbd-outlet-pressure').value = p3PITS03Target * 10
    document.querySelector('#stbd-adj-op-value').textContent = `${p3PITS03Target} bar`

    //aftp
    document.querySelector('#aftp-flow').value = p3FITA09Target / 10
    document.querySelector('#aftp-adj-flow-value').textContent = `${p3FITA09Target} m3/hr`
    document.querySelector('#aftp-dp').value = p3PITA09Target * 20
    document.querySelector('#aftp-adj-dp-value').textContent = `${p3PITA09Target} bar`
    document.querySelector('#aftp-outlet-pressure').value = p3PITA10Target * 10
    document.querySelector('#aftp-adj-op-value').textContent = `${p3PITA10Target} bar`

    //port
    document.querySelector('#port-flow').value = p3FITP02Target / 100
    document.querySelector('#port-adj-flow-value').textContent = `${p3FITP02Target} m3/hr`
    document.querySelector('#port-dp').value = p3PITP02Target * 20
    document.querySelector('#port-adj-dp-value').textContent = `${p3PITP02Target} bar`
    document.querySelector('#port-outlet-pressure').value = p3PITP04Target * 10
    document.querySelector('#port-adj-op-value').textContent = `${p3PITP04Target} bar`

}
const valueLimit = (min, val, max) => {
    return val < min ? min : (val > max ? max : val)
}
const initializeListeners = () => {
    document.querySelector('#start-stbd-pump').addEventListener('click', (e) => {
        sPumpBallastRunning = true   
    })
    document.querySelector('#stop-stbd-pump').addEventListener('click', (e) => {
        sPumpBallastRunning = false   
    })
    document.querySelector('#stbd-flow').addEventListener('input', (e) => {
        p3FITS01Target = e.target.value * 100
        document.querySelector('#stbd-adj-flow-value').textContent = `${p3FITS01Target.toFixed(0)} m3/hr`
    })
    document.querySelector('#stbd-dp').addEventListener('input', (e) => {
        p3PITS01Target = e.target.value * 0.05
        document.querySelector('#stbd-adj-dp-value').textContent = `${p3PITS01Target.toFixed(2)} bar`
    })
    document.querySelector('#stbd-outlet-pressure').addEventListener('input', (e) => {
        p3PITS03Target = e.target.value * 0.1
        document.querySelector('#stbd-adj-op-value').textContent = `${p3PITS03Target.toFixed(2)} bar`
    })
    document.querySelector('#start-port-pump').addEventListener('click', (e) => {
        pPumpBallastRunning = true   
    })
    document.querySelector('#stop-port-pump').addEventListener('click', (e) => {
        pPumpBallastRunning = false   
    })
    document.querySelector('#port-flow').addEventListener('input', (e) => {
        p3FITP02Target = e.target.value * 100
        document.querySelector('#port-adj-flow-value').textContent = `${p3FITP02Target.toFixed(0)} m3/hr`
    })
    document.querySelector('#port-dp').addEventListener('input', (e) => {
        p3PITP02Target = e.target.value * 0.05
        document.querySelector('#port-adj-dp-value').textContent = `${p3PITP02Target.toFixed(2)} bar`
    })
    document.querySelector('#port-outlet-pressure').addEventListener('input', (e) => {
        p3PITP04Target = e.target.value * 0.1
        document.querySelector('#port-adj-op-value').textContent = `${p3PITP04Target.toFixed(2)} bar`
    })
    document.querySelector('#start-aftp-pump').addEventListener('click', (e) => {
        tPumpBallast1Running = true   
    })
    document.querySelector('#stop-aftp-pump').addEventListener('click', (e) => {
        tPumpBallast1Running = false   
    })
    document.querySelector('#aftp-flow').addEventListener('input', (e) => {
        p3FITA09Target = e.target.value * 10
        document.querySelector('#aftp-adj-flow-value').textContent = `${p3FITA09Target.toFixed(0)} m3/hr`
    })
    document.querySelector('#aftp-dp').addEventListener('input', (e) => {
        p3PITA09Target = e.target.value * 0.05
        document.querySelector('#aftp-adj-dp-value').textContent = `${p3PITA09Target.toFixed(2)} bar`
    })
    document.querySelector('#aftp-outlet-pressure').addEventListener('input', (e) => {
        p3PITA10Target = e.target.value * 0.1
        document.querySelector('#aftp-adj-op-value').textContent = `${p3PITA10Target.toFixed(2)} bar`
    })
}
const changeAlarmState = (alarmNum, alarmVal) => {
    const alarmIndex = alarmsCurrent.findIndex((e) => e[0] === alarmNum)
    const alarmFound = alarmIndex > -1
    if (alarmFound && !alarmVal) {
        //add new line to Alarm History
        const alarmHCNew = [alarmNum, moment().utc(), 'IO', alarmText[alarmNum]]
        alarmsHistory.unshift(alarmHCNew)
        //remove from current alarms
        alarmsCurrent.splice(alarmIndex, 1)
        alarmsHistory.unshift()
    } if (!alarmFound && alarmVal){
        //add to current alarms
        const alarmNew = [alarmNum, moment().utc(), alarmText[alarmNum]]
        alarmsCurrent.unshift(alarmNew)
        //add to alarm history
        const alarmHNew = [alarmNum, moment().utc(), 'I', alarmText[alarmNum]]
        alarmsHistory.unshift(alarmHNew)
        //select and display alarms popup
        alarmSel = alarmNum
        alarmDisp = true
    }
}
const alarmsCheck = () => {
    changeAlarmState( 1, pmpAcidAlm)
    changeAlarmState( 5, strtUpAlrmFlow)
    changeAlarmState( 6, strtUpAlrmVac)
    changeAlarmState( 9, flowLvl1)
    changeAlarmState( 10, flowLvl2)
    changeAlarmState( 11, vacLvl1)
    changeAlarmState( 12, vacLvl2)
    changeAlarmState( 13, effLvl1)
    changeAlarmState( 25, pmpPurateAlm)
    //changeAlarmState( 101, am101LowTemp)
    //changeAlarmState( 102, am102HighTemp)
    //changeAlarmState( 103, am103HighHighTemp)
    //changeAlarmState( 104, am104AnyLevelSwitch)
    //changeAlarmState( 105, am105GeneratorAlarm)
    changeAlarmState( 106, am106LowBallastFlow)
    //changeAlarmState( 107, am107PLC2PLC3CommLoss)
    //changeAlarmState( 108, am108GeneratorWarning)
    changeAlarmState( 109, am109CP1EStop)
    changeAlarmState( 110, am110CP2EStop)
    changeAlarmState( 111, am111VentWarning)
    changeAlarmState( 112, am112VentAlarm)
    changeAlarmState( 113, am113MotiveLeak)
    changeAlarmState( 114, am114GeneratorNotRunning)
    changeAlarmState( 115, am115FilterOnlyMode)
    //changeAlarmState( 116, am116LowLowTemp)
    changeAlarmState( 117, am117BallastNoTreatment)
    changeAlarmState( 118, am118DeballastAboveMADC)
    changeAlarmState( 119, am119FlowOverTRC)
    changeAlarmState( 120, am120TSpaceGasDetectedWarning)
    changeAlarmState( 121, am121TSpaceGasDetectedAlarm)
    changeAlarmState( 122, am122AftPumpOnNoTreatment) 
    changeAlarmState( 123, am123TFilterOnlyMode)
    changeAlarmState( 124, am124PumpOnNoTreatment)
    changeAlarmState( 125, aa125LevelAcidSecondary)
    changeAlarmState( 126, aa126LevelAcidGenerator)
    changeAlarmState( 127, aa127ValveAcidFailToClose)
    changeAlarmState( 128, aa128ValveAcidFailToOpen)
    changeAlarmState( 129, aa129LevelAcidLowLow)
    changeAlarmState( 130, aa130LevelAcidLow)
    changeAlarmState( 131, aa131LevelAcidHigh)
    changeAlarmState( 132, aa132FlowAcidLowFlow)      
    //changeAlarmState( 133, ab133TechAccessWarning)
    changeAlarmState( 134, ab134TankSamplesAboveMADC)
    //changeAlarmState( 135, am135PLC2Error)
    changeAlarmState( 141, ab141LevelPurateSecondary)
    changeAlarmState( 142, ab142LevelPurateGenerator)
    changeAlarmState( 143, ab143ValvePurateFailToClose)
    changeAlarmState( 144, ab144ValvePurateFailToOpen)
    changeAlarmState( 145, ab145LevelPurateLowLow)
    changeAlarmState( 146, ab146LevelPurateLow)
    changeAlarmState( 147, ab147LevelPurateHigh)
    changeAlarmState( 148, ab148FlowPurateLowFlow)
    changeAlarmState( 150, am150AcidFlowWarning)
    changeAlarmState( 151, am151AcidFlowAlarm)
    changeAlarmState( 152, am152PurateFlowWarning)
    changeAlarmState( 153, am153PurateFlowAlarm)
    //changeAlarmState( 201, ap201Alarm)
    //changeAlarmState( 202, ap202Warning)
    changeAlarmState( 203, ap203PressureOutletLowWarning)
    changeAlarmState( 204, ap204NegDPAlarm)
    changeAlarmState( 205, ap205ContinuoutCleanWarning)
    //changeAlarmState( 206, ap206FlowGravityBallastLowWarning)
    changeAlarmState( 207, ap207ValveBypassAlarm)
    //changeAlarmState( 208, ap208GeneratorAlarm)
    //changeAlarmState( 209, ap209CleanCycleWarning)
    //changeAlarmState( 210, ap210CleanCycleAlarm)
    //changeAlarmState( 211, ap211PressureDifferentialWarning)
    changeAlarmState( 212, ap212PressureDifferentialAlarm)
    changeAlarmState( 213, ap213PressureInletHighHighAlarm)
    changeAlarmState( 214, ap214PressureOutletLowLowAlarm)
    changeAlarmState( 215, ap215PressureInletHighWarning)
    changeAlarmState( 216, ap216FlowBallastLowWarning)
    changeAlarmState( 217, ap217Scanner2Overload)
    changeAlarmState( 218, ap218Scanner2ToMotorFault)
    changeAlarmState( 219, ap219Scanner2ToFilterFault)
    changeAlarmState( 220, ap220ValveSuction2FailToOpen)
    changeAlarmState( 221, ap221ValveSuction2FailToClose)
    changeAlarmState( 222, ap222FilterDisabled) 
    //changeAlarmState( 223, ap223AftpIsolationValveOpen)
    //changeAlarmState( 224, ap224)
    changeAlarmState( 225, ap225Scanner1Overload)
    changeAlarmState( 226, ap226Scanner1ToMotorFault)
    changeAlarmState( 227, ap227Scanner1ToFilterFault)
    changeAlarmState( 228, ap228ValveSuction1FailToClose)
    changeAlarmState( 229, ap229ValveSuction1FailToOpen)
    changeAlarmState( 230, ap230ValveMotiveFailToClose)
    changeAlarmState( 231, ap231ValveMotiveFailToOpen)
    changeAlarmState( 232, ap232PumpSuctionOverload)
    changeAlarmState( 233, ap233Scanner4Overload)
    changeAlarmState( 234, ap234Scanner4ToMotorFault)
    changeAlarmState( 235, ap235Scanner4ToFilterFault) 
    //changeAlarmState( 236, ap236)
    //changeAlarmState( 237, ap237)
    //changeAlarmState( 238, ap238)
    //changeAlarmState( 239, ap239PLC5Error)
    //changeAlarmState( 240, ap240PLC3Error)
    changeAlarmState( 241, ap241Scanner3Overload)
    changeAlarmState( 242, ap242Scanner3ToMotorFault)
    changeAlarmState( 243, ap243Scanner3ToFilterFault)
    changeAlarmState( 244, ap244CommunicationErrorPLC3ToPLC2)
    changeAlarmState( 245, ap245PumpMotiveOverload)
    //changeAlarmState( 246, ap246)
    //changeAlarmState( 247, ap247)
    //changeAlarmState( 248, ap248)
    //changeAlarmState( 301, as301Alarm)
    //changeAlarmState( 302, as302Warning)
    changeAlarmState( 303, as303PressureOutletLowWarning)
    changeAlarmState( 304, as304NegDPAlarm)
    changeAlarmState( 305, as305ContinuoutCleanWarning)
    //changeAlarmState( 306, as306FlowGravityBallastLowWarning)
    changeAlarmState( 307, as307ValveBypassAlarm)
    //changeAlarmState( 308, as308GeneratorAlarm)
    //changeAlarmState( 309, as309CleanCycleWarning)
    //changeAlarmState( 310, as310CleanCycleAlarm)
    //changeAlarmState( 311, as311PressureDifferentialWarning)
    changeAlarmState( 312, as312PressureDifferentialAlarm)
    changeAlarmState( 313, as313PressureInletHighHighAlarm)
    changeAlarmState( 314, as314PressureOutletLowLowAlarm)
    changeAlarmState( 315, as315PressureInletHighWarning)
    changeAlarmState( 316, as316FlowBallastLowWarning)
    changeAlarmState( 317, as317Scanner2Overload)
    changeAlarmState( 318, as318Scanner2ToMotorFault)
    changeAlarmState( 319, as319Scanner2ToFilterFault)
    changeAlarmState( 320, as320ValveSuction2FailToOpen)
    changeAlarmState( 321, as321ValveSuction2FailToClose)
    changeAlarmState( 322, as322FilterDisabled) 
    //changeAlarmState( 323, as323AftpIsolationValveOpen)
    //changeAlarmState( 324, as324)
    changeAlarmState( 325, as325Scanner1Overload)
    changeAlarmState( 326, as326Scanner1ToMotorFault)
    changeAlarmState( 327, as327Scanner1ToFilterFault)
    changeAlarmState( 328, as328ValveSuction1FailToClose)
    changeAlarmState( 329, as329ValveSuction1FailToOpen)
    changeAlarmState( 330, as330ValveMotiveFailToClose)
    changeAlarmState( 331, as331ValveMotiveFailToOpen)
    changeAlarmState( 332, as332PumpSuctionOverload)
    changeAlarmState( 333, as333Scanner4Overload)
    changeAlarmState( 334, as334Scanner4ToMotorFault)
    changeAlarmState( 335, as335Scanner4ToFilterFault)
    //changeAlarmState( 336, as336)
    //changeAlarmState( 337, as337)
    //changeAlarmState( 338, as338)
    //changeAlarmState( 339, as339PLC5Error)
    //changeAlarmState( 340, as340PLC3Error)
    changeAlarmState( 341, as341Scanner3Overload)
    changeAlarmState( 342, as342Scanner3ToMotorFault)
    changeAlarmState( 343, as343Scanner3ToFilterFault)
    changeAlarmState( 344, as344CommunicationErrorPLC3ToPLC2)
    changeAlarmState( 345, as345PumpMotiveOverload)
    //changeAlarmState( 346, as346)
    //changeAlarmState( 347, as347)
    //changeAlarmState( 348, as348)
    //changeAlarmState( 401, at401Alarm)
    //changeAlarmState( 402, at402Warning)
    changeAlarmState( 403, at403PressureOutletLowWarning)
    changeAlarmState( 404, at404NegDPAlarm)
    changeAlarmState( 405, at405ContinuoutCleanWarning)
    changeAlarmState( 406, at406FlowGravityBallastLowWarning)
    changeAlarmState( 407, at407ValveBypassAlarm)
    //changeAlarmState( 408, at408GeneratorAlarm)
    //changeAlarmState( 409, at409CleanCycleWarning)
    //changeAlarmState( 410, at410CleanCycleAlarm)
    //changeAlarmState( 411, at411PressureDifferentialWarning)
    changeAlarmState( 412, at412PressureDifferentialAlarm)
    changeAlarmState( 413, at413PressureInletHighHighAlarm)
    changeAlarmState( 414, at414PressureOutletLowLowAlarm)
    changeAlarmState( 415, at415PressureInletHighWarning)
    changeAlarmState( 416, at416FlowBallastLowWarning)
    //changeAlarmState( 417, at417Scanner2Overload)
    //changeAlarmState( 418, at418Scanner2ToMotorFault)
    //changeAlarmState( 419, at419Scanner2ToFilterFault)
    //changeAlarmState( 420, at420ValveSuction2FailToOpen)
    //changeAlarmState( 421, at421ValveSuction2FailToClose)
    changeAlarmState( 422, at422FilterDisabled) 
    //changeAlarmState( 423, at423AftpIsolationValveClosed)
    //changeAlarmState( 424, at424)
    changeAlarmState( 425, at425Scanner1Overload)
    changeAlarmState( 426, at426Scanner1ToMotorFault)
    changeAlarmState( 427, at427Scanner1ToFilterFault)
    changeAlarmState( 428, at428ValveSuction1FailToClose)
    changeAlarmState( 429, at429ValveSuction1FailToOpen)
    changeAlarmState( 430, at430ValveMotiveFailToClose)
    changeAlarmState( 431, at431ValveMotiveFailToOpen)
    changeAlarmState( 432, at432PumpSuctionOverload)
    //changeAlarmState( 433, at433Scanner4Overload)
    //changeAlarmState( 434, at434Scanner4ToMotorFault)
    //changeAlarmState( 435, at435Scanner4ToFilterFault)
    //changeAlarmState( 436, at436)
    //changeAlarmState( 437, at437)
    //changeAlarmState( 438, at438)
    //changeAlarmState( 439, at439PLC5Error)
    //changeAlarmState( 440, at440PLC3Error)
    //changeAlarmState( 441, at441Scanner3Overload)
    //changeAlarmState( 442, at442Scanner3ToMotorFault)
    //changeAlarmState( 443, at443Scanner3ToFilterFault)
    //changeAlarmState( 444, at444CommunicationErrorPLC3ToPLC2)
    //changeAlarmState( 445, at445PumpMotiveOverload)
    //changeAlarmState( 446, at446)
    //changeAlarmState( 447, at447)
    //changeAlarmState( 448, at448)    
}
const bwts_inputs = () => {
    if (!pPumpBallastEnable) {sPumpBallastRunning = false}
    if (!sPumpBallastEnable) {pPumpBallastRunning = false}
    if (!tPumpBallastEnable) {tPumpBallastRunning = false}
}