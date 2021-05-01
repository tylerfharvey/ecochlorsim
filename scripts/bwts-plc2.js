//plc2 simulation
const bwts_PLC2 = () => {
    //plc2_01DigitalMapping -- Not Used
    //plc2_02AnalogScaling -- Not Used
    //plc2_03AnalogMapping -- Not Used
    //plc2_05IntComms -- Not Used
    plc202_MotiveSimulation()
    plc2_11Alarms()
    plc2_12AnalogLogic()
    plc2_13DigitalLogic()
    plc2_14GeneratorControl()
    //plc2_15ToFilterFill -- Not Used
    //plc2_21BoosterPumpRunhours -- Not Used
    //plc2_22CalcAcidTankLevel -- Not Used
    //plc2_23CalcPurateTankLevel -- Not Used
    //plc2_24ChemPumpCalibration -- Not Used
    //plc2_31HMIDeballastData -- Not Used
    //plc2_32HMIErrorCheck -- Not Used
    //plc2_33HMITechAccess -- Not Used

}
const plc202_MotiveSimulation = () => {
    //Network 1
    mValveAcidOpenLS = mBV200OpenDelay.TON(mValveAcid && !z33BV200)
    //Network 2
    mValveAcidClosedLS = mBV200CloseDelay.TON(!mValveAcid && !z33BV200)
    //Network 3
    mValvePurateOpenLS = mBV300OpenDelay.TON(mValvePurate && !z34BV300)
    //Network 4
    mValvePurateClosedLS = mBV300CloseDelay.TON(!mValvePurate && !z34BV300)
    //Network 5
    mVentInterlock = ! mVentInterlockFail
    //Network 6
    GAlarm = (!strtUpAlrmFlow && !strtUpAlrmVac && !flowLvl2 && !vacLvl2 && !pmpAcidAlm && !pmpPurateAlm)
    mGenAlarm = !GAlarm
    //Network 7
    gWarning = (!flowLvl1 && !vacLvl1 && !effLvl1)
    mGenWarning = !gWarning
    //Network 8
    if (mChemFill) {
        aTCDeduct = 0
        bTCDeduct = 0
        mChemFill = false
    }
    //Network 9
    if (!mChemFill) {
        aTCMeasuredVolume = 4.0 - aTCDeduct
        bTCMeasuredVolume = 4.0 - bTCDeduct
    }
}
const plc2_11Alarms = () => {
    //Network 
    mWarningAny = mWarning || am108GeneratorWarning || sWarningRelay || pWarningRelay || tWarningRelay
    //Network 2
    mAlarmAny = mAlarm || am105GeneratorAlarm || sFilterFault || pFilterFault || tFilterFault
    //Network 3
    mWarning = (am111VentWarning || am116LowLowTemp || am101LowTemp || 
                am102HighTemp || am103HighHighTemp || aa130LevelAcidLow || 
                aa131LevelAcidHigh || am118DeballastAboveMADC || am119FlowOverTRC || 
                am120TSpaceGasDetectedWarning || am122AftPumpOnNoTreatment || am124PumpOnNoTreatment || 
                ab146LevelPurateLow || ab147LevelPurateHigh || ab134TankSamplesAboveMADC || 
                am150AcidFlowWarning || am152PurateFlowWarning)
    //Network 4
    mAlarm = (am109CP1EStop || am110CP2EStop || am112VentAlarm || 
              am113MotiveLeak || am114GeneratorNotRunning || am104AnyLevelSwitch || 
              am106LowBallastFlow || am107PLC2PLC3CommLoss || am121TSpaceGasDetectedAlarm || 
              aa125LevelAcidSecondary || aa126LevelAcidGenerator || aa127ValveAcidFailToClose || 
              aa128ValveAcidFailToOpen || aa129LevelAcidLowLow || aa132FlowAcidLowFlow ||
              am117BallastNoTreatment || ab141LevelPurateSecondary || ab142LevelPurateGenerator ||
              ab143ValvePurateFailToClose || ab144ValvePurateFailToOpen || ab145LevelPurateLowLow ||
              ab148FlowPurateLowFlow || am135PLC2Error || am151AcidFlowAlarm ||
              am153PurateFlowAlarm)
    //Network 5 not used
    //Network 6 
    am101LowTemp = (mTemperatureSV <= mTemperatureLo || am101LowTemp && mTemperatureSV < mTemperatureLo + 1)
    //Network 7
    am102HighTemp = (mTemperatureSV >= mTemperatureHi || am102HighTemp && mTemperatureSV > mTemperatureHi - 2)
    //Network 8
    am103HighHighTemp = (mTemperatureSV >= mTemperatureHiHi || am103HighHighTemp && mTemperatureSV > mTemperatureHiHi -2)
    //Network 9
    am104AnyLevelSwitch = (aa125LevelAcidSecondary || aa126LevelAcidGenerator || ab141LevelPurateSecondary || 
                           ab142LevelPurateGenerator || am120TSpaceGasDetectedWarning || am121TSpaceGasDetectedAlarm)
    //Network 10
    am105GeneratorAlarm = mGenAlarm
    //Network 11
    if (pGetAlarm || sGetAlarm || tGetAlarm) {
        am107PLC2PLC3CommLoss = true
    }
    //Network 12
    am108GeneratorWarning = mGenWarning
    //Network 13
    am109CP1EStop = !mMCREnabled
    //Network 14
    am110CP2EStop = !pControlPowerOn || !sControlPowerOn || (cmAftp && !tControlPowerOn)
    if (!pControlPowerOn || !sControlPowerOn || (cmAftp && !tControlPowerOn)) {
        mAlarmSilence = true
    }
    //Network 15
    am111VentWarning = !suspendMVent && amT111.TON(!pFilterOnly && !sFilterOnly && !alarmReset && !mVentInterlock)
    //Network 16
    am112VentAlarm = !suspendMVent && amT112.TON(am111VentWarning)
    //Network 17 and 18 - Motive water leak alarm 
    if (fTreatmentAftpMot) {
        mFlowClO2Total = pFlowClO2 + sFlowClO2
    } else if (fTreatmentAftpBal) {
        mFlowClO2Total = tFlowClO2
    }
    mFlowClO2Max = mFlowMotiveSV + mFlowDeviation
    mFlowClO2Min = mFlowMotiveSV - mFlowDeviation
    am113MotiveLeak = amT113.TON(mStartupComplete && mGeneratorEnable && mFlowClO2Total < mFlowClO2Min)
    //Network 19
    am114GeneratorNotRunning = amT114.TON(!mGenRunning && mGeneratorStart)
    //Network 20
    am116LowLowTemp = (mTemperatureSV <= mTemperatureLoLo || am116LowLowTemp && mTemperatureSV < mTemperatureLoLo + 1)
    //Network 21
    const b117a = (mNoTreatmentReason === 1 || mTNoTreatmentReason === 1)
    const b117b = (sPumpBallastRunning || pPumpBallastRunning || tPumpBallast1Running || tPumpBallast2Running)
    if (b117a) {
        am117BallastNoTreatment = true
        if (mTriggerA117.pTrig(b117b)) {
            mSilenceReset = true
        }
    }
    //Network 22
    const b118a = mNoTreatmentReason === 2 || mTNoTreatmentReason === 2 || fTreatmentDebal || fTreatmentDebal || fTreatmentDebal
    const b118b = !mResidualOK
    const b118c = (sPumpBallastRunning || pPumpBallastRunning || tPumpBallast1Running || tPumpBallast2Running)
    if (b118a && b118b && b118c) {
        if (mTriggerA118.pTrig(true)) {
            mSilenceReset = true
        }
        am118DeballastAboveMADC = true
    }
    //Network 23
    const b119a = mFlowBallastTotal >= mFlowTreamentRatedCapacity
    const b119b = csFilterFlowLimit && (sFlowFilterM3HR >= sFlowFilterRatedCapacity)
    const b119c = cpFilterFlowLimit && (pFlowFilterM3HR >= pFlowFilterRatedCapacity)
    const b119d = ctFilterFlowLimit && (tFlowFilterM3HR >= tFlowFilterRatedCapacity)
    if (amT119.TON(b119a || b119b || b119c || b119d)) { am119FlowOverTRC = true}
    //Network 24
    if (amT120.TON(mTGasDetectedWarning)) {am120TSpaceGasDetectedWarning = true}
    //Network 25
    if (amT121A.TON(mTGasDetectedAlarm)) {am121TSpaceGasDetectedAlarm = true}
    if (amT121W.TON(mTGasDetectedWarning)) {am121TSpaceGasDetectedAlarm = true}
    //Network 26
    const b122a = tPumpBallast1Running || tPumpBallast2Running
    const b122b = !fTreatmentAftpBal && !fTreatmentAftpMot && mTNoTreatmentReason === 0
    if (b122a && b122b) {am122AftPumpOnNoTreatment = true}
    //Network 27
    if (mScreenChange3.pTrig(am122AftPumpOnNoTreatment)) {
        hHMI1PreScreen = hHMI1Screen
        hHMI1Screen = 3
    }
    //Network 28
    const b124a = sPumpBallastRunning && !fTreatmentBal
    const b124b = pPumpBallastRunning && !fTreatmentBal
    const b124c = mNoTreatmentReason === 0
    if ((b124a || b124b)  && b124c) {am124PumpOnNoTreatment = true}
    //Network 29
    if (mScreenChange1.pTrig(am124PumpOnNoTreatment)) {
        hHMI1PreScreen = hHMI1Screen
        hHMI1Screen = 3
    }
    //Network 30
    if (mScreenRestore) { 
        hHMI1Screen = hHMI1PreScreen
        mScreenRestore = false
    }
    //Network 31
    if (alarmReset) {
        am113MotiveLeak = false
        am114GeneratorNotRunning = false
        am106LowBallastFlow = false
        am107PLC2PLC3CommLoss = false
        am124PumpOnNoTreatment = false
    }
    //Network 32
    if (aaT125.TON(!mLimitAcidSecondary)) {aa125LevelAcidSecondary = true}
    //Network 33
    if (aaT126.TON(!mLimitAcidGenerator)) {aa126LevelAcidGenerator = true}
    //Network 34
    if (aaT127.TON(!mValveAcid && !mValveAcidClosedLS)) {aa127ValveAcidFailToClose = true}
    //Network 35
    if (aaT128.TON(mValveAcid && !mValveAcidOpenLS)) {aa128ValveAcidFailToOpen = true}
    //Network 36
    if (!suspendAVolume && aaT129.TON(aTCMeasuredVolume <= aLevelAcidLowLow)) {aa129LevelAcidLowLow = true}
    //Network 37
    if (!suspendAVolume && aaT130.TON(aTCMeasuredVolume < aLevelAcidLow)) {aa130LevelAcidLow = true}
    //Network 38
    if (!suspendAVolume && aaT131.TON(aTCMeasuredVolume > aLevelAcidHigh)) {aa131LevelAcidHigh = true}
    //Network 39
    const b132 = mStartupComplete && mGenRunning && p1FIT200Final < aFlowAcidLow
    if (!suspendAFlowAlarm & aaT132.TON(b132)) {aa132FlowAcidLowFlow = true}
    //Network 40
    ab133TechAccessWarning = hHMI1Tech
    //Network 41 not used
    //Network 42 not used
    //Network 43 not used
    //Network 44 not used
    //Network 45
    if (alarmReset) {
        aa125LevelAcidSecondary = false
        aa126LevelAcidGenerator = false
        aa127ValveAcidFailToClose = false
        aa128ValveAcidFailToOpen = false
        aa129LevelAcidLowLow = false
        aa130LevelAcidLow = false
        aa131LevelAcidHigh = false
        aa132FlowAcidLowFlow = false
        am117BallastNoTreatment = false
        am118DeballastAboveMADC = false
        am119FlowOverTRC = false
        am120TSpaceGasDetectedWarning = false
        am121TSpaceGasDetectedAlarm = false
        am122AftPumpOnNoTreatment = false
        am123TFilterOnlyMode = false
        if (!pPumpBallastRunning && !sPumpBallastRunning) {mNoTreatmentReason = 0}
        if (!tPumpBallast1Running && !tPumpBallast2Running) {mTNoTreatmentReason = 0}
    }
    //Network 46
    if (fTreatmentBal || fTreatmentBal) {mNoTreatmentReason = 0}
    //Network 47
    if (abT141.TON(!mLimitPurateSecondary)) {ab141LevelPurateSecondary = true}
    //Network 48
    if (abT142.TON(!mLimitPurateGenerator)) {ab142LevelPurateGenerator = true}
    //Network 49
    if (abT143.TON(!mValvePurate && !mValvePurateClosedLS)) {ab143ValvePurateFailToClose = true}
    //Network 50
    if (abT144.TON(mValvePurate && !mValvePurateOpenLS)) {ab144ValvePurateFailToOpen = true}
    //Network 51
    if (!suspendBVolume && abT145.TON(bTCMeasuredVolume <= bLevelPurateLowLow)) {ab145LevelPurateLowLow = true}
    //Network 52
    if (!suspendBVolume && abT146.TON(bTCMeasuredVolume < bLevelPurateLow)) {ab146LevelPurateLow = true}
    //Network 53
    if (!suspendBVolume && abT147.TON(bTCMeasuredVolume > bLevelPurateHigh)) {ab147LevelPurateHigh = true}
    //Network 54
    const b148 = mStartupComplete && mGenRunning && p1FIT300Final < bFlowPurateLow
    if (!suspendBFlowAlarm && abT148.TON(b148)) {ab148FlowPurateLowFlow = true}
    //Network 55
    const b150 = ((p1FIT200Final > 1.15 * aCalculatedFlowRate) || (p1FIT200Final < 0.85 * aCalculatedFlowRate)) && mStartupComplete && mGenRunning
    if (!suspendAFlowAlarm && aaT150.TON(b150)) {am150AcidFlowWarning = true}
    //Network 56
    const b151 = ((p1FIT200Final > 1.2 * aCalculatedFlowRate) || (p1FIT200Final < 0.8 * aCalculatedFlowRate)) && mStartupComplete && mGenRunning
    if (!suspendAFlowAlarm && aaT151.TON(b151)) {am151AcidFlowAlarm = true}
    //Network 57
    const b152 = ((p1FIT300Final > 1.15 * bCalculatedFlowRate) || (p1FIT300Final < 0.85 * bCalculatedFlowRate)) && mStartupComplete && mGenRunning
    if (!suspendBFlowAlarm && abT152.TON(b152)) {am152PurateFlowWarning = true}
    //Network 58
    const b153 = ((p1FIT300Final > 1.2 * bCalculatedFlowRate) || (p1FIT300Final < 0.8 * bCalculatedFlowRate)) && mStartupComplete && mGenRunning
    if (!suspendBFlowAlarm && abT153.TON(b153)) {am153PurateFlowAlarm = true}
    //Network 59
    if (alarmReset) {
        ab141LevelPurateSecondary = false
        ab142LevelPurateGenerator = false
        ab143ValvePurateFailToClose = false
        ab144ValvePurateFailToOpen = false
        ab145LevelPurateLowLow = false
        ab146LevelPurateLow = false
        ab147LevelPurateHigh = false
        ab148FlowPurateLowFlow = false
        ab134TankSamplesAboveMADC = false
        am135PLC2Error = false
    }
    //Network 60
    mBWTSAlarm = mAlarmAny + !alarmReset
    //Network 61
    if (aResetClearT.TON(alarmReset)) {alarmReset = false}
    //Network 62
    if (alarmReset) {
        am150AcidFlowWarning = false
        am151AcidFlowAlarm = false
        am152PurateFlowWarning = false
        am153PurateFlowAlarm = false
    }
}
const plc2_12AnalogLogic = () => {
    //Network 1
    if (pTreatFlow && !sTreatFlow) {mFlowBallastTotal = pFlowFilterM3HR}
    //Network 2
    if (!pTreatFlow && sTreatFlow) {mFlowBallastTotal = sFlowFilterM3HR}
    //Network 3
    if (pTreatFlow && sTreatFlow) {mFlowBallastTotal = pFlowFilterM3HR + sFlowFilterM3HR}
    //Network 4
    if (!pTreatFlow && !sTreatFlow && !tTreatFlow) {mFlowBallastTotal = 0}
    //Network 5
    if (tTreatFlow) {mFlowBallastTotal = tFlowFilterM3HR}
    //Network 6
    aPumpAcidRunConfirm = (aPumpAcidSpeedFB > 1) || !mStartupComplete || suspendAFlowAlarm
    //Network 7
    bPumpPurateRunConfirm = (bPumpPurateSpeedFB > 1) || !mStartupComplete || suspendBFlowAlarm
    //Network 8
    mTBFCubesPerDay = 24 * (pFlowBallastMax + sFlowBallastMax)
    q2300Max = (pFlowBallastMax + sFlowBallastMax)
    //Network 9
    q2300Min = (pFlowBallastMin + sFlowBallastMin)
}
const plc2_13DigitalLogic = () => {
    //Network 1
    const bnw1a = mGeneratorEnable || !mGeneratorEnable && mFTOneSec
    const bnw1b = (!pFilterOnly && pFilterOn) || (!sFilterOnly && sFilterOn) || (!tFilterOnly && tFilterOn)
    const bnw1c = !mGeneratorEnable && !mFTFourSec
    const bnw1d = (pFilterOnly && pFilterOn) || (sFilterOnly && sFilterOn) || (tFilterOnly && tFilterOn)
    mGreenLight = (bnw1a && bnw1b) || (bnw1c && bnw1d)
    //Network 2
    const bnw2a = mAlarmAny || mWarningAny
    const bnw2b = mAlarmSilence || sAlarmSilence || pAlarmSilence || tAlarmSilence || mSilencePressed
    mSilencePressed = bnw2a && bnw2b && !mSilenceReset
    if (mSilenceReset) {mSilenceReset = false}
    //Network 3
    mRedLight = (mAlarmAny || mWarningAny) && (mFTOneSec || mSilencePressed)
    //Network 4
    mAlarmBuzzer = (mAlarmAny || mWarningAny) && !mSilencePressed
    //Network 5
    mValveFlush = (mValveFlushMx || mValveFlushHMI) && !am113MotiveLeak
    //Network 6
    if (mTriggerLDL.pTrig(mGeneratorStart || mPumpMotiveRunCmd)) {
        aValveAcidSupplyAuto = true
        bValvePurateSupplyAuto = true
    }
    //Network 7
    const bnw7a = aValveAcidSupplyAuto && !am104AnyLevelSwitch && mGeneratorStart
    const bnw7b = !aValveAcidSupplyAuto && aValveAcidSupplyManualOpen
    const bnw7c = aValveAcidMomentaryOpen
    mValveAcid = (bnw7a || bnw7b || bnw7c) && mChemValvesEnable
    //Network 8
    const bnw8a = bValvePurateSupplyAuto && !am104AnyLevelSwitch && mGeneratorStart
    const bnw8b = !bValvePurateSupplyAuto && bValvePurateSupplyManualOpen
    const bnw8c = bValvePurateMomentaryOpen
    mValvePurate = (bnw8a || bnw8b || bnw8c) && mChemValvesEnable
    //Network 9
    if (aValveAcidSupplyAuto) {aValveAcidSupplyManualOpen = false}
    if (bValvePurateSupplyAuto) {bValvePurateSupplyManualOpen = false}
    //Network 10
    const bnw10a = pFilterOn || sFilterOn || tFilterOn
    mBWTSStatus = mGeneratorEnable & bnw10a
    //Network 11
    hEitherPump = sPumpBallastRunning || pPumpBallastRunning
    //Network 12    
    mFlushCycle = bnw10a && mPumpMotiveRunCmd && !mGenRunning
    //Network 13
    tPumpBallast = (tPumpBallast1Running && ctPump1Ballast) || (tPumpBallast2Running && ctPump2Ballast)
    //Network 14
    tPumpMotive = (tPumpBallast1Running && ctPump1Motive) || (tPumpBallast2Running && ctPump2Motive) || tPumpMotiveSupply
    //Network 15
    tMotiveOperational = !tFilterFault && fTreatmentAftpMot && tFilterOn && tPumpMotive
    //Network 16
    const bnw16a = (tMotiveOperational || !cmAftp) && !mAlarm && !am105GeneratorAlarm
    const bnw16b = (bnw16a || pFilterOnly) && !pFilterFault && fTreatmentBal && pFilterAuto
    pPumpBallastEnable = bnw16b || fTreatmentDebal || pPumpEnableBypass
    //Network 17
    const bnw17a = (tMotiveOperational || !cmAftp) && !mAlarm && !am105GeneratorAlarm
    const bnw17b = (bnw17a || sFilterOnly) && !sFilterFault && fTreatmentBal && sFilterAuto
    sPumpBallastEnable = bnw17b || fTreatmentDebal || sPumpEnableBypass
    //Network 18
    const bnw18a = (!mAlarm && !am105GeneratorAlarm) || mPumpMotiveRunCmd || tFilterOnly
    const bnw18b = bnw18a && !tFilterFault && fTreatmentAftpBal && tFilterAuto
    tPumpBallastEnable = bnw18b || fTreatmentAftpDebal || tPumpEnableBypass
    //Network 19 not used
    //Network 20 not used
    //Network 21 not used
    //Network 22
    mFTOneSec = mFlashOneSecA.TON(!mFlashOneSecB.Q)
    mFlashOneSecB.TON(mFlashOneSecA.Q)
    //Network 23
    mFTFourSec = mFlashFourSecA.TON(!mFlashFourSecB.Q)
    mFlashFourSecB.TON(mFlashFourSecA.Q)
    //Network 24
    if (mScreenChange2.pTrig(fTreatmentDebal || fTreatmentDebal || fTreatmentAftpDebal)) {
        hHMI1PreScreen = hHMI1Screen
        hHMI1Screen = 2
    }
    //Network 25
    mValvesBypassClosed = !sBypassValveOpen && !pBypassValveOpen && !tBypassValveOpen
}
const plc2_14GeneratorControl = () => {
    //Network 1
    const bnw1a = pPumpBallastRunning && !pFilterOnly && pFilterOn && ((tFilterOn && fTreatmentAftpMot) || !cmAftp)
    const bnw1b = sPumpBallastRunning && !sFilterOnly && sFilterOn && ((tFilterOn && fTreatmentAftpMot) || !cmAftp)
    const bnw1c = tPumpBallast && !tFilterOnly && tFilterOn && fTreatmentAftpBal && cmAftp
    mGenStatusOK = bnw1a || bnw1b || bnw1c
    //Network 2
    if (mGenStatusOK && mFlowBallastTotal >= mStartFlow) {
        mGeneratorStart = true
        am106LowBallastFlow = false
    }
    //Network 3
    mStartupComplete = mGenStartup.TON(!alarmReset && mGeneratorStart)
    //Network 4
    const bnw4a = am106LowBallastFlow || mAlarm || am105GeneratorAlarm
    const bnw4b = (fTreatmentBal || fTreatmentBal) && ((!pFilterOn && sFilterFault) || (!sFilterOn && pFilterFault))
    const bnw4c = (fTreatmentAftpBal && tFilterFault) || !mGenStatusOK
    if (bnw4a || bnw4b || bnw4c) {mGeneratorStart = false}
    //Network 5
    mValveMotiveOpen = mGenRunning
    mPumpMotiveStart = mGenRunning && mValveMotiveOpen
    //Network 6
    mPumpMotiveStop = !mGenRunning
    mValveMotiveClose = !mGenRunning && mPumpMotiveStop
    //Network 
    if (mGenStatusOK && mFlowBallastTotal <= mStopFlow && mStartupComplete) {
        am106LowBallastFlow = true
    }
    //Network 8
    if (mStartupFlow.TON(mGenStatusOK && mFlowBallastTotal <= mStopFlow && !mStartupComplete)) {am106LowBallastFlow = true}
    //Network 9
    const bnw9a = mFilterOnlyMode && !sPumpBallastRunning && !pPumpBallastRunning
    const bnw9b = mFilterOnly && (sPumpBallastRunning || pPumpBallastRunning)
    mFilterOnly = bnw9a || bnw9b
    //Network 10
    mFilterOnlyMode = mFilterOnly
    //Network 11
    if (mFOMReset.TON(mFilterOnly && !sPumpBallastRunning && !pPumpBallastRunning)) {
        mFilterOnlyMode = false
        mFilterOnly = false
    }
    //Network 12
    pFilterOnly = mFilterOnly
    sFilterOnly = mFilterOnly
    am115FilterOnlyMode = mFilterOnly
    //Network 13
    const bnw13a = mTFilterOnlyMode && !tPumpBallast1Running && !tPumpBallast2Running
    const bnw13b = mTFilterOnly && (tPumpBallast1Running || tPumpBallast2Running)
    mTFilterOnly = bnw13a || bnw13b
    //Network 14
    mTFilterOnlyMode = mTFilterOnly & fTreatmentAftpBal
    //Network 15
    if (mTFOMReset.TON(mTFilterOnly && !tPumpBallast1Running && !tPumpBallast2Running)) {
        mTFilterOnlyMode = false
        mTFilterOnly = false
    }
    //Network 16
    tFilterOnly = mTFilterOnly
    am123TFilterOnlyMode = mTFilterOnly
    //Network 17
    mGeneratorEnable = mGeneratorStart
    //Network 18
    mPumpMotive = (mGeneratorStart || mGenRunning || mPumpMotiveRunCmd)
    //Network 19
    mValveMotive = (mValveMotiveOpen || mValveMotive) && !mValveMotiveClose
    //Network 20
    mEStopOK = mMCREnabled
    
}
const plc2_22CalcAcidTankLevel = () => {
    //Network 1
    aTCA = aTCD / 4
    //Network 2
    aTCDishVolume = aTCD * aTCD * aTCD * 1.308997e-10
    //Network 3
    aTCCylinderVolume = aTCD * aTCD * aTCL * 7.853982e-10
    //Network 4
    const aPl = aTCA + aTCL
    //Network 5
    const aPlPa = aTCA + aTCL + aTCA
    //Network 6, 7, 8, 9, 10, 11
    if (!aTCTopInstr) {
        aTCSR = aLevelAcidSV
        aTCH = aTCSR / aTCSG
        aTCHATB = aTCH - aTCHTTB
    } else {
        aTCSR = i2200Max - aLevelAcidSV
        aTCH - aTCSR
        aTCHATB = aTCHTTB - aTCH
    }
    //Network 12
    aTCHABD = aTCHATB - aTCA
    //Network 13
    aTCHTTC = aPlPa - aTCHATB
    //Network 14
    const aTCAboveTankBottom = aTCHATB > 0
    //Network 15
    const aTCAboveDish1 = aTCHATB > aTCA
    //Network 16
    const aTCAboveCylinder = aTCHATB > aPl
    //Network 17
    const aTCAboveDish2 = aTCHATB > aPlPa
    //Network 18
    if (!aTCAboveTankBottom) {
        aTCD1MeasuredVolume = 0
    } else {
        if (aTCAboveDish1) {
            aTCD1MeasuredVolume = aTCDishVolume
        } else {
            aTCD1MeasuredVolume =((-4.18879e-9 * aTCHATB) + (3.141593e-9 * aTCD)) * aTCHATB * aTCHATB
        }
    }
    //Network 19
    if (!aTCAboveDish1) {
        aTCCyMeasuredVolume = 0
    } else {
        if (aTCAboveCylinder) {
            aTCCyMeasuredVolume = aTCCylinderVolume
        } else {
            aTCCyMeasuredVolume = aTCD * aTCD * aTCHABD * 7.853982e-10
        }
    }
    //Network 20
    if (!aTCAboveCylinder) {
        aTCD2MeasuredVolume = 0
    } else {
        if (aTCAboveDish2) {
            aTCD2MeasuredVolume = aTCDishVolume
        } else {
            aTCD2MeasuredVolume = aTCDishVolume - (((-4.18879e-9 * aTCHTTC) + (3.141593e-9 * aTCD)) * aTCHTTC * aTCHTTC)
        }
    }
    //Network 21
    //aTCMeasuredVolume = aTCD1MeasuredVolume + aTCCyMeasuredVolume + aTCD2MeasuredVolume
    //Network 22
    aTCMaxVolume = aTCDishVolume + aTCCylinderVolume + aTCDishVolume
}
const plc2_23CalcPurateTankLevel = () => {
    //Network 1
    bTCA = bTCD / 4
    //Network 2
    bTCDishVolume = bTCD * bTCD * bTCD * 1.308997e-10
    //Network 3
    bTCCylinderVolume = bTCD * bTCD * bTCL * 7.853982e-10
    //Network 4
    const aPl = bTCA + bTCL
    //Network 5
    const aPlPa = bTCA + bTCL + bTCA
    //Network 6, 7, 8, 9, 10, 11
    if (!bTCTopInstr) {
        bTCSR = bLevelAcidSV
        bTCH = bTCSR / bTCSG
        bTCHATB = bTCH - bTCHTTB
    } else {
        bTCSR = i2200Max - bLevelAcidSV
        bTCH - bTCSR
        bTCHATB = bTCHTTB - bTCH
    }
    //Network 12
    bTCHABD = bTCHATB - bTCA
    //Network 13
    bTCHTTC = aPlPa - bTCHATB
    //Network 14
    const bTCAboveTankBottom = bTCHATB > 0
    //Network 15
    const bTCAboveDish1 = bTCHATB > bTCA
    //Network 16
    const bTCAboveCylinder = bTCHATB > aPl
    //Network 17
    const bTCAboveDish2 = bTCHATB > aPlPa
    //Network 18
    if (!bTCAboveTankBottom) {
        bTCD1MeasuredVolume = 0
    } else {
        if (bTCAboveDish1) {
            bTCD1MeasuredVolume = bTCDishVolume
        } else {
            bTCD1MeasuredVolume =((-4.18879e-9 * bTCHATB) + (3.141593e-9 * bTCD)) * bTCHATB * bTCHATB
        }
    }
    //Network 19
    if (!bTCAboveDish1) {
        bTCCyMeasuredVolume = 0
    } else {
        if (bTCAboveCylinder) {
            bTCCyMeasuredVolume = bTCCylinderVolume
        } else {
            bTCCyMeasuredVolume = bTCD * bTCD * bTCHABD * 7.853982e-10
        }
    }
    //Network 20
    if (!bTCAboveCylinder) {
        bTCD2MeasuredVolume = 0
    } else {
        if (bTCAboveDish2) {
            bTCD2MeasuredVolume = bTCDishVolume
        } else {
            bTCD2MeasuredVolume = bTCDishVolume - (((-4.18879e-9 * bTCHTTC) + (3.141593e-9 * bTCD)) * bTCHTTC * bTCHTTC)
        }
    }
    //Network 21
    //bTCMeasuredVolume = bTCD1MeasuredVolume + bTCCyMeasuredVolume + bTCD2MeasuredVolume
    //Network 22
    bTCMaxVolume = bTCDishVolume + bTCCylinderVolume + bTCDishVolume
}
