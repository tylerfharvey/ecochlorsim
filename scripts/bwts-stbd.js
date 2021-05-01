//Stbd Filter Components
const plc3_100StbdFilter = () => {
    //Network 1
    if (sFilterAuto) {sFilterManual = false}
    //Network 2
    ds21ValveFlush1.cvAuto = sValveFlush1Auto
    ds21ValveFlush1.cvOpenManual = sValveFlush1OpenManual
    ds21ValveFlush1.cvCloseManual = sValveFlush1CloseManual
    ds21ValveFlush1.cvOpenAuto = sValveFlush1OpenAuto
    ds21ValveFlush1.cvCloseAuto = sValveFlush1CloseAuto
    ds21ValveFlush1.cvZSO = sValveFlush1OpenLS
    ds21ValveFlush1.cvZSC = sValveFlush1ClosedLS
    ds21ValveFlush1.systemBallast = sFilterAuto
    ds21ValveFlush1.systemManual = sFilterManual
    ds21ValveFlush1.cycleRunning = sRunning
    ds21ValveFlush1.valveUpdate(true, alarmReset)
    sValveFlush1 = ds21ValveFlush1.cvOpenDO
    as329ValveSuction1FailToOpen = ds21ValveFlush1.cvOpenFault
    as328ValveSuction1FailToClose = ds21ValveFlush1.cvCloseFault
    sValveFlush1Status = ds21ValveFlush1.cvStatus
    sValveFlush1OpenManual = false
    sValveFlush1CloseManual = false 
    //Network 3
    ds22ValveFlush2.cvAuto = sValveFlush2Auto
    ds22ValveFlush2.cvOpenManual = sValveFlush2OpenManual
    ds22ValveFlush2.cvCloseManual = sValveFlush2CloseManual
    ds22ValveFlush2.cvOpenAuto = sValveFlush2OpenAuto
    ds22ValveFlush2.cvCloseAuto = sValveFlush2CloseAuto
    ds22ValveFlush2.cvZSO = sValveFlush2OpenLS
    ds22ValveFlush2.cvZSC = sValveFlush2ClosedLS
    ds22ValveFlush2.systemBallast = sFilterAuto
    ds22ValveFlush2.systemManual = sFilterManual
    ds22ValveFlush2.cycleRunning = sRunning
    ds22ValveFlush2.valveUpdate(true, alarmReset)
    sValveFlush2 = ds22ValveFlush2.cvOpenDO
    as320ValveSuction2FailToOpen = ds22ValveFlush2.cvOpenFault
    as321ValveSuction2FailToClose = ds22ValveFlush2.cvCloseFault
    sValveFlush2Status = ds22ValveFlush2.cvStatus
    sValveFlush2OpenManual = false
    sValveFlush2CloseManual = false 
    //Network 4
    s01Alarms()
    //Network 5
    s04BallastingSequence()
    //Network 6
    s06FilterCleaningCycle()
    //Network 7
    if (csScanner1) {
        sScanner1.smAuto = sScanner1Auto
        sScanner1.smMotorManual = sScanner1MotorManual
        sScanner1.smFilterManual = sScanner1FilterManual
        sScanner1.smMotorAuto = sScanner1MotorAuto
        sScanner1.smFilterAuto = sScanner1FilterAuto
        sScanner1.smStopAuto = sScanner1StopAuto
        sScanner1.smOverload = sScanner1OverloadOK
        sScanner1.smMotorPosition = sScanner1AtMotor
        sScanner1.smFilterPosition = sScanner1AtFilter
        sScanner1.smRunHourReset = false
        sScanner1.enable = sScanner1Enable
        sScanner1.smStopManual = sScanner1StopManual
        sScanner1.systemBallast = sFilterAuto
        sScanner1.systemManual = sFilterManual
        sScanner1.cycleRunning = sCycleRunning
        sScanner1.salarmReset = alarmReset
        sScanner1.filterPark = sFilterPark
        sScanner1.tmrsmToFil.PT = sTimedScannerMove
        sScanner1.tmrsmToMot.PT = sTimedScannerMove
        sScanner1.scannerUpdate()
        sScanner1ToMotor = sScanner1.smMotorDO
        sScanner1ToFilter = sScanner1.smFilterDO
        as325Scanner1Overload = sScanner1.smOverloadFault
        as326Scanner1ToMotorFault = sScanner1.smMotorFault
        as327Scanner1ToFilterFault = sScanner1.smFilterFault
        sRunHoursReset = sScanner1.smRunHoursReset
        sRunHoursNReset = sScanner1.smRunHoursNReset
        sScanner1Status = sScanner1.smStatus
    }
    //Network 8
    if (csScanner2) {
        sScanner2.smAuto = sScanner2Auto
        sScanner2.smMotorManual = sScanner2MotorManual
        sScanner2.smFilterManual = sScanner2FilterManual
        sScanner2.smMotorAuto = sScanner2MotorAuto
        sScanner2.smFilterAuto = sScanner2FilterAuto
        sScanner2.smStopAuto = sScanner2StopAuto
        sScanner2.smOverload = sScanner2OverloadOK
        sScanner2.smMotorPosition = sScanner2AtMotor
        sScanner2.smFilterPosition = sScanner2AtFilter
        sScanner2.smRunHourReset = false
        sScanner2.enable = sScanner2Enable
        sScanner2.smStopManual = sScanner2StopManual
        sScanner2.systemBallast = sFilterAuto
        sScanner2.systemManual = sFilterManual
        sScanner2.cycleRunning = sCycleRunning
        sScanner2.salarmReset = alarmReset
        sScanner2.filterPark = sFilterPark
        sScanner2.tmrsmToFil.PT = sTimedScannerMove
        sScanner2.tmrsmToMot.PT = sTimedScannerMove
        sScanner2.scannerUpdate()
        sScanner2ToMotor = sScanner2.smMotorDO
        sScanner2ToFilter = sScanner2.smFilterDO
        as325Scanner2Overload = sScanner2.smOverloadFault
        as326Scanner2ToMotorFault = sScanner2.smMotorFault
        as327Scanner2ToFilterFault = sScanner2.smFilterFault
        sRunHoursReset = sScanner2.smRunHoursReset
        sRunHoursNReset = sScanner2.smRunHoursNReset
        sScanner2Status = sScanner2.smStatus    
    }
    //Network 9
    if (csScanner3) {
        sScanner3.smAuto = sScanner3Auto
        sScanner3.smMotorManual = sScanner3MotorManual
        sScanner3.smFilterManual = sScanner3FilterManual
        sScanner3.smMotorAuto = sScanner3MotorAuto
        sScanner3.smFilterAuto = sScanner3FilterAuto
        sScanner3.smStopAuto = sScanner3StopAuto
        sScanner3.smOverload = sScanner3OverloadOK
        sScanner3.smMotorPosition = sScanner3AtMotor
        sScanner3.smFilterPosition = sScanner3AtFilter
        sScanner3.smRunHourReset = false
        sScanner3.enable = sScanner3Enable
        sScanner3.smStopManual = sScanner3StopManual
        sScanner3.systemBallast = sFilterAuto
        sScanner3.systemManual = sFilterManual
        sScanner3.cycleRunning = sCycleRunning
        sScanner3.salarmReset = alarmReset
        sScanner3.filterPark = sFilterPark
        sScanner3.tmrsmToFil.PT = sTimedScannerMove
        sScanner3.tmrsmToMot.PT = sTimedScannerMove
        sScanner3.scannerUpdate()
        sScanner3ToMotor = sScanner3.smMotorDO
        sScanner3ToFilter = sScanner3.smFilterDO
        as325Scanner3Overload = sScanner3.smOverloadFault
        as326Scanner3ToMotorFault = sScanner3.smMotorFault
        as327Scanner3ToFilterFault = sScanner3.smFilterFault
        sRunHoursReset = sScanner3.smRunHoursReset
        sRunHoursNReset = sScanner3.smRunHoursNReset
        sScanner3Status = sScanner3.smStatus    
    }
    //Network 10
    if (csScanner4) {
        sScanner4.smAuto = sScanner4Auto
        sScanner4.smMotorManual = sScanner4MotorManual
        sScanner4.smFilterManual = sScanner4FilterManual
        sScanner4.smMotorAuto = sScanner4MotorAuto
        sScanner4.smFilterAuto = sScanner4FilterAuto
        sScanner4.smStopAuto = sScanner4StopAuto
        sScanner4.smOverload = sScanner4OverloadOK
        sScanner4.smMotorPosition = sScanner4AtMotor
        sScanner4.smFilterPosition = sScanner4AtFilter
        sScanner4.smRunHourReset = false
        sScanner4.enable = sScanner4Enable
        sScanner4.smStopManual = sScanner4StopManual
        sScanner4.systemBallast = sFilterAuto
        sScanner4.systemManual = sFilterManual
        sScanner4.cycleRunning = sCycleRunning
        sScanner4.salarmReset = alarmReset
        sScanner4.filterPark = sFilterPark
        sScanner4.tmrsmToFil.PT = sTimedScannerMove
        sScanner4.tmrsmToMot.PT = sTimedScannerMove
        sScanner4.scannerUpdate()
        sScanner4ToMotor = sScanner4.smMotorDO
        sScanner4ToFilter = sScanner4.smFilterDO
        as325Scanner4Overload = sScanner4.smOverloadFault
        as326Scanner4ToMotorFault = sScanner4.smMotorFault
        as327Scanner4ToFilterFault = sScanner4.smFilterFault
        sRunHoursReset = sScanner4.smRunHoursReset
        sRunHoursNReset = sScanner4.smRunHoursNReset
        sScanner4Status = sScanner4.smStatus    
    }
    //Network 11
    s07FilterScanners()
    //Network 12
    s08FilterStatus()
    //Network 13 -- Not Used
    //s09MotiveSend()
    //Network 14
    s10PumpSuction()
    //Network 15
    s14ValveOthers()
}
const s01Alarms = () => {
    //Network 1
    as301Alarm = (fEStopPressed || as310CleanCycleAlarm || as312PressureDifferentialAlarm || 
                  as313PressureInletHighHighAlarm || as314PressureOutletLowLowAlarm || as304NegDPAlarm ||
                  as307ValveBypassAlarm || as330ValveMotiveFailToClose || as331ValveMotiveFailToOpen ||
                  as332PumpSuctionOverload || as322FilterDisabled || as344CommunicationErrorPLC3ToPLC2 ||
                  as345PumpMotiveOverload || as339PLC5Error || as340PLC3Error)
    
    //Network 2
    as302Warning = (as309CleanCycleWarning || as315PressureInletHighWarning || as316FlowBallastLowWarning ||
                    as303PressureOutletLowWarning || as305ContinuoutCleanWarning || as306FlowGravityBallastLowWarning ||
                    as323AftpIsolationValveOpen || sScanner1Warning || sScanner2Warning || 
                    sScanner3Warning || sScanner4Warning)
    //Network 3 
    if (sT303.TON(sStartupComplete && sFilterOn && sPressureOutletBar < sPressureOutletLow)) {as303PressureOutletLowWarning = true}
    //Network 4
    if (sT304.TON(sStartupComplete && sFilterOn && sFDP < sPressureDifferentialNeg)) {as304NegDPAlarm = true}
    //Network 5
    as305ContinuoutCleanWarning = sFilterContinuousClean
    //Network 6 -- Not Used
    as306FlowGravityBallastLowWarning = false
    //Network 7
    let b1 = (!sValveBypassClosedLS) || (csValveBypass2 && !sValveBypass2ClosedLS) || 
             (csValveOverboard && !sFilterOnlyMode && !sValveOverboardClosedLS)
    let b2 = (sFilterOn || !csBypassAlarmOnFilter) & !sValveBypassRepose
    if (sT307.TON(b1) && b2) {as307ValveBypassAlarm = true}
    //Network 8
    as308GeneratorAlarm = motGenAlarm
    //Network 9 -- Not Used
    //Network 10 -- Not Used
    //Network 11
    as311PressureDifferentialWarning = sT311.TON(sFDP > sPressureDPHigh)
    //Network 12
    if (sT312.TON(sFDP > sPressureDPHighHigh)) {as312PressureDifferentialAlarm = true}
    //Network 13
    if (sT313.TON(sFilterOn && sPressureInletBar > sPressureInletHighHigh)) {as313PressureInletHighHighAlarm = true}
    //Network 14
    if (sT314.TON(sStartupComplete && sFilterOn && sPressureOutletBar < sPressureOutletLowLow)) {as314PressureOutletLowLowAlarm = true}
    //Network 15
    if (sT315.TON(sStartupComplete && sFilterOn && sPressureInletBar > sPressureInletHigh)) {as315PressureInletHighWarning = true}
    //Network 16
    if (sT316.TON(sFilterOn && sFlowBallastSV > sFlowLow)) {as316FlowBallastLowWarning = true}
    //Network 17
    if (sT322.TON((!sScanner1Enable || !csScanner1) && (!sScanner2Enable || !csScanner2) && (!sScanner3Enable || !csScanner3) && (!sScanner4Enable || !csScanner4))) {as322FilterDisabled = true}
    //Network 18
    if (sFilterOn && sT323.TON(ctValveClO2Isolation && !fValveAftpIsolationClosed)) {as330ValveMotiveFailToClose = true}
    //Network 19
    if (sT330.TON(csValveMotive && !sValveMotive && !sValveMotiveClosedLS)) {as330ValveMotiveFailToClose = true} 
    //Network 20
    if (sT331.TON(csValveMotive && sValveMotive && !sValveMotiveOpenLS)) {as331ValveMotiveFailToOpen = true} 
    //Network 21
    if (!sPumpSuction1OverloadOK) {as332PumpSuctionOverload = true}
    //Network 22 -- Not Used
    //Network 23
    if (!fPumpMotiveOverloadOK) {as345PumpMotiveOverload = true}
    //Network 24
    sScanner1Warning = csScanner1 & (as328ValveSuction1FailToClose || as329ValveSuction1FailToOpen ||
        as327Scanner1ToFilterFault || as326Scanner1ToMotorFault || as325Scanner1Overload)
    //Network 25
    sScanner2Warning = csScanner2 & (as328ValveSuction1FailToClose || as329ValveSuction1FailToOpen ||
        as317Scanner2Overload || as319Scanner2ToFilterFault || as318Scanner2ToMotorFault)
    //Network 26
    sScanner3Warning = csScanner3 & ((!csValveFlush2 && (as328ValveSuction1FailToClose || as329ValveSuction1FailToOpen)) || 
                                     (csValveFlush2 && (as321ValveSuction2FailToClose || as320ValveSuction2FailToOpen)) ||
                                      as341Scanner3Overload || as342Scanner3ToMotorFault || as343Scanner3ToFilterFault)
    //Network 27
    sScanner4Warning = csScanner4 & (as321ValveSuction2FailToClose || as320ValveSuction2FailToOpen ||
        as333Scanner4Overload || as334Scanner4ToMotorFault || as335Scanner4ToFilterFault)
    //Network 28
    sAlarmBuzzer = (as301Alarm || as302Warning || motGenAlarm || motGenWarning) && !fSilencePressed
    //Network 29
    if (alarmReset) {
        as309CleanCycleWarning = false 
        as310CleanCycleAlarm = false
        as311PressureDifferentialWarning = false
        as312PressureDifferentialAlarm = false
        as313PressureInletHighHighAlarm = false
        as314PressureOutletLowLowAlarm = false
        as315PressureInletHighWarning = false
        as316FlowBallastLowWarning = false
        as303PressureOutletLowWarning = false
        as304NegDPAlarm = false
        as305ContinuoutCleanWarning  = false
        as306FlowGravityBallastLowWarning = false
        as307ValveBypassAlarm = false
        as308GeneratorAlarm = false
        as330ValveMotiveFailToClose = false
        as331ValveMotiveFailToOpen = false
        if (as322FilterDisabled) {
            if (csScanner1) {sScanner1Enable = true}
            if (csScanner2) {sScanner2Enable = true}
            if (csScanner3) {sScanner3Enable = true}
            if (csScanner4) {sScanner4Enable = true}
        }
        as322FilterDisabled = false
        as332PumpSuctionOverload = false
        as323AftpIsolationValveOpen = false
        as344CommunicationErrorPLC3ToPLC2 = false
        as345PumpMotiveOverload = false
        as339PLC5Error = false
        as340PLC3Error = false
    }
}
const s04BallastingSequence = () => {
    //Network 1
    sFilterOn =  fPowerOn && ((fTreatmentAftpMot) || cmAftp || sFilterOnlyMode) && fTreatmentBal && sFilterAuto && sPumpBallastRunning && !as301Alarm && !motGenAlarm
    //Network 2
    if (s04nw2Trig.pTrig(sFilterAuto)) {
        sValveFlush1Auto = true 
        sValveFlush2Auto = true 
        sScanner1Auto = true 
        sScanner2Auto = true 
        sScanner3Auto = true 
        sScanner4Auto = true 
        sCleaningAuto - true
        sValveMotiveAuto = true
    }
    //Network 3 -- Not Used
    //Network 4
    sStartupComplete = sStartupTimer.TON(sFilterOn)
}
const s06FilterCleaningCycle = () => {
    //Network 1
    if (s06nw1Trig.pTrig(sScanCommand)) {
        sCleanCycleDate6 = sCleanCycleDate5
        sCleanCycleDate5 = sCleanCycleDate4
        sCleanCycleDate4 = sCleanCycleDate3
        sCleanCycleDate3 = sCleanCycleDate2
        sCleanCycleDate2 = sCleanCycleDate1
        sCleanCycleDate1 = moment().valueOf()
        sCleanCycleReason6 = sCleanCycleReason5
        sCleanCycleReason5 = sCleanCycleReason4
        sCleanCycleReason4 = sCleanCycleReason3
        sCleanCycleReason3 = sCleanCycleReason2
        sCleanCycleReason2 = sCleanCycleReason1
        sCleanCycleReason1 = sCleanReasonBuffer
    }
    //Network 2
    sFDP = sPressureInletBar - sPressureOutletBar
    //Network 3
    sDifferentialPressureStart = sDPDelay.TON(sFDP >= sPressureDifferentialHigh)
    if (sDPDelay.Q) {sCleanReasonBuffer = 2}
    //Network 4
    if (!sLastAtMotor && !sLastAtFilter) {sLastAtFilter = true}
    //Network 5
    let b1 = sToFilter || (!sToMotor && !sToFilter)
    let b2 = (sScanner1AtFilter || !sScanner1Enable) && 
             (sScanner2AtFilter || !sScanner2Enable) &&
             (sScanner3AtFilter || !sScanner3Enable) && 
             (sScanner4AtFilter || !sScanner4Enable)
    if (b1 && b2) {
        sLastAtFilter = true
        sLastAtMotor = false
    }
    let b3 = sToMotor || (!sToMotor && !sToFilter)
    let b4 = (sScanner1AtMotor || !sScanner1Enable) && 
             (sScanner2AtMotor || !sScanner2Enable) &&
             (sScanner3AtMotor || !sScanner3Enable) && 
             (sScanner4AtMotor || !sScanner4Enable)
    if (b3 && b4) {
        sLastAtFilter = false
        sLastAtMotor = true
    }
    //Network 6
    sToMotor = sScanner1ToMotor || sScanner2ToMotor || sScanner3ToMotor || sScanner4ToMotor
    //Network 7
    sToFilter = sScanner1ToFilter || sScanner2ToFilter || sScanner3ToFilter || sScanner4ToFilter
    //Network 8
    b1 = sFilterAuto && sFilterOn && sCleaningAuto && (sCleaningTimerDone || sDifferentialPressureStart || sStartManual || sRunning || sStartupClean)
    b2 = !sCleaningAuto && (sStartManual || sRunning)
    sRunning = fPowerOn && (b1 || b2) && !as301Alarm && !sFilterCleanComplete
    //Network 9
    sCleanCycles.countUp(sFilterAuto & sCleaningAuto & sScanCommand)
    sCleaningCycles = sCleanCycles.cV
    //Network 10
    sCleanDelay.TON(!sRunning && sFilterAuto && sFilterOn && sCleaningAuto && !sCleaningTimerDone)
    if (!sFilterAuto || !sCleaningAuto || (sFilterAuto && sCleaningAuto && sDifferentialPressureStart)) {sCleanDelay.onTime = moment().valueOf()}
    //Network 11
    sCleaningTimerDone = sCleanDelay.Q
    sCleanDelay.PT = sTimedCleanDelayMS
    if (sCleanDelay.Q) {sCleanReasonBuffer = 3}
    //Network 12
    sTimeToNexCleanMin = (sTimedCleanDelayMS - sCleanDelay.ET) / 60000
    //Network 13
    sStartupCleanDelay.PT = sCleanCycleStartupDelay * 1000
    if (sStartupCleanPulse.pTrig(sStartupCleanDelay.TON(sFilterOn))) {
        sStartupClean = true
        sCleanReasonBuffer = 1
    }
    //Network 14
    if (sFilterCleanCount === 1) {sStartupClean = false}
    //Network 15 -- not used
    //Network 16
    sHalfScanners1AtFilter = (sScanner1AtFilter || !sScanner1Enable) && 
                             (sScanner2AtFilter || !sScanner2Enable)
    sHalfScanners2AtFilter = (sScanner3AtFilter || !sScanner3Enable) && 
                             (sScanner4AtFilter || !sScanner4Enable)
    sScannersAtFilter = sHalfScanners1AtFilter && sHalfScanners2AtFilter
    //Network 17
    sHalfScanners1AtMotor = (sScanner1AtMotor || !sScanner1Enable) && 
                             (sScanner2AtMotor || !sScanner2Enable)
    sHalfScanners2AtMotor = (sScanner3AtMotor || !sScanner3Enable) && 
                             (sScanner4AtMotor || !sScanner4Enable)
    sScannersAtMotor = sHalfScanners1AtMotor && sHalfScanners2AtMotor
    //Network 18
    sCurCleanCycles.countUp(sRunning && (sToMotor && sScannersAtMotor) || 
                                        (sToFilter && sScannersAtFilter))
    if (!sRunning || sFilterContinuousClean) {sCurCleanCycles.cV = 0}
    sFilterCleanCount = sCurCleanCycles.cV
    //Network 19
    sScanCommand = sRunning && sFilterCleanCount === 0
    //Network 20
    sValveFlush1OpenAuto = sPulseBit0.pTrig(sScanCommand && ((!csScanner4) || 
                                                            (csScanner4 && (sLastAtMotor && !sHalfScanners1AtFilter) || 
                                                                      (sLastAtFilter && !sHalfScanners1AtMotor))))
    //Network 21
    sValveFlush2OpenAuto = sPulseBit1.pTrig(sScanCommand && csScanner4 && ((!sScannersAllAtOnce && (sLastAtMotor && sHalfScanners1AtFilter) || 
                                                                                                 (sLastAtFilter && sHalfScanners1AtMotor)) ||
                                                                         (sScannersAllAtOnce && (sLastAtMotor || sLastAtFilter))))
    
    //Network 22
    b1 = (!csScanner4 || (csScanner4 && sScannersAllAtOnce)) && !sScanCommand
    b2 = (csScanner4 && !sScannersAllAtOnce && sValveFlush2OpenLS && (sLastAtMotor && sHalfScanners1AtFilter) ||
                                                                     (sLastAtFilter && sHalfScanners1AtMotor))
    sValveFlush1CloseAuto = sPulseBit2.pTrig((b1 || b2) && !sRunning)
    //Network 23
    sValveFlush2CloseAuto = sPulseBit3.pTrig(csScanner4 && !sScanCommand)
    //Network 24
    sPumpSuction1AutoStart = sPulseBit4.pTrig(sScanCommand && (sValveFlush1OpenLS || sValveFlush2OpenLS))
    //Network 25
    b1 = sScanCommand || ((sScannerMotorCmd || sScannerFilterCmd) && !sScannersAtFilter && !sScannersAtMotor)
    sScannerFilterCmd = b1 && sLastAtMotor
    sScannerMotorCmd = b1 && sLastAtFilter
    //Network 26
    b1 = sPulseBit5.pTrig(sRunning && !sScanCommand && (sScannersAtMotor || sScannersAtFilter))
    sPumpSuction1AutoStop = b1
    sFilterCleanComplete = b1
    //Network 27
    sContinT2.PT = sContCleanActive
    sPulseBit6.pTrig(sScanCommand)
    sFilterContinuousClean = sContCleanEnable && sContinT2.TP(sFilterNeedsContClean && sPulseBit6.Q)
    sContinuousCleanTiming = sContinT2.ET
    sContinuousCleanTimingReal = sContinuousCleanTiming / 60000
    if (!sFilterOn || sFilterContinuousCleanCancel) {
        sContinT2.onTime = 0
        sFilterContinuousCleanCancel = false
    }
    //Network 28
    sContinT1.PT = sContCleanNeeded
    sFilterNeedsContClean = sContinT1.TP(sScanCommand)
    if (!sFilterOn) {sContinT1.onTime = 0}
    //Network 29
    sFilterCleaning = sRunning
    //Network 30
    if (sStartManual) {
        sCleanReasonBuffer = 4
        sStartManual = false
    }
}
const s07FilterScanners = () => {
    //Network 1
    sPowerRestoreComplete = sPowerRestore.TON(fPowerOn)
    //Network 2
    if (!sPowerRestoreComplete) {
        if (csScanner1) {sScanner1Enable = true}
        if (csScanner2) {sScanner2Enable = true}
        if (csScanner3) {sScanner3Enable = true}
        if (csScanner4) {sScanner4Enable = true}
    }
    //Network 3
    if (as325Scanner1Overload || as326Scanner1ToMotorFault || as327Scanner1ToFilterFault || as328ValveSuction1FailToClose || as329ValveSuction1FailToOpen) {
        sScanner1Enable = false
    }
    //Network 4
    if (!csScanner1) {
        as325Scanner1Overload = false 
        as326Scanner1ToMotorFault = false
        as327Scanner1ToFilterFault = false
        sScanner1Enable = false
    }
    //Network 5
    if (as317Scanner2Overload || as318Scanner2ToMotorFault || as319Scanner2ToFilterFault || as328ValveSuction1FailToClose || as329ValveSuction1FailToOpen) {
        sScanner2Enable = false
    }
    //Network 6
    if (!csScanner2) {
        as317Scanner2Overload = false 
        as318Scanner2ToMotorFault = false
        as319Scanner2ToFilterFault = false
        sScanner2Enable = false
    }
    //Network 7
    if (as341Scanner3Overload || as342Scanner3ToMotorFault || as343Scanner3ToFilterFault || 
        (!csValveFlush2 && (as328ValveSuction1FailToClose || as329ValveSuction1FailToOpen)) || 
        (csValveFlush2 && (as320ValveSuction2FailToOpen || as321ValveSuction2FailToClose))) {
        sScanner3Enable = false
    }
    //Network 8
    if (!csScanner3) {
        as341Scanner3Overload = false 
        as342Scanner3ToMotorFault = false
        as343Scanner3ToFilterFault = false
        sScanner3Enable = false
    }
    //Network 9
    if (as333Scanner4Overload || as334Scanner4ToMotorFault || as335Scanner4ToFilterFault || as320ValveSuction2FailToOpen || as321ValveSuction2FailToClose) {
        sScanner4Enable = false
    }   
    //Network 10
    if (!csScanner4) {
        as333Scanner4Overload = false 
        as334Scanner4ToMotorFault = false
        as335Scanner4ToFilterFault = false
        sScanner4Enable = false
    }
    //Network 11
    sScanner1FilterAuto = sScannerFilterCmd && sValveFlush1OpenLS && (!csScanner4 || (csScanner4 && !sHalfScanners1AtFilter))
    sScanner2FilterAuto = sScannerFilterCmd && sValveFlush1OpenLS && (!csScanner4 || (csScanner4 && !sHalfScanners1AtFilter))
    sScanner3FilterAuto = sScannerFilterCmd && ((!csScanner4 && sValveFlush1OpenLS) || 
        (csScanner4 && sValveFlush2OpenLS && ((!sScannersAllAtOnce && sHalfScanners1AtFilter) || sScannersAllAtOnce)))
    sScanner4FilterAuto = sScannerFilterCmd && (csScanner4 && sValveFlush2OpenLS && ((!sScannersAllAtOnce && sHalfScanners1AtFilter) || sScannersAllAtOnce))
    //Network 12
    sScanner1MotorAuto = sScannerMotorCmd && sValveFlush1OpenLS && (!csScanner4 || (csScanner4 && !sHalfScanners1AtMotor))
    sScanner2MotorAuto = sScannerMotorCmd && sValveFlush1OpenLS && (!csScanner4 || (csScanner4 && !sHalfScanners1AtMotor))
    sScanner3MotorAuto = sScannerMotorCmd && ((!csScanner4 && sValveFlush1OpenLS) || 
        (csScanner4 && sValveFlush2OpenLS && ((!sScannersAllAtOnce && sHalfScanners1AtMotor) || sScannersAllAtOnce)))
    sScanner4MotorAuto = sScannerMotorCmd && (csScanner4 && sValveFlush2OpenLS && ((!sScannersAllAtOnce && sHalfScanners1AtMotor) || sScannersAllAtOnce))
    //Network 13
    if (sScannersAtMotor) {sFilterPark = false}
}
const s08FilterStatus = () => {
    //Network 1
    if (fTreatmentBal && sFilterAuto && !sFilterOn && sValveBypassClosedLS && (((sValveOverboardClosedLS || !csValveOverboard) && (!cmAftp || fTreatmentAftpMot)) || sFilterOnlyMode) && !as301Alarm) {sFilterStatus = 1}
    //Network 2
    if (fTreatmentBal && sFilterAuto && sFilterOn && !sPumpSuction1 && !as301Alarm) {sFilterStatus = 2}
    //Network 3
    if (fTreatmentBal && sFilterAuto && sFilterOn && sPumpSuction1 && !as301Alarm) {sFilterStatus = 3}
    //Network 4
    if (as307ValveBypassAlarm) {sFilterStatus = 7}
    //Network 5
    if (fTreatmentBal && sFilterAuto && !sFilterOn && sValveBypassClosedLS && (sValveOverboardClosedLS || csValveOverboard) && cmAftp && !fTreatmentAftpMot && !tPumpMotive && !as301Alarm) {sFilterStatus = 8}
    //Network 6
    if (sFilterManual && !as301Alarm) {sFilterStatus = 6}
    //Network 7
    if ((fTreatmentBal || (!sFilterAuto && !sFilterManual)) && as301Alarm) {sFilterStatus = 4}
    //Network 8
    if (!as307ValveBypassAlarm && as301Alarm) {sFilterStatus = 5}
}
const s10PumpSuction = () => {
    //Network 1
    let b1 = sPumpSuctionAuto && (sPumpSuction1AutoStart || (sPumpSuction1 && sRunning)) && !sPumpSuction1AutoStop
    let b2 = !sPumpSuctionAuto && !sPumpSuctionAuto && (sPumpSuction1ManualStart || sPumpSuction1) && !sPumpSuction1ManualStop
    sPumpSuction1 = fPowerOn && !as344CommunicationErrorPLC3ToPLC2 && (b1 || b2) && sPumpSuction1OverloadOK
    //Network 2
    if (!sPowerRestoreComplete) {sPumpSuctionAuto = true}
    //Network 3 -- Not Used
    //Network 4 -- Not Used
    //Network 5 -- Not Used
    //Network 6 -- Not Used
    //Network 7 -- Not Used
    //Network 8 -- Not Used
    //Network 9 -- Not Used
    //Network 10 -- Not Used
}
const s14ValveOthers = () => {
    //Network 1
    if (!csValveFlush1) {
        as328ValveSuction1FailToClose = false
        as329ValveSuction1FailToOpen = false 
    }
    //Network 2
    if (!csValveFlush2) {
        as320ValveSuction2FailToOpen = false
        as321ValveSuction2FailToClose = false 
    }
    //Network 3
    let b1 = sValveMotiveInAuto && sFilterAuto && (sValveMotiveOpenAuto || sValveMotive) && sValveMotiveCloseAuto
    let b2 = mGeneratorEnable
    let b3 = !sValveMotiveInAuto && (sValveMotiveOpenManual || sValveMotive) && !sValveMotiveCloseManual
    sValveMotive = fPowerOn && csValveMotive && !as344CommunicationErrorPLC3ToPLC2 && (b1 || b2 || b3)
    //Network 4
    sValveMotiveOpenAuto = sFilterOn && sStartupComplete && !sFilterOnlyMode
    //Network 5
    sValveMotiveCloseAuto = !sFilterOn || (sStartupComplete && mGeneratorEnable)
    //Network 6
    if (alarmReset) {
        as331ValveMotiveFailToOpen = false
        as330ValveMotiveFailToClose = false
    }
    //Network 7
    if (sValveMotiveClosedLS) {sValveMotiveStatus = 0}
    if (sValveMotiveOpenLS) {sValveMotiveStatus = 1}
    if (sValveMotiveClosedLS || sValveMotiveOpenLS) {sValveMotiveStatus = 2}
    //Network 8
    if (sValveBypassClosedLS && (sValveOverboardClosedLS || sFilterOnlyMode || !csValveOverboard)) {sValveBypassStatus = 0}
    //Network 9
    if (!sValveBypassClosedLS || (!sValveOverboardClosedLS && !sFilterOnlyMode && csValveOverboard)) {sValveBypassStatus = 1}
}
const plc3_StbdScannerReset = () => {
    if (!csScanner1) {
        sScanner1AtMotor = false
        sScanner1AtFilter = false
    }
    if (!csScanner2) {
        sScanner2AtMotor = false
        sScanner2AtFilter = false
    }
    if (!csScanner3) {
        sScanner3AtMotor = false
        sScanner3AtFilter = false
    }
    if (!csScanner4) {
        sScanner4AtMotor = false
        sScanner4AtFilter = false
    }
    if (!csValveFlush1) {
        sValveFlush1ClosedLS = false 
        sValveFlush1OpenLS = false
    }
    if (!csValveFlush2) {
        sValveFlush2ClosedLS = false 
        sValveFlush2OpenLS = false
    }
}
const s11ValveClO2 = () => {
    //Network 1
    if (sFilterOn && !sStbdAndPort && !sStartupComplete && !sFilterOnlyMode) {
        sValveClO2Value = sValveClO2StartupPos
    }
    //Network 2
    sTValveClO2CloseDelay.PT = sValveClO2CloseDelay
    if (sTValveClO2CloseDelay.TON(pFilterOn && mGeneratorEnable && !sFilterOn)) {
        sValveClO2Value = 0
    }
    //Network 3
    if (fTreatmentAftpBal || sFilterOnlyMode) {sValveClO2Value = 0}
    //Network 4
    let b1 = !pFilterOn && !sFilterOn && mGeneratorEnable && (!fTreatmentAftpBal || !ctFilter)
    let b2 = b1 || (!pFilterOn && sFilterOn)
    let b3 = (b2 && !sFilterOnlyMode) || fValveClO2Force 
    if (b3) {sValveClO2Value = sValveClO2OpenPos}
    //Network 5
    if (!fTreatmentAftpBal && !pFilterOnlyMode && !mGeneratorEnable  &&
        !sFilterOn && !pFilterOn && !fValveClO2Force && !sFilterManual) {
            sValveClO2Value = sValveClO2ShutdownPos
    }
    //Network 6
    sStbdAndPort = pFilterOn && sFilterOn
    //Network 7
    if (!cfClO2Shared) {
        sValveClO2Math3 = Math.log(100 - pValveClO2PositionPerc) * sValveClO2LinearCoef1 - sValveClO2LinearCoef2
    } else {
        sValveClO2Math3 = 0
    }
    //Network 8
    if (sStbdAndPort) {sValveClO2Value = sValveClO2Math3}
    //Network 9
    sValveClO2PositionPerc = sValveClO2Value
}
const s12ValveInlet = () => {
    //Network 1
    s97PCVS01.kp = sValveInletGain
    s97PCVS01.ki = sValveInletTI
    s97PCVS01.kd = sValveInletTD
    //Network 2
    if (sValveInletManOn) {
        s97PCVS01.setMode(PID.MANUAL)
    } else {
        s97PCVS01.setMode(PID.AUTOMATIC)
    }
    //Network 3
    sValveInletSPFilter = valueLimit(0, sPressureInletSP, 10)
    sValveInletInputFilter = valueLimit(0, sPressureInletBar, 10)
    //Network 4
    if (sFilterOn && sStartupComplete) {sValveInletManOn = false}
    //Network 5
    if (sFilterOn && !sStartupComplete) {
        sValveInletManOn = true
        sValveInletValue = sValveInletStartupPos
    }
    //Network 6
    if (!sFilterOn && !sFilterManual) {
        sValveInletManOn = true
        sValveInletValue = sValveInletShutdownPos
    }
    //Network 7
    if (s97PCVS01.getMode() === 'Auto') {
        sValveInletValue = sValveInletPositionPerc
    }
    //Network 8
    if (s97PCVS01.getMode() === 'Manual') {
        s97PCVS01.setOutput(sValveInletValue)
    }
}
const s13ValveOutlet = () => {
    //Network 1
    s98PCVS03.kp = sValveOutletGain
    s98PCVS03.ki = sValveOutletTI
    s98PCVS03.kd = sValveOutletTD
    //Network 2
    if (sValveOutletManOn) {
        s98PCVS03.setMode(PID.MANUAL)
    } else {
        s98PCVS03.setMode(PID.AUTOMATIC)
    }
    //Network 3
    sPressureOutletCalc = sPressureInletBar - sPressureDifferentialHigh
    //Network 4
    if (sPressureOutletCalc > sValveOutletSP) {
        sPressureOutletSP = sPressureOutletCalc
    } else {
        sPressureOutletSP = sValveOutletSP
    }
    //Network 5
    sValveOutletSPFilter = valueLimit(0, sPressureOutletSP, 10)
    //Network 6
    sValveOutletInputFilter = valueLimit(0, sPressureOutletBar, 10)
    //Network 7
    if (sFilterOn && sStartupComplete) {sValveOutletManOn = false}
    //Network 8
    if (sFilterOn && !sStartupComplete) {
        sValveOutletManOn = true
        sValveOutletValue = sValveOutletStartupPos
    }
    //Network 9
    if (sTValveOutletCloseDelay.TON(!sFilterOn && !sFilterManual)) {
        sValveOutletManOn = true
        sValveOutletValue = sValveOutletShutdownPos
    }
    //Network 10
    if (s98PCVS03.getMode() === 'Auto') {
        sValveOutletValue = sValveOutletPositionPerc
    }
    //Network 11
    if (s98PCVS03.getMode() === 'Manual') {
        s98PCVS03.setOutput(sValveOutletValue)
    }
}
