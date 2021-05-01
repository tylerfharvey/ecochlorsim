const alarmText = {
  1: 'Acid Pump Fault',
  2: 'PLC Hardware Fault Detected',
  3: 'Machine Remote/Timer Mode Suspended - Press Reset or Pull out Button',
  4: 'Vacuum Signal Error',
  5: 'Unit Start-Up Alarm - Check Flow Conditions',
  6: 'Unit Start-Up Alarm - Check Vacuum Conditions',
  7: 'External Permissive Alarm - Check External Switches',
  8: 'Manual Stop Activated - Check Button',
  9: 'Motive Water Low Flow Warning',
  10: 'Motive Water Low Flow Alarm',
  11: 'Vacuum Low Warning',
  12: 'Vacuum Low Alarm',
  13: 'Efficiency Low Warning',
  14: 'Efficiency Low Avg Warning',
  15: 'Machine is in Remote Start/Stop: Waiting on Signal',
  16: 'De-Comp Alarm',
  17: 'Diluted Acid Temperature High High Alarm',
  18: 'Pressure Before Eductor High Alarm',
  19: 'Pressure Before Eductor High High Alarm',
  20: 'Pressure Before Eductor Low Alarm',
  21: 'Pressure Before Eductor Low Low Alarm',
  22: 'Pressure After Eductor High Warning',
  23: 'Pressure After Eductor High Alarm',
  24: 'Pressure After Eductor Low Warning',
  25: 'Purate™ Pump Fault',
  26: 'Dilution Pump Fault',
  27: 'Unexpected Loss of ClO2',
  28: 'Acid Cooler Water Low Flow',
  29: 'Remote Start/Stop Signal Lost - Waiting on Signal',
  30: 'Remote Start Signal Re-established',
  31: 'Pressure After Eductor Low Low Alarm',
  32: 'Dilute Acid Temperature High Alarm',
  33: 'ORP mA Signal Error',
  34: 'Purate™ Tank Level Low',
  35: 'Purate™ Tank Level Low Low',
  36: 'Purate™ Tank Level High',
  37: 'Sulfuric Acid Tank Level Low',
  38: 'Sulfuric Acid Tank Level Low Low',
  39: 'Sulfuric Acid Tank Level High',
  40: 'Drive Fault - Motive Water Booster Pump',
  41: 'Low mA Signal - Diluted Acid Temperature Transmitter',
  42: 'High Pressure After Heat Exchanger',
  43: 'Unknown Alarm',
  44: 'Motive Water Flow Meter mA Signal Error',
  45: 'Remote Setrate/Flow Pacing mA Signal Error',
  46: 'ClO2 Analyzer mA Signal Error',
  47: 'Pressure Before Eductor (PT02) mA Signal Error',
  48: 'Pressure After Eductor (PT03) mA Signal Error',
  49: 'Spare Alarm',
  50: 'Spare Alarm',
  51: 'Spare Alarm',
  52: 'Spare Alarm',
  53: 'Spare Alarm',
  54: 'Spare Alarm',
  55: 'Spare Alarm',
  56: 'Spare Alarm',
  57: '"Drive Warning - Motive Water Booster Pump<field ref=""0"" />"',
  58: 'PID Controller Error - Motive Water Booster Pump',
  59: '"Drive Fault - ClO2 Booster Pump<field ref=""0"" />"',
  60: '"Drive Warning - ClO2 Booster Pump<field ref=""0"" />"',
  61: 'PID Controller Error - ClO2 Booster Pump',
  62: 'Spare Alarm',
  63: 'Spare Alarm',
  64: 'Spare Alarm',
  101: 'BWTS Space Temperature Low Warning',
  102: 'BWTS Space Temperature High Warning',
  103: 'BWTS Space Temperature High High Warning',
  104: 'Any Level Sensor Detected',
  105: 'Generator Alarm',
  106: 'Ballast Water Flow Low Alarm',
  107: 'PLC2-PLC3 Communication Alarm',
  108: 'Generator Warning',
  109: 'CP-1 Emergency Stop Engaged',
  110: 'CP-2/3 Emergency Stop Engaged',
  111: 'Ventilation Interlock Warning',
  112: 'Ventilation Interlock Alarm',
  113: 'Motive Water Flow Leak Alarm',
  114: 'Generator Not Started Alarm',
  115: 'Main Filter Only Mode - Ballasting Without Treatment',
  116: 'BWTS Space Temperature Low Low Warning',
  117: 'Ballasting Without Treatment',
  118: 'Deballasting Above MADC',
  119: 'Ballast Above Treatment Rated Capacity',
  120: 'Treatment Space Gas Detection Warning',
  121: 'Treatment Space Gas Detection Alarm',
  122: 'Aft Peak Ballast Without Treatment',
  123: 'Aft Peak Filter Only Mode - Ballasting Without Treatment',
  124: 'Ballast Pump Running Without Treatment - Select Operation on HMI',
  125: 'LS-200 Acid Secondary Containment Liquid Leak',
  126: 'LS-201 Acid Pump Drip Pan Liquid Leak',
  127: 'BV-200 Acid Supply Valve Fail to Close',
  128: 'BV-200 Acid Supply Valve Fail to Open',
  129: 'LIT-200 Acid Tank Level Low Alarm',
  130: 'LIT-200 Acid Tank Level Low Warning',
  131: 'LIT-200 Acid Tank Level High Warning',
  132: 'FIT-200 Acid Flow Rate Low Alarm',
  133: 'Tech Access Mode Active',
  134: 'Tank Sample(s) Above MADC',
  135: 'PLC 2 Hardware Fault Detected',
  136: 'Spare Alarm',
  137: 'HMI1 Communications Lost',
  138: 'HMI2 Communications Lost',
  139: 'HMI3 Communications Lost',
  140: 'HMI4 Communications Lost',
  141: 'LS-300 Purate™ Secondary Containment Liquid Leak',
  142: 'LS-301 Purate™ Pump Drip Pan Liquid Leak',
  143: 'BV-300 Purate™ Supply Valve Fail to Close',
  144: 'BV-300 Purate™ Supply Valve Fail to Open',
  145: 'LIT-300 Purate™ Tank Level Low Alarm',
  146: 'LIT-300 Purate™ Tank Level Low Warning',
  147: 'LIT-300 Purate™ Tank Level High Warning',
  148: 'FIT-300 Purate™ Flow Rate Low Alarm',
  149: 'Spare Alarm',
  150: 'Acid Flow Deviation Warning',
  151: 'Acid Flow Deviation Alarm',
  152: 'Purate™ Flow Deviation Warning',
  153: 'Purate™ Flow Deviation Alarm',
  154: 'Spare Alarm',
  155: 'Spare Alarm',
  156: 'Spare Alarm',
  157: 'Spare Alarm',
  158: 'Spare Alarm',
  159: 'Spare Alarm',
  160: 'Spare Alarm',
  161: 'Spare Alarm',
  162: 'Spare Alarm',
  163: 'Spare Alarm',
  164: 'Spare Alarm',
  201: 'Alarm Shutdown',
  202: 'Alarm Reset',
  203: 'PIT-P04 Port Filter Outlet Pressure Low Warning',
  204: 'Port Filter Negative Differential Pressure Alarm',
  205: 'Port Filter Continuous Clean Mode Warning',
  206: 'Port Filter Gravity Ballast Low Flow Alarm',
  207: 'Port Filter Bypass Valve Open',
  208: 'Generator Alarm',
  209: 'Port Filter Cleaning Cycle Warning',
  210: 'Port Filter Cleaning Cycle Alarm',
  211: 'Port Filter Differential Pressure High - Begin Cleaning',
  212: 'Port Filter Differential Pressure High Alarm',
  213: 'PIT-P02 Port Filter Inlet Pressure High Alarm',
  214: 'PIT-P04 Port Filter Outlet Pressure Low Alarm',
  215: 'PIT-P02 Filter Inlet Pressure High Warning',
  216: 'FIT-P02 Port Filter Flow Low Warning',
  217: 'FIL-P22 Port Scanner 2 Overload Warning',
  218: 'FIL-P22 Port Scanner 2 To Motor Drive Warning',
  219: 'FIL-P22 Port Scanner 2 To Filter Drive Warning',
  220: 'BV-P22 Port Filter Cleaning Valve 2 Fail to Open Warning',
  221: 'BV-P22 Port Filter Cleaning Valve 2 Fail to Close Warning',
  222: 'All Port Filter Scanner Motors Disabled Alarm',
  223: 'Spare Alarm',
  224: 'Spare Alarm',
  225: 'FIL-P12 Port Scanner 1 Overload Warning',
  226: 'FIL-P12 Port Scanner 1 To Motor Drive Warning',
  227: 'FIL-P12 Port Scanner 1 To Filter Drive Warning',
  228: 'BV-P12 Port Filter Cleaning Valve 1 Fail to Close Warning',
  229: 'BV-P12 Port Filter Cleaning Valve 1 Fail to Open Warning',
  230: 'BV-P16 Port Motive Water Isolation Fail to Close Alarm',
  231: 'BV-P16 Port Motive Water Isolation Fail to Open Alarm',
  232: 'SP-P02 Port Suction Pump Overload Alarm',
  233: 'FIL-P42 Port Scanner 4 Overload Warning',
  234: 'FIL-P42 Port Scanner 4 To Motor Drive Warning',
  235: 'FIL-P42 Port Scanner 4 To Filter Drive Warning',
  236: 'Spare Alarm',
  237: 'Spare Alarm',
  238: 'Spare Alarm',
  239: 'PLC 5 Hardware Fault Detected',
  240: 'PLC 3 Hardware Fault Detected',
  241: 'FIL-P32 Port Scanner 3 Overload Warning',
  242: 'FIL-P32 Port Scanner 3 To Motor Drive Warning',
  243: 'FIL-P32 Port Scanner 3 To Filter Drive Warning',
  244: 'PLC3-PLC2 Communication Alarm',
  245: 'P-100 Motive Water Pump Overload',
  246: 'Spare Alarm',
  247: 'Spare Alarm',
  248: 'Spare Alarm',
  301: 'Alarm Shutdown',
  302: 'Alarm Reset',
  303: 'PIT-S03 Stbd Filter Outlet Pressure Low Warning',
  304: 'Stbd Filter Negative Differential Pressure',
  305: 'Stbd Filter Continuous Clean Mode Warning',
  306: 'Stbd Filter Gravity Ballast Low Flow Alarm',
  307: 'Stbd Filter Bypass Valve Open Alarm',
  308: 'Generator Alarm',
  309: 'Stbd Filter Cleaning Cycle Warning',
  310: 'Stbd Filter Cleaning Cycle Alarm',
  311: 'Stbd Filter Differential Pressure High - Begin Cleaning',
  312: 'Stbd Filter Differential Pressure High Alarm',
  313: 'PIT-S01 Stbd Filter Inlet Pressure High Alarm',
  314: 'PIT-S03 Stbd Filter Outlet Pressure Low Alarm',
  315: 'PIT-S01 Filter Inlet Pressure High Warning',
  316: 'FIT-S01 Filter Flow Low Warning',
  317: 'FIL-S21 Stbd Scanner 2 Overload Warning',
  318: 'FIL-S21 Stbd Scanner 2 To Motor Drive Warning',
  319: 'FIL-S21 Stbd Scanner 2 To Filter Drive Warning',
  320: 'BV-S21 Stbd Filter Cleaning Valve 2 Fail to Open Warning',
  321: 'BV-S21 Stbd Filter Cleaning Valve 2 Fail to Close Warning',
  322: 'All Stbd Filter Scanner Motors Disabled Alarm',
  323: 'Spare Alarm',
  324: 'Spare Alarm',
  325: 'FIL-S11 Stbd Scanner 1 Overload Warning',
  326: 'FIL-S11 Stbd Scanner 1 To Motor Drive Warning',
  327: 'FIL-S11 Stbd Scanner 1 To Filter Drive Warning',
  328: 'BV-S11 Stbd Filter Cleaning Valve 1 Fail to Close Warning',
  329: 'BV-S11 Stbd Filter Cleaning Valve 1 Fail to Open Warning',
  330: 'BV-S15 Stbd Motive Water Isolation Fail to Close Alarm',
  331: 'BV-S15 Stbd Motive Water Isolation Fail to Open Alarm',
  332: 'SP-S01 Stbd Suction Pump Overload Alarm',
  333: 'FIL-S41 Stbd Scanner 4 Overload Warning',
  334: 'FIL-S41 Stbd Scanner 4 To Motor Drive Warning',
  335: 'FIL-S41 Stbd Scanner 4 To Filter Drive Warning',
  336: 'Spare Alarm',
  337: 'Spare Alarm',
  338: 'Spare Alarm',
  339: 'PLC 5 Hardware Fault Detected',
  340: 'PLC 3 Hardware Fault Detected',
  341: 'FIL-S31 Stbd Scanner 3 Overload Warning',
  342: 'FIL-S31 Stbd Scanner 3 To Motor Drive Warning',
  343: 'FIL-S31 Stbd Scanner 3 To Filter Drive Warning',
  344: 'PLC3-PLC2 Communication Alarm',
  345: 'P-100 Motive Water Pump Overload',
  346: 'Spare Alarm',
  347: 'Spare Alarm',
  348: 'Spare Alarm',
  401: 'Alarm Shutdown',
  402: 'Alarm Reset',
  403: 'PIT-A10 Aftp Filter Outlet Pressure Low Warning',
  404: 'Aft Peak Fitler Negative Differential Pressure',
  405: 'Aftp Filter Continuous Clean Mode Warning',
  406: 'Aftp Filter Gravity Ballast Low Flow Alarm',
  407: 'Aftp Filter Bypass Valve Open',
  408: 'Generator Alarm',
  409: 'Aftp Filter Cleaning Cycle Warning',
  410: 'Aftp Filter Cleaning Cycle Alarm',
  411: 'Aftp Filter Differential Pressure High - Begin Cleaning',
  412: 'Aftp Filter Differential Pressure High Alarm',
  413: 'PIT-A09 Aftp Filter Inlet Pressure High Alarm',
  414: 'PIT-A10 Aftp Filter Outlet Pressure Low Alarm',
  415: 'PIT-A09 Aftp Filter Inlet Pressure High Warning',
  416: 'FIT-A09 Aft Peak Filter Flow Low Warning',
  417: 'FIL-A29 Aftp Scanner 2 Overload Warning',
  418: 'FIL-A29 Aftp Scanner 2 To Motor Drive Warning',
  419: 'FIL-A29 Aftp Scanner 2 To Filter Drive Warning',
  420: 'BV-A29 Aftp Filter Cleaning Valve 2 Fail to Open Warning',
  421: 'BV-A29 Aftp Filter Cleaning Valve 2 Fail to Close Warning',
  422: 'All Aftp Filter Scanner Motors Disabled Alarm',
  423: 'Spare Alarm',
  424: 'Spare Alarm',
  425: 'FIL-A19 Aftp Scanner 1 Overload Warning',
  426: 'FIL-A19 Aftp Scanner 1 To Motor Drive Warning',
  427: 'FIL-A19 Aftp Scanner 1 To Filter Drive Warning',
  428: 'BV-A19 Aftp Filter Cleaning Valve 1 Fail to Close Warning',
  429: 'BV-A19 Aftp Filter Cleaning Valve 1 Fail to Open Warning',
  430: 'BV-A20 Aftp Motive Water Isolation Fail to Close Alarm',
  431: 'BV-A20 Aftp Motive Water Isolation Fail to Open Alarm',
  432: 'SP-A09 Aftp Suction Pump Overload Alarm',
  433: 'FIL-A49 Aftp Scanner 4 Overload Warning',
  434: 'FIL-A49 Aftp Scanner 4 To Motor Drive Warning',
  435: 'FIL-A49 Aftp Scanner 4 To Filter Drive Warning',
  436: 'Spare Alarm',
  437: 'Spare Alarm',
  438: 'Spare Alarm',
  439: 'PLC 5 Hardware Fault Detected',
  440: 'PLC 3 Hardware Fault Detected',
  441: 'FIL-A39 Aftp Scanner 3 Overload Warning',
  442: 'FIL-A39 Aftp Scanner 3 To Motor Drive Warning',
  443: 'FIL-A39 Aftp Scanner 3 To Filter Drive Warning',
  444: 'PLC4-PLC3 Communication Alarm',
  445: 'P-100 Motive Water Pump Overload',
  446: 'Spare Alarm',
  447: 'Spare Alarm',
  448: 'Spare Alarm',
}


let aCalculatedFlowRate = 0 
let aFlowAcidLow = 25
let aIT400 = new SensorSim(1.0, 0.9)
let aLevelAcidHigh = 4.0
let aLevelAcidLow = 0.5
let aLevelAcidLowLow = 0.1
let aPRDis = 0 
let aPumpAcidRunConfirm = true 
let aPumpAcidSpeedFB = 10
let aResetClearT = new TimerON(3)
let aTCA = 0 
let aTCCyMeasuredVolume = 0
let aTCD = 100
let aTCD1MeasuredVolume = 0
let aTCD2MeasuredVolume = 0
let aTCDeduct = 0
let aTCDishVolume = 0 
let aTCHABD = 0 
let aTCHATB = 0 
let aTCHTTB = 0
let aTCHTTC = 0
let aTCL = 400
let aTCMaxVolume = 0
let aTCMeasuredVolume = 4
let aTCSG = 1.7
let aTCSR = 0
let aTCTopInstr = true
let aValveAcidMomentaryOpen = false
let aValveAcidSupplyAuto = true
let aValveAcidSupplyManualOpen = false
let aa125LevelAcidSecondary = false
let aa126LevelAcidGenerator = false
let aa127ValveAcidFailToClose = false
let aa128ValveAcidFailToOpen = false
let aa129LevelAcidLowLow = false
let aa130LevelAcidLow = false
let aa131LevelAcidHigh = false
let aa132FlowAcidLowFlow = false   
let aaT125 = new TimerON(3)
let aaT126 = new TimerON(3)
let aaT127 = new TimerON(5)
let aaT128 = new TimerON(15)
let aaT129 = new TimerON(10)
let aaT130 = new TimerON(10)
let aaT131 = new TimerON(10)
let aaT132 = new TimerON(45)
let aaT150 = new TimerON(20)
let aaT151 = new TimerON(20)
let ab133TechAccessWarning = false
let ab134TankSamplesAboveMADC = false
let ab141LevelPurateSecondary = false
let ab142LevelPurateGenerator = false
let ab143ValvePurateFailToClose = false
let ab144ValvePurateFailToOpen = false
let ab145LevelPurateLowLow = false
let ab146LevelPurateLow = false
let ab147LevelPurateHigh = false
let ab148FlowPurateLowFlow = false
let abT141 = new TimerON(3)
let abT142 = new TimerON(3)
let abT143 = new TimerON(5)
let abT144 = new TimerON(15)
let abT145 = new TimerON(10)
let abT146 = new TimerON(10)
let abT147 = new TimerON(10)
let abT148 = new TimerON(45)
let abT152 = new TimerON(20)
let abT153 = new TimerON(20)
let acidPumpColor = 0
let alarmDisp = false
let alarmReset = false 
let alarmSel = 0
let alarmsCurrent = [] // format alarm number, date/time as ms, text to display
let alarmsHistory = [] // format alarm number, date/time as ms, 'I' for incoming 'IO' for outgoing, text to display
let am101LowTemp = false
let am102HighTemp = false
let am103HighHighTemp = false
let am104AnyLevelSwitch = false
let am105GeneratorAlarm = false
let am106LowBallastFlow = false
let am107PLC2PLC3CommLoss = false
let am108GeneratorWarning = false
let am109CP1EStop = false
let am110CP2EStop = false
let am111VentWarning = false
let am112VentAlarm = false
let am113MotiveLeak = false
let am114GeneratorNotRunning = false
let am115FilterOnlyMode = false
let am116LowLowTemp = false
let am117BallastNoTreatment = false
let am118DeballastAboveMADC = false
let am119FlowOverTRC = false
let am120TSpaceGasDetectedWarning = false
let am121TSpaceGasDetectedAlarm = false
let am122AftPumpOnNoTreatment = false 
let am123TFilterOnlyMode = false
let am124PumpOnNoTreatment = false
let am135PLC2Error = false
let am150AcidFlowWarning = false
let am151AcidFlowAlarm = false
let am152PurateFlowWarning = false
let am153PurateFlowAlarm = false
let amT111 = new TimerON(30) // 30 sec
let amT112 = new TimerON(30) // 30 sec
let amT113 = new TimerON(10) //10 sec
let amT114 = new TimerON(45)
let amT119 = new TimerON(5)
let amT120 = new TimerON(3)
let amT121A = new TimerON(3)
let amT121W = new TimerON(15 * 60)
let ap201Alarm = false
let ap202Warning = false
let ap203PressureOutletLowWarning = false
let ap204NegDPAlarm = false
let ap205ContinuoutCleanWarning = false
let ap206FlowGravityBallastLowWarning = false
let ap207ValveBypassAlarm = false
let ap208GeneratorAlarm = false
let ap209CleanCycleWarning = false
let ap210CleanCycleAlarm = false
let ap211PressureDifferentialWarning = false
let ap212PressureDifferentialAlarm = false
let ap213PressureInletHighHighAlarm = false
let ap214PressureOutletLowLowAlarm = false
let ap215PressureInletHighWarning = false
let ap216FlowBallastLowWarning = false
let ap217Scanner2Overload = false
let ap218Scanner2ToMotorFault = false
let ap219Scanner2ToFilterFault = false
let ap220ValveSuction2FailToOpen = false
let ap221ValveSuction2FailToClose = false
let ap222FilterDisabled = false 
let ap223AftpIsolationValveOpen = false
let ap224 = false
let ap225Scanner1Overload = false
let ap226Scanner1ToMotorFault = false
let ap227Scanner1ToFilterFault = false
let ap228ValveSuction1FailToClose = false
let ap229ValveSuction1FailToOpen = false
let ap230ValveMotiveFailToClose = false
let ap231ValveMotiveFailToOpen = false
let ap232PumpSuctionOverload = false
let ap233Scanner4Overload = false
let ap234Scanner4ToMotorFault = false
let ap235Scanner4ToFilterFault = false
let ap236 = false
let ap237 = false
let ap238 = false
let ap239PLC5Error = false
let ap240PLC3Error = false
let ap241Scanner3Overload = false
let ap242Scanner3ToMotorFault = false
let ap243Scanner3ToFilterFault = false
let ap244CommunicationErrorPLC3ToPLC2 = false
let ap245PumpMotiveOverload = false
let ap246 = false
let ap247 = false
let ap248 = false
let as301Alarm = false
let as302Warning = false
let as303PressureOutletLowWarning = false
let as304NegDPAlarm = false
let as305ContinuoutCleanWarning = false
let as306FlowGravityBallastLowWarning = false
let as307ValveBypassAlarm = false
let as308GeneratorAlarm = false
let as309CleanCycleWarning = false
let as310CleanCycleAlarm = false
let as311PressureDifferentialWarning = false
let as312PressureDifferentialAlarm = false
let as313PressureInletHighHighAlarm = false
let as314PressureOutletLowLowAlarm = false
let as315PressureInletHighWarning = false
let as316FlowBallastLowWarning = false
let as317Scanner2Overload = false
let as318Scanner2ToMotorFault = false
let as319Scanner2ToFilterFault = false
let as320ValveSuction2FailToOpen = false
let as321ValveSuction2FailToClose = false
let as322FilterDisabled = false 
let as323AftpIsolationValveOpen = false
let as324 = false
let as325Scanner1Overload = false 
let as326Scanner1ToMotorFault = false
let as327Scanner1ToFilterFault = false
let as328ValveSuction1FailToClose = false
let as329ValveSuction1FailToOpen = false
let as330ValveMotiveFailToClose = false
let as331ValveMotiveFailToOpen = false
let as332PumpSuctionOverload = false
let as333Scanner4Overload = false
let as334Scanner4ToMotorFault = false
let as335Scanner4ToFilterFault = false
let as336 = false
let as337 = false
let as338 = false
let as339PLC5Error = false
let as340PLC3Error = false
let as341Scanner3Overload = false
let as342Scanner3ToMotorFault = false
let as343Scanner3ToFilterFault = false
let as344CommunicationErrorPLC3ToPLC2 = false
let as345PumpMotiveOverload = false
let as346 = false
let as347 = false
let as348 = false
let at401Alarm = false
let at402Warning = false
let at403PressureOutletLowWarning = false
let at404NegDPAlarm = false
let at405ContinuoutCleanWarning = false
let at406FlowGravityBallastLowWarning = false
let at407ValveBypassAlarm = false
let at408GeneratorAlarm = false
let at409CleanCycleWarning = false
let at410CleanCycleAlarm = false
let at411PressureDifferentialWarning = false
let at412PressureDifferentialAlarm = false
let at413PressureInletHighHighAlarm = false
let at414PressureOutletLowLowAlarm = false
let at415PressureInletHighWarning = false
let at416FlowBallastLowWarning = false
let at417Scanner2Overload = false
let at418Scanner2ToMotorFault = false
let at419Scanner2ToFilterFault = false
let at420ValveSuction2FailToOpen = false
let at421ValveSuction2FailToClose = false
let at422FilterDisabled = false 
let at423AftpIsolationValveClosed = false
let at424 = false
let at425Scanner1Overload = false 
let at426Scanner1ToMotorFault = false
let at427Scanner1ToFilterFault = false
let at428ValveSuction1FailToClose = false
let at429ValveSuction1FailToOpen = false
let at430ValveMotiveFailToClose = false
let at431ValveMotiveFailToOpen = false
let at432PumpSuctionOverload = false
let at433Scanner4Overload = false
let at434Scanner4ToMotorFault = false
let at435Scanner4ToFilterFault = false
let at436 = false
let at437 = false
let at438 = false
let at439PLC5Error = false
let at440PLC3Error = false
let at441Scanner3Overload = false 
let at442Scanner3ToMotorFault = false 
let at443Scanner3ToFilterFault = false
let at444CommunicationErrorPLC3ToPLC2 = false
let at445PumpMotiveOverload = false
let at446 = false
let at447 = false
let at448 = false
let bCalculatedFlowRate = 0 
let bFlowPurateLow = 25
let bLevelPurateHigh = 4.0
let bLevelPurateLow = 0.5
let bLevelPurateLowLow = 0.1
let bPumpPurateRunConfirm = true 
let bPumpPurateSpeedFB = 10
let bTCA = 0 
let bTCCyMeasuredVolume = 0
let bTCD = 100
let bTCD1MeasuredVolume = 0
let bTCD2MeasuredVolume = 0
let bTCDeduct = 0
let bTCDishVolume = 0 
let bTCHABD = 0 
let bTCHATB = 0 
let bTCHTTB = 0
let bTCHTTC = 0
let bTCL = 400
let bTCMaxVolume = 0
let bTCMeasuredVolume
let bTCSG = 1.7
let bTCSR = 0
let bTCTopInstr = true
let bValvePurateMomentaryOpen = false
let bValvePurateSupplyAuto = true
let bValvePurateSupplyManualOpen = false
let calibEn = false 
let cfClO2Shared = false
let cfFlowBefore = false
let cfFlushShared = true
let cfPLC5 = false
let cmAftp = true
let cpBypassAlarmOnFilter = false
let cpFilter = true
let cpFilterFlowLimit = true
let cpPump = true
let cpScanner1 = true
let cpScanner2 = true
let cpScanner3 = true
let cpScanner4 = true
let cpValveBypass2 = false
let cpValveFlush1 = true
let cpValveFlush2 = true
let cpValveMotive = false
let cpValveOverboard = false 
let csBypassAlarmOnFilter = false
let csFilter = true
let csFilterFlowLimit = true
let csPump = true
let csScanner1 = true
let csScanner2 = true
let csScanner3 = true
let csScanner4 = true
let csValveBypass2 = false
let csValveFlush1 = true
let csValveFlush2 = true
let csValveMotive = false
let csValveOverboard = false 
let ctBypassAlarmOnFilter = false
let ctFilter = true
let ctFilterFlowLimit = true
let ctPump = true
let ctPump1Ballast = true
let ctPump1Motive = true
let ctPump2Ballast = true
let ctPump2Motive = true
let ctPumpMotiveSupply = true
let ctScanner1 = true
let ctScanner2 = false
let ctScanner3 = false
let ctScanner4 = false
let ctValveBypass2 = false
let ctValveClO2Isolation = false
let ctValveFlush1 = true
let ctValveFlush2 = false
let ctValveMotive = true
let ctValveOverboard = false
let ctValveTank = false
let dp21ValveFlush1 = new ValveFlush(5)
let dp22ValveFlush2 = new ValveFlush(5)
let ds21ValveFlush1 = new ValveFlush(5)
let ds22ValveFlush2 = new ValveFlush(5)
let dt21ValveFlush1 = new ValveFlush(5)
let dt22ValveFlush2 = new ValveFlush(5)
let eff1SP = 0.80 //low efficiency Setpoint
let effLvl1 = false //efficiency warning
let effcncy = 0 
let effcncyRate = 0 
let f1SPDis = 6.16 //generator low flow warning setpoint
let f2SPDis = 6.93 //generator low flow alarm setpoint
let fAlarm = false
let fClO2ValveOpen = true
let fControlPowerOn = true
let fEStopPressed = false
let fFlowFlush = 0 
let fFlushing = false
let fIT100 = new SensorSim(1.02, 0.98)
let fIT200 = new SensorSim(1.02, 0.98)
let fIT300 = new SensorSim(1.02, 0.98)
let fITA09 = new SensorSim(1.02, 0.98)
let fITA10 = new SensorSim(1.02, 0.98)
let fITP02 = new SensorSim(1.02, 0.98)
let fITP04 = new SensorSim(1.02, 0.98)
let fITS01 = new SensorSim(1.02, 0.98)
let fITS03 = new SensorSim(1.02, 0.98)
let fPDose = 4.25
let fPowerOn = true
let fPumpAftpRunning = false
let fPumpMotive = true
let fPumpMotiveOverloadOK = true
let fPumpMotiveSupply = false 
let fPumpMotiveSupplyOverloadOK = true
let fPumpMotiveSupplyShow = true
let fPumpMotiveSupplyStart = false
let fPumpMotiveSupplyStop = false 
let fScannerDelayMS = 0
let fScannerDelaySec = 15
let fSilencePressed = false
let fTControlPowerOn = true
let fTreatmentAftpBal = false
let fTreatmentAftpDebal = false
let fTreatmentAftpMot = true
let fTreatmentAftpOff = false
let fTreatmentBal = true
let fTreatmentDebal = false
let fTreatmentOff = false
let fValveAftpIsolationClosed = false
let fValveClO2Force = false 
let fValvesOverboardClosedLS = true
let fWarning = false 
let flowLvl1 = false // generator low flow warning
let flowLvl2 = false // generator low flow alarm
let gAlarm = true
let gFlushTimer = new TimerOFF(7.5) // 7.5 sec mixing chamber flush
let gMotiveShutdown = new TimerOFF(15) // 15 sec motive flush time
let gStartupAlarmDelay = new TimerON(30) // 30 sec
let gStartupEfficiencyDelay = new TimerON(5 * 60) // 5 min efficiency alarm delay
let gStartupFlow = new TimerON(30) // 30 sec
let gStartupIncrease = new TimerON(2 * 60) // 2 min startup boost
let gStartupVac = new TimerON(30) // 30 sec
let gWarning = true
let hEitherPump = false 
let hHMI1PreScreen = 0  
let hHMI1Screen = 22
let hHMI1LScreen = 0
let hHMI1Tech = true
let i2200Max = 3000
let i2201Max = 3000
let incRate = 2
let mAlarm = false 
let mAlarmAny = false 
let mAlarmBuzzer = false
let mAlarmSilence = false
let mBV200CloseDelay = new TimerON(1)
let mBV200OpenDelay = new TimerON(1)
let mBV300CloseDelay = new TimerON(1)
let mBV300OpenDelay = new TimerON(1)
let mBWTSAlarm = false
let mBWTSStatus = false
let mChemFill = false
let mChemValvesEnable = true
let mEStopOK = true
let mFOMReset = new TimerON (15 * 60)
let mFTFourSec = true
let mFTOneSec = true
let mFilterOnly = false 
let mFilterOnlyMode = false
let mFlashFourSecA = new TimerON(1)
let mFlashFourSecB = new TimerON(4)
let mFlashOneSecA = new TimerON(1)
let mFlashOneSecB = new TimerON(1)
let mFlowBallastTotal = 0
let mFlowClO2Max = 15
let mFlowClO2Min = 0
let mFlowClO2Total = 0
let mFlowDeviation = 0.77
let mFlowMotiveSV = 0
let mFlowTreamentRatedCapacity = 3500
let mFlushCycle = false
let mFlushValve = false
let mGenAlarm = false
let mGenRunning = false 
let mGenStartup = new TimerON(30)
let mGenStatusOK = false 
let mGenWarning = false
let mGeneratorEnable = false 
let mGeneratorStart = false
let mGreenLight = false
let mLimitAcidGenerator = true
let mLimitAcidSecondary = true
let mLimitPurateGenerator = true
let mLimitPurateSecondary = true
let mMCREnabled = true
let mNoTreatmentReason = 0
let mPumpMotive = false
let mPumpMotiveRunCmd = false 
let mPumpMotiveStart = false
let mPumpMotiveStop = false
let mRedLight = false
let mResidualOK = false
let mScreenChange1 = new PTrig()
let mScreenChange2 = new PTrig()
let mScreenChange3 = new PTrig()
let mScreenRestore = false
let mSilencePressed = false 
let mSilenceReset = false
let mStartFlow = 60
let mStartupComplete = false
let mStartupFlow = new TimerON(30)
let mStopFlow = 50
let mTBFCubesPerDay = 0
let mTFOMReset = new TimerON (15 * 60)
let mTFilterOnly = false 
let mTFilterOnlyMode = false 
let mTGasDetectedAlarm = false
let mTGasDetectedWarning = false
let mTNoTreatmentReason = 0 
let mTemperatureHi = 35
let mTemperatureHiHi = 40
let mTemperatureLo = 6
let mTemperatureLoLo = 4
let mTemperatureSV = 20
let mTriggerA117 = new PTrig()
let mTriggerA118 = new PTrig()
let mTriggerLDL = new PTrig()
let mValveAcid = false 
let mValveAcidClosedLS = false
let mValveAcidOpenLS = false
let mValveFlushHMI = false
let mValveFlushMx = false 
let mValveMotive = false
let mValveMotiveClose = false
let mValveMotiveOpen = false
let mValvePurate = false
let mValvePurateClosedLS = false
let mValvePurateOpenLS = false
let mValvesBypassClosed = false
let mVentInterlock = true
let mVentInterlockFail = false 
let mWarning = false 
let mWarningAny = false 
let motGenAlarm = false 
let motGenWarning = false
let motiveH2OPumpColor = 0
let oitTextReactorFlushColor
let p04nw2Trig = new PTrig()
let p06nw1Trig = new PTrig()
let p1AIT400Adj = 1.0
let p1AIT400Final = 0 
let p1AIT400RampDownEt = 10000
let p1AIT400RampUpEt = 20000
let p1AIT400Target = 600
let p1FIT100Adj = 1.0
let p1FIT100Final = 0
let p1FIT100RampDownEt = 10000
let p1FIT100RampUpEt = 10000
let p1FIT100Target = 7.7
let p1FIT200Adj = 1.0
let p1FIT200Final = 0
let p1FIT200RampDownEt = 10000
let p1FIT200RampUpEt = 10000
let p1FIT200Target = 400
let p1FIT300Adj = 1.0
let p1FIT300Final = 0
let p1FIT300RampDownEt = 10000
let p1FIT300RampUpEt = 10000
let p1FIT300Target = 400
let p1PIT400Adj = 1.0
let p1PIT400Final = 0
let p1PIT400RampDownEt = 10000
let p1PIT400RampUpEt = 10000
let p1PIT400Target = -730
let p3FITA09Adj = 1.0
let p3FITA09Final = 0
let p3FITA09RampDownEt = 10000
let p3FITA09RampUpEt = 10000
let p3FITA09Target = 250
let p3FITA10Adj = 1.0
let p3FITA10Final = 0
let p3FITA10RampDownEt = 10000
let p3FITA10RampUpEt = 10000
let p3FITA10Target = 7.7
let p3FITP02Adj = 1.0
let p3FITP02Final = 0
let p3FITP02RampDownEt = 10000
let p3FITP02RampUpEt = 10000
let p3FITP02Target = 1000
let p3FITP04Adj = 1.0
let p3FITP04Final = 0
let p3FITP04RampDownEt = 10000
let p3FITP04RampUpEt = 10000
let p3FITP04Target = 7.7
let p3FITS01Adj = 1.0
let p3FITS01Final = 0
let p3FITS01RampDownEt = 10000
let p3FITS01RampUpEt = 10000
let p3FITS01Target = 1000
let p3FITS03Adj = 1.0
let p3FITS03Final = 0
let p3FITS03RampDownEt = 10000
let p3FITS03RampUpEt = 10000
let p3FITS03Target = 7.7
let p3PITA09Adj = 1.0
let p3PITA09Final = 0
let p3PITA09RampDownEt = 10000
let p3PITA09RampUpEt = 10000
let p3PITA09Target = 0.3
let p3PITA10Adj = 1.0
let p3PITA10Final = 0
let p3PITA10RampDownEt = 10000
let p3PITA10RampUpEt = 10000
let p3PITA10Target = 1.2
let p3PITP02Adj = 1.0
let p3PITP02Final = 0
let p3PITP02RampDownEt = 10000
let p3PITP02RampUpEt = 10000
let p3PITP02Target = 0.3
let p3PITP04Adj = 1.0
let p3PITP04Final = 0
let p3PITP04RampDownEt = 10000
let p3PITP04RampUpEt = 10000
let p3PITP04Target = 1.2
let p3PITS01Adj = 1.0
let p3PITS01Final = 0
let p3PITS01RampDownEt = 10000
let p3PITS01RampUpEt = 10000
let p3PITS01Target = 0.3
let p3PITS03Adj = 1.0
let p3PITS03Final = 0
let p3PITS03RampDownEt = 10000
let p3PITS03RampUpEt = 10000
let p3PITS03Target = 1.2
let p3PITTarget = 0.3
let p97PCVP02 = new PID(0.0, 4.0, 2, 2, 0, PID.DIRECT)
let p98PCVP04 = new PID(0.0, 1.2, 2, 2, 0, PID.REVERSE)
let p99FCVP02 = new PID(0.0, 0.0, 2, 6, 0, PID.DIRECT)
let pAlarmSilence = false
let pBypassValveOpen = false 
let pCleanCycleDate1 = 0
let pCleanCycleDate2 = 0
let pCleanCycleDate3 = 0
let pCleanCycleDate4 = 0
let pCleanCycleDate5 = 0
let pCleanCycleDate6 = 0
let pCleanCycleReason1 = 0
let pCleanCycleReason2 = 0
let pCleanCycleReason3 = 0
let pCleanCycleReason4 = 0
let pCleanCycleReason5 = 0
let pCleanCycleReason6 = 0
let pCleanCycleStartupDelay = 10
let pCleanCycleStatupDelay = 10 * 1000
let pCleanCycles = new Counter()
let pCleanDelay = new TimerON(15 * 60)
let pCleanReasonBuffer = 0
let pCleaningAuto = true 
let pCleaningCycles = 0
let pCleaningTimerDone = false
let pContCleanActive = 12 * 60 * 1000
let pContCleanEnable = true
let pContCleanNeeded = 6 * 60 * 1000
let pContinT1 = new TimerP(6 * 60)
let pContinT2 = new TimerP(12 * 60)
let pContinuousCleanTimingReal = 0
let pControlPowerOn = true
let pCurCleanCycles = new Counter()
let pCycleRunning = false
let pDPDelay = new TimerON(1)
let pDifferentialPressureStart = 0.4
let pFDP = 0
let pFilterAuto = true
let pFilterCleanComplete = false
let pFilterCleanCount = 0
let pFilterContinuousCleanCancel = false
let pFilterContinuousClean = false 
let pFilterFault = false 
let pFilterManual = false
let pFilterNeedpContClean = false
let pFilterOn = false
let pFilterOnly = false
let pFilterOnlyMode = false
let pFilterPark = false
let pFlowBallastMax = 0
let pFlowBallastMin = 0
let pFlowBallastSV = 0
let pFlowClO2 = 0 
let pFlowFilterM3HR = 0 
let pFlowFilterRatedCapacity = 1500
let pFlowInlet = 0 
let pFlowLow = 50
let pFlowPerc = 0
let pGetAlarm = false
let pHalfScanners1AtFilter = false 
let pHalfScanners1AtMotor = false 
let pHalfScanners2AtFilter = false 
let pHalfScanners2AtMotor = false 
let pIT400 = new SensorSim(1.00, 0.90)
let pITA09 = new DPSim()
let pITA10 = new SensorSim(1.02, 0.98)
let pITP02 = new DPSim()
let pITP04 = new SensorSim(1.02, 0.98)
let pITS01 = new DPSim()
let pITS03 = new SensorSim(1.02, 0.98)
let pLastAtFilter = false 
let pLastAtMotor = true
let pPortAndStbd = false
let pPowerRestore = new TimerON(3)
let pPressureDPHigh = 0.4
let pPressureDPHighHigh = 1.0
let pPressureDifferentialHigh = 0.4
let pPressureDifferentialNeg = -0.4
let pPressureInletBar = 0
let pPressureInletHigh = 5
let pPressureInletHighHigh = 7
let pPressureInletSP = 4
let pPressureOutletBar = 0
let pPressureOutletCalc
let pPressureOutletLow = 0.9
let pPressureOutletLowLow = 0.05
let pPressureOutletSP = 0
let pPulseBit0 = new PTrig()
let pPulseBit1 = new PTrig()
let pPulseBit2 = new PTrig()
let pPulseBit3 = new PTrig()
let pPulseBit4 = new PTrig()
let pPulseBit5 = new PTrig()
let pPulseBit6 = new PTrig()
let pPumpBallastEnable = false
let pPumpBallastRunning = false
let pPumpEnableBypass = false
let pPumpSuction1 = false 
let pPumpSuction1AutoStart = false
let pPumpSuction1OverloadOK = true
let pPumpSuction2OverloadOK = true
let pPumpSuction3OverloadOK = true
let pPumpSuction4OverloadOK = true
let pPumpSuctionAuto = true
let pRunning = false 
let pScanCommand = false
let pScanner1 = new Scanner(30)
let pScanner1AtFilter = false
let pScanner1AtMotor = false
let pScanner1Auto = true 
let pScanner1Enable = true
let pScanner1FilterAuto = false
let pScanner1FilterManual = false 
let pScanner1MotorAuto = false
let pScanner1MotorManual = false 
let pScanner1OverloadOK = true
let pScanner1StopAuto = false
let pScanner1StopManual = false
let pScanner1Timer = new TimerON (1)
let pScanner1TimerF = new TimerON (1)
let pScanner1ToFilter = false 
let pScanner1ToMotor = false 
let pScanner1Warning = false
let pScanner2 = new Scanner(30)
let pScanner2AtFilter = false
let pScanner2AtMotor = false
let pScanner2Auto = true 
let pScanner2Enable = true
let pScanner2FilterAuto = false
let pScanner2FilterManual = false 
let pScanner2MotorAuto = false
let pScanner2MotorManual = false 
let pScanner2OverloadOK = true
let pScanner2StopAuto = false
let pScanner2StopManual = false
let pScanner2Timer = new TimerON (1)
let pScanner2TimerF = new TimerON (1)
let pScanner2ToFilter = false 
let pScanner2ToMotor = false 
let pScanner2Warning = false
let pScanner3 = new Scanner(30)
let pScanner3AtFilter = false
let pScanner3AtMotor = false
let pScanner3Auto = true 
let pScanner3Enable = true
let pScanner3FilterAuto = false
let pScanner3FilterManual = false 
let pScanner3MotorAuto = false
let pScanner3MotorManual = false 
let pScanner3OverloadOK = true
let pScanner3StopAuto = false
let pScanner3StopManual = false
let pScanner3Timer = new TimerON (1)
let pScanner3TimerF = new TimerON (1)
let pScanner3ToFilter = false 
let pScanner3ToMotor = false 
let pScanner3Warning = false
let pScanner4 = new Scanner(30)
let pScanner4AtFilter = false
let pScanner4AtMotor = false
let pScanner4Auto = true
let pScanner4Enable = true
let pScanner4FilterAuto = false
let pScanner4FilterManual = false 
let pScanner4MotorAuto = false
let pScanner4MotorManual = false 
let pScanner4OverloadOK = true
let pScanner4StopAuto = false
let pScanner4StopManual = false
let pScanner4Timer = new TimerON (1)
let pScanner4TimerF = new TimerON (1)
let pScanner4ToFilter = false 
let pScanner4ToMotor = false 
let pScanner4Warning = false
let pScannerFilterCmd = false
let pScannerMotorCmd = false 
let pScannersAllAtOnce = true
let pScannersAtFilter = false 
let pScannersAtMotor = false
let pStartManual = false
let pStartupClean = false 
let pStartupCleanDelay = new TimerON(pCleanCycleStartupDelay)
let pStartupCleanPulse = new PTrig()
let pStartupComplete = false 
let pStartupTimer = new TimerON(34)
let pT203 = new TimerON(30)
let pT204 = new TimerON(5)
let pT207 = new TimerON(5)
let pT211 = new TimerON(1)
let pT212 = new TimerON(1)
let pT213 = new TimerON(3)
let pT214 = new TimerON(3)
let pT215 = new TimerON(15)
let pT216 = new TimerON(30)
let pT222 = new TimerON(3)
let pT223 = new TimerON(3)
let pT230 = new TimerON(5)
let pT231 = new TimerON(5)
let pTValveClO2CloseDelay = new TimerON(10)
let pTValveOutletCloseDelay = new TimerON(10)
let pTimeSinceLastCleanMS = 0 
let pTimedCleanDelayMS = 15 * 60 * 1000
let pTimedScannerMove = 30 * 1000
let pToFilter = false
let pToMotor = false
let pTreatFlow = false
let pTvalveClO2LeadDelay = new TimerON(10)
let pValveBypass2ClosedLS = false
let pValveBypassClosedLS = true
let pValveBypassRepose = false
let pValveClO2Gain = 2
let pValveClO2InputFilter =0 
let pValveClO2LeadStartPos = 67
let pValveClO2ManOn = true
let pValveClO2OpenPos = 100
let pValveClO2PositionPerc = 100
let pValveClO2SP = 0
let pValveClO2SPFilter = 0
let pValveClO2ShutdownPos = 10
let pValveClO2StartupPos = 100
let pValveClO2TD = 0
let pValveClO2TI = 6
let pValveClO2Value = 0
let pValveFlush1 = false
let pValveFlush1Auto = true
let pValveFlush1CloseAuto = false
let pValveFlush1CloseManual = false
let pValveFlush1OpenAuto = false
let pValveFlush1OpenManual = false
let pValveFlush1Timer = new TimerON(1)
let pValveFlush1TimerO = new TimerON(1)
let pValveFlush2 = false
let pValveFlush2Auto = true
let pValveFlush2CloseAuto = false
let pValveFlush2CloseManual = false
let pValveFlush2OpenAuto = false
let pValveFlush2OpenManual = false
let pValveFlush2Timer = new TimerON(1)
let pValveFlush2TimerO = new TimerON(1)
let pValveInletGain = 2
let pValveInletInputFilter = 0
let pValveInletManOn = true
let pValveInletPositionPerc = 0
let pValveInletSP = 4
let pValveInletSPFilter = 0
let pValveInletShutdownPos = 0
let pValveInletStartupPos = 100
let pValveInletTD = 0
let pValveInletTI = 2
let pValveInletValue = 0
let pValveMotive = false
let pValveMotiveAuto = true
let pValveMotiveClosedLS = false
let pValveMotiveInAuto = true
let pValveMotiveOpenAuto = false
let pValveMotiveOpenLS = false
let pValveOutletGain = 2
let pValveOutletInputFilter = 0
let pValveOutletManOn = true
let pValveOutletPositionPerc = 0
let pValveOutletSP = 1.2
let pValveOutletSPFilter = 0
let pValveOutletShutdownPos = 0
let pValveOutletStartupPos = 100
let pValveOutletTD = 0
let pValveOutletTI = 2
let pValveOutletValue = 0
let pValveOverboardClosedLS = true
let pWarningRelay = false 
let pipingColorStatus = 0
let pmpAcidAlm = false
let pmpPurateAlm = false
let puratePumpColor = 0
let q2300Max = 0
let q2300Min = 0
let s04nw2Trig = new PTrig()
let s06nw1Trig = new PTrig()
let s97PCVS01 = new PID(0.0, 4.0, 2, 2, 0, PID.DIRECT)
let s98PCVS03 = new PID(0.0, 1.2, 2, 2, 0, PID.REVERSE)
let sAlarmSilence = false
let sBypassValveOpen = false
let sCleanCycleDate1 = 0
let sCleanCycleDate2 = 0
let sCleanCycleDate3 = 0
let sCleanCycleDate4 = 0
let sCleanCycleDate5 = 0
let sCleanCycleDate6 = 0
let sCleanCycleReason1 = 0
let sCleanCycleReason2 = 0
let sCleanCycleReason3 = 0
let sCleanCycleReason4 = 0
let sCleanCycleReason5 = 0
let sCleanCycleReason6 = 0
let sCleanCycleStartupDelay = 10
let sCleanCycleStatupDelay = 10 * 1000
let sCleanCycles = new Counter()
let sCleanDelay = new TimerON(15 * 60)
let sCleanReasonBuffer = 0
let sCleaningAuto = true 
let sCleaningCycles = 0
let sCleaningTimerDone = false
let sContCleanActive = 12 * 60 * 1000
let sContCleanEnable = true
let sContCleanNeeded = 6 * 60 * 1000
let sContinuousCleanTimingReal = 0
let sContinT1 = new TimerP(6 * 60)
let sContinT2 = new TimerP(12 * 60)
let sControlPowerOn = true
let sCurCleanCycles = new Counter()
let sCycleRunning = false
let sDPDelay = new TimerON(1)
let sDifferentialPressureStart
let sFDP = 0
let sFilterAuto = true
let sFilterCleanComplete = false 
let sFilterCleanCount = 0
let sFilterContinuousClean = false
let sFilterContinuousCleanCancel = false
let sFilterFault = false
let sFilterManual = false
let sFilterNeedsContClean = false
let sFilterOn = false
let sFilterOnly = false
let sFilterOnlyMode = false
let sFilterPark = false
let sFlowBallastMax = 0
let sFlowBallastMin = 0
let sFlowBallastSV = 0
let sFlowClO2 = 0
let sFlowFilterM3HR = 0
let sFlowFilterRatedCapacity = 1500
let sFlowFlush = 0 
let sFlowInlet = 0
let sFlowLow = 50
let sFlowPerc = 1
let sGetAlarm = false
let sHalfScanners1AtFilter = false 
let sHalfScanners1AtMotor = false 
let sHalfScanners2AtFilter = false 
let sHalfScanners2AtMotor = false 
let sLastAtFilter = false 
let sLastAtMotor = true
let sPowerRestore = new TimerON(3)
let sPressureDPHigh = 0.4
let sPressureDPHighHigh = 1.0
let sPressureDifferentialHigh = 0.4
let sPressureDifferentialNeg = -0.4
let sPressureInletBar = 0
let sPressureInletHigh = 5
let sPressureInletHighHigh = 7
let sPressureInletSP = 4
let sPressureOutletBar = 0
let sPressureOutletCalc = 0
let sPressureOutletLow = 0.9
let sPressureOutletLowLow = 0.05
let sPressureOutletSP = 0 
let sPulseBit0 = new PTrig()
let sPulseBit1 = new PTrig()
let sPulseBit2 = new PTrig()
let sPulseBit3 = new PTrig()
let sPulseBit4 = new PTrig()
let sPulseBit5 = new PTrig()
let sPulseBit6 = new PTrig()
let sPumpBallastEnable = false
let sPumpBallastRunning = false
let sPumpEnableBypass = false
let sPumpSuction1 = false
let sPumpSuction1AutoStart = false
let sPumpSuction1OverloadOK = true
let sPumpSuctionAuto = true
let sRunning = false 
let sScanCommand = false
let sScanner1 = new Scanner(30)
let sScanner1AtFilter = false
let sScanner1AtMotor = false
let sScanner1Auto = true 
let sScanner1Enable = true
let sScanner1FilterAuto = false
let sScanner1FilterManual = false 
let sScanner1MotorAuto = false
let sScanner1MotorManual = false 
let sScanner1OverloadOK = true
let sScanner1StopAuto = false
let sScanner1StopManual = false
let sScanner1Timer = new TimerON (1)
let sScanner1TimerF = new TimerON (1)
let sScanner1ToFilter = false 
let sScanner1ToMotor = false 
let sScanner1Warning = false
let sScanner2 = new Scanner(30)
let sScanner2AtFilter = false
let sScanner2AtMotor = false
let sScanner2Auto = true 
let sScanner2Enable = true
let sScanner2FilterAuto = false
let sScanner2FilterManual = false 
let sScanner2MotorAuto = false
let sScanner2MotorManual = false 
let sScanner2OverloadOK = true
let sScanner2StopAuto = false
let sScanner2StopManual = false
let sScanner2Timer = new TimerON (1)
let sScanner2TimerF = new TimerON (1)
let sScanner2ToFilter = false 
let sScanner2ToMotor = false 
let sScanner2Warning = false
let sScanner3 = new Scanner(30)
let sScanner3AtFilter = false
let sScanner3AtMotor = false
let sScanner3Auto = true 
let sScanner3Enable = true
let sScanner3FilterAuto = false
let sScanner3FilterManual = false 
let sScanner3MotorAuto = false
let sScanner3MotorManual = false 
let sScanner3OverloadOK = true
let sScanner3StopAuto = false
let sScanner3StopManual = false
let sScanner3Timer = new TimerON (1)
let sScanner3TimerF = new TimerON (1)
let sScanner3ToFilter = false 
let sScanner3ToMotor = false 
let sScanner3Warning = false
let sScanner4 = new Scanner(30)
let sScanner4AtFilter = false
let sScanner4AtMotor = false
let sScanner4Auto = true
let sScanner4Enable = true
let sScanner4FilterAuto = false
let sScanner4FilterManual = false 
let sScanner4MotorAuto = false
let sScanner4MotorManual = false 
let sScanner4OverloadOK = true
let sScanner4StopAuto = false
let sScanner4StopManual = false
let sScanner4Timer = new TimerON (1)
let sScanner4TimerF = new TimerON (1)
let sScanner4ToFilter = false 
let sScanner4ToMotor = false 
let sScanner4Warning = false
let sScannerFilterCmd = false
let sScannerMotorCmd = false 
let sScannersAllAtOnce = true
let sScannersAtFilter = false 
let sScannersAtMotor = false
let sStartManual = false
let sStartupClean = false 
let sStartupCleanDelay = new TimerON(sCleanCycleStartupDelay)
let sStartupCleanPulse = new PTrig()
let sStartupComplete = false 
let sStartupTimer = new TimerON(34)
let sStbdAndPort = false
let sT303 = new TimerON(30)
let sT304 = new TimerON(5)
let sT307 = new TimerON(5)
let sT311 = new TimerON(1)
let sT312 = new TimerON(1)
let sT313 = new TimerON(3)
let sT314 = new TimerON(3)
let sT315 = new TimerON(15)
let sT316 = new TimerON(30)
let sT322 = new TimerON(3)
let sT323 = new TimerON(3)
let sT330 = new TimerON(5)
let sT331 = new TimerON(5)
let sTValveClO2CloseDelay = new TimerON(10)
let sTValveOutletCloseDelay = new TimerON(10)
let sTimeSinceLastCleanMS = 0 
let sTimedCleanDelayMS = 15 * 60 * 1000
let sTimedScannerMove = 30 * 1000
let sToFilter = false
let sToMotor = false
let sTreatFlow = false
let sValveBypass2ClosedLS = false
let sValveBypassClosedLS = true
let sValveBypassRepose = false
let sValveClO2CloseDelay = 10 * 1000
let sValveClO2LinearCoef1 = 31.039
let sValveClO2LinearCoef2 = 42.964
let sValveClO2Math3 = 0
let sValveClO2OpenPos = 100
let sValveClO2PositionPerc = 100
let sValveClO2ShutdownPos = 10
let sValveClO2StartupPos = 100
let sValveClO2Value = 0 
let sValveFlush1 = false
let sValveFlush1Auto = true
let sValveFlush1CloseAuto = false
let sValveFlush1CloseManual = false
let sValveFlush1OpenAuto = false
let sValveFlush1OpenManual = false
let sValveFlush1Timer = new TimerON(1)
let sValveFlush1TimerO = new TimerON(1)
let sValveFlush2 = false
let sValveFlush2Auto = true
let sValveFlush2CloseAuto = false
let sValveFlush2CloseManual = false
let sValveFlush2OpenAuto = false
let sValveFlush2OpenManual = false
let sValveFlush2Timer = new TimerON(1)
let sValveFlush2TimerO = new TimerON(1)
let sValveInletGain = 2
let sValveInletInputFilter = 0
let sValveInletManOn = true
let sValveInletPositionPerc = 0
let sValveInletSPFilter = 0
let sValveInletShutdownPos = 0
let sValveInletStartupPos = 35
let sValveInletTD = 0
let sValveInletTI = 2
let sValveInletValue = 0
let sValveMotive = false
let sValveMotiveAuto = true
let sValveMotiveClosedLS = false
let sValveMotiveInAuto = true
let sValveMotiveOpenAuto = false
let sValveMotiveOpenLS = false
let sValveOutletGain = 2
let sValveOutletInputFilter = 0
let sValveOutletManOn = true
let sValveOutletPositionPerc = 0
let sValveOutletSP = 1.2
let sValveOutletSPFilter = 0
let sValveOutletShutdownPos = 0
let sValveOutletStartupPos = 35
let sValveOutletTD = 0
let sValveOutletTI = 2
let sValveOutletValue = 0 
let sValveOverboardClosedLS = true
let sWarningRelay = false 
let setRate = 0 
let stHiDis = 14.875
let stLwDis = 0.2
let statUnit = 6
let startupIncEnabled = true
let startupIncOITAbort = false
let startupIncOITEnable = true
let startupIncStopped = false 
let strtUpAlrmFlow = false
let strtUpAlrmVac = false
let suspendAFlowAlarm = false
let suspendAVolume = false
let suspendBFlowAlarm = false
let suspendBVolume = false
let suspendMVent = false
let t04nw2Trig = new PTrig()
let t06nw1Trig = new PTrig()
let t97PCVA09 = new PID(0.0, 4.0, 2, 2, 0, PID.DIRECT)
let t98PCVA10 = new PID(0.0, 1.2, 2, 2, 0, PID.REVERSE)
let tAlarmSilence = false
let tBypassValveOpen = false 
let tCleanCycleDate1 = 0
let tCleanCycleDate2 = 0
let tCleanCycleDate3 = 0
let tCleanCycleDate4 = 0
let tCleanCycleDate5 = 0
let tCleanCycleDate6 = 0
let tCleanCycleReason1 = 0
let tCleanCycleReason2 = 0
let tCleanCycleReason3 = 0
let tCleanCycleReason4 = 0
let tCleanCycleReason5 = 0
let tCleanCycleReason6 = 0
let tCleanCycleStartupDelay = 10
let tCleanCycles = new Counter()
let tCleanDelay = new TimerON(15 * 60)
let tCleaningAuto = true
let tCleaningCycles = 0
let tContCleanActive = 12 * 60 * 1000
let tContCleanEnable = true
let tContCleanNeeded = 6 * 60 * 1000
let tContinuousCleanTimingReal = 0
let tContinT1 = new TimerP(6 * 60)
let tContinT2 = new TimerP(12 * 60)
let tControlPowerOn = true
let tCurCleanCycles = new Counter()
let tCycleRunning = false
let tDPDelay = new TimerON(1)
let tFDP = 0
let tFilterAuto = true
let tFilterCleanCount = 0
let tFilterContinuousClean
let tFilterContinuousCleanCancel = false
let tFilterFault = false
let tFilterManual = false
let tFilterNeedsContClean = false
let tFilterOn = true
let tFilterOnly = false
let tFilterOnlyMode = false
let tFilterPark = false
let tFlowBallastSV = 0
let tFlowClO2 = 0
let tFlowFilterM3HR = 0 
let tFlowFilterRatedCapacity = 600
let tFlowLow = 50
let tGetAlarm = false
let tHalfScanners1AtFilter = false 
let tHalfScanners1AtMotor = false 
let tHalfScanners2AtFilter = false 
let tHalfScanners2AtMotor = false 
let tLastAtFilter = false
let tLastAtMotor = true
let tMotiveOperational = false
let tPowerRestore = new TimerON(3)
let tPressureDPHigh = 0.4
let tPressureDPHighHigh = 1.0
let tPressureDifferentialHigh = 0.4
let tPressureDifferentialNeg = -0.4
let tPressureInletBar = 0
let tPressureInletHigh = 5
let tPressureInletHighHigh = 7
let tPressureInletSP = 4
let tPressureOutletBar = 0
let tPressureOutletCalc = 0
let tPressureOutletLow = 0.9
let tPressureOutletLowLow = 0.05
let tPressureOutletSP = 0 
let tPulseBit0 = new PTrig()
let tPulseBit1 = new PTrig()
let tPulseBit2 = new PTrig()
let tPulseBit3 = new PTrig()
let tPulseBit4 = new PTrig()
let tPulseBit5 = new PTrig()
let tPulseBit6 = new PTrig()
let tPumpBallast = false
let tPumpBallast1Running = false
let tPumpBallast2Running = false
let tPumpEnableBypass = true
let tPumpMotive = false
let tPumpMotiveRunning
let tPumpMotiveSupply = false
let tPumpSuction1 = false
let tPumpSuction1OverloadOK = true 
let tPumpSuctionAuto = true
let tRunning = false 
let tScanCommand = false
let tScanner1 = new Scanner(30)
let tScanner1AtFilter = false
let tScanner1AtMotor = false 
let tScanner1Enable = true
let tScanner1FilterAuto = false
let tScanner1FilterManual = false 
let tScanner1MotorAuto = false
let tScanner1MotorManual = false 
let tScanner1OverloadOK = true
let tScanner1StopAuto = false
let tScanner1StopManual = false
let tScanner1Timer = new TimerON(1)
let tScanner1TimerF = new TimerON(1)
let tScanner1ToFilter = false 
let tScanner1ToMotor = false 
let tScanner1Warning = false
let tScanner2 = new Scanner(30)
let tScanner2AtFilter = false
let tScanner2AtMotor = false 
let tScanner2Enable = false
let tScanner2FilterAuto = false
let tScanner2FilterManual = false 
let tScanner2MotorAuto = false
let tScanner2MotorManual = false 
let tScanner2OverloadOK = true
let tScanner2StopAuto = false
let tScanner2StopManual = false
let tScanner2ToFilter = false 
let tScanner2ToMotor = false 
let tScanner2Warning = false
let tScanner3 = new Scanner(30)
let tScanner3AtFilter = false
let tScanner3AtMotor = false 
let tScanner3Enable = false
let tScanner3FilterAuto = false
let tScanner3FilterManual = false 
let tScanner3MotorAuto = false
let tScanner3MotorManual = false 
let tScanner3OverloadOK = true
let tScanner3StopAuto = false
let tScanner3StopManual = false
let tScanner3ToFilter = false 
let tScanner3ToMotor = false 
let tScanner3Warning = false
let tScanner4 = new Scanner(30)
let tScanner4AtFilter = false
let tScanner4AtMotor = false 
let tScanner4Enable = false
let tScanner4FilterAuto = false
let tScanner4FilterManual = false 
let tScanner4MotorAuto = false
let tScanner4MotorManual = false 
let tScanner4OverloadOK = true
let tScanner4StopAuto = false
let tScanner4StopManual = false
let tScanner4ToFilter = false 
let tScanner4ToMotor = false 
let tScanner4Warning = false
let tScannerFilterCmd = false
let tScannerMotorCmd = false 
let tScannersAllAtOnce = true
let tScannersAtFilter = false 
let tScannersAtMotor = false
let tStartManual = false
let tStartupClean = false 
let tStartupCleanDelay = new TimerON(tCleanCycleStartupDelay)
let tStartupCleanPulse = new PTrig()
let tStartupComplete = false
let tStartupTimer = new TimerON(34)
let tT403 = new TimerON(30)
let tT404 = new TimerON(5)
let tT407 = new TimerON(5)
let tT411 = new TimerON(1)
let tT412 = new TimerON(1)
let tT413 = new TimerON(3)
let tT414 = new TimerON(3)
let tT415 = new TimerON(15)
let tT416 = new TimerON(30)
let tT422 = new TimerON(3)
let tT423 = new TimerON(3)
let tT430 = new TimerON(5)
let tT431 = new TimerON(5)
let tTValveOutletCloseDelay = new TimerON(10)
let tTimeSinceLastCleanMS = 0 
let tTimedCleanDelayMS = 15 * 60 * 1000
let tTimedScannerMove = 30 * 1000
let tToFilter = false
let tToMotor = false
let tTreatFlow = false
let tValveBypassClosedLS = true
let tValveBypassRepose = false
let tValveClO2OpenPos = 100
let tValveClO2PositionPerc = 100
let tValveClO2ShutdownPos = 0
let tValveClO2StartupPos = 100
let tValveClO2Value = 100
let tValveFlush1 = false 
let tValveFlush1Auto = true
let tValveFlush1CloseAuto = false
let tValveFlush1CloseManual = false
let tValveFlush1ClosedLS = false
let tValveFlush1OpenAuto = false
let tValveFlush1OpenLS = false
let tValveFlush1OpenManual = false
let tValveFlush1Timer = new TimerON(1)
let tValveFlush1TimerO = new TimerON(1)
let tValveFlush2Auto = true
let tValveFlush2CloseAuto = false
let tValveFlush2CloseManual = false
let tValveFlush2ClosedLS = false
let tValveFlush2OpenAuto = false
let tValveFlush2OpenLS = false
let tValveFlush2OpenManual = false
let tValveInletGain = 2
let tValveInletInputFilter
let tValveInletManOn = true
let tValveInletPositionPerc = 0
let tValveInletSPFilter = 0
let tValveInletShutdownPos = 0
let tValveInletStartupPos = 35
let tValveInletTD = 0
let tValveInletTI = 2
let tValveInletValue = 0
let tValveMotive = true
let tValveMotiveCloseAuto = false
let tValveMotiveInAuto = true
let tValveMotiveOpenAuto = false 
let tValveMotiveTimer = new TimerON(1)
let tValveMotiveTimerO = new TimerON(1)
let tValveOutletGain = 2
let tValveOutletInputFilter = 0
let tValveOutletManOn = true
let tValveOutletPositionPerc = 0
let tValveOutletSP = 1.2
let tValveOutletSPFilter = 0
let tValveOutletShutdownPos = 0
let tValveOutletStartupPos = 35
let tValveOutletTD = 0
let tValveOutletTI = 2
let tValveOutletValue = 0
let tValveOverboardClosedLS = true
let tWarningRelay = false 
let ttPumpSuction1AutoStart = false
let v1SPDis = -254 //generator low vacuum warning setpoint
let v2SPDis = -76.2 //generator low vacuum alarm setpoint
let vacLvl1 = false // generator low vacuum warning
let vacLvl2 = false // generator low vacuum alarm
let z01BVA19 = false 
let z02FLA19 = false
let z03PCVA09 = false
let z04PCVA10 = false
let z05SPA09 = false 
let z06BVS11 = false
let z07BVS21 = false 
let z08FLS11 = false
let z09FLS21 = false
let z10FLS31 = false
let z11FLS41 = false
let z12PCVS01 = false
let z13PCVS03 = false
let z14SPS01 = false 
let z15PITS01 = false
let z16PITS03 = false
let z17FITS01 = false
let z18FITS03 = false
let z19BVP12 = false
let z20BVP22 = false 
let z21FLP12 = false
let z22FLP22 = false
let z23FLP32 = false
let z24FLP42 = false
let z25PCVP02 = false
let z26PCVP04 = false
let z27SPP02 = false 
let z28PITP02 = false
let z29PITP04 = false
let z30FITP02 = false
let z31FITP04 = false 
let z32BVA20 = false
let z33BV200 = false
let z34BV300 = false
let z35FCVS01 = false
let z36FCVP02 = false 
let z37FCVA09 = false 
let z38P100 = false
let z39P200 = false
let z40P300 = false
let z41AIT400 = false
let z43FIT100 = false
let z44FIT200 = false
let z45FIT300 = false 
let zAIT400 = false
let zFIT100 = false
let zFIT200 = false
let zFIT300 = false
let zFITA09 = false
let zFITA10 = false 
let zFITP02 = false
let zFITP04 = false 
let zFITS01 = false
let zFITS03 = false
let zPIT400 = false
let zPITA09 = false
let zPITA10 = false 
let zPITP02 = false
let zPITP04 = false 
let zPITS01 = false
let zPITS03 = false
