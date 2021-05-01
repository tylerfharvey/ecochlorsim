//Port Filter Components
const plc3_200PortFilter = () => {
    //Network 1
    if (pFilterAuto) {pFilterManual = false}
    //Network 2
    dp21ValveFlush1.cvAuto = pValveFlush1Auto
    dp21ValveFlush1.cvOpenManual = pValveFlush1OpenManual
    dp21ValveFlush1.cvCloseManual = pValveFlush1CloseManual
    dp21ValveFlush1.cvOpenAuto = pValveFlush1OpenAuto
    dp21ValveFlush1.cvCloseAuto = pValveFlush1CloseAuto
    dp21ValveFlush1.cvZSO = pValveFlush1OpenLS
    dp21ValveFlush1.cvZSC = pValveFlush1ClosedLS
    dp21ValveFlush1.systemBallast = pFilterAuto
    dp21ValveFlush1.systemManual = pFilterManual
    dp21ValveFlush1.cycleRunning = pRunning
    dp21ValveFlush1.valveUpdate(true, alarmReset)
    pValveFlush1 = dp21ValveFlush1.cvOpenDO
    ap229ValveSuction1FailToOpen = dp21ValveFlush1.cvOpenFault
    ap228ValveSuction1FailToClose = dp21ValveFlush1.cvCloseFault
    pValveFlush1Status = dp21ValveFlush1.cvStatus
    pValveFlush1OpenManual = false
    pValveFlush1CloseManual = false 
    //Network 3
    dp22ValveFlush2.cvAuto = pValveFlush2Auto
    dp22ValveFlush2.cvOpenManual = pValveFlush2OpenManual
    dp22ValveFlush2.cvCloseManual = pValveFlush2CloseManual
    dp22ValveFlush2.cvOpenAuto = pValveFlush2OpenAuto
    dp22ValveFlush2.cvCloseAuto = pValveFlush2CloseAuto
    dp22ValveFlush2.cvZSO = pValveFlush2OpenLS
    dp22ValveFlush2.cvZSC = pValveFlush2ClosedLS
    dp22ValveFlush2.systemBallast = pFilterAuto
    dp22ValveFlush2.systemManual = pFilterManual
    dp22ValveFlush2.cycleRunning = pRunning
    dp22ValveFlush2.valveUpdate(true, alarmReset)
    pValveFlush2 = dp22ValveFlush2.cvOpenDO
    ap220ValveSuction2FailToOpen = dp22ValveFlush2.cvOpenFault
    ap221ValveSuction2FailToClose = dp22ValveFlush2.cvCloseFault
    pValveFlush2Status = dp22ValveFlush2.cvStatus
    pValveFlush2OpenManual = false
    pValveFlush2CloseManual = false 
    //Network 4
    p01Alarms()
    //Network 5
    p04BallastingSequence()
    //Network 6
    p06FilterCleaningCycle()
    //Network 7
    if (cpScanner1) {
        pScanner1.smAuto = pScanner1Auto
        pScanner1.smMotorManual = pScanner1MotorManual
        pScanner1.smFilterManual = pScanner1FilterManual
        pScanner1.smMotorAuto = pScanner1MotorAuto
        pScanner1.smFilterAuto = pScanner1FilterAuto
        pScanner1.smStopAuto = pScanner1StopAuto
        pScanner1.smOverload = pScanner1OverloadOK
        pScanner1.smMotorPosition = pScanner1AtMotor
        pScanner1.smFilterPosition = pScanner1AtFilter
        pScanner1.smRunHourReset = false
        pScanner1.enable = pScanner1Enable
        pScanner1.smStopManual = pScanner1StopManual
        pScanner1.systemBallast = pFilterAuto
        pScanner1.systemManual = pFilterManual
        pScanner1.cycleRunning = pCycleRunning
        pScanner1.salarmReset = alarmReset
        pScanner1.filterPark = pFilterPark
        pScanner1.tmrsmToFil.PT = pTimedScannerMove
        pScanner1.tmrsmToMot.PT = pTimedScannerMove
        pScanner1.scannerUpdate()
        pScanner1ToMotor = pScanner1.smMotorDO
        pScanner1ToFilter = pScanner1.smFilterDO
        as325Scanner1Overload = pScanner1.smOverloadFault
        as326Scanner1ToMotorFault = pScanner1.smMotorFault
        as327Scanner1ToFilterFault = pScanner1.smFilterFault
        pRunHoursReset = pScanner1.smRunHoursReset
        pRunHoursNReset = pScanner1.smRunHoursNReset
        pScanner1Status = pScanner1.smStatus
    }
    //Network 8
    if (cpScanner2) {
        pScanner2.smAuto = pScanner2Auto
        pScanner2.smMotorManual = pScanner2MotorManual
        pScanner2.smFilterManual = pScanner2FilterManual
        pScanner2.smMotorAuto = pScanner2MotorAuto
        pScanner2.smFilterAuto = pScanner2FilterAuto
        pScanner2.smStopAuto = pScanner2StopAuto
        pScanner2.smOverload = pScanner2OverloadOK
        pScanner2.smMotorPosition = pScanner2AtMotor
        pScanner2.smFilterPosition = pScanner2AtFilter
        pScanner2.smRunHourReset = false
        pScanner2.enable = pScanner2Enable
        pScanner2.smStopManual = pScanner2StopManual
        pScanner2.systemBallast = pFilterAuto
        pScanner2.systemManual = pFilterManual
        pScanner2.cycleRunning = pCycleRunning
        pScanner2.salarmReset = alarmReset
        pScanner2.filterPark = pFilterPark
        pScanner2.tmrsmToFil.PT = pTimedScannerMove
        pScanner2.tmrsmToMot.PT = pTimedScannerMove
        pScanner2.scannerUpdate()
        pScanner2ToMotor = pScanner2.smMotorDO
        pScanner2ToFilter = pScanner2.smFilterDO
        as325Scanner2Overload = pScanner2.smOverloadFault
        as326Scanner2ToMotorFault = pScanner2.smMotorFault
        as327Scanner2ToFilterFault = pScanner2.smFilterFault
        pRunHoursReset = pScanner2.smRunHoursReset
        pRunHoursNReset = pScanner2.smRunHoursNReset
        pScanner2Status = pScanner2.smStatus    
    }
    //Network 9
    if (cpScanner3) {
        pScanner3.smAuto = pScanner3Auto
        pScanner3.smMotorManual = pScanner3MotorManual
        pScanner3.smFilterManual = pScanner3FilterManual
        pScanner3.smMotorAuto = pScanner3MotorAuto
        pScanner3.smFilterAuto = pScanner3FilterAuto
        pScanner3.smStopAuto = pScanner3StopAuto
        pScanner3.smOverload = pScanner3OverloadOK
        pScanner3.smMotorPosition = pScanner3AtMotor
        pScanner3.smFilterPosition = pScanner3AtFilter
        pScanner3.smRunHourReset = false
        pScanner3.enable = pScanner3Enable
        pScanner3.smStopManual = pScanner3StopManual
        pScanner3.systemBallast = pFilterAuto
        pScanner3.systemManual = pFilterManual
        pScanner3.cycleRunning = pCycleRunning
        pScanner3.salarmReset = alarmReset
        pScanner3.filterPark = pFilterPark
        pScanner3.tmrsmToFil.PT = pTimedScannerMove
        pScanner3.tmrsmToMot.PT = pTimedScannerMove
        pScanner3.scannerUpdate()
        pScanner3ToMotor = pScanner3.smMotorDO
        pScanner3ToFilter = pScanner3.smFilterDO
        as325Scanner3Overload = pScanner3.smOverloadFault
        as326Scanner3ToMotorFault = pScanner3.smMotorFault
        as327Scanner3ToFilterFault = pScanner3.smFilterFault
        pRunHoursReset = pScanner3.smRunHoursReset
        pRunHoursNReset = pScanner3.smRunHoursNReset
        pScanner3Status = pScanner3.smStatus    
    }
    //Network 10
    if (cpScanner4) {
        pScanner4.smAuto = pScanner4Auto
        pScanner4.smMotorManual = pScanner4MotorManual
        pScanner4.smFilterManual = pScanner4FilterManual
        pScanner4.smMotorAuto = pScanner4MotorAuto
        pScanner4.smFilterAuto = pScanner4FilterAuto
        pScanner4.smStopAuto = pScanner4StopAuto
        pScanner4.smOverload = pScanner4OverloadOK
        pScanner4.smMotorPosition = pScanner4AtMotor
        pScanner4.smFilterPosition = pScanner4AtFilter
        pScanner4.smRunHourReset = false
        pScanner4.enable = pScanner4Enable
        pScanner4.smStopManual = pScanner4StopManual
        pScanner4.systemBallast = pFilterAuto
        pScanner4.systemManual = pFilterManual
        pScanner4.cycleRunning = pCycleRunning
        pScanner4.salarmReset = alarmReset
        pScanner4.filterPark = pFilterPark
        pScanner4.tmrsmToFil.PT = pTimedScannerMove
        pScanner4.tmrsmToMot.PT = pTimedScannerMove
        pScanner4.scannerUpdate()
        pScanner4ToMotor = pScanner4.smMotorDO
        pScanner4ToFilter = pScanner4.smFilterDO
        as325Scanner4Overload = pScanner4.smOverloadFault
        as326Scanner4ToMotorFault = pScanner4.smMotorFault
        as327Scanner4ToFilterFault = pScanner4.smFilterFault
        pRunHoursReset = pScanner4.smRunHoursReset
        pRunHoursNReset = pScanner4.smRunHoursNReset
        pScanner4Status = pScanner4.smStatus    
    }

    //Network 11
    p07FilterScanners()
    //Network 12
    p08FilterStatus()
    //Network 13 -- Not Used
    //p09MotiveSend()
    //Network 14
    p10PumpSuction()
    //Network 15
    p14ValveOthers()
}
const p01Alarms = () => {
    //Network 1
    ap201Alarm = (fEStopPressed || ap210CleanCycleAlarm || ap212PressureDifferentialAlarm || 
                  ap213PressureInletHighHighAlarm || ap214PressureOutletLowLowAlarm || ap204NegDPAlarm ||
                  ap207ValveBypassAlarm || ap230ValveMotiveFailToClose || ap231ValveMotiveFailToOpen ||
                  ap232PumpSuctionOverload || ap222FilterDisabled || ap244CommunicationErrorPLC3ToPLC2 ||
                  ap245PumpMotiveOverload || ap239PLC5Error || ap240PLC3Error)
    //Network 2
    ap202Warning = (ap209CleanCycleWarning || ap215PressureInletHighWarning || ap216FlowBallastLowWarning ||
                    ap203PressureOutletLowWarning || ap205ContinuoutCleanWarning || ap206FlowGravityBallastLowWarning ||
                    ap223AftpIsolationValveOpen || pScanner1Warning || pScanner2Warning || 
                    pScanner3Warning || pScanner4Warning)
    //Network 3 
    if (pT203.TON(pStartupComplete && pFilterOn && pPressureOutletBar < pPressureOutletLow)) {ap203PressureOutletLowWarning = true}
    //Network 4
    if (pT204.TON(pStartupComplete && pFilterOn && pFDP < pPressureDifferentialNeg)) {ap204NegDPAlarm = true}
    //Network 5
    ap205ContinuoutCleanWarning = pFilterContinuousClean
    //Network 6 -- Not Used
    ap206FlowGravityBallastLowWarning = false
    //Network 7
    let b1 = (!pValveBypassClosedLS) || (cpValveBypass2 && !pValveBypass2ClosedLS) || 
             (cpValveOverboard && !pFilterOnlyMode && !pValveOverboardClosedLS)
    let b2 = (pFilterOn || !cpBypassAlarmOnFilter) & !pValveBypassRepose
    if (pT207.TON(b1) && b2) {ap207ValveBypassAlarm = true}
    //Network 8
    ap208GeneratorAlarm = motGenAlarm
    //Network 9 -- Not Used
    //Network 10 -- Not Used
    //Network 11
    ap211PressureDifferentialWarning = pT211.TON(pFDP > pPressureDPHigh)
    //Network 12
    if (pT212.TON(pFDP > pPressureDPHighHigh)) {ap212PressureDifferentialAlarm = true}
    //Network 13
    if (pT213.TON(pFilterOn && pPressureInletBar > pPressureInletHighHigh)) {ap213PressureInletHighHighAlarm = true}
    //Network 14
    if (pT214.TON(pStartupComplete && pFilterOn && pPressureOutletBar < pPressureOutletLowLow)) {ap214PressureOutletLowLowAlarm = true}
    //Network 15
    if (pT215.TON(pStartupComplete && pFilterOn && pPressureInletBar > pPressureInletHigh)) {ap215PressureInletHighWarning = true}
    //Network 16
    if (pT216.TON(pFilterOn && pFlowBallastSV > pFlowLow)) {ap216FlowBallastLowWarning = true}
    //Network 17
    if (pT222.TON((!pScanner1Enable || !cpScanner1) && (!pScanner2Enable || !cpScanner2) && (!pScanner3Enable || !cpScanner3) && (!pScanner4Enable || !cpScanner4))) {ap222FilterDisabled = true}
    //Network 18
    if (pFilterOn && pT223.TON(ctValveClO2Isolation && !fValveAftpIsolationClosed)) {ap230ValveMotiveFailToClose = true}
    //Network 19
    if (pT230.TON(cpValveMotive && !pValveMotive && !pValveMotiveClosedLS)) {ap230ValveMotiveFailToClose = true} 
    //Network 20
    if (pT231.TON(cpValveMotive && pValveMotive && !pValveMotiveOpenLS)) {ap231ValveMotiveFailToOpen = true} 
    //Network 21
    if (!pPumpSuction1OverloadOK) {ap232PumpSuctionOverload = true}
    //Network 22 -- Not Used
    //Network 23
    if (!fPumpMotiveOverloadOK) {ap245PumpMotiveOverload = true}
    //Network 24
    pScanner1Warning = cpScanner1 & (ap228ValveSuction1FailToClose || ap229ValveSuction1FailToOpen ||
        ap227Scanner1ToFilterFault || ap226Scanner1ToMotorFault || ap225Scanner1Overload)
    //Network 25
    pScanner2Warning = cpScanner2 & (ap228ValveSuction1FailToClose || ap229ValveSuction1FailToOpen ||
        ap217Scanner2Overload || ap219Scanner2ToFilterFault || ap218Scanner2ToMotorFault)
    //Network 26
    pScanner3Warning = cpScanner3 & ((!cpValveFlush2 && (ap228ValveSuction1FailToClose || ap229ValveSuction1FailToOpen)) || 
                                     (cpValveFlush2 && (ap221ValveSuction2FailToClose || ap220ValveSuction2FailToOpen)) ||
                                      ap241Scanner3Overload || ap242Scanner3ToMotorFault || ap243Scanner3ToFilterFault)
    //Network 27
    pScanner4Warning = cpScanner4 & (ap221ValveSuction2FailToClose || ap220ValveSuction2FailToOpen ||
        ap233Scanner4Overload || ap234Scanner4ToMotorFault || ap235Scanner4ToFilterFault)
    //Network 28
    pAlarmBuzzer = (ap201Alarm || ap202Warning || motGenAlarm || motGenWarning) && !fSilencePressed
    //Network 29
    if (alarmReset) {
        ap209CleanCycleWarning = false 
        ap210CleanCycleAlarm = false
        ap211PressureDifferentialWarning = false
        ap212PressureDifferentialAlarm = false
        ap213PressureInletHighHighAlarm = false
        ap214PressureOutletLowLowAlarm = false
        ap215PressureInletHighWarning = false
        ap216FlowBallastLowWarning = false
        ap203PressureOutletLowWarning = false
        ap204NegDPAlarm = false
        ap205ContinuoutCleanWarning  = false
        ap206FlowGravityBallastLowWarning = false
        ap207ValveBypassAlarm = false
        ap208GeneratorAlarm = false
        ap230ValveMotiveFailToClose = false
        ap231ValveMotiveFailToOpen = false
        if (ap222FilterDisabled) {
            if (cpScanner1) {pScanner1Enable = true}
            if (cpScanner2) {pScanner2Enable = true}
            if (cpScanner3) {pScanner3Enable = true}
            if (cpScanner4) {pScanner4Enable = true}
        }
        ap222FilterDisabled = false
        ap232PumpSuctionOverload = false
        ap223AftpIsolationValveOpen = false
        ap244CommunicationErrorPLC3ToPLC2 = false
        ap245PumpMotiveOverload = false
        ap239PLC5Error = false
        ap240PLC3Error = false
    }
}
const p04BallastingSequence = () => {
    //Network 1
    pFilterOn =  fPowerOn && ((fTreatmentAftpMot) || cmAftp || pFilterOnlyMode) && fTreatmentBal && pFilterAuto && pPumpBallastRunning && !ap201Alarm && !motGenAlarm
    //Network 2
    if (p04nw2Trig.pTrig(pFilterAuto)) {
        pValveFlush1Auto = true 
        pValveFlush2Auto = true 
        pScanner1Auto = true 
        pScanner2Auto = true 
        pScanner3Auto = true 
        pScanner4Auto = true 
        pCleaningAuto - true
        pValveMotiveAuto = true
    }
    //Network 3 -- Not Used
    //Network 4
    pStartupComplete = pStartupTimer.TON(pFilterOn)
}
const p06FilterCleaningCycle = () => {
    //Network 1
    if (p06nw1Trig.pTrig(pScanCommand)) {
        pCleanCycleDate6 = pCleanCycleDate5
        pCleanCycleDate5 = pCleanCycleDate4
        pCleanCycleDate4 = pCleanCycleDate3
        pCleanCycleDate3 = pCleanCycleDate2
        pCleanCycleDate2 = pCleanCycleDate1
        pCleanCycleDate1 = moment().valueOf()
        pCleanCycleReason6 = pCleanCycleReason5
        pCleanCycleReason5 = pCleanCycleReason4
        pCleanCycleReason4 = pCleanCycleReason3
        pCleanCycleReason3 = pCleanCycleReason2
        pCleanCycleReason2 = pCleanCycleReason1
        pCleanCycleReason1 = pCleanReasonBuffer
    }
    //Network 2
    pFDP = pPressureInletBar - pPressureOutletBar
    //Network 3
    pDifferentialPressureStart = pDPDelay.TON(pFDP >= pPressureDifferentialHigh)
    if (pDPDelay.Q) {pCleanReasonBuffer = 2}
    //Network 4
    if (!pLastAtMotor && !pLastAtFilter) {pLastAtFilter = true}
    //Network 5
    let b1 = pToFilter || (!pToMotor && !pToFilter)
    let b2 = (pScanner1AtFilter || !pScanner1Enable) && 
             (pScanner2AtFilter || !pScanner2Enable) &&
             (pScanner3AtFilter || !pScanner3Enable) && 
             (pScanner4AtFilter || !pScanner4Enable)
    if (b1 && b2) {
        pLastAtFilter = true
        pLastAtMotor = false
    }
    let b3 = pToMotor || (!pToMotor && !pToFilter)
    let b4 = (pScanner1AtMotor || !pScanner1Enable) && 
             (pScanner2AtMotor || !pScanner2Enable) &&
             (pScanner3AtMotor || !pScanner3Enable) && 
             (pScanner4AtMotor || !pScanner4Enable)
    if (b3 && b4) {
        pLastAtFilter = false
        pLastAtMotor = true
    }
    //Network 6
    pToMotor = pScanner1ToMotor || pScanner2ToMotor || pScanner3ToMotor || pScanner4ToMotor
    //Network 7
    pToFilter = pScanner1ToFilter || pScanner2ToFilter || pScanner3ToFilter || pScanner4ToFilter
    //Network 8
    b1 = pFilterAuto && pFilterOn && pCleaningAuto && (pCleaningTimerDone || pDifferentialPressureStart || pStartManual || pRunning || pStartupClean)
    b2 = !pCleaningAuto && (pStartManual || pRunning)
    pRunning = fPowerOn && (b1 || b2) && !ap201Alarm && !pFilterCleanComplete
    //Network 9
    pCleanCycles.countUp(pFilterAuto & pCleaningAuto & pScanCommand)
    pCleaningClyes = pCleanCycles.cV
    //Network 10
    pCleanDelay.TON(!pRunning && pFilterAuto && pFilterOn && pCleaningAuto && !pCleaningTimerDone)
    if (!pFilterAuto || !pCleaningAuto || (pFilterAuto && pCleaningAuto && pDifferentialPressureStart)) {pCleanDelay.onTime = moment().valueOf()}
    //Network 11
    pCleaningTimerDone = pCleanDelay.Q
    pCleanDelay.PT = pTimedCleanDelayMS
    if (pCleanDelay.Q) {pCleanReasonBuffer = 3}
    //Network 12
    pTimeToNexCleanMin = (pTimedCleanDelayMS - pCleanDelay.ET) / 60000
    //Network 13
    pStartupCleanDelay.PT = pCleanCycleStartupDelay * 1000
    if (pStartupCleanPulse.pTrig(pStartupCleanDelay.TON(pFilterOn))) {
        pStartupClean = true
        pCleanReasonBuffer = 1
    }
    //Network 14
    if (pFilterCleanCount === 1) {pStartupClean = false}
    //Network 15 -- not used
    //Network 16
    pHalfScanners1AtFilter = (pScanner1AtFilter || !pScanner1Enable) && 
                             (pScanner2AtFilter || !pScanner2Enable)
    pHalfScanners2AtFilter = (pScanner3AtFilter || !pScanner3Enable) && 
                             (pScanner4AtFilter || !pScanner4Enable)
    pScannersAtFilter = pHalfScanners1AtFilter && pHalfScanners2AtFilter
    //Network 17
    pHalfScanners1AtMotor = (pScanner1AtMotor || !pScanner1Enable) && 
                             (pScanner2AtMotor || !pScanner2Enable)
    pHalfScanners2AtMotor = (pScanner3AtMotor || !pScanner3Enable) && 
                             (pScanner4AtMotor || !pScanner4Enable)
    pScannersAtMotor = pHalfScanners1AtMotor && pHalfScanners2AtMotor
    //Network 18
    pCurCleanCycles.countUp(pRunning && (pToMotor && pScannersAtMotor) || 
                                        (pToFilter && pScannersAtFilter))
    if (!pRunning || pFilterContinuousClean) {pCurCleanCycles.cV = 0}
    pFilterCleanCount = pCurCleanCycles.cV    
    //Network 19
    pScanCommand = pRunning && pFilterCleanCount === 0
    //Network 20
    pValveFlush1OpenAuto = pPulseBit0.pTrig(pScanCommand && ((!cpScanner4) || 
                                                            (cpScanner4 && (pLastAtMotor && !pHalfScanners1AtFilter) || 
                                                                      (pLastAtFilter && !pHalfScanners1AtMotor))))
    //Network 21
    pValveFlush2OpenAuto = pPulseBit1.pTrig(pScanCommand && cpScanner4 && ((!pScannersAllAtOnce && (pLastAtMotor && pHalfScanners1AtFilter) || 
                                                                                                 (pLastAtFilter && pHalfScanners1AtMotor)) ||
                                                                         (pScannersAllAtOnce && (pLastAtMotor || pLastAtFilter))))
    
    //Network 22
    b1 = (!cpScanner4 || (cpScanner4 && pScannersAllAtOnce)) && !pScanCommand
    b2 = (cpScanner4 && !pScannersAllAtOnce && pValveFlush2OpenLS && (pLastAtMotor && pHalfScanners1AtFilter) ||
                                                                     (pLastAtFilter && pHalfScanners1AtMotor))
    pValveFlush1CloseAuto = pPulseBit2.pTrig((b1 || b2) && !pRunning)
    //Network 23
    pValveFlush2CloseAuto = pPulseBit3.pTrig(cpScanner4 && !pScanCommand)
    //Network 24
    pPumpSuction1AutoStart = pPulseBit4.pTrig(pScanCommand && (pValveFlush1OpenLS || pValveFlush2OpenLS))
    //Network 25
    b1 = pScanCommand || ((pScannerMotorCmd || pScannerFilterCmd) && !pScannersAtFilter && !pScannersAtMotor)
    pScannerFilterCmd = b1 && pLastAtMotor
    pScannerMotorCmd = b1 && pLastAtFilter
    //Network 26
    b1 = pPulseBit5.pTrig(pRunning && !pScanCommand && (pScannersAtMotor || pScannersAtFilter))
    pPumpSuction1AutoStop = b1
    pFilterCleanComplete = b1
    //Network 27
    pContinT2.PT = pContCleanActive
    pPulseBit6.pTrig(pScanCommand)
    pFilterContinuousClean = pContCleanEnable && pContinT2.TP(pFilterNeedpContClean && pPulseBit6.Q)
    pContinuousCleanTiming = pContinT2.ET
    pContinuousCleanTimingReal = pContinuousCleanTiming / 60000
    if (!pFilterOn || pFilterContinuousCleanCancel) {
        pFilterContinuousCleanCancel = false
        pContinT2.onTime = 0
    }
    //Network 28
    pContinT1.PT = pContCleanNeeded
    pFilterNeedpContClean = pContinT1.TP(pScanCommand)
    if (!pFilterOn) {pContinT1.onTime = 0}
    //Network 29
    pFilterCleaning = pRunning
    //Network 30
    if (pStartManual) {
        pCleanReasonBuffer = 4
        pStartManual = false
    }
}
const p07FilterScanners = () => {
    //Network 1
    pPowerRestoreComplete = pPowerRestore.TON(fPowerOn)
    //Network 2
    if (!pPowerRestoreComplete) {
        if (cpScanner1) {pScanner1Enable = true}
        if (cpScanner2) {pScanner2Enable = true}
        if (cpScanner3) {pScanner3Enable = true}
        if (cpScanner4) {pScanner4Enable = true}
    }
    //Network 3
    if (ap225Scanner1Overload || ap226Scanner1ToMotorFault || ap227Scanner1ToFilterFault || ap228ValveSuction1FailToClose || ap229ValveSuction1FailToOpen) {
        pScanner1Enable = false
    }
    //Network 4
    if (!cpScanner1) {
        ap225Scanner1Overload = false 
        ap226Scanner1ToMotorFault = false
        ap227Scanner1ToFilterFault = false
        pScanner1Enable = false
    }
    //Network 5
    if (ap217Scanner2Overload || ap218Scanner2ToMotorFault || ap219Scanner2ToFilterFault || ap228ValveSuction1FailToClose || ap229ValveSuction1FailToOpen) {
        pScanner2Enable = false
    }
    //Network 6
    if (!cpScanner2) {
        ap217Scanner2Overload = false 
        ap218Scanner2ToMotorFault = false
        ap219Scanner2ToFilterFault = false
        pScanner2Enable = false
    }
    //Network 7
    if (ap241Scanner3Overload || ap242Scanner3ToMotorFault || ap243Scanner3ToFilterFault || 
        (!cpValveFlush2 && (ap228ValveSuction1FailToClose || ap229ValveSuction1FailToOpen)) || 
        (cpValveFlush2 && (ap220ValveSuction2FailToOpen || ap221ValveSuction2FailToClose))) {
        pScanner3Enable = false
    }
    //Network 8
    if (!cpScanner3) {
        ap241Scanner3Overload = false 
        ap242Scanner3ToMotorFault = false
        ap243Scanner3ToFilterFault = false
        pScanner3Enable = false
    }
    //Network 9
    if (ap233Scanner4Overload || ap234Scanner4ToMotorFault || ap235Scanner4ToFilterFault || ap220ValveSuction2FailToOpen || ap221ValveSuction2FailToClose) {
        pScanner4Enable = false
    }   
    //Network 10
    if (!cpScanner4) {
        ap233Scanner4Overload = false 
        ap234Scanner4ToMotorFault = false
        ap235Scanner4ToFilterFault = false
        pScanner4Enable = false
    }
    //Network 11
    pScanner1FilterAuto = pScannerFilterCmd && pValveFlush1OpenLS && (!cpScanner4 || (cpScanner4 && !pHalfScanners1AtFilter))
    pScanner2FilterAuto = pScannerFilterCmd && pValveFlush1OpenLS && (!cpScanner4 || (cpScanner4 && !pHalfScanners1AtFilter))
    pScanner3FilterAuto = pScannerFilterCmd && ((!cpScanner4 && pValveFlush1OpenLS) || 
        (cpScanner4 && pValveFlush2OpenLS && ((!pScannersAllAtOnce && pHalfScanners1AtFilter) || pScannersAllAtOnce)))
    pScanner4FilterAuto = pScannerFilterCmd && (cpScanner4 && pValveFlush2OpenLS && ((!pScannersAllAtOnce && pHalfScanners1AtFilter) || pScannersAllAtOnce))
    //Network 12
    pScanner1MotorAuto = pScannerMotorCmd && pValveFlush1OpenLS && (!cpScanner4 || (cpScanner4 && !pHalfScanners1AtMotor))
    pScanner2MotorAuto = pScannerMotorCmd && pValveFlush1OpenLS && (!cpScanner4 || (cpScanner4 && !pHalfScanners1AtMotor))
    pScanner3MotorAuto = pScannerMotorCmd && ((!cpScanner4 && pValveFlush1OpenLS) || 
        (cpScanner4 && pValveFlush2OpenLS && ((!pScannersAllAtOnce && pHalfScanners1AtMotor) || pScannersAllAtOnce)))
    pScanner4MotorAuto = pScannerMotorCmd && (cpScanner4 && pValveFlush2OpenLS && ((!pScannersAllAtOnce && pHalfScanners1AtMotor) || pScannersAllAtOnce))
    //Network 13
    if (pScannersAtMotor) {pFilterPark = false}
}
const p08FilterStatus = () => {
    //Network 1
    if (fTreatmentBal && pFilterAuto && !pFilterOn && pValveBypassClosedLS && (((pValveOverboardClosedLS || !cpValveOverboard) && (!cmAftp || fTreatmentAftpMot)) || pFilterOnlyMode) && !ap201Alarm) {pFilterStatus = 1}
    //Network 2
    if (fTreatmentBal && pFilterAuto && pFilterOn && !pPumpSuction1 && !ap201Alarm) {pFilterStatus = 2}
    //Network 3
    if (fTreatmentBal && pFilterAuto && pFilterOn && pPumpSuction1 && !ap201Alarm) {pFilterStatus = 3}
    //Network 4
    if (ap207ValveBypassAlarm) {pFilterStatus = 7}
    //Network 5
    if (fTreatmentBal && pFilterAuto && !pFilterOn && pValveBypassClosedLS && (pValveOverboardClosedLS || cpValveOverboard) && cmAftp && !fTreatmentAftpMot && !tPumpMotive && !ap201Alarm) {pFilterStatus = 8}
    //Network 6
    if (pFilterManual && !ap201Alarm) {pFilterStatus = 6}
    //Network 7
    if ((fTreatmentBal || (!pFilterAuto && !pFilterManual)) && ap201Alarm) {pFilterStatus = 4}
    //Network 8
    if (!ap207ValveBypassAlarm && ap201Alarm) {pFilterStatus = 5}
}
const p10PumpSuction = () => {
    //Network 1
    let b1 = pPumpSuctionAuto && (pPumpSuction1AutoStart || (pPumpSuction1 && pRunning)) && !pPumpSuction1AutoStop
    let b2 = !pPumpSuctionAuto && !pPumpSuctionAuto && (pPumpSuction1ManualStart || pPumpSuction1) && !pPumpSuction1ManualStop
    pPumpSuction1 = fPowerOn && !ap244CommunicationErrorPLC3ToPLC2 && (b1 || b2) && pPumpSuction1OverloadOK
    //Network 2
    if (!pPowerRestoreComplete) {pPumpSuctionAuto = true}
    //Network 3 -- Not Used
    //Network 4 -- Not Used
    //Network 5 -- Not Used
    //Network 6 -- Not Used
    //Network 7 -- Not Used
    //Network 8 -- Not Used
    //Network 9 -- Not Used
    //Network 10 -- Not Used
}
const p14ValveOthers = () => {
    //Network 1
    if (!cpValveFlush1) {
        ap228ValveSuction1FailToClose = false
        ap229ValveSuction1FailToOpen = false 
    }
    //Network 2
    if (!cpValveFlush2) {
        ap220ValveSuction2FailToOpen = false
        ap221ValveSuction2FailToClose = false 
    }
    //Network 3
    let b1 = pValveMotiveInAuto && pFilterAuto && (pValveMotiveOpenAuto || pValveMotive) && pValveMotiveCloseAuto
    let b2 = mGeneratorEnable
    let b3 = !pValveMotiveInAuto && (pValveMotiveOpenManual || pValveMotive) && !pValveMotiveCloseManual
    pValveMotive = fPowerOn && cpValveMotive && !ap244CommunicationErrorPLC3ToPLC2 && (b1 || b2 || b3)
    //Network 4
    pValveMotiveOpenAuto = pFilterOn && pStartupComplete && !pFilterOnlyMode
    //Network 5
    pValveMotiveCloseAuto = !pFilterOn || (pStartupComplete && mGeneratorEnable)
    //Network 6
    if (alarmReset) {
        ap231ValveMotiveFailToOpen = false
        ap230ValveMotiveFailToClose = false
    }
    //Network 7
    if (pValveMotiveClosedLS) {pValveMotiveStatus = 0}
    if (pValveMotiveOpenLS) {pValveMotiveStatus = 1}
    if (pValveMotiveClosedLS || pValveMotiveOpenLS) {pValveMotiveStatus = 2}
    //Network 8
    if (pValveBypassClosedLS && (pValveOverboardClosedLS || pFilterOnlyMode || !cpValveOverboard)) {pValveBypassStatus = 0}
    //Network 9
    if (!pValveBypassClosedLS || (!pValveOverboardClosedLS && !pFilterOnlyMode && cpValveOverboard)) {pValveBypassStatus = 1}
}
const plc3_PortScannerReset = () => {
    if (!cpScanner1) {
        pScanner1AtMotor = false
        pScanner1AtFilter = false
    }
    if (!cpScanner2) {
        pScanner2AtMotor = false
        pScanner2AtFilter = false
    }
    if (!cpScanner3) {
        pScanner3AtMotor = false
        pScanner3AtFilter = false
    }
    if (!cpScanner4) {
        pScanner4AtMotor = false
        pScanner4AtFilter = false
    }
    if (!cpValveFlush1) {
        pValveFlush1ClosedLS = false 
        pValveFlush1OpenLS = false
    }
    if (!cpValveFlush2) {
        pValveFlush2ClosedLS = false 
        pValveFlush2OpenLS = false
    }
}
const p11ValveClO2 = () => {
    //Network 1
    pValveClO2SP = p1FIT100Final * pFlowPerc
    //Network 2
    p99FCVP02.kp = pValveClO2Gain
    p99FCVP02.ki = pValveClO2TI
    p99FCVP02.kd = pValveClO2TD
    //Network 3
    if (pValveClO2ManOn) {
        p99FCVP02.setMode(PID.MANUAL)
    } else {
        p99FCVP02.setMode(PID.AUTOMATIC)
    }
    //Network 4
    pValveClO2InputFilter = valueLimit(0, pFlowClO2M3HR, 100)
    //Network 5
    pValveClO2SPFilter = valueLimit(0, pValveClO2SP, 100)
    //Network 6
    let b1 = pPortAndStbd || (pStartupComplete && mGeneratorEnable)
    if (b1 && !cfClO2Shared && pTvalveClO2LeadDelay.Q) {pValveClO2ManOn = false}
    //Network 7
    b1 = !cfClO2Shared && pFilterOn && !pPortAndStbd
    let b2 = cfClO2Shared && (sFilterOn || pFilterOn)
    if (!pStartupComplete && (b1 || b2) && !pFilterOnlyMode) {
        pValveClO2ManOn = true
        pValveClO2Value = pValveClO2StartupPos
    }
    //Network 8
    let b3 = pStartupComplete && (b1 || b2) && !pFilterOnlyMode
    let b4 = !sFilterOn && !pFilterOn && mGeneratorEnable && (!fTreatmentAftpBal || !ctFilter)
    if (b3 || b4 || fValveClO2Force) {
        pValveClO2ManOn = true
        pValveClO2Value = pValveClO2OpenPos
    }
    //Network 9
    b1 = !fTreatmentAftpBal && !pFilterOnlyMode & !mGeneratorEnable && !pFilterOn
    b2 = !sFilterOn && !fValveClO2Force && !pFilterManual
    if (b1 && b2) {
        pValveClO2ManOn = true
        pValveClO2Value = pValveClO2ShutdownPos
    }
    //Network 10
    b1 = sFilterOn && mGeneratorEnable && !pFilterOn && !cfClO2Shared
    if (b1) {pValveClO2ManOn = true}
    if (pTValveClO2CloseDelay.TON(b1)) {pValveClO2Value = 0}
    //Network 11
    if (fTreatmentAftpBal || (pFilterOnlyMode && !mGeneratorEnable)) {
        pValveClO2ManOn = true
        pValveClO2Value = 0
    }
    //Network 12
    pPortAndStbd = sFilterOn && pFilterOn && !cfClO2Shared
    //Network 13
    pTvalveClO2LeadDelay.TON(pPortAndStbd)
    //Network 14
    if (pPortAndStbd && !pTvalveClO2LeadDelay.Q) {pValveClO2Value = pValveClO2LeadStartPos}
    //Network 15
    if (p99FCVP02.getMode() === 'Auto') {
        pValveClO2Value = pValveClO2PositionPerc
    }
    //Network 16
    if (p99FCVP02.getMode() === 'Manual') {
        p99FCVP02.setOutput(pValveClO2Value)
    }
}
const p12ValveInlet = () => {
    //Network 1
    p97PCVP02.kp = pValveInletGain
    p97PCVP02.ki = pValveInletTI
    p97PCVP02.kd = pValveInletTD
    //Network 2
    if (pValveInletManOn) {
        p97PCVP02.setMode(PID.MANUAL)
    } else {
        p97PCVP02.setMode(PID.AUTOMATIC)
    }
    //Network 3
    pValveInletSPFilter = valueLimit(0, pPressureInletSP, 10)
    //Network 3
    pValveInletInputFilter = valueLimit(0, pPressureInletBar, 10)
    //Network 4
    if (pFilterOn && pStartupComplete) {pValveInletManOn = false}
    //Network 5
    if (pFilterOn && !pStartupComplete) {
        pValveInletManOn = true
        pValveInletValue = pValveInletStartupPos
    }
    //Network 6
    if (!pFilterOn && !pFilterManual) {
        pValveInletManOn = true
        pValveInletValue = pValveInletShutdownPos
    }
    //Network 7
    if (p97PCVP02.getMode() === 'Auto') {
        pValveInletValue = pValveInletPositionPerc
    }
    //Network 8
    if (p97PCVP02.getMode() === 'Manual') {
        p97PCVP02.setOutput(pValveInletValue)
    }
}
const p13ValveOutlet = () => {
    //Network 1
    p98PCVP04.kp = pValveOutletGain
    p98PCVP04.ki = pValveOutletTI
    p98PCVP04.kd = pValveOutletTD
    //Network 2
    if (pValveOutletManOn) {
        p98PCVP04.setMode(PID.MANUAL)
    } else {
        p98PCVP04.setMode(PID.AUTOMATIC)
    }
    //Network 3
    pPressureOutletCalc = pPressureInletBar - pPressureDifferentialHigh
    //Network 4
    if (pPressureOutletCalc > pValveOutletSP) {
        pPressureOutletSP = pPressureOutletCalc
    } else {
        pPressureOutletSP = pValveOutletSP
    }
    //Network 5
    pValveOutletSPFilter = valueLimit(0, pPressureOutletSP, 10)
    //Network 6
    pValveOutletInputFilter = valueLimit(0, pPressureOutletBar, 10)
    //Network 7
    if (pFilterOn && pStartupComplete) {pValveOutletManOn = false}
    //Network 8
    if (pFilterOn && !pStartupComplete) {
        pValveOutletManOn = true
        pValveOutletValue = pValveOutletStartupPos
    }
    //Network 9
    if (pTValveOutletCloseDelay.TON(!pFilterOn && !pFilterManual)) {
        pValveOutletManOn = true
        pValveOutletValue = pValveOutletShutdownPos
    }
    //Network 10
    if (p98PCVP04.getMode() === 'Auto') {
        pValveOutletValue = pValveOutletPositionPerc
    }
    //Network 11
    if (p98PCVP04.getMode() === 'Manual') {
        p98PCVP04.setOutput(pValveOutletValue)
    }
}
