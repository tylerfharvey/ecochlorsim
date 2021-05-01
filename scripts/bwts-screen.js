"use strict";
class NavButton {
    constructor(screenNumber, buttonText) {
        this.screenNumber = screenNumber
        this.buttonText = buttonText
    }
    setScreenNumber(current_value) {
        this.screenNumber = current_value
    }
    setButtonText(current_value) {
        this.buttonText = current_value
    }
}
const getButtons = (currentScreen) => {
    let navButtons = []
    if (currentScreen < 7) {
        navButtons.push( new NavButton(1, 'Process Overview'))
        navButtons.push( new NavButton(2, 'Deballast Data'))
        navButtons.push( new NavButton(4, 'OpLog Download'))
        navButtons.push( new NavButton(5, 'Vessel Information'))
        navButtons.push( new NavButton(6, 'Ballast Totals'))
    } else if (currentScreen > 7 && currentScreen < 20) {
        navButtons.push( new NavButton(11, 'Generator'))
        navButtons.push( new NavButton(8, 'Chemical Tanks'))
        navButtons.push( new NavButton(12, 'Settings Page 1'))
        navButtons.push( new NavButton(13, 'Settings Page 2'))
        navButtons.push( new NavButton(14, 'Settings Page 3'))
        navButtons.push( new NavButton(undefined, undefined))
        navButtons.push( new NavButton(15, 'Alarms Page 1'))
        navButtons.push( new NavButton(16, 'Alarms Page 2'))
        navButtons.push( new NavButton(17, 'Alarms Page 3'))
        navButtons.push( new NavButton(18, '-'))
    } else if (currentScreen > 20 && currentScreen < 30) {
        navButtons.push( new NavButton(true, 'Stbd Filter'))
        navButtons.push( new NavButton(21, 'Overview'))
        navButtons.push( new NavButton(22, 'Clean Cycle'))
        navButtons.push( new NavButton(23, 'Valves 1'))
        navButtons.push( new NavButton(24, 'Valves 2'))
        navButtons.push( new NavButton(undefined, undefined))
        navButtons.push( new NavButton(25, 'Scanners'))
        navButtons.push( new NavButton(26, 'Suction Pump'))
        navButtons.push( new NavButton(27, 'Settings'))
        navButtons.push( new NavButton(28, 'Alarms'))
    } else if (currentScreen > 30 && currentScreen < 40) {
        navButtons.push( new NavButton(true, 'Port Filter'))
        navButtons.push( new NavButton(31, 'Overview'))
        navButtons.push( new NavButton(32, 'Clean Cycle'))
        navButtons.push( new NavButton(33, 'Valves 1'))
        navButtons.push( new NavButton(34, 'Valves 2'))
        navButtons.push( new NavButton(undefined, undefined))
        navButtons.push( new NavButton(35, 'Scanners'))
        navButtons.push( new NavButton(36, 'Suction Pump'))
        navButtons.push( new NavButton(37, 'Settings'))
        navButtons.push( new NavButton(38, 'Alarms'))
    } else if (currentScreen > 50 && currentScreen < 60) {
        navButtons.push( new NavButton(true, 'PLC1'))
        navButtons.push( new NavButton(61, 'PLC2'))
        navButtons.push( new NavButton(71, 'PLC3'))
        navButtons.push( new NavButton(141, 'PLC4'))
        navButtons.push( new NavButton(151, 'PLC5'))
        navButtons.push( new NavButton(51, 'BASE DI/DO'))
        navButtons.push( new NavButton(52, 'Slot 1 AI'))
        navButtons.push( new NavButton(53, 'Slot 2 AO'))
        navButtons.push( new NavButton(54, 'Base AI Voltage'))
    } else if (currentScreen > 60 && currentScreen < 70) {
        navButtons.push( new NavButton(51, 'PLC1'))
        navButtons.push( new NavButton(true, 'PLC2'))
        navButtons.push( new NavButton(71, 'PLC3'))
        navButtons.push( new NavButton(141, 'PLC4'))
        navButtons.push( new NavButton(151, 'PLC5'))
        navButtons.push( new NavButton(61, 'BASE DI/DO'))
        navButtons.push( new NavButton(62, 'Slot 1 DI/DO'))
        navButtons.push( new NavButton(63, 'Slot 2 AI'))
        navButtons.push( new NavButton(64, 'Slot 3 AI'))
        navButtons.push( new NavButton(65, 'Slot 4 AO'))
    } else if (currentScreen > 70 && currentScreen < 80) {
        navButtons.push( new NavButton(51, 'PLC1'))
        navButtons.push( new NavButton(61, 'PLC2'))
        navButtons.push( new NavButton(true, 'PLC3'))
        navButtons.push( new NavButton(141, 'PLC4'))
        navButtons.push( new NavButton(151, 'PLC5'))
        navButtons.push( new NavButton(71, 'BASE DI/DO'))
        navButtons.push( new NavButton(72, 'Slot 1 DI/DO'))
        navButtons.push( new NavButton(73, 'Slot 2 DI/DO'))
        navButtons.push( new NavButton(74, 'Slot 3 DI/DO'))
        navButtons.push( new NavButton(75, 'Slot 4 AI'))
        navButtons.push( new NavButton(undefined, undefined))
        navButtons.push( new NavButton(76, 'Slot 5 AI'))
        navButtons.push( new NavButton(77, 'Slot 6 AO'))
        navButtons.push( new NavButton(78, 'Slot 7 AO'))
        navButtons.push( new NavButton(79, 'Slot 8 AO'))
    } else if (currentScreen > 80 && currentScreen < 90) {
        navButtons.push( new NavButton(81, 'TECH ACCESS'))
        navButtons.push( new NavButton(82, 'ALARM REPOSE'))
        navButtons.push( new NavButton(83, 'CONFIG 1'))
        navButtons.push( new NavButton(84, 'CONFIG 2'))
        navButtons.push( new NavButton(85, 'LOGIC CHECK'))
        navButtons.push( new NavButton(86, 'VALVE TEST'))
    } else if (currentScreen > 100 && currentScreen < 110) {
        navButtons.push( new NavButton(true, 'AftP Filter'))
        navButtons.push( new NavButton(101, 'Overview'))
        navButtons.push( new NavButton(102, 'Clean Cycle'))
        navButtons.push( new NavButton(103, 'Valves 1'))
        navButtons.push( new NavButton(104, 'Valves 2'))
        navButtons.push( new NavButton(undefined, undefined))
        navButtons.push( new NavButton(105, 'Scanners'))
        navButtons.push( new NavButton(106, 'Suction Pump'))
        navButtons.push( new NavButton(107, 'Settings'))
        navButtons.push( new NavButton(108, 'Alarms'))
    } else if (currentScreen > 140 && currentScreen < 150) {
        navButtons.push( new NavButton(51, 'PLC1'))
        navButtons.push( new NavButton(61, 'PLC2'))
        navButtons.push( new NavButton(71, 'PLC3'))
        navButtons.push( new NavButton(true, 'PLC4'))
        navButtons.push( new NavButton(151, 'PLC5'))
        navButtons.push( new NavButton(141, 'DI 0-1'))
        navButtons.push( new NavButton(142, 'DO 2'))
        navButtons.push( new NavButton(143, 'AI 3-4'))
        navButtons.push( new NavButton(144, 'AO 5-6'))
    } else if (currentScreen > 150 && currentScreen < 160) {
        navButtons.push( new NavButton(51, 'PLC1'))
        navButtons.push( new NavButton(61, 'PLC2'))
        navButtons.push( new NavButton(71, 'PLC3'))
        navButtons.push( new NavButton(141, 'PLC4'))
        navButtons.push( new NavButton(true, 'PLC5'))
        navButtons.push( new NavButton(151, 'BASE DI/DO'))
        navButtons.push( new NavButton(152, 'Slot 1 DI/DO'))
        navButtons.push( new NavButton(153, 'Slot 2 AI'))
        navButtons.push( new NavButton(154, 'Slot 3 AO'))
    }
    return navButtons
}
/**
*    Screen Elements (type, value, suplement, top, left, height, width)
*
*    add a text item ie PCV-P02 
*    text = new ScreenElement('text', 'PCV-P02', '', 200, 40, 25, 100)
*    add a variable ie stbdBallastFlow 700 m3/hr supplement = unit of measure
*    variable = new ScreenElement('variable, 'portBallastFlow', 'm3/hr', 100, 50, 25, 100)
*    add an image ie tump imagea with color 0 for off 1 for on supplement 
*    image = new ScreenElement('image', "pump", "stbdBallastPump", 50, 50, 60, 60)
*    
*/
const createDocumentElement = (type, value, supplement, top, left, height, width, significantDigits = 0) => {
    let divEl = document.createElement("div")
    let suffix
    if (typeof(supplement) === 'boolean') {
        if (supplement) {suffix = 1} else {suffix = 0}
    } else {
        suffix = supplement
    }
    if (type.substr(0,4) === 'text') {
        divEl.textContent = value
    } else if (type.substr(0,4) === 'vari') {
        if (typeof(value) === 'number'){
            divEl.textContent = `${value.toFixed(significantDigits)}${suffix}`
        } else {
            divEl.textContent = `${0}${suffix}`
        }
    } else if (type === 'image') {
        divEl = document.createElement('img')
        if (typeof(significantDigits) === 'string') {divEl.id = significantDigits}
        if (suffix !== undefined) {
            divEl.src = `/TIA-Portal/${value}${suffix}.png`
        } else {
            divEl.src = `/TIA-Portal/${value}.png`
        }
    } else if (type.substr(0,4) === 'bord') {
        divEl = document.createElement('div')
    } else if (type.substr(0,4) === 'butt') {
        divEl = document.createElement('button')
        divEl.textContent = value
        divEl.addEventListener('click', supplement)
    }
    divEl.classList = `hmi-body__${type}`
    divEl.style.position = 'absolute'
    divEl.style.top = `${top}px`
    divEl.style.left = `${left}px`
    divEl.style.height = `${height}px`
    divEl.style.lineHeight = `${height}px`
    divEl.style.width = `${width}px`
    return divEl
}
const updateImage = (id, value, supplement) => {
    let divEl = document.getElementById(id)
    let suffix
    if (typeof(supplement) === 'boolean') {
        if (supplement) {suffix = 1} else {suffix = 0}
    } else {
        suffix = supplement
    }
    if (suffix !== undefined) {
        divEl.src = `/TIA-Portal/${value}${suffix}.png`
    } else {
        divEl.src = `/TIA-Portal/${value}.png`
    }
}
const getScreenElements = (currentScreen, newScreen) => {
    let sEls = []
    switch (currentScreen) {
        case 1 :
            sEls = screen1(newScreen)
            break
        case 11 :
            sEls = screen11(newScreen)
            break
        case 21 :
            sEls = screen21(newScreen)
            break
        case 22 :
            sEls = screen22(newScreen)
            break
        case 23 :
            sEls = screen23(newScreen)
            break
        case 24 :
            sEls = screen24(newScreen)
            break
        case 31 :
            sEls = screen31(newScreen)
            break
        case 32 :
            sEls = screen32(newScreen)
            break
        case 33 :
            sEls = screen33(newScreen)
            break
        case 41 :
            sEls = screen41(newScreen)
            break
        case 101 :
            sEls = screen101(newScreen)
            break
        case 102 :
            sEls = screen102(newScreen)
            break
        case 103 :
            sEls = screen103(newScreen)
            break
        default:
    }
    return sEls
}
// 0-14 Red, 14-16 yellow, 17 to 100 green
const getValveStatus = (valvePosition) => {
    let valveStatus = 0
    if (valvePosition > 16) {
        valveStatus = 2
    } else if (valvePosition > 14) {
        valveStatus = 1
    }
    return valveStatus
}
const screen1 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    //first time
    if (isNew) {
        //stbd filter images
        l0D.push(createDocumentElement('image', 'pump', sPumpBallastRunning, 135, 5, 50, 50, 'screen1_01'))
        l0D.push(createDocumentElement('image', 'pipeh', sPumpBallastRunning, 136, 56, 18, 67, 'screen1_02'))
        l0D.push(createDocumentElement('image', 'pipeh', (p3FITS01Final > 50), 136, 163, 18, 607, 'screen1_03'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(sValveInletPositionPerc), 115, 123, 40, 40, 'screen1_04'))
        l0D.push(createDocumentElement('image', 'filter', (p3FITS01Final > 50), 112, 170, 75, 150, 'screen1_05'))
        l0D.push(createDocumentElement('image', 'pump', sPumpSuction1, 170, 268, 30, 30, 'screen1_06'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(sValveOutletPositionPerc), 115, 328, 40, 40, 'screen1_07'))
        l0D.push(createDocumentElement('image', 'bypassvalve', sValveBypassClosedLS, 90, 265, 20, 45, 'screen1_08'))
        l1S.push(createDocumentElement('image', 'arrow', '', 136, 770, 18, 18))
        //aftp filter images
        l0D.push(createDocumentElement('image', 'pump', tPumpBallast || tPumpMotive, 244, 5, 50, 50, 'screen1_11'))
        l0D.push(createDocumentElement('image', 'pipeh', tPumpBallast || tPumpMotive, 245, 56, 18, 67, 'screen1_12'))
        l0D.push(createDocumentElement('image', 'pipeh', (p3FITA09Final > 50 || tPumpMotive), 246, 163, 18, 165, 'screen1_13'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(tValveInletPositionPerc), 225, 123, 40, 40, 'screen1_14'))
        l0D.push(createDocumentElement('image', 'filter', (p3FITA09Final > 50 || tPumpMotive), 222, 170, 75, 150, 'screen1_15'))
        l0D.push(createDocumentElement('image', 'pump', tPumpSuction1, 278, 268, 30, 30, 'screen1_16'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(tValveOutletPositionPerc), 225, 328, 40, 40, 'screen1_17'))
        l0D.push(createDocumentElement('image', 'bypassvalve', tValveBypassClosedLS, 200, 265, 20, 45, 'screen1_18'))
        l0D.push(createDocumentElement('image', 'pipeh', mPumpMotive, 245, 368, 18, 36, 'screen1_19'))
        //port filter images
        l0D.push(createDocumentElement('image', 'pump', pPumpBallastRunning, 355, 5, 50, 50, 'screen1_21'))
        l0D.push(createDocumentElement('image', 'pipeh', pPumpBallastRunning, 356, 56, 18, 67, 'screen1_22'))
        l0D.push(createDocumentElement('image', 'pipeh', (p3FITP02Final > 50), 356, 163, 18, 607, 'screen1_23'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(pValveInletPositionPerc), 335, 123, 40, 40, 'screen1_24'))
        l0D.push(createDocumentElement('image', 'filter', (p3FITP02Final > 50), 332, 170, 75, 150, 'screen1_25'))
        l0D.push(createDocumentElement('image', 'pump', pPumpSuction1, 390, 268, 30, 30, 'screen1_26'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(pValveOutletPositionPerc), 335, 328, 40, 40, 'screen1_27'))
        l0D.push(createDocumentElement('image', 'bypassvalve', sValveBypassClosedLS, 310, 265, 20, 45, 'screen1_28'))
        l1S.push(createDocumentElement('image', 'arrow', '', 356, 770, 18, 18))
        //motive images
        l0D.push(createDocumentElement('image', 'pump', mPumpMotive, 235, 401, 40, 40, 'screen1_31'))
        l0D.push(createDocumentElement('image', 'pipeh', mPumpMotive, 236, 442, 15, 20, 'screen1_32'))
        l1S.push(createDocumentElement('image', 'generator', '', 165, 460, 160, 150))
        l0D.push(createDocumentElement('image', 'pipeh', pipingColorStatus, 247, 609, 15, 151, 'screen1_33'))
        l0D.push(createDocumentElement('image', 'pipev', pipingColorStatus, 153, 747, 203, 15, 'screen1_34'))
        l0D.push(createDocumentElement('image', 'valvev', getValveStatus(sValveClO2PositionPerc), 161, 747, 30, 30, 'screen1_35'))
        l0D.push(createDocumentElement('image', 'valvev', getValveStatus(pValveClO2PositionPerc), 316, 747, 30, 30, 'screen1_36'))
    } else {
        //update
        updateImage('screen1_01', 'pump', sPumpBallastRunning)
        updateImage('screen1_02', 'pipeh', sPumpBallastRunning)
        updateImage('screen1_03', 'pipeh', (p3FITS01Final > 50))
        updateImage('screen1_04', 'valveh', getValveStatus(sValveInletPositionPerc))
        updateImage('screen1_05', 'filter', (p3FITS01Final > 50))
        updateImage('screen1_06', 'pump', sPumpSuction1)
        updateImage('screen1_07', 'valveh', getValveStatus(sValveOutletPositionPerc))
        updateImage('screen1_08', 'bypassvalve', sValveBypassClosedLS,)
        //aftp filter images
        updateImage('screen1_11', 'pump', tPumpBallast || tPumpMotive)
        updateImage('screen1_12', 'pipeh', tPumpBallast || tPumpMotive)
        updateImage('screen1_13', 'pipeh', (p3FITA09Final > 50 || tPumpMotive))
        updateImage('screen1_14', 'valveh', getValveStatus(tValveInletPositionPerc))
        updateImage('screen1_15', 'filter', (p3FITA09Final > 50 || tPumpMotive))
        updateImage('screen1_16', 'pump', tPumpSuction1)
        updateImage('screen1_17', 'valveh', getValveStatus(tValveOutletPositionPerc))
        updateImage('screen1_18', 'bypassvalve', tValveBypassClosedLS)
        updateImage('screen1_19', 'pipeh', mPumpMotive)
        //port filter images
        updateImage('screen1_21', 'pump', pPumpBallastRunning)
        updateImage('screen1_22', 'pipeh', pPumpBallastRunning)
        updateImage('screen1_23', 'pipeh', (p3FITP02Final > 50))
        updateImage('screen1_24', 'valveh', getValveStatus(pValveInletPositionPerc))
        updateImage('screen1_25', 'filter', (p3FITP02Final > 50))
        updateImage('screen1_26', 'pump', pPumpSuction1)
        updateImage('screen1_27', 'valveh', getValveStatus(pValveOutletPositionPerc))
        updateImage('screen1_28', 'bypassvalve', sValveBypassClosedLS)
        //motive images
        updateImage('screen1_31', 'pump', mPumpMotive)
        updateImage('screen1_32', 'pipeh', mPumpMotive)
        updateImage('screen1_33', 'pipeh', pipingColorStatus)
        updateImage('screen1_34', 'pipev', pipingColorStatus)
        updateImage('screen1_35', 'valvev', getValveStatus(sValveClO2PositionPerc))
        updateImage('screen1_36', 'valvev', getValveStatus(pValveClO2PositionPerc))
    }
    //stbd filter variables
    l2D.push(createDocumentElement('variableop', sValveInletPositionPerc, ' %', 95, 118, 20, 50))
    l2D.push(createDocumentElement('variabletr', p3PITS01Final, ' bar', 134, 187, 20, 56, 2))
    l2D.push(createDocumentElement('variabletr', p3PITS03Final, ' bar', 134, 247, 20, 56, 2))
    l2D.push(createDocumentElement('variableop', sValveOutletPositionPerc, ' %', 95, 323, 20, 50))
    l2D.push(createDocumentElement('variableop', p3FITS01Final, ' m3/hr', 135, 510, 20, 70))
    //aftp filter variables
    l2D.push(createDocumentElement('variableop', tValveInletPositionPerc, ' %', 281, 118, 20, 50))
    l2D.push(createDocumentElement('variabletr', p3PITA09Final, ' bar', 245, 187, 20, 56, 2))
    l2D.push(createDocumentElement('variabletr', p3PITA10Final, ' bar', 245, 247, 20, 56, 2))
    l2D.push(createDocumentElement('variableop', tValveOutletPositionPerc, ' %', 281, 323, 20, 50))
    //port filter variables
    l2D.push(createDocumentElement('variableop', pValveInletPositionPerc, ' %', 391, 118, 20, 50))
    l2D.push(createDocumentElement('variabletr', p3PITP02Final, ' bar', 355, 187, 20, 56, 2))
    l2D.push(createDocumentElement('variabletr', p3PITP04Final, ' bar', 355, 247, 20, 56, 2))
    l2D.push(createDocumentElement('variableop', pValveOutletPositionPerc, ' %', 391, 323, 20, 50))
    l2D.push(createDocumentElement('variableop', p3FITP02Final, ' m3/hr', 355, 510, 20, 70))
    //generator variables
    l2D.push(createDocumentElement('variabletr', setRate, ' kg/hr', 225, 460, 20, 75, 1))
    l2D.push(createDocumentElement('variabletr', p1AIT400Final, ' ppm', 225, 535, 20, 75))
    l2D.push(createDocumentElement('variabletr', p1FIT100Final, ' m3/hr', 260, 460, 20, 75, 1))
    l2D.push(createDocumentElement('variabletr', p1PIT400Final, ' mmHg', 260, 535, 20, 75))
    l2D.push(createDocumentElement('variabletr', effcncy, ' %', 295, 460, 20, 150))
    l2D.push(createDocumentElement('variableop', sValveClO2PositionPerc, ' %', 175, 690, 20, 50))
    l2D.push(createDocumentElement('variableop', p3FITS03Final, ' m3/hr', 210, 675, 20, 65, 1))
    l2D.push(createDocumentElement('variableop', p3FITP04Final, ' m3/hr', 285, 675, 20, 65, 1))
    l2D.push(createDocumentElement('variableop', pValveClO2PositionPerc, ' %', 324, 690, 20, 50))

    //stbd filter text
    l1S.push(createDocumentElement('textwh', 'STBD', '', 115, 0, 20, 60))
    l1S.push(createDocumentElement('textwh', 'PCV-S01', '', 80, 118, 20, 50))
    l1S.push(createDocumentElement('textwh', 'Stbd Bypass', '', 90, 185, 20, 80))
    l1S.push(createDocumentElement('textbl', 'PIT-S01', '', 120, 190, 20, 50))
    l1S.push(createDocumentElement('textwh', 'SP-S01', '', 165, 220, 20, 50))
    l1S.push(createDocumentElement('textbl', 'PIT-S03', '', 120, 250, 20, 50))
    l1S.push(createDocumentElement('textwh', 'PCV-S03', '', 80, 323, 20, 50))
    l1S.push(createDocumentElement('textwh', 'FIT-S01', '', 115, 510, 20, 70))
    l1S.push(createDocumentElement('textwh', 'TO BALLAST TANKS', '', 115, 673, 20, 120))
    //aftp filter text
    l1S.push(createDocumentElement('textwh', 'GSP', '', 225, 0, 20, 60))
    l1S.push(createDocumentElement('textwh', 'PCV-P02', '', 265, 118, 20, 50))
    l1S.push(createDocumentElement('textwh', 'Aft P Bypass', '', 200, 185, 20, 80))
    l1S.push(createDocumentElement('textbl', 'PIT-P02', '', 230, 190, 20, 50))
    l1S.push(createDocumentElement('textwh', 'SP-P02', '', 275, 220, 20, 50))
    l1S.push(createDocumentElement('textbl', 'PIT-P04', '', 230, 250, 20, 50))
    l1S.push(createDocumentElement('textwh', 'PCV-P04', '', 265, 323, 20, 50))
    //port filter text
    l1S.push(createDocumentElement('textwh', 'PORT', '', 335, 0, 20, 60))
    l1S.push(createDocumentElement('textwh', 'PCV-P02', '', 375, 118, 20, 50))
    l1S.push(createDocumentElement('textwh', 'Port Bypass', '', 310, 185, 20, 80))
    l1S.push(createDocumentElement('textbl', 'PIT-P02', '', 340, 190, 20, 50))
    l1S.push(createDocumentElement('textwh', 'SP-P02', '', 385, 220, 20, 50))
    l1S.push(createDocumentElement('textbl', 'PIT-P04', '', 340, 250, 20, 50))
    l1S.push(createDocumentElement('textwh', 'PCV-P04', '', 375, 323, 20, 50))
    l1S.push(createDocumentElement('textwh', 'FIT-P02', '', 375, 510, 20, 70))
    l1S.push(createDocumentElement('textwh', 'TO BALLAST TANKS', '', 375, 673, 20, 120))
    //generator text
    l1S.push(createDocumentElement('textbl', 'ClO2 Generator', '', 175, 460, 20, 150))
    l1S.push(createDocumentElement('textbl', 'Rate', '', 210, 460, 20, 75))
    l1S.push(createDocumentElement('textbl', 'AIT-400', '', 210, 535, 20, 75))
    l1S.push(createDocumentElement('textbl', 'FIT-100', '', 245, 460, 20, 75))
    l1S.push(createDocumentElement('textbl', 'PIT-400', '', 245, 535, 20, 75))
    l1S.push(createDocumentElement('textbl', 'Efficiency', '', 280, 460, 20, 150))
    l1S.push(createDocumentElement('textwh', 'FCV-P02', '', 160, 690, 20, 50))
    l1S.push(createDocumentElement('textwh', 'FIT-P04', '', 195, 675, 20, 65))
    l1S.push(createDocumentElement('textwh', 'FIT-S03', '', 270, 675, 20, 65))
    l1S.push(createDocumentElement('textwh', 'FCV-S01', '', 310, 690, 20, 50))
    
    return [l0D, l1S, l2D, l3S]
}
const screen11 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    if (isNew) {
        //Motive images
        l1S.push(createDocumentElement('image', 's11arrow', '', 206, 738, 44, 62))
        l1S.push(createDocumentElement('image', 'pipeh1', '', 221, 727, 15, 13))
        l0D.push(createDocumentElement('image', 'valveh', tValveMotive * 2, 202, 697, 34, 33, 'screen11_01'))
        l0D.push(createDocumentElement('image', 'pipeh', mPumpMotive, 221, 476, 15, 221, 'screen11_02'))
        //Purate images
        l1S.push(createDocumentElement('image', 's11tank', '', 286, 734, 67, 56))
        l1S.push(createDocumentElement('image', 'bpipeh1', '', 322, 676, 15, 59))
        l0D.push(createDocumentElement('image', 'valveh', mValvePurateOpenLS * 2, 303, 643, 34, 33, 'screen11_11'))
        l0D.push(createDocumentElement('image', 'bpipeh', puratePumpColor, 322, 463, 15, 180, 'screen11_12'))
        l0D.push(createDocumentElement('image', 'bpump', puratePumpColor, 314, 541, 38, 28, 'screen11_13'))
        l0D.push(createDocumentElement('image', 'bpipeelc', puratePumpColor, 307, 442, 30, 30, 'screen11_14'))
        l0D.push(createDocumentElement('image', 'bpipev', puratePumpColor, 291, 442, 24, 15, 'screen11_15'))
        l0D.push(createDocumentElement('image', 'bpipeela', puratePumpColor, 262, 427, 30, 30, 'screen11_16'))
        //Acid images
        l1S.push(createDocumentElement('image', 's11tank', '', 348, 10, 67, 56))
        l1S.push(createDocumentElement('image', 'apipeh1', '', 390, 65, 15, 172))
        l0D.push(createDocumentElement('image', 'valveh', mValveAcidOpenLS * 2, 371, 233, 34, 33, 'screen11_21'))
        l0D.push(createDocumentElement('image', 'apipeh', acidPumpColor, 390, 266, 15, 22, 'screen11_22'))
        l0D.push(createDocumentElement('image', 'apump', acidPumpColor, 382, 287, 38, 28, 'screen11_23'))
        l0D.push(createDocumentElement('image', 'apipev', acidPumpColor, 291, 294, 93, 15, 'screen11_24'))
        l0D.push(createDocumentElement('image', 'apipeeld', acidPumpColor, 262, 294, 30, 30, 'screen11_25'))
        l0D.push(createDocumentElement('image', 'apipeh', acidPumpColor, 262, 323, 15, 81, 'screen11_26'))
        //Flush line Images
        l0D.push(createDocumentElement('image', 'pipev', mPumpMotive, 236, 483, 23, 15, 'screen11_31'))
        l0D.push(createDocumentElement('image', 'pipeelb', mValveFlushMx, 289, 470, 30, 30, 'screen11_32'))
        l0D.push(createDocumentElement('image', 'valvev', mValveFlushMx, 259, 483, 34, 33, 'screen11_33'))
        l0D.push(createDocumentElement('image', 'pipeh', mValveFlushMx, 304, 439, 15, 36, 'screen11_34'))
        l0D.push(createDocumentElement('image', 'pipeelc', mValveFlushMx, 289, 412, 30, 30, 'screen11_35'))
        //Mixing chamber imagees
        l0D.push(createDocumentElement('image', 'pipev', pipingColorStatus, 155, 405, 138, 26, 'screen11_41'))
        l0D.push(createDocumentElement('image', 'pipeela', pipingColorStatus, 173, 430, 51, 40, 'screen11_42'))
        l0D.push(createDocumentElement('image', 'eductor', mPumpMotive, 211, 442, 26, 35, 'screen11_43'))
        //ClO2 Solution images
        l0D.push(createDocumentElement('image', 'pipeh', pipingColorStatus, 221, 330, 15, 113, 'screen11_51'))
        l0D.push(createDocumentElement('image', 'pipeelc', pipingColorStatus, 205, 303, 31, 31, 'screen11_52'))
        l0D.push(createDocumentElement('image', 'pipev', pipingColorStatus, 173, 303, 32, 15, 'screen11_53'))
        l0D.push(createDocumentElement('image', 'pipeela', pipingColorStatus, 147, 287, 31, 31, 'screen11_54'))
        l1S.push(createDocumentElement('image', 's11arrow', '', 132, 0, 44, 74))
        l0D.push(createDocumentElement('image', 'pipeh', pipingColorStatus, 147, 65, 15, 226, 'screen11_55'))
    } else {
        //Motive images
        updateImage('screen11_01', 'valveh', tValveMotive * 2)
        updateImage('screen11_02', 'pipeh', mPumpMotive)
        //Purate images
        updateImage('screen11_11', 'valveh', mValvePurateOpenLS * 2)
        updateImage('screen11_12', 'bpipeh', puratePumpColor)
        updateImage('screen11_13', 'bpump', puratePumpColor)
        updateImage('screen11_14', 'bpipeelc', puratePumpColor)
        updateImage('screen11_15', 'bpipev', puratePumpColor)
        updateImage('screen11_16', 'bpipeela', puratePumpColor)
        //Acid images
        updateImage('screen11_21', 'valveh', mValveAcidOpenLS * 2)
        updateImage('screen11_22', 'apipeh', acidPumpColor)
        updateImage('screen11_23', 'apump', acidPumpColor)
        updateImage('screen11_24', 'apipev', acidPumpColor)
        updateImage('screen11_25', 'apipeeld', acidPumpColor)
        updateImage('screen11_26', 'apipeh', acidPumpColor)
        //Flush line Images
        updateImage('screen11_31', 'pipev', mPumpMotive)
        updateImage('screen11_32', 'pipeelb', mValveFlushMx)
        updateImage('screen11_33', 'valvev', mValveFlushMx)
        updateImage('screen11_34', 'pipeh', mValveFlushMx)
        updateImage('screen11_35', 'pipeelc', mValveFlushMx)
        //Mixing chamber imagees
        updateImage('screen11_41', 'pipev', pipingColorStatus)
        updateImage('screen11_42', 'pipeela', pipingColorStatus)
        updateImage('screen11_43', 'eductor', mPumpMotive)
        //ClO2 Solution images
        updateImage('screen11_51', 'pipeh', pipingColorStatus)
        updateImage('screen11_52', 'pipeelc', pipingColorStatus)
        updateImage('screen11_53', 'pipev', pipingColorStatus)
        updateImage('screen11_54', 'pipeela', pipingColorStatus)
        updateImage('screen11_55', 'pipeh', pipingColorStatus)
    }

    //generator variables
    l2D.push(createDocumentElement('variableop', p1FIT100Final, ' m3/hr', 221, 586, 15, 78, 1))
    l2D.push(createDocumentElement('variableop', p1PIT400Final, ' mmHg', 140, 379, 15, 83, 1))
    l2D.push(createDocumentElement('variableop', mFlowBallastTotal, ' m3/hr', 148, 260, 19, 92))
    l2D.push(createDocumentElement('variableop', fPDose, ' ppm', 167, 272, 19, 65, 2))
    l2D.push(createDocumentElement('variableop', setRate, ' kg/hr', 186, 266, 19, 78, 1))
    l2D.push(createDocumentElement('variableop', p1AIT400Final, ' ppm', 137, 141, 20, 72, 1))
    l2D.push(createDocumentElement('variableop', effcncyRate, ' kg/hr', 153, 134, 20, 85, 1))
    l2D.push(createDocumentElement('variableop', effcncy, ' %', 169, 149, 15, 56, 1))
    l2D.push(createDocumentElement('variableop', bCalculatedFlowRate, ' mL/min', 370, 510, 15, 88, 1))
    l2D.push(createDocumentElement('variableop', p1FIT300Final, ' mL/min', 386, 510, 15, 88, 1))
    l2D.push(createDocumentElement('variableop', aCalculatedFlowRate, ' mL/min', 380, 370, 15, 88, 1))
    l2D.push(createDocumentElement('variableop', p1FIT200Final, ' mL/min', 396, 370, 15, 88, 1))

    //motive text
    l1S.push(createDocumentElement('textbl', 'MOTIVE', '', 207, 745, 29, 50))
    l1S.push(createDocumentElement('textbl', 'WATER', '', 222, 745, 29, 50))
    l1S.push(createDocumentElement('textwh', 'BV-A20', '', 234, 689, 17, 50))
    l1S.push(createDocumentElement('textwh', 'FIT-100', '', 202, 600, 23, 50))
    l1S.push(createDocumentElement('textwh', 'SV-100', '', 266, 520, 20, 55))
    l1S.push(createDocumentElement('textwh', 'E-100', '', 232, 446, 23, 36))
    l1S.push(createDocumentElement('textwh', 'MX-100', '', 154, 432, 23, 50))
    l1S.push(createDocumentElement('textwh', 'PIT-400', '', 120, 390, 23, 55))
    l1S.push(createDocumentElement('textwh', 'FLOW PACING', '', 130, 264, 17, 85))
    l1S.push(createDocumentElement('textwh', 'ANALYZER', '', 123, 147, 17, 65))
    l1S.push(createDocumentElement('textbl', 'CLO2', '', 134, 4, 26, 63))
    l1S.push(createDocumentElement('textbl', 'SOLUTION', '', 149, 4, 26, 63))
    //purate text
    l1S.push(createDocumentElement('textbl', 'PURATE', '', 305, 737, 15, 50))
    l1S.push(createDocumentElement('textwh', 'BV-300', '', 336, 635, 17, 50))
    l1S.push(createDocumentElement('textwh', 'P-300', '', 352, 536, 17, 39))
    l1S.push(createDocumentElement('textwh', 'C', '', 370, 495, 17, 15))
    l1S.push(createDocumentElement('textwh', 'M', '', 386, 495, 17, 15))
    //acid text
    l1S.push(createDocumentElement('textwh', 'C', '', 380, 355, 17, 15))
    l1S.push(createDocumentElement('textwh', 'M', '', 396, 355, 17, 15))
    l1S.push(createDocumentElement('textwh', 'P-200', '', 380, 315, 17, 40))
    l1S.push(createDocumentElement('textwh', 'BV-200', '', 403, 225, 17, 50))
    l1S.push(createDocumentElement('textbl', 'SULFURIC ACID', '', 364, 9, 26, 60))

    if (mGeneratorEnable && !gStartupIncrease.Q && startupIncEnabled) {
        l2D.push(createDocumentElement('image', 'increase', '', 129, 498, 71, 113))
        l2D.push(createDocumentElement('textbl', 'START-UP', '', 130, 517, 17, 70))
        l2D.push(createDocumentElement('variableop', incRate, ' kg/hr', 149, 510, 15, 88))
        l2D.push(createDocumentElement('button', 'ABORT', (e) => startupIncOITAbort = true, 170, 502, 22, 105))
    }
return [l0D, l1S, l2D, l3S]

}
const screen21 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    let treatmentStatus
    //stbd status
    if (fTreatmentDebal) {treatmentStatus = 'DEBAL'}
    if (fTreatmentBal) {treatmentStatus = 'BAL'}
    if (fTreatmentOff) {treatmentStatus = 'OFF'}
    l3S.push(createDocumentElement('button', 'FILTER MODE', (e) => sFilterAuto = !sFilterAuto, 135, 560, 25, 120))
    if (hHMI1Tech) {
        l3S.push(createDocumentElement('button', 'MANUAL MODE', (e) => {
            sFilterManual = !sFilterManual
            if (sFilterManual) {sFilterAuto = false}
        }, 185, 680, 25, 120))
    }
    if (sFilterAuto) {
        l2D.push(createDocumentElement('textgrc15', 'ENABLED', '', 135, 680, 25, 120))
    } else {
        l2D.push(createDocumentElement('textrec15', 'DISABLED', '', 135, 680, 25, 120))
    }
    if (sFilterManual) {
        l2D.push(createDocumentElement('textyec15', 'MANUAL', '', 160, 680, 25, 120))
    }
    l2D.push(createDocumentElement('textgrc15', treatmentStatus, '', 80, 0, 25, 80))
    if (isNew) {
        //aftp images
        l0D.push(createDocumentElement('image', 'pump', sPumpBallastRunning, 206, 5, 50, 50, 'screen21_01'))
        l0D.push(createDocumentElement('image', 'pipeh', sPumpBallastRunning, 206, 55, 20, 69, 'screen21_02'))
        l0D.push(createDocumentElement('image', 'pipeh', p3FITS01Final > 50, 206, 163, 20, 10, 'screen21_03'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(sValveInletPositionPerc), 186, 123, 40, 40, 'screen21_04'))
        l0D.push(createDocumentElement('image', 'filter', p3FITS01Final > 50, 142, 170, 171, 250, 'screen21_05'))
        if (csValveFlush1) {
            l0D.push(createDocumentElement('image', 'pipev', sValveFlush1OpenLS, 273, 279, 85, 15, 'screen21_11'))
            l0D.push(createDocumentElement('image', 'valvevl', sValveFlush1OpenLS * 2, 320, 258, 20, 38, 'screen21_12'))
            l0D.push(createDocumentElement('image', 'pipeelb', sValveFlush1OpenLS, 357, 265, 30, 29, 'screen21_13'))
            l0D.push(createDocumentElement('image', 'pipeh', sValveFlush1OpenLS, 372, 236, 15, 30, 'screen21_14'))
        }
        if (csValveFlush2) {
            l0D.push(createDocumentElement('image', 'pipev', sValveFlush2OpenLS, 273, 216, 90, 15, 'screen21_15'))
            l0D.push(createDocumentElement('image', 'valvevl', sValveFlush2Status * 2, 320, 195, 20, 38, 'screen21_16'))
        }
        if (csScanner1) {
            l0D.push(createDocumentElement('image', 'smotor', sScanner1Status, 157, 457, 30, 30, 'screen21_21'))
            l0D.push(createDocumentElement('image', 'smotor', '', 165, 417, 14, 43, 'screen21_22'))
        }
        if (csScanner2) {
            l0D.push(createDocumentElement('image', 'smotor', sScanner2Status, 187, 457, 30, 30, 'screen21_31'))
            l0D.push(createDocumentElement('image', 'smotor', '', 195, 417, 14, 43, 'screen21_32'))
        }
        if (csScanner3) {
            l0D.push(createDocumentElement('image', 'smotor', sScanner3Status, 217, 457, 30, 30, 'screen21_41'))
            l0D.push(createDocumentElement('image', 'smotor', '', 225, 417, 14, 43, 'screen21_42'))
        }
        if (csScanner4) {
            l0D.push(createDocumentElement('image', 'smotor', sScanner4Status, 247, 457, 30, 30, 'screen21_51'))
            l0D.push(createDocumentElement('image', 'smotor', '', 255, 417, 14, 43, 'screen21_52'))
        }
        //flush line
        l0D.push(createDocumentElement('image', 'pipeh', sPumpSuction1, 360, 107, 15, 94, 'screen21_61'))
        l0D.push(createDocumentElement('image', 'pumpl', sPumpSuction1, 360, 200, 40, 40, 'screen21_62'))
        l1S.push(createDocumentElement('image', 'arrowl', '', 360, 87, 15, 20))
        //filter discharge
        l0D.push(createDocumentElement('image', 'pipev', (p3FITS01Final > 50), 273, 313, 78, 20, 'screen21_71'))
        l0D.push(createDocumentElement('image', 'pipeelc', (p3FITS01Final > 50), 350, 313, 40, 39, 'screen21_72'))
        l0D.push(createDocumentElement('image', 'pipeh', (p3FITS01Final > 50), 370, 391, 20, 377, 'screen21_73'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(sValveOutletPositionPerc), 349, 351, 40, 40, 'screen21_74'))
        l1S.push(createDocumentElement('image', 'arrow', '', 370, 769, 20, 20))
        l0D.push(createDocumentElement('image', 'bypassvalve', sValveBypassClosedLS, 114, 279, 30, 30, 'screen21_75'))
        //motive line
        if (csValveMotive) {
            l0D.push(createDocumentElement('image', 'pipev', sValveMotiveOpenLS, 319, 457, 51, 15, 'screen21_81'))
            l0D.push(createDocumentElement('image', 'pipeeld', sValveMotiveOpenLS, 291, 457, 30, 29, 'screen21_82'))
            l0D.push(createDocumentElement('image', 'valvevl', sValveMotive, 330, 436, 20, 38, 'screen21_83'))
            l1S.push(createDocumentElement('textwh', 'BV-S15', '', 316, 405, 20, 60))
        }
        l0D.push(createDocumentElement('image', 'pipeh', mPumpMotive, 280, 523, 15, 15, 'screen21_84'))
        l0D.push(createDocumentElement('image', 'pump', mPumpMotive, 279, 483, 40, 40, 'screen21_85'))
        l1S.push(createDocumentElement('image', 'arrow', '', 280, 537, 15, 20))
        //ClO2 line
        l1S.push(createDocumentElement('image', 'arrow', '', 320, 598, 15, 20))
        l0D.push(createDocumentElement('image', 'pipeh', pipingColorStatus, 320, 619, 15, 85, 'screen21_91'))
        l0D.push(createDocumentElement('image', 'pipeela', pipingColorStatus, 320, 733, 30, 30, 'screen21_92'))
        l0D.push(createDocumentElement('image', 'pipev', pipingColorStatus, 340, 748, 31, 15, 'screen21_93'))
        l0D.push(createDocumentElement('image', 'valveh', getValveStatus(sValveClO2PositionPerc), 305, 703, 30, 30, 'screen21_94'))
    } else {
        //aftp images
        updateImage('screen21_01', 'pump', sPumpBallastRunning)
        updateImage('screen21_02', 'pipeh', sPumpBallastRunning)
        updateImage('screen21_03', 'pipeh', p3FITS01Final > 50)
        updateImage('screen21_04', 'valveh', getValveStatus(sValveInletPositionPerc))
        updateImage('screen21_05','filter', p3FITS01Final > 50)
        if (csValveFlush1) {
            updateImage('screen21_11','pipev', sValveFlush1OpenLS)
            updateImage('screen21_12','valvevl', sValveFlush1OpenLS * 2)
            updateImage('screen21_13','pipeelb', sValveFlush1OpenLS)
            updateImage('screen21_14','pipeh', sValveFlush1OpenLS)
        }
        if (csValveFlush2) {
            updateImage('screen21_15','pipev', sValveFlush2OpenLS)
            updateImage('screen21_16','valvevl', sValveFlush2Status * 2)
        }
        if (csScanner1) {
            updateImage('screen21_21','smotor', sScanner1Status)
            updateImage('screen21_22','smotor', '')
        }
        if (csScanner2) {
            updateImage('screen21_31','smotor', sScanner2Status)
            updateImage('screen21_32','smotor', '')
        }
        if (csScanner3) {
            updateImage('screen21_41','smotor', sScanner3Status)
            updateImage('screen21_42','smotor', '')
        }
        if (csScanner4) {
            updateImage('screen21_51','smotor', sScanner4Status)
            updateImage('screen21_52','smotor', '')
        }
        //flush line
        updateImage('screen21_61','pipeh', sPumpSuction1)
        updateImage('screen21_62','pumpl', sPumpSuction1)
        //filter discharge
        updateImage('screen21_71','pipev', (p3FITS01Final > 50))
        updateImage('screen21_72','pipeelc', (p3FITS01Final > 50))
        updateImage('screen21_73','pipeh', (p3FITS01Final > 50))
        updateImage('screen21_74','valveh', getValveStatus(sValveOutletPositionPerc))
        updateImage('screen21_75','bypassvalve', sValveBypassClosedLS)
        //motive line
        if (csValveMotive) {
            updateImage('screen21_81','pipev', sValveMotiveOpenLS)
            updateImage('screen21_82','pipeeld', sValveMotiveOpenLS)
            updateImage('screen21_83','valvevl', sValveMotive)
        }
        updateImage('screen21_84','pipeh', mPumpMotive)
        updateImage('screen21_85','pump', mPumpMotive)
        //ClO2 line
        updateImage('screen21_91','pipeh', pipingColorStatus)
        updateImage('screen21_92','pipeela', pipingColorStatus)
        updateImage('screen21_93','pipev', pipingColorStatus)
        updateImage('screen21_94','valveh', getValveStatus(sValveClO2PositionPerc))
    }
    if (csValveFlush1) {
        l1S.push(createDocumentElement('textwh', 'BV-S11', '', 306, 232, 20, 50))
    }
    if (csValveFlush2) {
        l1S.push(createDocumentElement('textwh', 'BV-S21', '', 306, 169, 20, 50))
    }
    if (csScanner1) {
        l1S.push(createDocumentElement('textwh', 'FIL-S11', '', 162, 489, 20, 50))
        if (sScanner1AtFilter) {
            l2D.push(createDocumentElement('image', 'filterls', '', 165, 417, 14, 8))
        }
        if (sScanner1AtMotor) {
            l2D.push(createDocumentElement('image', 'filterls', '', 165, 454, 14, 8))
        }
        if (sScanner1ToFilter) {
            l2D.push(createDocumentElement('image', 'tofilter', '', 162, 420, 20, 40))
        }
        if (sScanner1ToMotor) {
            l2D.push(createDocumentElement('image', 'tomotor', '', 162, 420, 20, 40))
        }
    }
    if (csScanner2) {
        l1S.push(createDocumentElement('textwh', 'FIL-S21', '', 192, 489, 20, 50))
        if (sScanner2AtFilter) {
            l2D.push(createDocumentElement('image', 'filterls', '', 195, 417, 14, 8))
        }
        if (sScanner2AtMotor) {
            l2D.push(createDocumentElement('image', 'filterls', '', 195, 454, 14, 8))
        }
        if (sScanner2ToFilter) {
            l2D.push(createDocumentElement('image', 'tofilter', '', 192, 420, 20, 40))
        }
        if (sScanner2ToMotor) {
            l2D.push(createDocumentElement('image', 'tomotor', '', 192, 420, 20, 40))
        }
    }
    if (csScanner3) {
        l1S.push(createDocumentElement('textwh', 'FIL-S31', '', 222, 489, 20, 50))
        if (sScanner3AtFilter) {
            l2D.push(createDocumentElement('image', 'filterls', '', 225, 417, 14, 8))
        }
        if (sScanner3AtMotor) {
            l2D.push(createDocumentElement('image', 'filterls', '', 225, 454, 14, 8))
        }
        if (sScanner3ToFilter) {
            l2D.push(createDocumentElement('image', 'tofilter', '', 222, 420, 20, 40))
        }
        if (sScanner3ToMotor) {
            l2D.push(createDocumentElement('image', 'tomotor', '', 222, 420, 20, 40))
        }
    }
    if (csScanner4) {
        l1S.push(createDocumentElement('textwh', 'FIL-S41', '', 252, 489, 20, 50))
        if (sScanner4AtFilter) {
            l2D.push(createDocumentElement('image', 'filterls', '', 255, 417, 14, 8))
        }
        if (sScanner4AtMotor) {
            l2D.push(createDocumentElement('image', 'filterls', '', 255, 454, 14, 8))
        }
        if (sScanner4ToFilter) {
            l2D.push(createDocumentElement('image', 'tofilter', '', 252, 420, 20, 40))
        }
        if (sScanner4ToMotor) {
            l2D.push(createDocumentElement('image', 'tomotor', '', 252, 420, 20, 40))
        }
    }
        //aftp variables
    l2D.push(createDocumentElement('variableop', sValveInletPositionPerc, ' %', 166, 118, 20, 50))
    l2D.push(createDocumentElement('variabletr', p3PITS01Final, ' bar', 211, 201, 20, 60, 2))
    l2D.push(createDocumentElement('variabletr', sFDP, ' bar', 211, 270, 20, 60, 2))
    l2D.push(createDocumentElement('variabletr', p3PITS03Final, ' bar', 211, 339, 20, 60, 2))
    l2D.push(createDocumentElement('variableop', sValveOutletPositionPerc, ' %', 329, 347, 20, 50))
    l2D.push(createDocumentElement('variableop', p3FITS01Final, ' m3/hr', 370, 560, 20, 70))
    l2D.push(createDocumentElement('variableop', p3FITS03Final, ' m3/hr', 318, 629, 20, 60, 1))
    l2D.push(createDocumentElement('variableop', sValveClO2PositionPerc, ' %', 285, 698, 20, 60))
    //aftp text
    l1S.push(createDocumentElement('textwh', 'GSP', '', 190, 0, 20, 60))
    l1S.push(createDocumentElement('textwh', 'PCV-S01', '', 151, 115, 20, 56))
    l1S.push(createDocumentElement('textwh', 'BYPASS', '', 121, 194, 20, 90))
    l1S.push(createDocumentElement('textbl', 'PIT-S01', '', 197, 206, 20, 50))
    l1S.push(createDocumentElement('textbl', 'DP', '', 197, 275, 20, 50))
    l1S.push(createDocumentElement('textbl', 'PIT-S03', '', 197, 344, 20, 50))
    l1S.push(createDocumentElement('textwh', 'OVERBOARD', '', 345, 98, 20, 90))
    l1S.push(createDocumentElement('textwh', 'SP-S01', '', 393, 154, 20, 50))
    l1S.push(createDocumentElement('textwh', 'PCV-S03', '', 314, 344, 20, 56))
    l1S.push(createDocumentElement('textwh', 'P-100', '', 318, 482, 20, 56))
    l1S.push(createDocumentElement('textwh', 'TO GEN', '', 278, 557, 20, 56))
    l1S.push(createDocumentElement('textwh', 'FROM GEN', '', 318, 533, 20, 68))
    l1S.push(createDocumentElement('textwh', 'FIT-S01', '', 350, 560, 20, 70))
    l1S.push(createDocumentElement('textwh', 'FIT-S03', '', 303, 629, 20, 65))
    l1S.push(createDocumentElement('textwh', 'FCV-S01', '', 270, 695, 20, 56))
return [l0D, l1S, l2D, l3S]
}
const screen22 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    l1S.push(createDocumentElement('bordera', '', '', 170, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 170, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 195, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 195, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 220, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 220, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 245, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 245, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 270, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 270, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 295, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 295, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 320, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 320, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 345, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 345, 400, 25, 400))
    l1S.push(createDocumentElement('textwhc15', 'Stbd Filter Cleaning Cycles', '', 145, 250, 25, 300))
    l1S.push(createDocumentElement('textwhl15', 'Stbd Cleaning Count', '', 170, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Stbd Manual Cleaning Cycle', '', 195, 2, 25, 240))
    l3S.push(createDocumentElement('button', 'START', (e) => {sStartManual = true}, 195, 250, 25, 100))
    l1S.push(createDocumentElement('textwhl15', 'Differential Pressure', '', 220, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Inerval Clean Time Remaining', '', 245, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Filter Only Mode', '', 270, 2, 25, 240))
    l3S.push(createDocumentElement('button', 'OFF', (e) => {
        mFilterOnlyMode = !mFilterOnlyMode
        e.target.textContent = (mFilterOnlyMOde ? 'ON' : 'OFF')
    }, 270, 250, 25, 100))
    l1S.push(createDocumentElement('textwhl15', 'Continuous Clean Run Time', '', 295, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Continuous Clean Cancel', '', 320, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Stbd Filter Park', '', 345, 2, 25, 240))    
    let currentText = (tFilterPark ? 'PARKING' : 'PARK')
    l3S.push(createDocumentElement('button', currentText, (e) => {
        sFilterPark = !sFilterPark
        e.target.textContent = (sFilterPark ? 'PARKING' : 'PARK')
    }, 345, 250, 25, 100))        
    l1S.push(createDocumentElement('textwhc15', 'Stbd Cleaning History', '', 170, 400, 25, 400))
    l1S.push(createDocumentElement('textwhc15', 'Time', '', 195, 400, 25, 200))
    l1S.push(createDocumentElement('textwhc15', 'Reason For Clean', '', 195, 600, 25, 200))

    l2D.push(createDocumentElement('variablewhc15', sCleaningCycles, '', 170, 250, 25, 100))
    l2D.push(createDocumentElement('variablewhc15', sFDP, ' bar', 220, 250, 25, 100, 2))
    l2D.push(createDocumentElement('variablewhc15', sTimeToNexCleanMin, ' min', 245, 250, 25, 100, 1))
    l2D.push(createDocumentElement('variablewhc15', sContinuousCleanTimingReal, ' min', 295, 250, 25, 100, 1))
    if (sFilterContinuousClean) {
        l2D.push(createDocumentElement('textwhl15', 'Continuous Clean Run Time', '', 295, 2, 25, 240))
        l2D.push(createDocumentElement('textwhl15', 'Continuous Clean Cancel', '', 320, 2, 25, 240))
        l3S.push(createDocumentElement('button', 'CANCEL', (e) => {sFilterContinuousCleanCancel = true}, 320, 250, 25, 100))
    }
    if (sScannersAtMotor) {
        l2D.push(createDocumentElement('textgrc15', 'PARKED', '', 370, 250, 25, 100))
    }
    l2D.push(createDocumentElement('textwhc15', moment(sCleanCycleDate1).format('MM/DD/YYYY h:mm:ss A'), '', 220, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(sCleanCycleReason1), '', 220, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(sCleanCycleDate2).format('MM/DD/YYYY h:mm:ss A'), '', 245, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(sCleanCycleReason2), '', 245, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(sCleanCycleDate3).format('MM/DD/YYYY h:mm:ss A'), '', 270, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(sCleanCycleReason3), '', 270, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(sCleanCycleDate4).format('MM/DD/YYYY h:mm:ss A'), '', 295, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(sCleanCycleReason4), '', 295, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(sCleanCycleDate5).format('MM/DD/YYYY h:mm:ss A'), '', 320, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(sCleanCycleReason5), '', 320, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(sCleanCycleDate6).format('MM/DD/YYYY h:mm:ss A'), '', 345, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(sCleanCycleReason6), '', 345, 600, 25, 200))

    return [l0D, l1S, l2D, l3S]

}
const screen23 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    let currentText
    if (true) {
        l1S.push(createDocumentElement('bordera', '', '', 145, 0, 67, 800))
        l1S.push(createDocumentElement('bordera', '', '', 212, 0, 67, 800))
        l1S.push(createDocumentElement('bordera', '', '', 279, 0, 67, 800))
        l1S.push(createDocumentElement('bordert', '', '', 346, 0, 67, 800))
        l1S.push(createDocumentElement('textwhc15', 'Stbd Filter Valve Operation Page 1', '', 120, 250, 25, 300))
        if (csValveFlush1) {
            if(isNew) {
                l0D.push(createDocumentElement('image', 'valveh', sValveFlush1Status, 150, 295, 57, 30, 'screen23_01'))
            } else {
                updateImage('screen23_01', 'valveh', sValveFlush1Status)
            }
                l1S.push(createDocumentElement('textwhl15', 'BV-S11 Filter Flush 1', '', 166, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = sValveFlush1Auto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveFlush1Auto = !sValveFlush1Auto
                e.target.textContent = sValveFlush1Auto ? 'AUTO' : 'MANUAL'
            }, 166, 350, 25, 100))
            //Open Button
            currentText = sValveFlush1ClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveFlush1OpenManual = true
                e.target.textContent = sValveFlush1ClosedLS ? 'OPEN' : ''
            }, 166, 460, 25, 100))
            //Close Button
            currentText = sValveFlush1OpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveFlush1CloseManual = true
                e.target.textContent = sValveFlush1OpenLS ? 'CLOSE' : ''
            }, 166, 570, 25, 100))
        }
        if (csValveMotive) {
            if (isNew) {
                l0D.push(createDocumentElement('image', 'valveh0', '', 217, 295, 57, 30, 'screen23_02'))
            } else {
                updateImage('screen23_02', 'valveh', '0')
            }
            l1S.push(createDocumentElement('textwhl15', 'BV-S15 Motive Valve', '', 233, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = sValveMotiveAuto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveMotiveAuto = !sValveMotiveAuto
                e.target.textContent = sValveMotiveAuto ? 'AUTO' : 'MANUAL'
            }, 233, 350, 25, 100))
            //Open Button
            currentText = sValveMotiveClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveMotiveOpenManual = true
                e.target.textContent = sValveMotiveClosedLS ? 'OPEN' : ''
            }, 233, 460, 25, 100))
            //Close Button
            currentText = sValveMotiveOpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveMotiveCloseManual = true
                e.target.textContent = sValveMotiveOpenLS ? 'CLOSE' : ''
            }, 233, 570, 25, 100))
        }
        if (csValveFlush2) {
            if (isNew) {
                l0D.push(createDocumentElement('image', 'valveh', sValveFlush2Status, 284, 295, 57, 30, 'screen23_03'))
            } else {
                updateImage('screen23_03', 'valveh', sValveFlush2Status)
            }
            l1S.push(createDocumentElement('textwhl15', 'BV-S21 Filter Flush 2', '', 300, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = sValveFlush2Auto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveFlush2Auto = !sValveFlush2Auto
                e.target.textContent = sValveFlush2Auto ? 'AUTO' : 'MANUAL'
            }, 300, 350, 25, 100))
            //Open Button
            currentText = sValveFlush2ClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveFlush2OpenManual = true
                e.target.textContent = sValveFlush2ClosedLS ? 'OPEN' : ''
            }, 300, 460, 25, 100))
            //Close Button
            currentText = sValveFlush2OpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                sValveFlush2CloseManual = true
                e.target.textContent = sValveFlush2OpenLS ? 'CLOSE' : ''
            }, 300, 570, 25, 100))
        }
    return [l0D, l1S, l2D, l3S]

    }
}
const screen24 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    //stbd filter images
    l1S.push(createDocumentElement('bordera', '', '', 170, 0, 75, 800))
    l1S.push(createDocumentElement('bordera', '', '', 245, 0, 75, 800))
    l1S.push(createDocumentElement('bordera', '', '', 320, 0, 75, 800))
    l1S.push(createDocumentElement('textwhc15', 'Stbd Filter Valve Operation Page 2', '', 145, 250, 25, 300))
    //stbd inlet valve
    l1S.push(createDocumentElement('textwhl15', 'PCV-S01 Filter Inlet Pressure Control Valve', '', 170, 2, 25, 400))
    l1S.push(createDocumentElement('textwhc15', 'CV', '', 195, 205, 25, 100))
    l1S.push(createDocumentElement('textwhc15', 'SP', '', 195, 315, 25, 100))
    l1S.push(createDocumentElement('textwhc15', 'PV', '', 195, 425, 25, 100))
    l1S.push(createDocumentElement('textwhc15', 'P', '', 195, 535, 25, 80))
    l1S.push(createDocumentElement('textwhc15', 'I', '', 195, 625, 25, 80))
    l1S.push(createDocumentElement('textwhc15', 'D', '', 195, 715, 25, 80))
    let sInText
    sValveInletManOn ? sInText = 'MANUAL' : 'AUTO'
    l3S.push(createDocumentElement('button', sInText, (e) => {
        sValveInletManOn = !sValveInleManOn
    }, 220, 5, 25, 90))
    l3S.push(createDocumentElement('button', 'TREND', (e) => {
        hHMI1Screen = 131
    }, 220, 105, 25, 90))
    l2D.push(createDocumentElement('variableblue', sValveInletPositionPerc, ' %', 220, 205, 25, 100))
    l2D.push(createDocumentElement('inputyell', sValveInletSPFilter, ' bar', 220, 205, 25, 100))
    l2D.push(createDocumentElement('variablegree', `${sValveInletInputFilter} bar`, (e) => {
        
    }, 220, 205, 25, 100))
    l2D.push(createDocumentElement('inputblac', sValveInletGain, ' %', 220, 535, 25, 80))
    l2D.push(createDocumentElement('inputblac', sValveInletTI, ' %', 220, 625, 25, 80))
    l2D.push(createDocumentElement('inputblac', sValveInletTD, ' %', 220, 715, 25, 80))




    return [l0D, l1S, l2D, l3S] = []

}
const screen31 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    let treatmentStatus
    //asftp status
    if (fTreatmentDebal) {treatmentStatus = 'DEBAL'}
    if (fTreatmentBal) {treatmentStatus = 'BAL'}
    if (fTreatmentOff) {treatmentStatus = 'OFF'}
    l3S.push(createDocumentElement('button', 'FILTER MODE', (e) => pFilterAuto = !pFilterAuto, 135, 560, 25, 120))
    if (hHMI1Tech) {
        l3S.push(createDocumentElement('button', 'MANUAL MODE', (e) => {
            pFilterManual = !pFilterManual
            if (pFilterManual) {pFilterAuto = false}
        }, 185, 680, 25, 120))
    }
    if (pFilterAuto) {
        l0D.push(createDocumentElement('textgrc15', 'ENABLED', '', 135, 680, 25, 120))
    } else {
        l0D.push(createDocumentElement('textrec15', 'DISABLED', '', 135, 680, 25, 120))
    }
    if (pFilterManual) {
        l0D.push(createDocumentElement('textyec15', 'MANUAL', '', 160, 680, 25, 120))
    }

    l0D.push(createDocumentElement('textgr', treatmentStatus, '', 80, 0, 25, 80))
    //aftp images
    l0D.push(createDocumentElement('image', 'pump', pPumpBallastRunning, 206, 5, 50, 50))
    l0D.push(createDocumentElement('image', 'pipeh', pPumpBallastRunning, 206, 55, 20, 69))
    l0D.push(createDocumentElement('image', 'pipeh', p3FITP02Final > 50, 206, 163, 20, 10))
    l0D.push(createDocumentElement('image', 'valveh', getValveStatus(pValveInletPositionPerc), 186, 123, 40, 40))
    l0D.push(createDocumentElement('image', 'filter', p3FITP02Final > 50, 142, 170, 171, 250))
    if (cpValveFlush1) {
        l0D.push(createDocumentElement('image', 'pipev', pValveFlush1OpenLS, 273, 279, 85, 15))
        l0D.push(createDocumentElement('image', 'valvevl', pValveFlush1OpenLS * 2, 320, 258, 20, 38))
        l0D.push(createDocumentElement('image', 'pipeelb', pValveFlush1OpenLS, 357, 265, 30, 29))
        l0D.push(createDocumentElement('image', 'pipeh', pValveFlush1OpenLS, 372, 236, 15, 30))
        l1S.push(createDocumentElement('textwh', 'BV-P12', '', 306, 232, 20, 50))
    }
    if (cpValveFlush2) {
        l0D.push(createDocumentElement('image', 'pipev', pValveFlush2OpenLS, 273, 216, 90, 15))
        l0D.push(createDocumentElement('image', 'valvevl', pValveFlush2Status * 2, 320, 195, 20, 38))
        l1S.push(createDocumentElement('textwh', 'BV-P22', '', 306, 169, 20, 50))
    }
    if (cpScanner1) {
        l0D.push(createDocumentElement('image', 'smotor', pScanner1Status, 157, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 165, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-P12', '', 162, 489, 20, 50))
        if (pScanner1AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 165, 417, 14, 8))
        }
        if (pScanner1AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 165, 454, 14, 8))
        }
        if (pScanner1ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 162, 420, 20, 40))
        }
        if (pScanner1ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 162, 420, 20, 40))
        }
    }
    if (cpScanner2) {
        l0D.push(createDocumentElement('image', 'smotor', pScanner2Status, 187, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 195, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-P22', '', 192, 489, 20, 50))
        if (pScanner2AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 195, 417, 14, 8))
        }
        if (pScanner2AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 195, 454, 14, 8))
        }
        if (pScanner2ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 192, 420, 20, 40))
        }
        if (pScanner2ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 192, 420, 20, 40))
        }
    }
    if (cpScanner3) {
        l0D.push(createDocumentElement('image', 'smotor', pScanner3Status, 217, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 225, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-P32', '', 222, 489, 20, 50))
        if (pScanner3AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 225, 417, 14, 8))
        }
        if (pScanner3AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 225, 454, 14, 8))
        }
        if (pScanner3ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 222, 420, 20, 40))
        }
        if (pScanner3ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 222, 420, 20, 40))
        }
    }
    if (cpScanner4) {
        l0D.push(createDocumentElement('image', 'smotor', pScanner4Status, 247, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 255, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-P42', '', 252, 489, 20, 50))
        if (pScanner4AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 255, 417, 14, 8))
        }
        if (pScanner4AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 255, 454, 14, 8))
        }
        if (pScanner4ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 252, 420, 20, 40))
        }
        if (pScanner4ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 252, 420, 20, 40))
        }
    }
    //flush line
    l0D.push(createDocumentElement('image', 'pipeh', pPumpSuction1, 360, 107, 15, 94))
    l0D.push(createDocumentElement('image', 'pumpl', pPumpSuction1, 360, 200, 40, 40))
    l0D.push(createDocumentElement('image', 'arrowl', '', 360, 87, 15, 20))
    //filter discharge
    l0D.push(createDocumentElement('image', 'pipev', (p3FITP02Final > 50), 273, 313, 78, 20))
    l0D.push(createDocumentElement('image', 'pipeelc', (p3FITP02Final > 50), 350, 313, 40, 39))
    l0D.push(createDocumentElement('image', 'pipeh', (p3FITP02Final > 50), 370, 391, 20, 377))
    l0D.push(createDocumentElement('image', 'valveh', getValveStatus(pValveOutletPositionPerc), 349, 351, 40, 40))
    l0D.push(createDocumentElement('image', 'arrow', '', 370, 769, 20, 20))
    l0D.push(createDocumentElement('image', 'bypassvalve', pValveBypassClosedLS, 114, 279, 30, 30))
    //motive line
    if (cpValveMotive) {
        l0D.push(createDocumentElement('image', 'pipev', pValveMotiveOpenLS, 319, 457, 51, 15))
        l0D.push(createDocumentElement('image', 'pipeeld', pValveMotiveOpenLS, 291, 457, 30, 29))
        l0D.push(createDocumentElement('image', 'valvevl', pValveMotive, 330, 436, 20, 38))
        l1S.push(createDocumentElement('textwh', 'BV-P16', '', 316, 405, 20, 60))
    }
    l0D.push(createDocumentElement('image', 'pipeh', mPumpMotive, 280, 523, 15, 15))
    l0D.push(createDocumentElement('image', 'pump', mPumpMotive, 279, 483, 40, 40))
    l0D.push(createDocumentElement('image', 'arrow', '', 280, 537, 15, 20))
    //ClO2 line
    l0D.push(createDocumentElement('image', 'arrow', '', 320, 598, 15, 20))
    l0D.push(createDocumentElement('image', 'pipeh', pipingColorStatus, 320, 619, 15, 85))
    l0D.push(createDocumentElement('image', 'pipeela', pipingColorStatus, 320, 733, 30, 30))
    l0D.push(createDocumentElement('image', 'pipev', pipingColorStatus, 340, 748, 31, 15))
    l0D.push(createDocumentElement('image', 'valveh', getValveStatus(pValveClO2PositionPerc), 305, 703, 30, 30))
    //aftp variables
    l2D.push(createDocumentElement('variableop', pValveInletPositionPerc, ' %', 166, 118, 20, 50))
    l2D.push(createDocumentElement('variabletr', p3PITP02Final, ' bar', 211, 201, 20, 60, 2))
    l2D.push(createDocumentElement('variabletr', pFDP, ' bar', 211, 270, 20, 60, 2))
    l2D.push(createDocumentElement('variabletr', p3PITP04Final, ' bar', 211, 339, 20, 60, 2))
    l2D.push(createDocumentElement('variableop', pValveOutletPositionPerc, ' %', 329, 347, 20, 50))
    l2D.push(createDocumentElement('variableop', p3FITP02Final, ' m3/hr', 370, 560, 20, 70))
    l2D.push(createDocumentElement('variableop', p3FITP04Final, ' m3/hr', 318, 629, 20, 60, 1))
    l2D.push(createDocumentElement('variableop', pValveClO2PositionPerc, ' %', 285, 698, 20, 60))
    //aftp pext
    l1S.push(createDocumentElement('textwh', 'GSP', '', 190, 0, 20, 60))
    l1S.push(createDocumentElement('textwh', 'PCV-P02', '', 151, 115, 20, 56))
    l1S.push(createDocumentElement('textwh', 'BYPASS', '', 121, 194, 20, 90))
    l1S.push(createDocumentElement('textbl', 'PIT-P02', '', 197, 206, 20, 50))
    l1S.push(createDocumentElement('textbl', 'DP', '', 197, 275, 20, 50))
    l1S.push(createDocumentElement('textbl', 'PIT-P04', '', 197, 344, 20, 50))
    l1S.push(createDocumentElement('textwh', 'OVERBOARD', '', 345, 98, 20, 90))
    l1S.push(createDocumentElement('textwh', 'SP-P02', '', 393, 154, 20, 50))
    l1S.push(createDocumentElement('textwh', 'PCV-P04', '', 314, 344, 20, 56))
    l1S.push(createDocumentElement('textwh', 'P-100', '', 318, 482, 20, 56))
    l1S.push(createDocumentElement('textwh', 'TO GEN', '', 278, 557, 20, 56))
    l1S.push(createDocumentElement('textwh', 'FROM GEN', '', 318, 533, 20, 68))
    l1S.push(createDocumentElement('textwh', 'FIT-P02', '', 350, 560, 20, 70))
    l1S.push(createDocumentElement('textwh', 'FIT-P04', '', 303, 629, 20, 65))
    l1S.push(createDocumentElement('textwh', 'FCV-P02', '', 270, 695, 20, 56))
return [l0D, l1S, l2D, l3S]
    
}
const screen32 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    l1S.push(createDocumentElement('bordera', '', '', 170, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 170, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 195, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 195, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 220, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 220, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 245, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 245, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 270, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 270, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 295, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 295, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 320, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 320, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 345, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 345, 400, 25, 400))
    l1S.push(createDocumentElement('textwhc15', 'Port Filter Cleaning Cycles', '', 145, 250, 25, 300))
    l1S.push(createDocumentElement('textwhl15', 'Port Cleaning Count', '', 170, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Port Manual Cleaning Cycle', '', 195, 2, 25, 240))
    l1S.push(createDocumentElement('button', 'START', (e) => {pStartManual = true}, 195, 250, 25, 100))
    l1S.push(createDocumentElement('textwhl15', 'Differential Pressure', '', 220, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Inerval Clean Time Remaining', '', 245, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Filter Only Mode', '', 270, 2, 25, 240))
    l1S.push(createDocumentElement('button', 'OFF', (e) => {
        mFilterOnlyMode = !mFilterOnlyMode
        e.target.textContent = (mFilterOnlyMOde ? 'ON' : 'OFF')
    }, 270, 250, 25, 100))
    l1S.push(createDocumentElement('textwhl15', 'Continuous Clean Run Time', '', 295, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Continuous Clean Cancel', '', 320, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Port Filter Park', '', 345, 2, 25, 240))    
    let currentText = (pFilterPark ? 'PARKING' : 'PARK')
    l1S.push(createDocumentElement('button', currentText, (e) => {
        pFilterPark = !pFilterPark
        e.target.textContent = (sFilterPark ? 'PARKING' : 'PARK')
    }, 345, 250, 25, 100))        
    l1S.push(createDocumentElement('textwhc15', 'Port Cleaning History', '', 170, 400, 25, 400))
    l1S.push(createDocumentElement('textwhc15', 'Time', '', 195, 400, 25, 200))
    l1S.push(createDocumentElement('textwhc15', 'Reason For Clean', '', 195, 600, 25, 200))

    l2D.push(createDocumentElement('variablewhc15', pCleaningCycles, '', 170, 250, 25, 100))
    l2D.push(createDocumentElement('variablewhc15', pFDP, ' bar', 220, 250, 25, 100, 2))
    l2D.push(createDocumentElement('variablewhc15', pTimeToNexCleanMin, ' min', 245, 250, 25, 100, 1))
    l2D.push(createDocumentElement('variablewhc15', pContinuousCleanTimingReal, ' min', 295, 250, 25, 100, 1))
    if (pFilterContinuousClean) {
        l2D.push(createDocumentElement('textwhl15', 'Continuous Clean Run Time', '', 295, 2, 25, 240))
        l2D.push(createDocumentElement('textwhl15', 'Continuous Clean Cancel', '', 320, 2, 25, 240))
        l3S.push(createDocumentElement('button', 'CANCEL', (e) => {pFilterContinuousCleanCancel = true}, 320, 250, 25, 100))
    }
    if (pScannersAtMotor) {
        l2D.push(createDocumentElement('textgrc15', 'PARKED', '', 370, 250, 25, 100))
    }
    l2D.push(createDocumentElement('textwhc15', moment(pCleanCycleDate1).format('MM/DD/YYYY h:mm:ss A'), '', 220, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(pCleanCycleReason1), '', 220, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(pCleanCycleDate2).format('MM/DD/YYYY h:mm:ss A'), '', 245, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(pCleanCycleReason2), '', 245, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(pCleanCycleDate3).format('MM/DD/YYYY h:mm:ss A'), '', 270, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(pCleanCycleReason3), '', 270, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(pCleanCycleDate4).format('MM/DD/YYYY h:mm:ss A'), '', 295, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(pCleanCycleReason4), '', 295, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(pCleanCycleDate5).format('MM/DD/YYYY h:mm:ss A'), '', 320, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(pCleanCycleReason5), '', 320, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(pCleanCycleDate6).format('MM/DD/YYYY h:mm:ss A'), '', 345, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(pCleanCycleReason6), '', 345, 600, 25, 200))
    return [l0D, l1S, l2D, l3S]

}
const screen33 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    let currentText
    if (true) {
        l1S.push(createDocumentElement('bordera', '', '', 145, 0, 67, 800))
        l1S.push(createDocumentElement('bordera', '', '', 212, 0, 67, 800))
        l1S.push(createDocumentElement('bordera', '', '', 279, 0, 67, 800))
        l1S.push(createDocumentElement('bordert', '', '', 346, 0, 67, 800))
        l1S.push(createDocumentElement('textwhc15', 'Port Filter Valve Operation Page 1', '', 120, 250, 25, 300))
        if (cpValveFlush1) {
            l0D.push(createDocumentElement('image', 'valveh', pValveFlush1Status, 150, 295, 57, 30))
            l1S.push(createDocumentElement('textwhl15', 'BV-S11 Filter Flush 1', '', 166, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = pValveFlush1Auto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveFlush1Auto = !pValveFlush1Auto
                e.target.textContent = pValveFlush1Auto ? 'AUTO' : 'MANUAL'
            }, 166, 350, 25, 100))
            //Open Button
            currentText = pValveFlush1ClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveFlush1OpenManual = true
                e.target.textContent = pValveFlush1ClosedLS ? 'OPEN' : ''
            }, 166, 460, 25, 100))
            //Close Button
            currentText = pValveFlush1OpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveFlush1CloseManual = true
                e.target.textContent = pValveFlush1OpenLS ? 'CLOSE' : ''
            }, 166, 570, 25, 100))
        }
        if (cpValveMotive) {
            l0D.push(createDocumentElement('image', 'valveh0', '', 217, 295, 57, 30))
            l1S.push(createDocumentElement('textwhl15', 'BV-S11 Filter Flush 1', '', 233, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = pValveMotiveAuto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveMotiveAuto = !pValveMotiveAuto
                e.target.textContent = pValveMotiveAuto ? 'AUTO' : 'MANUAL'
            }, 233, 350, 25, 100))
            //Open Button
            currentText = pValveMotiveClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveMotiveOpenManual = true
                e.target.textContent = pValveMotiveClosedLS ? 'OPEN' : ''
            }, 233, 460, 25, 100))
            //Close Button
            currentText = pValveMotiveOpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveMotiveCloseManual = true
                e.target.textContent = pValveMotiveOpenLS ? 'CLOSE' : ''
            }, 233, 570, 25, 100))
        }
        if (cpValveFlush2) {
            l0D.push(createDocumentElement('image', 'valveh', pValveFlush2Status, 284, 295, 57, 30))
            l1S.push(createDocumentElement('textwhl15', 'BV-S11 Filter Flush 1', '', 300, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = pValveFlush2Auto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveFlush2Auto = !pValveFlush2Auto
                e.target.textContent = pValveFlush2Auto ? 'AUTO' : 'MANUAL'
            }, 300, 350, 25, 100))
            //Open Button
            currentText = pValveFlush2ClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveFlush2OpenManual = true
                e.target.textContent = pValveFlush2ClosedLS ? 'OPEN' : ''
            }, 300, 460, 25, 100))
            //Close Button
            currentText = pValveFlush2OpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                pValveFlush2CloseManual = true
                e.target.textContent = pValveFlush2OpenLS ? 'CLOSE' : ''
            }, 300, 570, 25, 100))
        }
    return [l0D, l1S, l2D, l3S]

    }
}
const screen41 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    //Alarm Reset Button
    l3S.push(createDocumentElement('button', 'AlarmReset', (e) => alarmReset = true, 170, 502, 35, 105))
    //Display Current Alarm list
    return [l0D, l1S, l2D, l3S]

}
const screen101 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    const startHeight = -105
    let treatmentStatus
    //asftp status
    if (fTreatmentAftpDebal) {treatmentStatus = 'DEBAL'}
    if (fTreatmentAftpBal) {treatmentStatus = 'BAL'}
    if (fTreatmentAftpOff) {treatmentStatus = 'OFF'}
    if (fTreatmentAftpMot) {treatmentStatus = 'MOT'}
    l3S.push(createDocumentElement('button', 'FILTER MODE', (e) => tFilterAuto = !tFilterAuto, 135, 560, 25, 120))
    if (hHMI1Tech) {
        l3S.push(createDocumentElement('button', 'MANUAL MODE', (e) => {
            tFilterManual = !tFilterManual
            if (tFilterManual) {tFilterAuto = false}
        }, 185, 680, 25, 120))
    }
    if (tFilterAuto) {
        l0D.push(createDocumentElement('textgrc15', 'ENABLED', '', 135, 680, 25, 120))
    } else {
        l0D.push(createDocumentElement('textrec15', 'DISABLED', '', 135, 680, 25, 120))
    }
    if (tFilterManual) {
        l0D.push(createDocumentElement('textyec15', 'MANUAL', '', 160, 680, 25, 120))
    }
    l0D.push(createDocumentElement('textgrc15', treatmentStatus, '', 80, 0, 25, 80))
    //aftp images
    l0D.push(createDocumentElement('image', 'pump', tPumpBallast || tPumpMotive, 206, 5, 50, 50))
    l0D.push(createDocumentElement('image', 'pipeh', tPumpBallast || tPumpMotive, 206, 55, 20, 69))
    l0D.push(createDocumentElement('image', 'pipeh', (p3FITA09Final > 50 || tPumpMotive), 206, 163, 20, 10))
    l0D.push(createDocumentElement('image', 'valveh', getValveStatus(tValveInletPositionPerc), 186, 123, 40, 40))
    l0D.push(createDocumentElement('image', 'filter', (p3FITA09Final > 50 || tPumpMotive), 142, 170, 171, 250))
    if (ctValveFlush1) {
        l0D.push(createDocumentElement('image', 'pipev', tValveFlush1OpenLS, 273, 279, 85, 15))
        l0D.push(createDocumentElement('image', 'valvevl', tValveFlush1OpenLS * 2, 320, 258, 20, 38))
        l0D.push(createDocumentElement('image', 'pipeelb', tValveFlush1OpenLS, 357, 265, 30, 29))
        l0D.push(createDocumentElement('image', 'pipeh', tValveFlush1OpenLS, 372, 236, 15, 30))
        l1S.push(createDocumentElement('textwh', 'BV-A19', '', 306, 232, 20, 50))
    }
    if (ctValveFlush2) {
        l0D.push(createDocumentElement('image', 'pipev', tValveFlush2OpenLS, 273, 216, 90, 15))
        l0D.push(createDocumentElement('image', 'valvevl', tValveFlush2Status * 2, 320, 195, 20, 38))
        l1S.push(createDocumentElement('textwh', 'BV-A29', '', 306, 169, 20, 50))
    }
    if (ctScanner1) {
        l0D.push(createDocumentElement('image', 'smotor', tScanner1Status, 157, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 165, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-A19', '', 162, 489, 20, 50))
        if (tScanner1AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 165, 417, 14, 8))
        }
        if (tScanner1AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 165, 454, 14, 8))
        }
        if (tScanner1ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 162, 420, 20, 40))
        }
        if (tScanner1ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 162, 420, 20, 40))
        }
    }
    if (ctScanner2) {
        l0D.push(createDocumentElement('image', 'smotor', tScanner2Status, 187, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 195, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-A29', '', 192, 489, 20, 50))
        if (tScanner2AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 195, 417, 14, 8))
        }
        if (tScanner2AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 195, 454, 14, 8))
        }
        if (tScanner2ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 192, 420, 20, 40))
        }
        if (tScanner2ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 192, 420, 20, 40))
        }
    }
    if (ctScanner3) {
        l0D.push(createDocumentElement('image', 'smotor', tScanner3Status, 217, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 225, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-A39', '', 222, 489, 20, 50))
        if (tScanner3AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 225, 417, 14, 8))
        }
        if (tScanner3AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 225, 454, 14, 8))
        }
        if (tScanner3ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 222, 420, 20, 40))
        }
        if (tScanner3ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 222, 420, 20, 40))
        }
    }
    if (ctScanner4) {
        l0D.push(createDocumentElement('image', 'smotor', tScanner4Status, 247, 457, 30, 30))
        l0D.push(createDocumentElement('image', 'smotor', '', 255, 417, 14, 43))
        l1S.push(createDocumentElement('textwh', 'FIL-A49', '', 252, 489, 20, 50))
        if (tScanner4AtFilter) {
            l0D.push(createDocumentElement('image', 'filterls', '', 255, 417, 14, 8))
        }
        if (tScanner4AtMotor) {
            l0D.push(createDocumentElement('image', 'filterls', '', 255, 454, 14, 8))
        }
        if (tScanner4ToFilter) {
            l0D.push(createDocumentElement('image', 'tofilter', '', 252, 420, 20, 40))
        }
        if (tScanner4ToMotor) {
            l0D.push(createDocumentElement('image', 'tomotor', '', 252, 420, 20, 40))
        }
    }
    //flush line
    l0D.push(createDocumentElement('image', 'pipeh', tPumpSuction1, 360, 107, 15, 94))
    l0D.push(createDocumentElement('image', 'pumpl', tPumpSuction1, 360, 200, 40, 40))
    l0D.push(createDocumentElement('image', 'arrowl', '', 360, 87, 15, 20))
    //filter discharge
    l0D.push(createDocumentElement('image', 'pipev', (p3FITA09Final > 50), 273, 313, 78, 20))
    l0D.push(createDocumentElement('image', 'pipeelc', (p3FITA09Final > 50), 350, 313, 40, 39))
    l0D.push(createDocumentElement('image', 'pipeh', (p3FITA09Final > 50), 370, 391, 20, 377))
    l0D.push(createDocumentElement('image', 'valveh', getValveStatus(tValveOutletPositionPerc), 349, 351, 40, 40))
    l0D.push(createDocumentElement('image', 'arrow', '', 370, 769, 20, 20))
    l0D.push(createDocumentElement('image', 'bypassvalve', tValveBypassClosedLS, 114, 279, 30, 30))
    //motive line
    if (ctValveMotive) {
        l0D.push(createDocumentElement('image', 'pipev', tValveMotiveOpenLS, 319, 457, 51, 15))
        l0D.push(createDocumentElement('image', 'pipeeld', tValveMotiveOpenLS, 291, 457, 30, 29))
        l0D.push(createDocumentElement('image', 'valvevl', tValveMotive, 330, 436, 20, 38))
        l1S.push(createDocumentElement('textwh', 'BV-A20', '', 316, 405, 20, 60))
    }
    l0D.push(createDocumentElement('image', 'pipeh', mPumpMotive, 280, 523, 15, 15))
    l0D.push(createDocumentElement('image', 'pump', mPumpMotive, 279, 483, 40, 40))
    l0D.push(createDocumentElement('image', 'arrow', '', 280, 537, 15, 20))
    //ClO2 line
    l0D.push(createDocumentElement('image', 'arrow', '', 320, 598, 15, 20))
    l0D.push(createDocumentElement('image', 'pipeh', pipingColorStatus, 320, 619, 15, 85))
    l0D.push(createDocumentElement('image', 'pipeela', pipingColorStatus, 320, 733, 30, 30))
    l0D.push(createDocumentElement('image', 'pipev', pipingColorStatus, 340, 748, 31, 15))
    l0D.push(createDocumentElement('image', 'valveh', getValveStatus(tValveClO2PositionPerc), 305, 703, 30, 30))
    //aftp variables
    l2D.push(createDocumentElement('variableop', tValveInletPositionPerc, ' %', 166, 118, 20, 50))
    l2D.push(createDocumentElement('variabletr', p3PITA09Final, ' bar', 211, 201, 20, 60, 2))
    l2D.push(createDocumentElement('variabletr', tFDP, ' bar', 211, 270, 20, 60, 2))
    l2D.push(createDocumentElement('variabletr', p3PITA10Final, ' bar', 211, 339, 20, 60, 2))
    l2D.push(createDocumentElement('variableop', tValveOutletPositionPerc, ' %', 329, 347, 20, 50))
    l2D.push(createDocumentElement('variableop', p3FITA09Final, ' m3/hr', 370, 560, 20, 70))
    l2D.push(createDocumentElement('variableop', p3FITA10Final, ' m3/hr', 318, 629, 20, 60, 1))
    l2D.push(createDocumentElement('variableop', tValveClO2PositionPerc, ' %', 285, 698, 20, 60))
    //aftp text
    l1S.push(createDocumentElement('textwh', 'GSP', '', 190, 0, 20, 60))
    l1S.push(createDocumentElement('textwh', 'PCV-A09', '', 151, 115, 20, 56))
    l1S.push(createDocumentElement('textwh', 'BYPASS', '', 121, 194, 20, 90))
    l1S.push(createDocumentElement('textbl', 'PIT-A09', '', 197, 206, 20, 50))
    l1S.push(createDocumentElement('textbl', 'DP', '', 197, 275, 20, 50))
    l1S.push(createDocumentElement('textbl', 'PIT-A10', '', 197, 344, 20, 50))
    l1S.push(createDocumentElement('textwh', 'OVERBOARD', '', 345, 98, 20, 90))
    l1S.push(createDocumentElement('textwh', 'SP-A09', '', 393, 154, 20, 50))
    l1S.push(createDocumentElement('textwh', 'PCV-A10', '', 314, 344, 20, 56))
    l1S.push(createDocumentElement('textwh', 'P-100', '', startHeight +318, 482, 20, 56))
    l1S.push(createDocumentElement('textwh', 'TO GEN', '', 278, 557, 20, 56))
    l1S.push(createDocumentElement('textwh', 'FROM GEN', '', 318, 533, 20, 68))
    l1S.push(createDocumentElement('textwh', 'FIT-A09', '', 350, 560, 20, 70))
    l1S.push(createDocumentElement('textwh', 'FIT-A10', '', 303, 629, 20, 65))
    l1S.push(createDocumentElement('textwh', 'FCV-A09', '', 270, 695, 20, 56))
    return [l0D, l1S, l2D, l3S]

}
const screen102 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    l1S.push(createDocumentElement('bordera', '', '', 170, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 170, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 195, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 195, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 220, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 220, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 245, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 245, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 270, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 270, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 295, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 295, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 320, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 320, 400, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 345, 0, 25, 400))
    l1S.push(createDocumentElement('bordera', '', '', 345, 400, 25, 400))
    l1S.push(createDocumentElement('textwhc15', 'Aftp Filter Cleaning Cycles', '', 145, 250, 25, 300))
    l1S.push(createDocumentElement('textwhl15', 'Aftp Cleaning Count', '', 170, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Aftp Manual Cleaning Cycle', '', 195, 2, 25, 240))
    l1S.push(createDocumentElement('button', 'START', (e) => {tStartManual = true}, 195, 250, 25, 100))
    l1S.push(createDocumentElement('textwhl15', 'Differential Pressure', '', 220, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Inerval Clean Time Remaining', '', 245, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Filter Only Mode', '', 270, 2, 25, 240))
    l1S.push(createDocumentElement('button', 'OFF', (e) => {
        mTFilterOnlyMode = !mTFilterOnlyMode
        e.target.textContent = (mTFilterOnlyMOde ? 'ON' : 'OFF')
    }, 270, 250, 25, 100))
    l1S.push(createDocumentElement('textwhl15', 'Continuous Clean Run Time', '', 295, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Continuous Clean Cancel', '', 320, 2, 25, 240))
    l1S.push(createDocumentElement('textwhl15', 'Aftp Filter Park', '', 345, 2, 25, 240))    
    let currentText = (tFilterPark ? 'PARKING' : 'PARK')
    l1S.push(createDocumentElement('button', currentText, (e) => {
        tFilterPark = !tFilterPark
        e.target.textContent = (tFilterPark ? 'PARKING' : 'PARK')
    }, 345, 250, 25, 100))        
    l1S.push(createDocumentElement('textwhc15', 'Aftp Cleaning History', '', 170, 400, 25, 400))
    l1S.push(createDocumentElement('textwhc15', 'Time', '', 195, 400, 25, 200))
    l1S.push(createDocumentElement('textwhc15', 'Reason For Clean', '', 195, 600, 25, 200))


    l2D.push(createDocumentElement('variablewhc15', tCleaningCycles, '', 170, 250, 25, 100))
    l2D.push(createDocumentElement('variablewhc15', tFDP, ' bar', 220, 250, 25, 100, 2))
    l2D.push(createDocumentElement('variablewhc15', tTimeToNexCleanMin, ' min', 245, 250, 25, 100, 1))
    l2D.push(createDocumentElement('variablewhc15', tContinuousCleanTimingReal, ' min', 295, 250, 25, 100, 1))
    if (tFilterContinuousClean) {
        l2D.push(createDocumentElement('textwhl15', 'Continuous Clean Run Time', '', 295, 2, 25, 240))
        l2D.push(createDocumentElement('textwhl15', 'Continuous Clean Cancel', '', 320, 2, 25, 240))
        l2D.push(createDocumentElement('button', 'CANCEL', (e) => {tFilterContinuousCleanCancel = true}, 320, 250, 25, 100))
    }
    if (tScannersAtMotor) {
        l2D.push(createDocumentElement('textgrc15', 'PARKED', '', 370, 250, 25, 100))
    }
    l2D.push(createDocumentElement('textwhc15', moment(tCleanCycleDate1).format('MM/DD/YYYY h:mm:ss A'), '', 220, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(tCleanCycleReason1), '', 220, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(tCleanCycleDate2).format('MM/DD/YYYY h:mm:ss A'), '', 245, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(tCleanCycleReason2), '', 245, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(tCleanCycleDate3).format('MM/DD/YYYY h:mm:ss A'), '', 270, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(tCleanCycleReason3), '', 270, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(tCleanCycleDate4).format('MM/DD/YYYY h:mm:ss A'), '', 295, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(tCleanCycleReason4), '', 295, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(tCleanCycleDate5).format('MM/DD/YYYY h:mm:ss A'), '', 320, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(tCleanCycleReason5), '', 320, 600, 25, 200))
    l2D.push(createDocumentElement('textwhc15', moment(tCleanCycleDate6).format('MM/DD/YYYY h:mm:ss A'), '', 345, 400, 25, 200))
    l2D.push(createDocumentElement('textwhc15', cleanReason(tCleanCycleReason6), '', 345, 600, 25, 200))
    return [l0D, l1S, l2D, l3S]

}
const screen103 = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    let currentText
    if (true) {
        l1S.push(createDocumentElement('bordera', '', '', 145, 0, 67, 800))
        l1S.push(createDocumentElement('bordera', '', '', 212, 0, 67, 800))
        l1S.push(createDocumentElement('bordera', '', '', 279, 0, 67, 800))
        l1S.push(createDocumentElement('bordert', '', '', 346, 0, 67, 800))
        l1S.push(createDocumentElement('textwhc15', 'Port Filter Valve Operation Page 1', '', 120, 250, 25, 300))
        if (ctValveFlush1) {
            l0D.push(createDocumentElement('image', 'valveh', tValveFlush1Status, 150, 295, 57, 30))
            l1S.push(createDocumentElement('textwhl15', 'BV-S11 Filter Flush 1', '', 166, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = tValveFlush1Auto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveFlush1Auto = !tValveFlush1Auto
                e.target.textContent = tValveFlush1Auto ? 'AUTO' : 'MANUAL'
            }, 166, 350, 25, 100))
            //Open Button
            currentText = tValveFlush1ClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveFlush1OpenManual = true
                e.target.textContent = tValveFlush1ClosedLS ? 'OPEN' : ''
            }, 166, 460, 25, 100))
            //Close Button
            currentText = tValveFlush1OpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveFlush1CloseManual = true
                e.target.textContent = tValveFlush1OpenLS ? 'CLOSE' : ''
            }, 166, 570, 25, 100))
        }
        if (ctValveMotive) {
            l0D.push(createDocumentElement('image', 'valveh0', '', 217, 295, 57, 30))
            l1S.push(createDocumentElement('textwhl15', 'BV-S11 Filter Flush 1', '', 233, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = tValveMotiveAuto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveMotiveAuto = !tValveMotiveAuto
                e.target.textContent = tValveMotiveAuto ? 'AUTO' : 'MANUAL'
            }, 233, 350, 25, 100))
            //Open Button
            currentText = tValveMotiveClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveMotiveOpenManual = true
                e.target.textContent = tValveMotiveClosedLS ? 'OPEN' : ''
            }, 233, 460, 25, 100))
            //Close Button
            currentText = tValveMotiveOpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveMotiveCloseManual = true
                e.target.textContent = tValveMotiveOpenLS ? 'CLOSE' : ''
            }, 233, 570, 25, 100))
        }
        if (ctValveFlush2) {
            l0D.push(createDocumentElement('image', 'valveh', tValveFlush2Status, 284, 295, 57, 30))
            l1S.push(createDocumentElement('textwhl15', 'BV-S11 Filter Flush 1', '', 300, 2, 25, 240))
            //Auto/Manual Toggle
            currentText = tValveFlush2Auto ? 'AUTO' : 'MANUAL'
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveFlush2Auto = !tValveFlush2Auto
                e.target.textContent = tValveFlush2Auto ? 'AUTO' : 'MANUAL'
            }, 300, 350, 25, 100))
            //Open Button
            currentText = tValveFlush2ClosedLS ? 'OPEN' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveFlush2OpenManual = true
                e.target.textContent = tValveFlush2ClosedLS ? 'OPEN' : ''
            }, 300, 460, 25, 100))
            //Close Button
            currentText = tValveFlush2OpenLS ? 'CLOSE' : ''
            l3S.push(createDocumentElement('button', currentText, (e) => {
                tValveFlush2CloseManual = true
                e.target.textContent = tValveFlush2OpenLS ? 'CLOSE' : ''
            }, 300, 570, 25, 100))
        }
    return [l0D, l1S, l2D, l3S]
    }
}
const screenNum = (isNew) => {
    let l0D = []
    let l1S = [] 
    let l2D = [] 
    let l3S = []
    //stbd filter images
    screenElements.push(createDocumentElement('image', 'pump', sPumpBallastRunning, 135, 5, 50, 50))
    return  l0D, l1S, l2D, l3S

}



const cleanReason = (num) => {
    let reason
    switch (num) {
    case 1 :
        reason = 'Startup Clean'
        break
    case 2 :
        reason = 'Differential Pressure'
        break
    case 3 :
        reason = 'Interval Timer'
        break
    case 4:
        reason = 'Manual Start'
        break
    case 4:
        reason = 'Continuous Clean'
        break
    }
    return reason
     
}