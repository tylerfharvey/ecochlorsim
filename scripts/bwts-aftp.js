//Aft Peak Filter Components
const plc3_500AftpFilter = () => {
    //JS Only
    tPumpBallastRunning = (tPumpBallast1Running && ctPump1Ballast) || (tPumpBallast2Running && ctPump2Ballast)
    tPumpMotiveRunning = (tPumpBallast1Running && ctPump1Motive) || (tPumpBallast2Running && ctPump2Motive)
    //Network 1
    if (tFilterAuto) {tFilterManual = false}
    //Network 2
    dt21ValveFlush1.cvAuto = tValveFlush1Auto
    dt21ValveFlush1.cvOpenManual = tValveFlush1OpenManual
    dt21ValveFlush1.cvCloseManual = tValveFlush1CloseManual
    dt21ValveFlush1.cvOpenAuto = tValveFlush1OpenAuto
    dt21ValveFlush1.cvCloseAuto = tValveFlush1CloseAuto
    dt21ValveFlush1.cvZSO = tValveFlush1OpenLS
    dt21ValveFlush1.cvZSC = tValveFlush1ClosedLS
    dt21ValveFlush1.systemBallast = tFilterAuto
    dt21ValveFlush1.systemManual = tFilterManual
    dt21ValveFlush1.cycleRunning = tRunning
    dt21ValveFlush1.valveUpdate(true, alarmReset)
    tValveFlush1 = dt21ValveFlush1.cvOpenDO
    at429ValveSuction1FailToOpen = dt21ValveFlush1.cvOpenFault
    at428ValveSuction1FailToClose = dt21ValveFlush1.cvCloseFault
    tValveFlush1Status = dt21ValveFlush1.cvStatus
    tValveFlush1OpenManual = false
    tValveFlush1CloseManual = false 
    //Network 3
    dt22ValveFlush2.cvAuto = tValveFlush2Auto
    dt22ValveFlush2.cvOpenManual = tValveFlush2OpenManual
    dt22ValveFlush2.cvCloseManual = tValveFlush2CloseManual
    dt22ValveFlush2.cvOpenAuto = tValveFlush2OpenAuto
    dt22ValveFlush2.cvCloseAuto = tValveFlush2CloseAuto
    dt22ValveFlush2.cvZSO = tValveFlush2OpenLS
    dt22ValveFlush2.cvZSC = tValveFlush2ClosedLS
    dt22ValveFlush2.systemBallast = tFilterAuto
    dt22ValveFlush2.systemManual = tFilterManual
    dt22ValveFlush2.cycleRunning = tRunning
    dt22ValveFlush2.valveUpdate(true, alarmReset)
    tValveFlush2 = dt22ValveFlush2.cvOpenDO
    at420ValveSuction2FailToOpen = dt22ValveFlush2.cvOpenFault
    at421ValveSuction2FailToClose = dt22ValveFlush2.cvCloseFault
    tValveFlush2Status = dt22ValveFlush2.cvStatus
    tValveFlush2OpenManual = false
    tValveFlush2CloseManual = false 
    //Network 4
    t01Alarms()
    //Network 5
    t04BallastingSequence()
    //Network 6
    t06FilterCleaningCycle()
    //Network 7
    if (ctScanner1) {
        tScanner1.smAuto = tScanner1Auto
        tScanner1.smMotorManual = tScanner1MotorManual
        tScanner1.smFilterManual = tScanner1FilterManual
        tScanner1.smMotorAuto = tScanner1MotorAuto
        tScanner1.smFilterAuto = tScanner1FilterAuto
        tScanner1.smStopAuto = tScanner1StopAuto
        tScanner1.smOverload = tScanner1OverloadOK
        tScanner1.smMotorPosition = tScanner1AtMotor
        tScanner1.smFilterPosition = tScanner1AtFilter
        tScanner1.smRunHourReset = false
        tScanner1.enable = tScanner1Enable
        tScanner1.smStopManual = tScanner1StopManual
        tScanner1.systemBallast = tFilterAuto
        tScanner1.systemManual = tFilterManual
        tScanner1.cycleRunning = tCycleRunning
        tScanner1.salarmReset = alarmReset
        tScanner1.filterPark = tFilterPark
        tScanner1.tmrsmToFil.PT = tTimedScannerMove * 1000
        tScanner1.tmrsmToMot.PT = tTimedScannerMove * 1000
        tScanner1.scannerUpdate()
        tScanner1ToMotor = tScanner1.smMotorDO
        tScanner1ToFilter = tScanner1.smFilterDO
        at425Scanner1Overload = tScanner1.smOverloadFault
        at426Scanner1ToMotorFault = tScanner1.smMotorFault
        at427Scanner1ToFilterFault = tScanner1.smFilterFault
        tRunHoursReset = tScanner1.smRunHoursReset
        tRunHoursNReset = tScanner1.smRunHoursNReset
        tScanner1Status = tScanner1.smStatus
    }
    //Network 8
    if (ctScanner2) {
        tScanner2.smAuto = tScanner2Auto
        tScanner2.smMotorManual = tScanner2MotorManual
        tScanner2.smFilterManual = tScanner2FilterManual
        tScanner2.smMotorAuto = tScanner2MotorAuto
        tScanner2.smFilterAuto = tScanner2FilterAuto
        tScanner2.smStopAuto = tScanner2StopAuto
        tScanner2.smOverload = tScanner2OverloadOK
        tScanner2.smMotorPosition = tScanner2AtMotor
        tScanner2.smFilterPosition = tScanner2AtFilter
        tScanner2.smRunHourReset = false
        tScanner2.enable = tScanner2Enable
        tScanner2.smStopManual = tScanner2StopManual
        tScanner2.systemBallast = tFilterAuto
        tScanner2.systemManual = tFilterManual
        tScanner2.cycleRunning = tCycleRunning
        tScanner2.salarmReset = alarmReset
        tScanner2.filterPark = tFilterPark
        tScanner2.tmrsmToFil.PT = tTimedScannerMove
        tScanner2.tmrsmToMot.PT = tTimedScannerMove
        tScanner2.scannerUpdate()
        tScanner2ToMotor = tScanner2.smMotorDO
        tScanner2ToFilter = tScanner2.smFilterDO
        at425Scanner2Overload = tScanner2.smOverloadFault
        at426Scanner2ToMotorFault = tScanner2.smMotorFault
        at427Scanner2ToFilterFault = tScanner2.smFilterFault
        tRunHoursReset = tScanner2.smRunHoursReset
        tRunHoursNReset = tScanner2.smRunHoursNReset
        tScanner2Status = tScanner2.smStatus    
    }
    //Network 9
    if (ctScanner3) {
        tScanner3.smAuto = tScanner3Auto
        tScanner3.smMotorManual = tScanner3MotorManual
        tScanner3.smFilterManual = tScanner3FilterManual
        tScanner3.smMotorAuto = tScanner3MotorAuto
        tScanner3.smFilterAuto = tScanner3FilterAuto
        tScanner3.smStopAuto = tScanner3StopAuto
        tScanner3.smOverload = tScanner3OverloadOK
        tScanner3.smMotorPosition = tScanner3AtMotor
        tScanner3.smFilterPosition = tScanner3AtFilter
        tScanner3.smRunHourReset = false
        tScanner3.enable = tScanner3Enable
        tScanner3.smStopManual = tScanner3StopManual
        tScanner3.systemBallast = tFilterAuto
        tScanner3.systemManual = tFilterManual
        tScanner3.cycleRunning = tCycleRunning
        tScanner3.salarmReset = alarmReset
        tScanner3.filterPark = tFilterPark
        tScanner3.tmrsmToFil.PT = tTimedScannerMove
        tScanner3.tmrsmToMot.PT = tTimedScannerMove
        tScanner3.scannerUpdate()
        tScanner3ToMotor = tScanner3.smMotorDO
        tScanner3ToFilter = tScanner3.smFilterDO
        at425Scanner3Overload = tScanner3.smOverloadFault
        at426Scanner3ToMotorFault = tScanner3.smMotorFault
        at427Scanner3ToFilterFault = tScanner3.smFilterFault
        tRunHoursReset = tScanner3.smRunHoursReset
        tRunHoursNReset = tScanner3.smRunHoursNReset
        tScanner3Status = tScanner3.smStatus    
    }
    //Network 10
    if (ctScanner4) {
        tScanner4.smAuto = tScanner4Auto
        tScanner4.smMotorManual = tScanner4MotorManual
        tScanner4.smFilterManual = tScanner4FilterManual
        tScanner4.smMotorAuto = tScanner4MotorAuto
        tScanner4.smFilterAuto = tScanner4FilterAuto
        tScanner4.smStopAuto = tScanner4StopAuto
        tScanner4.smOverload = tScanner4OverloadOK
        tScanner4.smMotorPosition = tScanner4AtMotor
        tScanner4.smFilterPosition = tScanner4AtFilter
        tScanner4.smRunHourReset = false
        tScanner4.enable = tScanner4Enable
        tScanner4.smStopManual = tScanner4StopManual
        tScanner4.systemBallast = tFilterAuto
        tScanner4.systemManual = tFilterManual
        tScanner4.cycleRunning = tCycleRunning
        tScanner4.salarmReset = alarmReset
        tScanner4.filterPark = tFilterPark
        tScanner4.tmrsmToFil.PT = tTimedScannerMove
        tScanner4.tmrsmToMot.PT = tTimedScannerMove
        tScanner4.scannerUpdate()
        tScanner4ToMotor = tScanner4.smMotorDO
        tScanner4ToFilter = tScanner4.smFilterDO
        at425Scanner4Overload = tScanner4.smOverloadFault
        at426Scanner4ToMotorFault = tScanner4.smMotorFault
        at427Scanner4ToFilterFault = tScanner4.smFilterFault
        tRunHoursReset = tScanner4.smRunHoursReset
        tRunHoursNReset = tScanner4.smRunHoursNReset
        tScanner4Status = tScanner4.smStatus    
    }

    //Network 11
    t07FilterScanners()
    //Network 12
    t08FilterStatus()
    //Network 13 -- Not Used
    //t09MotiveSend()
    //Network 14
    t10PumpSuction()
    //Network 15
    t14ValveOthers()
}
const t01Alarms = () => {
    //Network 1
    at401Alarm = (fEStopPressed || at410CleanCycleAlarm || at412PressureDifferentialAlarm || 
                  at413PressureInletHighHighAlarm || at414PressureOutletLowLowAlarm || at404NegDPAlarm ||
                  at407ValveBypassAlarm || at430ValveMotiveFailToClose || at431ValveMotiveFailToOpen ||
                  at432PumpSuctionOverload || at422FilterDisabled || at444CommunicationErrorPLC3ToPLC2 ||
                  at445PumpMotiveOverload || at439PLC5Error || at440PLC3Error)   
    //Network 2
    at402Warning = (at409CleanCycleWarning || at415PressureInletHighWarning || at416FlowBallastLowWarning ||
                    at403PressureOutletLowWarning || at405ContinuoutCleanWarning || at406FlowGravityBallastLowWarning ||
                    at423AftpIsolationValveClosed || tScanner1Warning || tScanner2Warning || 
                    tScanner3Warning || tScanner4Warning)
    //Network 3 
    if (tT403.TON(tStartupComplete && tFilterOn && tPressureOutletBar < tPressureOutletLow)) {at403PressureOutletLowWarning = true}
    //Network 4
    if (tT404.TON(tStartupComplete && tFilterOn && tFDP < tPressureDifferentialNeg)) {at404NegDPAlarm = true}
    //Network 5
    at405ContinuoutCleanWarning = tFilterContinuousClean
    //Network 6 -- Not Used
    at406FlowGravityBallastLowWarning = false
    //Network 7
    let b1 = (!tValveBypassClosedLS) || (ctValveBypass2 && !tValveBypass2ClosedLS) || 
             (ctValveOverboard && !fTreatmentAftpMot && !tFilterOnlyMode && !tValveOverboardClosedLS) ||
             (ctValveTank && fTreatmentAftpMot && !tValveTankClosedLS)
    let b2 = (tFilterOn || !ctBypassAlarmOnFilter) & !tValveBypassRepose
    if (tT407.TON(b1) && b2) {at407ValveBypassAlarm = true}
    //Network 8
    at408GeneratorAlarm = motGenAlarm
    //Network 9 -- Not Used
    //Network 10 -- Not Used
    //Network 11
    at411PressureDifferentialWarning = tT411.TON(tFDP > tPressureDPHigh)
    //Network 12
    if (tT412.TON(tFDP > tPressureDPHighHigh)) {at412PressureDifferentialAlarm = true}
    //Network 13
    if (tT413.TON(tFilterOn && tPressureInletBar > tPressureInletHighHigh)) {at413PressureInletHighHighAlarm = true}
    //Network 14
    if (tT414.TON(tStartupComplete && tFilterOn && tPressureOutletBar < tPressureOutletLowLow)) {at414PressureOutletLowLowAlarm = true}
    //Network 15
    if (tT415.TON(tStartupComplete && tFilterOn && tPressureInletBar > tPressureInletHigh)) {at415PressureInletHighWarning = true}
    //Network 16
    if (tT416.TON(tFilterOn && tFlowBallastSV > tFlowLow)) {at416FlowBallastLowWarning = true}
    //Network 17
    if (tT422.TON((!tScanner1Enable || !ctScanner1) && (!tScanner2Enable || !ctScanner2) && (!tScanner3Enable || !ctScanner3) && (!tScanner4Enable || !ctScanner4))) {at422FilterDisabled = true}
    //Network 18
    if (tFilterOn && tT423.TON(ctValveClO2Isolation && fTreatmentAftpBal && !tFilterOnly && !fValveAftpIsolationOpen)) {at430ValveMotiveFailToClose = true}
    //Network 19
    if (tT430.TON(ctValveMotive && !tValveMotive && !tValveMotiveClosedLS)) {at430ValveMotiveFailToClose = true} 
    //Network 20
    if (tT431.TON(ctValveMotive && tValveMotive && !tValveMotiveOpenLS)) {at431ValveMotiveFailToOpen = true} 
    //Network 21
    if (!tPumpSuction1OverloadOK) {at432PumpSuctionOverload = true}
    //Network 22 -- Not Used
    //Network 23
    if (!fPumpMotiveOverloadOK) {at445PumpMotiveOverload = true}
    //Network 24
    tScanner1Warning = ctScanner1 & (at428ValveSuction1FailToClose || at429ValveSuction1FailToOpen ||
        at427Scanner1ToFilterFault || at426Scanner1ToMotorFault || at425Scanner1Overload)
    //Network 25
    tScanner2Warning = ctScanner2 & (at428ValveSuction1FailToClose || at429ValveSuction1FailToOpen ||
        at417Scanner2Overload || at419Scanner2ToFilterFault || at418Scanner2ToMotorFault)
    //Network 26
    tScanner3Warning = ctScanner3 & ((!ctValveFlush2 && (at428ValveSuction1FailToClose || at429ValveSuction1FailToOpen)) || 
                                     (ctValveFlush2 && (at421ValveSuction2FailToClose || at420ValveSuction2FailToOpen)) ||
                                      at441Scanner3Overload || at442Scanner3ToMotorFault || at443Scanner3ToFilterFault)
    //Network 27
    tScanner4Warning = ctScanner4 & (at421ValveSuction2FailToClose || at420ValveSuction2FailToOpen ||
        at433Scanner4Overload || at434Scanner4ToMotorFault || at435Scanner4ToFilterFault)
    //Network 28
    tAlarmBuzzer = (at401Alarm || at402Warning || motGenAlarm || motGenWarning) && !fSilencePressed
    //Network 29
    if (alarmReset) {
        at409CleanCycleWarning = false 
        at410CleanCycleAlarm = false
        at411PressureDifferentialWarning = false
        at412PressureDifferentialAlarm = false
        at413PressureInletHighHighAlarm = false
        at414PressureOutletLowLowAlarm = false
        at415PressureInletHighWarning = false
        at416FlowBallastLowWarning = false
        at403PressureOutletLowWarning = false
        at404NegDPAlarm = false
        at406FlowGravityBallastLowWarning = false
        at407ValveBypassAlarm = false
        at408GeneratorAlarm = false
        at430ValveMotiveFailToClose = false
        at431ValveMotiveFailToOpen = false
        if (at422FilterDisabled) {
            if (ctScanner1) {tScanner1Enable = true}
            if (ctScanner2) {tScanner2Enable = true}
            if (ctScanner3) {tScanner3Enable = true}
            if (ctScanner4) {tScanner4Enable = true}
        }
        at422FilterDisabled = false
        at432PumpSuctionOverload = false
        at423AftpIsolationValveClosed = false
        at444CommunicationErrorPLC3ToPLC2 = false
        at445PumpMotiveOverload = false
        at439PLC5Error = false
        at440PLC3Error = false
    }
}
const t04BallastingSequence = () => {
    //Network 1
    tFilterOn =  fPowerOn && ((fTreatmentAftpBal && tPumpBallastRunning && !motGenAlarm) ||
                              (fTreatmentAftpMot && tPumpMotiveRunning)) && tFilterAuto && !at401Alarm
    //Network 2
    if (t04nw2Trig.pTrig(tFilterAuto)) {
        tValveFlush1Auto = true 
        tValveFlush2Auto = true 
        tScanner1Auto = true 
        tScanner2Auto = true 
        tScanner3Auto = true 
        tScanner4Auto = true 
        tCleaningAuto - true
        tValveMotiveAuto = true
    }
    //Network 3 -- Not Used
    //Network 4
    tStartupComplete = tStartupTimer.TON(tFilterOn)
    //Network 5
    fValveAftpIsolation = ctValveClO2Isolation && fTreatmentAftpBal
    //Network 6
    if (!tFilterOn) {fValveClO2Force = false}
}
const t06FilterCleaningCycle = () => {
    //Network 1
    if (t06nw1Trig.pTrig(tScanCommand)) {
        tCleanCycleDate6 = tCleanCycleDate5
        tCleanCycleDate5 = tCleanCycleDate4
        tCleanCycleDate4 = tCleanCycleDate3
        tCleanCycleDate3 = tCleanCycleDate2
        tCleanCycleDate2 = tCleanCycleDate1
        tCleanCycleDate1 = moment().valueOf()
        tCleanCycleReason6 = tCleanCycleReason5
        tCleanCycleReason5 = tCleanCycleReason4
        tCleanCycleReason4 = tCleanCycleReason3
        tCleanCycleReason3 = tCleanCycleReason2
        tCleanCycleReason2 = tCleanCycleReason1
        tCleanCycleReason1 = tCleanReasonBuffer
    }
    //Network 2
    tFDP = tPressureInletBar - tPressureOutletBar
    //Network 3
    tDifferentialPressureStart = tDPDelay.TON(tFDP >= tPressureDifferentialHigh)
    if (tDPDelay.Q) {tCleanReasonBuffer = 2}
    //Network 4
    if (!tLastAtMotor && !tLastAtFilter) {tLastAtFilter = true}
    //Network 5
    let b1 = tToFilter || (!tToMotor && !tToFilter)
    let b2 = (tScanner1AtFilter || !tScanner1Enable) && 
             (tScanner2AtFilter || !tScanner2Enable) &&
             (tScanner3AtFilter || !tScanner3Enable) && 
             (tScanner4AtFilter || !tScanner4Enable)
    if (b1 && b2) {
        tLastAtFilter = true
        tLastAtMotor = false
    }
    let b3 = tToMotor || (!tToMotor && !tToFilter)
    let b4 = (tScanner1AtMotor || !tScanner1Enable) && 
             (tScanner2AtMotor || !tScanner2Enable) &&
             (tScanner3AtMotor || !tScanner3Enable) && 
             (tScanner4AtMotor || !tScanner4Enable)
    if (b3 && b4) {
        tLastAtFilter = false
        tLastAtMotor = true
    }
    //Network 6
    tToMotor = tScanner1ToMotor || tScanner2ToMotor || tScanner3ToMotor || tScanner4ToMotor
    //Network 7
    tToFilter = tScanner1ToFilter || tScanner2ToFilter || tScanner3ToFilter || tScanner4ToFilter
    //Network 8
    b1 = tFilterAuto && tFilterOn && tCleaningAuto && (tCleaningTimerDone || tDifferentialPressureStart || tStartManual || tRunning || tStartupClean)
    b2 = !tCleaningAuto && (tStartManual || tRunning)
    tRunning = fPowerOn && (b1 || b2) && !at401Alarm && !tFilterCleanComplete
    //Network 9
    tCleanCycles.countUp(tFilterAuto & tCleaningAuto & tScanCommand)
    tCleaningClyes = tCleanCycles.cV
    //Network 10
    tCleanDelay.TON(!tRunning && tFilterAuto && tFilterOn && tCleaningAuto && !tCleaningTimerDone)
    if (!tFilterAuto || !tCleaningAuto || (tFilterAuto && tCleaningAuto && tDifferentialPressureStart)) {tCleanDelay.onTime = moment().valueOf()}
    //Network 11
    tCleaningTimerDone = tCleanDelay.Q
    tCleanDelay.PT = tTimedCleanDelayMS
    if (tCleanDelay.Q) {tCleanReasonBuffer = 3}
    //Network 12
    tTimeToNexCleanMin = (tTimedCleanDelayMS - tCleanDelay.ET) / 60000
    //Network 13
    tStartupCleanDelay.PT = tCleanCycleStartupDelay * 1000
    if (tStartupCleanPulse.pTrig(tStartupCleanDelay.TON(tFilterOn))) {
        tStartupClean = true
        tCleanReasonBuffer = 1
    }
    //Network 14
    if (tFilterCleanCount === 1) {tStartupClean = false}
    //Network 15 -- not used
    //Network 16
    tHalfScanners1AtFilter = (tScanner1AtFilter || !tScanner1Enable) && 
                             (tScanner2AtFilter || !tScanner2Enable)
    tHalfScanners2AtFilter = (tScanner3AtFilter || !tScanner3Enable) && 
                             (tScanner4AtFilter || !tScanner4Enable)
    tScannersAtFilter = tHalfScanners1AtFilter && tHalfScanners2AtFilter
    //Network 17
    tHalfScanners1AtMotor = (tScanner1AtMotor || !tScanner1Enable) && 
                             (tScanner2AtMotor || !tScanner2Enable)
    tHalfScanners2AtMotor = (tScanner3AtMotor || !tScanner3Enable) && 
                             (tScanner4AtMotor || !tScanner4Enable)
    tScannersAtMotor = tHalfScanners1AtMotor && tHalfScanners2AtMotor
    //Network 18
    tCurCleanCycles.countUp(tRunning && (tToMotor && tScannersAtMotor) || 
                                        (tToFilter && tScannersAtFilter))
    if (!tRunning || tFilterContinuousClean) {tCurCleanCycles.cV = 0}
    tFilterCleanCount = tCurCleanCycles.cV
    //Network 19
    tScanCommand = tRunning && tFilterCleanCount === 0
    //if (tScanCommand) {debugger}
    //Network 20
    tValveFlush1OpenAuto = tPulseBit0.pTrig(tScanCommand && ((!ctScanner4) || 
                                                            (ctScanner4 && (tLastAtMotor && !tHalfScanners1AtFilter) || 
                                                                      (tLastAtFilter && !tHalfScanners1AtMotor))))
    //Network 21
    tValveFlush2OpenAuto = tPulseBit1.pTrig(tScanCommand && ctScanner4 && (!tScannersAllAtOnce && (tLastAtMotor && tHalfScanners1AtFilter) || 
                                                                                                 (tLastAtFilter && tHalfScanners1AtMotor)) ||
                                                                         (tScannersAllAtOnce && (tLastAtMotor || tLastAtFilter)))
    //Network 22
    b1 = (!ctScanner4 || (ctScanner4 && tScannersAllAtOnce)) && !tScanCommand
    b2 = (ctScanner4 && !tScannersAllAtOnce && tValveFlush2OpenLS && (tLastAtMotor && tHalfScanners1AtFilter) ||
                                                                     (tLastAtFilter && tHalfScanners1AtMotor))
    tValveFlush1CloseAuto = tPulseBit2.pTrig((b1 || b2) && !tRunning)
    //Network 23
    tValveFlush2CloseAuto = tPulseBit3.pTrig(ctScanner4 && !tScanCommand)
    //Network 24
    tPumpSuction1AutoStart = tPulseBit4.pTrig(tScanCommand && (tValveFlush1OpenLS || tValveFlush2OpenLS))
    //Network 25
    b1 = tScanCommand || ((tScannerMotorCmd || tScannerFilterCmd) && !tScannersAtFilter && !tScannersAtMotor)
    tScannerFilterCmd = b1 && tLastAtMotor
    tScannerMotorCmd = b1 && tLastAtFilter
    //Network 26
    b1 = tPulseBit5.pTrig(tRunning && !tScanCommand && (tScannersAtMotor || tScannersAtFilter))
    tPumpSuction1AutoStop = b1
    tFilterCleanComplete = b1
    //Network 27
    tContinT2.PT = tContCleanActive
    tPulseBit6.pTrig(tScanCommand)
    tFilterContinuousClean = tContCleanEnable && tContinT2.TP(tFilterNeedsContClean && tPulseBit6.Q)
    tContinuousCleanTiming = tContinT2.ET
    tContinuousCleanTimingReal = tContinuousCleanTiming / 60000
    if (!tFilterOn || tFilterContinuousCleanCancel) {
        tFilterContinuousCleanCancel = false
        tContinT2.onTime = 0
    }
    //Network 28
    tContinT1.PT = tContCleanNeeded
    tFilterNeedsContClean = tContinT1.TP(tScanCommand)
    if (!tFilterOn) {tContinT1.onTime = 0}
    //Network 29
    tFilterCleaning = tRunning
    //Network 30
    if (tStartManual) {
        tCleanReasonBuffer = 4
        tStartManual = false
    }
}
const t07FilterScanners = () => {
    //Network 1
    tPowerRestoreComplete = tPowerRestore.TON(fPowerOn)
    //Network 2
    if (!tPowerRestoreComplete) {
        if (ctScanner1) {tScanner1Enable = true}
        if (ctScanner2) {tScanner2Enable = true}
        if (ctScanner3) {tScanner3Enable = true}
        if (ctScanner4) {tScanner4Enable = true}
    }
    //Network 3
    if (at425Scanner1Overload || at426Scanner1ToMotorFault || at427Scanner1ToFilterFault || at428ValveSuction1FailToClose || at429ValveSuction1FailToOpen) {
        tScanner1Enable = false
    }
    //Network 4
    if (!ctScanner1) {
        at425Scanner1Overload = false 
        at426Scanner1ToMotorFault = false
        at427Scanner1ToFilterFault = false
        tScanner1Enable = false
    }
    //Network 5
    if (at417Scanner2Overload || at418Scanner2ToMotorFault || at419Scanner2ToFilterFault || at428ValveSuction1FailToClose || at429ValveSuction1FailToOpen) {
        tScanner2Enable = false
    }
    //Network 6
    if (!ctScanner2) {
        at417Scanner2Overload = false 
        at418Scanner2ToMotorFault = false
        at419Scanner2ToFilterFault = false
        tScanner2Enable = false
    }
    //Network 7
    if (at441Scanner3Overload || at442Scanner3ToMotorFault || at443Scanner3ToFilterFault || 
        (!ctValveFlush2 && (at428ValveSuction1FailToClose || at429ValveSuction1FailToOpen)) || 
        (ctValveFlush2 && (at420ValveSuction2FailToOpen || at421ValveSuction2FailToClose))) {
        tScanner3Enable = false
    }
    //Network 8
    if (!ctScanner3) {
        at441Scanner3Overload = false 
        at442Scanner3ToMotorFault = false
        at443Scanner3ToFilterFault = false
        tScanner3Enable = false
    }
    //Network 9
    if (at433Scanner4Overload || at434Scanner4ToMotorFault || at435Scanner4ToFilterFault || at420ValveSuction2FailToOpen || at421ValveSuction2FailToClose) {
        tScanner4Enable = false
    }   
    //Network 10
    if (!ctScanner4) {
        at433Scanner4Overload = false 
        at434Scanner4ToMotorFault = false
        at435Scanner4ToFilterFault = false
        tScanner4Enable = false
    }
    //Network 11
    tScanner1FilterAuto = tScannerFilterCmd && tValveFlush1OpenLS && (!ctScanner4 || (ctScanner4 && !tHalfScanners1AtFilter))
    tScanner2FilterAuto = tScannerFilterCmd && tValveFlush1OpenLS && (!ctScanner4 || (ctScanner4 && !tHalfScanners1AtFilter))
    tScanner3FilterAuto = tScannerFilterCmd && (!ctScanner4 && tValveFlush1OpenLS) || 
        (ctScanner4 && tValveFlush2OpenLS && ((!tScannersAllAtOnce && tHalfScanners1AtFilter) || tScannersAllAtOnce))
    tScanner4FilterAuto = tScannerFilterCmd && (ctScanner4 && tValveFlush2OpenLS && ((!tScannersAllAtOnce && tHalfScanners1AtFilter) || tScannersAllAtOnce))
    //Network 12
    tScanner1MotorAuto = tScannerMotorCmd && tValveFlush1OpenLS && (!ctScanner4 || (ctScanner4 && !tHalfScanners1AtMotor))
    tScanner2MotorAuto = tScannerMotorCmd && tValveFlush1OpenLS && (!ctScanner4 || (ctScanner4 && !tHalfScanners1AtMotor))
    tScanner3MotorAuto = tScannerMotorCmd && (!ctScanner4 && tValveFlush1OpenLS) || 
        (ctScanner4 && tValveFlush2OpenLS && ((!tScannersAllAtOnce && tHalfScanners1AtMotor) || tScannersAllAtOnce))
    tScanner4MotorAuto = tScannerMotorCmd && (ctScanner4 && tValveFlush2OpenLS && ((!tScannersAllAtOnce && tHalfScanners1AtMotor) || tScannersAllAtOnce))
    //Network 13
    if (tScannersAtMotor) {tFilterPark = false}
}
const t08FilterStatus = () => {
    //Network 1 Waiting
    if (fTreatmentAftpBal && tFilterAuto && !tFilterOn && tValveBypassClosedLS && ((tValveOverboardClosedLS || !ctValveOverboard || tfilteronlymode) && !at401Alarm)) {tFilterStatus = 1}
    //Network 2 Running
    if (fTreatmentAftpBal && tFilterAuto && tFilterOn && !tPumpSuction1 && !at401Alarm) {tFilterStatus = 2}
    //Network 3 Cleaning
    if (fTreatmentAftpBal && tFilterAuto && tFilterOn && tPumpSuction1 && !at401Alarm) {tFilterStatus = 3}
    //Network 4 Off
    if ((!tFilterAuto && !tFilterManual) || fTreatmentAftpOff || fTreatmentAftpDebal) {tFilterStatus = 4}
    //Network 5 Alarm Stop
    if (!at407ValveBypassAlarm && at401Alarm) {tFilterStatus = 5}
    //Network 6 Manual
    if (tFilterManual && !at401Alarm) {tFilterStatus = 6}
    //Network 7 Bypassed
    if (at407ValveBypassAlarm) {tFilterStatus = 7}
    //Network 8 Motive Waiting
    if (fTreatmentAftpMot && tFilterAuto && !tFilterOn && !at407ValveBypassAlarm && !at401Alarm) {tFilterStatus = 8}
    //Network 9 Motive Running
    if (fTreatmentAftpMot && tFilterAuto && tFilterOn && !tPumpSuction1 && !at401Alarm) {tFilterStatus = 9}
    //Network 10 Motive Cleaning
    if (fTreatmentAftpMot && tFilterAuto && tFilterOn & tPumpSuction1 && !at401Alarm) {tFilterStatus = 3}
}
const t10PumpSuction = () => {
    //Network 1
    let b1 = tPumpSuctionAuto && (tPumpSuction1AutoStart || (tPumpSuction1 && tRunning)) && !tPumpSuction1AutoStop
    let b2 = !tPumpSuctionAuto && !tPumpSuctionAuto && (tPumpSuction1ManualStart || tPumpSuction1) && !tPumpSuction1ManualStop
    tPumpSuction1 = fPowerOn && !at444CommunicationErrorPLC3ToPLC2 && (b1 || b2) && tPumpSuction1OverloadOK
    //Network 2
    if (!tPowerRestoreComplete) {tPumpSuctionAuto = true}
    //Network 3 -- Not Used
    //Network 4 -- Not Used
    //Network 5 -- Not Used
    //Network 6 -- Not Used
    //Network 7 -- Not Used
    //Network 8 -- Not Used
    //Network 9 -- Not Used
    //Network 10 -- Not Used
}
const t14ValveOthers = () => {
    //Network 1
    if (!ctValveFlush1) {
        at428ValveSuction1FailToClose = false
        at429ValveSuction1FailToOpen = false 
    }
    //Network 2
    if (!ctValveFlush2) {
        at420ValveSuction2FailToOpen = false
        at421ValveSuction2FailToClose = false 
    }
    //Network 3
    let b1 = tValveMotiveInAuto && tFilterAuto && (tValveMotiveOpenAuto || tValveMotive) && tValveMotiveCloseAuto
    let b2 = mGeneratorEnable
    let b3 = !tValveMotiveInAuto && (tValveMotiveOpenManual || tValveMotive) && !tValveMotiveCloseManual
    tValveMotive = fPowerOn && ctValveMotive && !at444CommunicationErrorPLC3ToPLC2 && (b1 || b2 || b3)
    //Network 4
    tValveMotiveOpenAuto = tFilterOn && tStartupComplete && !tFilterOnlyMode
    //Network 5
    tValveMotiveCloseAuto = !tFilterOn || (tStartupComplete && mGeneratorEnable)
    //Network 6
    if (alarmReset) {
        at431ValveMotiveFailToOpen = false
        at430ValveMotiveFailToClose = false
    }
    //Network 7
    if (tValveMotiveClosedLS) {tValveMotiveStatus = 0}
    if (tValveMotiveOpenLS) {tValveMotiveStatus = 1}
    if (tValveMotiveClosedLS || tValveMotiveOpenLS) {tValveMotiveStatus = 2}
    //Network 8
    if (tValveBypassClosedLS && (tValveOverboardClosedLS || tFilterOnlyMode || !ctValveOverboard)) {tValveBypassStatus = 0}
    //Network 9
    if (!tValveBypassClosedLS || (!tValveOverboardClosedLS && !tFilterOnlyMode && ctValveOverboard)) {tValveBypassStatus = 1}
}
const plc3_AftpScannerReset = () => {
    if (!ctScanner1) {
        tScanner1AtMotor = false
        tScanner1AtFilter = false
    }
    if (!ctScanner2) {
        tScanner2AtMotor = false
        tScanner2AtFilter = false
    }
    if (!ctScanner3) {
        tScanner3AtMotor = false
        tScanner3AtFilter = false
    }
    if (!ctScanner4) {
        tScanner4AtMotor = false
        tScanner4AtFilter = false
    }
    if (!ctValveFlush1) {
        tValveFlush1ClosedLS = false 
        tValveFlush1OpenLS = false
    }
    if (!ctValveFlush2) {
        tValveFlush2ClosedLS = false 
        tValveFlush2OpenLS = false
    }
}
const t11ValveClO2 = () => {
    //Network 1 -- Not Used
    //Network 2 -- Not Used
    //Network 3
    if (fTreatmentAftpBal && !tFilterOnlyMode && tFilterOn && !tStartupComplete) {
        tValveClO2Value = tValveInletStartupPos
    }
    //Network 4
    let b1 = (fTreatmentAftpBal && tFilterOnlyMode) || !tFilterOn || !fTreatmentAftpBal
    if (b1 && !fValveClO2Force && !tFilterManual) {
        tValveClO2Value = tValveClO2ShutdownPos
    }
    //Network 5
    b1 = fTreatmentBal && !tFilterOnlyMode && tFilterOn && tStartupComplete
    if (b1 || fValveClO2Force) {tValveClO2Value = tValveClO2OpenPos}
    //Network 6
    tValveClO2PositionPerc = tValveClO2Value
}
const t12ValveInlet = () => {
    //Network 1
    t97PCVA09.kp = tValveInletGain
    t97PCVA09.ki = tValveInletTI
    t97PCVA09.kd = tValveInletTD
    //Network 2
    if (tValveInletManOn) {
        t97PCVA09.setMode(PID.MANUAL)
    } else {
        t97PCVA09.setMode(PID.AUTOMATIC)
    }
    //Network 3
    tValveInletSPFilter = valueLimit(0, tPressureInletSP, 10)
    tValveInletInputFilter = valueLimit(0, tPressureInletBar, 10)
    //Network 4
    if (tFilterOn && tStartupComplete) {tValveInletManOn = false}
    //Network 5
    if (tFilterOn && !tStartupComplete) {
        tValveInletManOn = true
        tValveInletValue = tValveInletStartupPos
    }
    //Network 6
    if (!tFilterOn && !tFilterManual) {
        tValveInletManOn = true
        tValveInletValue = tValveInletShutdownPos
    }
    //Network 7
    if (t97PCVA09.getMode() === 'Auto') {
        tValveInletValue = tValveInletPositionPerc
    }
    //Network 8
    if (t97PCVA09.getMode() === 'Manual') {
        t97PCVA09.setOutput(tValveInletValue)
    }
}
const t13ValveOutlet = () => {
    //Network 1
    t98PCVA10.kp = tValveOutletGain
    t98PCVA10.ki = tValveOutletTI
    t98PCVA10.kd = tValveOutletTD
    //Network 2
    if (tValveOutletManOn) {
        t98PCVA10.setMode(PID.MANUAL)
    } else {
        t98PCVA10.setMode(PID.AUTOMATIC)
    }
    //Network 3
    tPressureOutletCalc = tPressureInletBar - tPressureDifferentialHigh
    //Network 4
    if (tPressureOutletCalc > tValveOutletSP) {
        tPressureOutletSP = tPressureOutletCalc
    } else {
        tPressureOutletSP = tValveOutletSP
    }
    //Network 5
    tValveOutletSPFilter = valueLimit(0, tPressureOutletSP, 10)
    //Network 6
    tValveOutletInputFilter = valueLimit(0, tPressureOutletBar, 10)
    //Network 7
    if (tFilterOn && tStartupComplete) {tValveOutletManOn = false}
    //Network 8
    if (tFilterOn && !tStartupComplete) {
        tValveOutletManOn = true
        tValveOutletValue = tValveOutletStartupPos
    }
    //Network 9
    if (tTValveOutletCloseDelay.TON(!tFilterOn && !tFilterManual)) {
        tValveOutletManOn = true
        tValveOutletValue = tValveOutletShutdownPos
    }
    //Network 10
    if (t98PCVA10.getMode() === 'Auto') {
        tValveOutletValue = tValveOutletPositionPerc
    }
    //Network 11
    if (t98PCVA10.getMode() === 'Manual') {
        t98PCVA10.setOutput(tValveOutletValue)
    }
}
