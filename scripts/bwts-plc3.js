//plc3 simulation
const bwts_PLC3 = () => {
    //Network 1
    plc3_02FilterSimulations()
    //Network 2
    plc3_10FilterCalculations()
    //Network 3
    plc3_100StbdFilter()
    //Network 4
    plc3_StbdScannerReset()
    //Network 5
    plc3_200PortFilter()
    //Network 6
    plc3_PortScannerReset()
    //Network 7
    plc3_500AftpFilter()
    //Network 8
    plc3_AftpScannerReset()
    //plc3_F1EthernetCommunications -- Not Used
    //plc3_F02TimedEvents -- Not Used
    //plc3_F03ValveTestCrew -- Not Used
    plc3_F05DigitalLogic()
    plc3_F06AnalogCalculations()
    //plc3_F10AnalogScalingPLC3 -- Not Used
    //plc3_F07ClearInputs -- Not Used
    //plc3_F08ClearOutputs -- Not Used
    //plc3_F20DigitalMappingPLC3 -- Not Used
    //plc3_F13AnalogMappingPLC3 -- Not Used
    //plc3_F16FlowMaxMinMapping -- Not Used
}
const plc3_02FilterSimulations = () => {
    //Network 1
    zFITA09 = z03PCVA09 || z04PCVA10
    fITA09.target = p3FITA09Target
    p3FITA09Final = fITA09.Sim(tFilterOn, zFITA09)
    //Network 2
    zFITA10 = z37FCVA09
    fITA10.target = p3FITA10Target
    p3FITA10Final = fITA10.Sim(tFilterOn, zFITA10)
    //Network 3
    zFITP02 = z25PCVP02 || z26PCVP04 || z30FITP02
    fITP02.target = p3FITP02Target
    p3FITP02Final = fITP02.Sim(pFilterOn, zFITP02)
    //Network 4
    zFITP04 = z31FITP04 || z36FCVP02
    fITP04.target = p3FITP04Target
    p3FITP04Final = fITP04.Sim(pFilterOn, zFITP04)
    //Network 5
    zFITS01 = z12PCVS01 || z13PCVS03 || z17FITS01
    fITS01.target = p3FITS01Target
    p3FITS01Final = fITS01.Sim(sFilterOn, zFITS01)
    //Network 6
    zFITS03 = z18FITS03 || z35FCVS01
    fITS03.target = p3FITS03Target
    p3FITS03Final = fITS03.Sim(sFilterOn, zFITS03)
    //Network 7
    zPITA10 = z03PCVA09
    if (z04PCVA10) {
        pITA10.target = 10
    } else {
        pITA10.target = p3PITA10Target
    }
    pITA10.target = p3PITA10Target
    p3PITA10Final = pITA10.Sim(tFilterOn, zPITA10)
    //Network 8
    zPITA09 = z03PCVA09
    pITA09.filterPressure = p3PITA10Final
    pITA09.dP = p3PITA09Target
    pITA09.outletTarget = p3PITA10Target
    p3PITA09Final = pITA09.SimDP(tFilterOn, zPITA09, zPITA10)
    //Network 9
    zPITP04 = z25PCVP02 || z29PITP04
    pITP04.target = p3PITP04Target
    p3PITP04Final = pITP04.Sim(pFilterOn, zPITP04)
    //Network 10
    zPITAP02 = z25PCVP02 || z28PITP02
    pITP02.filterPressure = p3PITP04Final
    pITP02.dP = p3PITP02Target
    pITP02.outletTarget = p3PITP04Target
    p3PITP02Final = pITP02.SimDP(pFilterOn, zPITP02, zPITP04)
    //Network 11
    zPITS03 = z12PCVS01 || z16PITS03
    pITS03.target = p3PITS03Target
    p3PITS03Final = pITS03.Sim(sFilterOn, zPITS03)
    //Network 12
    zPITAS01 = z12PCVS01 || z15PITS01
    pITS01.filterPressure = p3PITS03Final
    pITS01.dP = p3PITS01Target
    pITS01.outletTarget = p3PITS03Target
    p3PITS01Final = pITS01.SimDP(sFilterOn, zPITS01, zPITS03)
    //Network 13
    if (cfFlowBefore) {
        sFlowInlet = p3FITS01Final
        pFlowInlet = p3FITP02Final
    } else {
        sFlowFilterM3HR = p3FITS01Final
        pFlowFilterM3HR = p3FITP02Final
    }
    tFlowFilterM3HR = p3FITA09Final
    //Network 14
    sFlowClO2M3HR = p3FITS03Final
    pFlowClO2M3HR = p3FITP04Final
    tFlowClO2M3HR = p3FITA10Final
    //Network 15
    sPressureInletBar = p3PITS01Final
    sPressureOutletBar = p3PITS03Final
    pPressureInletBar = p3PITP02Final
    pPressureOutletBar = p3PITP04Final
    tPressureInletBar = p3PITA09Final
    tPressureOutletBar = p3PITA10Final
    //Network 16
    fScannerDelayMS = fScannerDelaySec * 1000
    //Network 17
    //Aftp Flush Valve 1
    tValveFlush1ClosedLS = (tValveFlush1Timer.TON(!tValveFlush1))
    tValveFlush1OpenLS = (tValveFlush1TimerO.TON(tValveFlush1 && !z01BVA19))
    //Aftp Scanner 1
    tScanner1Timer.PT = fScannerDelayMS
    if (tScanner1Timer.TON(tScanner1ToMotor && !z02FLA19)) {tScanner1AtMotor = true}
    if (tScanner1ToMotor && !z02FLA19) {tScanner1AtFilter = false}
    tScanner1TimerF.PT = fScannerDelayMS
    if (tScanner1TimerF.TON(tScanner1ToFilter && !z02FLA19)) {tScanner1AtFilter = true}
    if (tScanner1ToFilter && !z02FLA19) {tScanner1AtMotor = false}
    //Aftp Motive Valve
    tValveMotiveClosedLS = tValveMotiveTimer.TON(!tValveMotive)
    tValveMotiveOpenLS = tValveMotiveTimerO.TON(tValveMotive && !z32BVA20)
    //Network 18  
    //Stbd Scanner 1
    sScanner1Timer.PT = fScannerDelayMS
    if (sScanner1Timer.TON(sScanner1ToMotor && !z08FLS11)) {sScanner1AtMotor = true}
    if (sScanner1ToMotor && !z08FLS11) {sScanner1AtFilter = false}
    sScanner1TimerF.PT = fScannerDelayMS
    if (sScanner1TimerF.TON(sScanner1ToFilter && !z08FLS11)) {sScanner1AtFilter = true}
    if (sScanner1ToFilter && !z08FLS11) {sScanner1AtMotor = false}
    //Stbd Scanner 2
    sScanner2Timer.PT = fScannerDelayMS
    if (sScanner2Timer.TON(sScanner2ToMotor && !z09FLS21)) {sScanner2AtMotor = true}
    if (sScanner2ToMotor && !z09FLS21) {sScanner2AtFilter = false}
    sScanner2TimerF.PT = fScannerDelayMS
    if (sScanner2TimerF.TON(sScanner2ToFilter && !z09FLS21)) {sScanner2AtFilter = true}
    if (sScanner2ToFilter && !z09FLS21) {sScanner2AtMotor = false}
    //Stbd Scanner 3
    sScanner3Timer.PT = fScannerDelayMS
    if (sScanner3Timer.TON(sScanner3ToMotor && !z10FLS31)) {sScanner3AtMotor = true}
    if (sScanner3ToMotor && !z10FLS31) {sScanner3AtFilter = false}
    sScanner3TimerF.PT = fScannerDelayMS
    if (sScanner3TimerF.TON(sScanner3ToFilter && !z10FLS31)) {sScanner3AtFilter = true}
    if (sScanner3ToFilter && !z10FLS31) {sScanner3AtMotor = false}
    //Stbd Scanner 2
    sScanner4Timer.PT = fScannerDelayMS
    if (sScanner4Timer.TON(sScanner4ToMotor && !z11FLS41)) {sScanner4AtMotor = true}
    if (sScanner4ToMotor && !z11FLS41) {sScanner4AtFilter = false}
    sScanner4TimerF.PT = fScannerDelayMS
    if (sScanner4TimerF.TON(sScanner4ToFilter && !z11FLS41)) {sScanner4AtFilter = true}
    if (sScanner4ToFilter && !z11FLS41) {sScanner4AtMotor = false}
    //Stbd Flush Valve 1
    sValveFlush1ClosedLS = (sValveFlush1Timer.TON(!sValveFlush1))
    sValveFlush1OpenLS = (sValveFlush1TimerO.TON(sValveFlush1 && !z06BVS11))
    //Stbd Flush Valve 2
    sValveFlush2ClosedLS = (sValveFlush2Timer.TON(!sValveFlush2))
    sValveFlush2OpenLS = (sValveFlush2TimerO.TON(sValveFlush2 && !z07BVS21))
    //Network 19
    //Port Scanner 1
    pScanner1Timer.PT = fScannerDelayMS
    if (pScanner1Timer.TON(pScanner1ToMotor && !z21FLP12)) {pScanner1AtMotor = true}
    if (pScanner1ToMotor && !z21FLP12) {pScanner1AtFilter = false}
    pScanner1TimerF.PT = fScannerDelayMS
    if (pScanner1TimerF.TON(pScanner1ToFilter && !z21FLP12)) {pScanner1AtFilter = true}
    if (pScanner1ToFilter && !z21FLP12) {pScanner1AtMotor = false}
    //Port Scanner 2
    pScanner2Timer.PT = fScannerDelayMS
    if (pScanner2Timer.TON(pScanner2ToMotor && !z22FLP22)) {pScanner2AtMotor = true}
    if (pScanner2ToMotor && !z22FLP22) {pScanner2AtFilter = false}
    pScanner2TimerF.PT = fScannerDelayMS
    if (pScanner2TimerF.TON(pScanner2ToFilter && !z22FLP22)) {pScanner2AtFilter = true}
    if (pScanner2ToFilter && !z22FLP22) {pScanner2AtMotor = false}
    //Port Scanner 3
    pScanner3Timer.PT = fScannerDelayMS
    if (pScanner3Timer.TON(pScanner3ToMotor && !z23FLP32)) {pScanner3AtMotor = true}
    if (pScanner3ToMotor && !z23FLP32) {pScanner3AtFilter = false}
    pScanner3TimerF.PT = fScannerDelayMS
    if (pScanner3TimerF.TON(pScanner3ToFilter && !z23FLP32)) {pScanner3AtFilter = true}
    if (pScanner3ToFilter && !z23FLP32) {pScanner3AtMotor = false}
    //Port Scanner 2
    pScanner4Timer.PT = fScannerDelayMS
    if (pScanner4Timer.TON(pScanner4ToMotor && !z24FLP42)) {pScanner4AtMotor = true}
    if (pScanner4ToMotor && !z24FLP42) {pScanner4AtFilter = false}
    pScanner4TimerF.PT = fScannerDelayMS
    if (pScanner4TimerF.TON(pScanner4ToFilter && !z24FLP42)) {pScanner4AtFilter = true}
    if (pScanner4ToFilter && !z24FLP42) {pScanner4AtMotor = false}
    //Port Flush Valve 1
    pValveFlush1ClosedLS = (pValveFlush1Timer.TON(!pValveFlush1))
    pValveFlush1OpenLS = (pValveFlush1TimerO.TON(pValveFlush1 && !z19BVP12))
    //Port Flush Valve 2
    pValveFlush2ClosedLS = (pValveFlush2Timer.TON(!pValveFlush2))
    pValveFlush2OpenLS = (pValveFlush2TimerO.TON(pValveFlush2 && !z20BVP22))
    //Network 20
    fValvesOverboardClosedLS = sValveOverboardClosedLS && pValveOverboardClosedLS
    //Network 21
    tPumpSuction1OverloadOK = !(z05SPA09 && tPumpSuction1)
    sPumpSuction1OverloadOK = !(z14SPS01 && sPumpSuction1)
    tPumpSuction1OverloadOK = !(z27SPP02 && pPumpSuction1)
}
const plc3_10FilterCalculations = () => {
    //Network 1
    if (fTreatmentBal && !mFilterOnlyMode) {
        if (!cfClO2Shared) {
            p3FITS03Target = p1FIT100Final * sFlowPerc
        } else {
            p3FITS03Target = 0
        }
    } else {
        p3FITS03Target = 0
    }
    //Network 2
    if (fTreatmentBal && !mFilterOnlyMode) {
        if (!cfClO2Shared) {
            p3FITP04Target = p1FIT100Final * pFlowPerc
        } else {
            p3FITP04Target = p1FIT100Final
        }
    } else {
        p3FITP04Target = 0
    }
    //Network 3
    if (fTreatmentAftpBal && !mTFilterOnlyMode) {
        p3FITA10Target = p1FIT100Final
    } else {
        p3FITA10Target = 0
    }
}
const plc3_F05DigitalLogic = () => {
    let b1 = true
    let b2 = true
    let b3 = true
    let b4 = true
    //Network 1 -- use mGreenLight
    //Network 2 -- Not mRedLight
    //Network 3
    fPowerOn = fControlPowerOn && (fTControlPowerOn || cfPLC5)
    //Network 4
    sTreatFlow = ((ctFilter && fTreatmentAftpMot) || !ctFilter) && sFilterOn
    //Network 5
    pTreatFlow = ((ctFilter && fTreatmentAftpMot) || !ctFilter) && pFilterOn
    //Network 6
    tTreatFlow = fTreatmentAftpBal
    //Network 7
    fTreatmentOff = !fTreatmentBal && !fTreatmentDebal
    //Network 8
    fTreatmentAftpOff = !fTreatmentAftpDebal && !fTreatmentAftpBal && !fTreatmentAftpMot
    //Network 9
    b1 = fPowerOn && mGeneratorEnable
    b2 = (csValveMotive && sValveMotiveOpenLS) ||
        (cpValveMotive && pValveMotiveOpenLS) ||
        (ctValveMotive && tValveMotiveOpenLS)
    b3 = !fEStopPressed && fPumpMotiveOverloadOK && fClO2ValveOpen
    fPumpMotive = b1 && b2 && b3
    //Network 10
    fPumpMotiveSupply = fPowerOn && fTreatmentAftpMot && (fPumpMotiveSupplyStart || fPumpMotiveSupply) &&
                        !fPumpMotiveSupplyStop && !at401Alarm && fPumpMotiveSupplyOverloadOK
    //Network 11 -- Not Used
    //Network 12 -- use mGeneratorEnable
    //Network 13 -- use mAlarmBuzzer
    //Network 14 -- use mSilencePressed
    //Network 15
    fWarning = as302Warning || ap202Warning || at402Warning || motGenWarning
    //Network 16
    fAlarm = as301Alarm || ap201Alarm || at401Alarm || motGenAlarm
    //Network 17
    fFlushing = sPumpSuction1 || pPumpSuction1
    //Network 18
    fPumpMotiveSupplyShow = ctPumpMotiveSupply && fTreatmentAftpMot
    //Network 19
    fPumpAftpRunning = tPumpBallast || fPumpMotiveSupply
    //Network 20
    csValveFlush1 = csFilter
    csScanner1 = csFilter
    cpValveFlush1 = cpFilter
    cpScanner1 = cpFilter
    ctValveFlush1 = ctFilter
    ctScanner1 = ctFilter
    //Network 21
    cf2Filters = csFilter && cpFilter
    csSFilterOnly = csFilter && !cpFilter
    b1 = cf2Filters && csPump && cpPump
    b2 = csSFilterOnly && (csPump && !cpPump) || (!csPump && cpPump)
    csSFilter1Pump = b1 || b2
    csSFilter2Pump = csSFilterOnly && csPump && cpPump
    cpPFilterOnly = !csFilter && cpFilter
    b1 = cf2Filters && csPump && cpPump
    b2 = cpPFilterOnly && (csPump && !cpPump) || (!csPump && cpPump)
    cpPFilter1Pump = b1 || b2
    cpPFitler2Pump = cpPFilterOnly && csPump && cpPump
    //Network 22
    if (!csFilter) {
        csValveFlush1 = false
        csValveFlush2 = false
        csValveMotive = false
        csScanner1 = false 
        csScanner2 = false
        csScanner3 = false
        csScanner4 = false
        csValveBypass2 = false
        csValveOverboard = false
    }
    //Network 23
    if (!cpFilter) {
        cpValveFlush1 = false
        cpValveFlush2 = false
        cpValveMotive = false
        cpScanner1 = false 
        cpScanner2 = false
        cpScanner3 = false
        cpScanner4 = false
        cpValveBypass2 = false
        cpValveOverboard = false
    }
    //Network 24
    if (!ctFilter) {
        ctValveFlush1 = false
        ctValveFlush2 = false
        ctValveMotive = false
        ctScanner1 = false 
        ctScanner2 = false
        ctScanner3 = false
        ctScanner4 = false
        ctValveBypass2 = false
        ctValveOverboard = false
        fTreatmentAftpDebal = false
        fTreatmentAftpBal = false
        fTreatmentAftpMot = false 
    }
    //Network 25 -- Not Used
}
const plc3_F06AnalogCalculations = () => {
    //Network 1
    fFlowFilter = sFlowFilterM3HR + pFlowFilterM3HR
    //Network 2
    if (fFlowFilter > 0) {sFlowPerc = sFlowFilterM3HR / fFlowFilter}
    if (fFlowFilter <= 0) {sFlowPerc = 0}
    //Network 3
    if (fFlowFilter > 0) {pFlowPerc = pFlowFilterM3HR / fFlowFilter}
    if (fFlowFilter <= 0) {pFlowPerc = 0}
    //Network 4
    if (cfFlushShared && sPumpSuction1 && !pPumpSuction1) {
        fFlowFlush = sFlowInlet / 10
        sFlowFlush = fFlowFlush
    }
    //Network 5
    if (cfFlushShared && sPumpSuction1 && pPumpSuction1) {
        fFlowFlush = sFlowInlet / 10 + pFlowInlet / 10
        sFlowFlush = fFlowFlush / 2
    }
    //Network 6
    if (cfFlushShared && !sPumpSuction1) {sFlowFlush = 0}
    //Network 7
    if (cfFlowBefore) {sFlowFilterM3HR = sFlowInlet - sFlowFlush}
    //Network 8
    if (cfClO2Shared) {sFlowClO2M3HR = 0}
    //Network 9
    if (cfFlushShared && pPumpSuction1 && !sPumpSuction1) {
        fFlowFlush = pFlowInlet / 10
        pFlowFlush = fFlowFlush
    }
    //Network 10
    if (cfFlushShared && sPumpSuction1 && pPumpSuction1) {
        fFlowFlush = sFlowInlet / 10 + pFlowInlet / 10
        pFlowFlush = fFlowFlush / 2
    }
    //Network 11
    if (cfFlushShared && !pPumpSuction1) {pFlowFlush = 0}
    //Network 12
    if (cfFlowBefore) {pFlowFilterM3HR = pFlowInlet - pFlowFlush}
    //Network 13 -- Not Used
    //Network 14
    fClO2ValveOpen = (pValveClO2PositionPerc + sValveClO2PositionPerc + tValveClO2PositionPerc ) >= 90

}
const plc3_OB35_2SecInterupt = () => {
    //Network 1 -- Not Used
    //Network 2
    p12ValveInlet()
    p13ValveOutlet()
    p11ValveClO2()
    //Network 3 update port PID loops
    p99FCVP02.setpoint = pValveClO2SPFilter
    p99FCVP02.input = pValveClO2InputFilter
    p99FCVP02.compute()
    pValveClO2PositionPerc = p99FCVP02.output

    p97PCVP02.setpoint = pValveInletSPFilter
    p97PCVP02.input = pValveInletInputFilter
    p97PCVP02.compute()
    pValveInletPositionPerc = p97PCVP02.output

    p98PCVP04.setpoint = pValveOutletSPFilter
    p98PCVP04.input = pValveOutletInputFilter
    p98PCVP04.compute()
    pValveOutletPositionPerc = p98PCVP04.output
    //Network 4
    s12ValveInlet()
    s13ValveOutlet()
    s11ValveClO2()
    //Network 5 update stbd PID loops
    s97PCVS01.setpoint = sValveInletSPFilter
    s97PCVS01.input = sValveInletInputFilter
    s97PCVS01.compute()
    sValveInletPositionPerc = s97PCVS01.output

    s98PCVS03.setpoint = sValveOutletSPFilter
    s98PCVS03.input = sValveOutletInputFilter
    s98PCVS03.compute()
    sValveOutletPositionPerc = s98PCVS03.output
    //Network 6
    t12ValveInlet()
    t13ValveOutlet()
    t11ValveClO2()
    //Network 7 update aftp PID loops
    t97PCVA09.setpoint = tValveInletSPFilter
    t97PCVA09.input = tValveInletInputFilter
    t97PCVA09.compute()
    tValveInletPositionPerc = t97PCVA09.output

    t98PCVA10.setpoint = tValveOutletSPFilter
    t98PCVA10.input = tValveOutletInputFilter
    t98PCVA10.compute()
    tValveOutletPositionPerc = t98PCVA10.output
}
