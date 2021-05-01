//get parameters from local storage and add paragraphs to HTML
const hmiUpdate = () => {
    //header values
    //header
    headerUpdate()
    if (alarmDisp) {
        clearHMIScreen()
        showAlarmScreen()
        displayAlarmPopup()
    } else {
        clearAlarmScreen()
        showHMIScreen()
        let newScreen = !(hHMI1Screen === hHMI1LScreen)
        hHMI1LScreen = hHMI1Screen
        //screen navigaion
        bwtsAddScreenMenu(newScreen)
        //body by screens
        bwtsAddScreen(newScreen)
    }
}
const showAlarmScreen = () => {
    const alarmDialogEl = document.querySelector('#alarm-dialog')
    alarmDialogEl.style.height = '360px' 
} 
const showHMIScreen = () => {
    bwtsAddScreenMenu(hHMI1Screen)
    const l0DEl = document.querySelector('#hmi-body--images')
    l0DEl.style.height = '480px'
    const l1SEl = document.querySelector('#hmi-body--text')
    l1SEl.style.height = '480px'
    const l2DEl = document.querySelector('#hmi-body--variables')
    l2DEl.style.height = '480px'
    const l3SEl = document.querySelector('#hmi-body--buttons')
    l3SEl.style.height = '480px'
}
const clearAlarmScreen = () => {
    const alarmDialogEl = document.querySelector('#alarm-dialog')
    alarmDialogEl.style.height = '0px' 
    alarmDialogEl.innerHTML = ''
} 
const clearHMIScreen = () => {
    const hmiMenu = document.getElementById('hmi-menu')
    hmiMenu.innerHTML = ''
    const l0DEl = document.querySelector('#hmi-body--images')
    l0DEl.style.height = '0px'
    const l1SEl = document.querySelector('#hmi-body--text')
    l1SEl.style.height = '0px'
    const l2DEl = document.querySelector('#hmi-body--variables')
    l2DEl.style.height = '0px'
    const l3SEl = document.querySelector('#hmi-body--buttons')
    l3SEl.style.height = '0px'
}
const headerUpdate = () => {
    let stbdStatus = document.querySelector('#stbd-status')
    switch (sFilterStatus) {
        case 0 :
            stbdStatus.textContent = 'ERROR'
            stbdStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 1 :
            stbdStatus.textContent = 'WAITING'
            stbdStatus.classList = 'hmi-header--textgyc15'
            break
        case 2 :
            stbdStatus.textContent = 'RUNNING'
            stbdStatus.classList = 'hmi-header--textgrc15'
            break
        case 3 :
            stbdStatus.textContent = 'CLEANING'
            stbdStatus.classList = 'hmi-header--textgrfc15'
            //flashing
            break
        case 4 :
            stbdStatus.textContent = 'OFF'
            stbdStatus.classList = 'hmi-header--textrec15'
            break
        case 5 :
            stbdStatus.textContent = 'ALARMSTOP'
            stbdStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 6 :
            stbdStatus.textContent = 'MANUAL'
            stbdStatus.classList = 'hmi-header--textgyc15'
            break
        case 7 :
            stbdStatus.textContent = 'BYPASSED'
            stbdStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 8 :
            stbdStatus.textContent = 'NO MOTIVE'
            stbdStatus.classList = 'hmi-header--textrec15'
            //flashing
            break
        default :
            stbdStatus.textContent = 'ERROR'
            stbdStatus.classList = 'hmi-header--textrefc15'
            //flashing

    }
    let portStatus = document.querySelector('#port-status')
    switch (pFilterStatus) {
        case 0 :
            portStatus.textContent = 'ERROR'
            portStatus.classList = 'hmi-header--textrec15'
            //flashing
            break
        case 1 :
            portStatus.textContent = 'WAITING'
            portStatus.classList = 'hmi-header--textgyc15'
            break
        case 2 :
            portStatus.textContent = 'RUNNING'
            portStatus.classList = 'hmi-header--textgrc15'
            break
        case 3 :
            portStatus.textContent = 'CLEANING'
            portStatus.classList = 'hmi-header--textgrfc15'
            //flashing
            break
        case 4 :
            portStatus.textContent = 'OFF'
            portStatus.classList = 'hmi-header--textrec15'
            break
        case 5 :
            portStatus.textContent = 'ALARMSTOP'
            portStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 6 :
            portStatus.textContent = 'MANUAL'
            portStatus.classList = 'hmi-header--textrec15'
            break
        case 7 :
            portStatus.textContent = 'BYPASSED'
            portStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 8 :
            portStatus.textContent = 'NO MOTIVE'
            portStatus.classList = 'hmi-header--textrec15'
            //flashing
            break
        default :
            stbdStatus.textContent = 'ERROR'
            stbdStatus.classList = 'hmi-header--textrefc15'
            //flashing
    }
    let aftpStatus = document.querySelector('#aftp-status')
    switch (tFilterStatus) {
        case 0 :
            aftpStatus.textContent = 'ERROR'
            aftpStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 1 :
            aftpStatus.textContent = 'WAITING'
            aftpStatus.classList = 'hmi-header--textgyc15'
            break
        case 2 :
            aftpStatus.textContent = 'RUNNING'
            aftpStatus.classList = 'hmi-header--textgrc15'
            break
        case 3 :
            aftpStatus.textContent = 'CLEANING'
            aftpStatus.classList = 'hmi-header--textgrfc15'
            //flashing
            break
        case 4 :
            aftpStatus.textContent = 'OFF'
            aftpStatus.classList = 'hmi-header--textrec15'
            break
        case 5 :
            aftpStatus.textContent = 'ALARMSTOP'
            aftpStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 6 :
            aftpStatus.textContent = 'MANUAL'
            aftpStatus.classList = 'hmi-header--textrec15'
            break
        case 7 :
            aftpStatus.textContent = 'BYPASSED'
            aftpStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 8 :
            aftpStatus.textContent = 'MOT WAIT'
            aftpStatus.classList = 'hmi-header--textlbc15'
            break
        case 9 :
            aftpStatus.textContent = 'MOT RUN'
            aftpStatus.classList = 'hmi-header--textblc15'
            break
        case 10 :
            aftpStatus.textContent = 'MOT CLEAN'
            aftpStatus.classList = 'hmi-header--textblfc15'
            //flashing
            break
        default:
            aftpStatus.textContent = 'ERROR'
            aftpStatus.classList = 'hmi-header--textrec15'
            //flashing
            break           
    }
    let geneStatus = document.querySelector('#gene-status')
    switch (statUnit) {
        case 0 :
            geneStatus.textContent = 'STANDBY'
            geneStatus.classList = 'hmi-header--textrefc15'
            //flashing
            break
        case 1 :
            geneStatus.textContent = 'ALRMSTP'
            geneStatus.classList = 'hmi-header--textrefc15'
            break
        case 2 :
            geneStatus.textContent = 'SUSPEND'
            geneStatus.classList = 'hmi-header--textrefc15'
            break
        case 3 :
            geneStatus.textContent = 'STARTUP'
            geneStatus.classList = 'hmi-header--textgrfc15'
            //flashing
            break
        case 4 :
            geneStatus.textContent = 'ORP_OFF'
            geneStatus.classList = 'hmi-header--textrec15'
            break
        case 5 :
            geneStatus.textContent = 'TIMEOFF'
            geneStatus.classList = 'hmi-header--textrec15'
            //flashing
            break
        case 6 :
            geneStatus.textContent = 'WAITING'
            geneStatus.classList = 'hmi-header--textgyc15'
            break
        case 7 :
            geneStatus.textContent = 'RUNNING'
            geneStatus.classList = 'hmi-header--textgrc15'
            //flashing
            break
        case 8 :
            geneStatus.textContent = 'OITBYPS'
            geneStatus.classList = 'hmi-header--textrec15'
            break
        default:
            geneStatus.textContent = 'ERROR'
            geneStatus.classList = 'hmi-header--textrec15'
            //flashing
            break           
    }
    curDate = moment().utc()
    let dateEl = document.querySelector('#hmi-header__date')
    dateEl.textContent = moment(curDate).format('MM/DD/YYYY')
    let timeEl = document.querySelector('#hmi-header__time')
    timeEl.textContent = moment(curDate).format('h:mm:ss A')
} 
const bwtsAddScreen = (newScreen) => {
    let iEls = []
    let tEls = []
    let vEls = []
    let bEls = []
    sEls = getScreenElements(hHMI1Screen, newScreen)

    iEls = sEls[0]
    tEls = sEls[1]
    vEls = sEls[2]
    bEls = sEls[3]
    let hmiBodyEl = document.querySelector('#hmi-body')
    //hmiBodyEl.innerHTML = ''
    let layer0Dynamic = document.querySelector('#hmi-body--images')
    let layer1Static = document.querySelector('#hmi-body--text')
    let layer2Dynamic = document.querySelector('#hmi-body--variables')
    let layer3Static = document.querySelector('#hmi-body--buttons')
    if (newScreen) {layer0Dynamic.innerHTML = ''}
    if (iEls) {
        iEls.forEach((element) => {
            layer0Dynamic.appendChild(element)
        })
    }
    layer2Dynamic.innerHTML = ''
    if (vEls) {
        vEls.forEach((element) => {
            layer2Dynamic.appendChild(element)
        })
    }
    if (newScreen) {
        layer1Static.innerHTML = ''
        if (tEls) {
            tEls.forEach((element) => {
                layer1Static.appendChild(element)
            })
        }
        layer3Static.innerHTML = ''
        if (bEls) {
            bEls.forEach((element) => {
                layer3Static.appendChild(element)
            })
        }
    }
}
const bwtsAddScreenMenu = (newScreen) => {
    if (newScreen) {
        const hmiMenu = document.querySelector('#hmi-menu')
        hmiMenu.innerHTML = ''
        const buttons = getButtons(hHMI1Screen)
        //console.log(buttons)
        buttons.forEach((button) => {
            const buttonEl = document.createElement("button")
            if (!button.screenNumber) {
                //unused button
                buttonEl.classList.add('hmi-menu__button--blank')
                buttonEl.textContent = '!'
            } else if (button.screenNumber === true) {
                buttonEl.classList.add('hmi-menu__button--highlight')
                buttonEl.textContent = button.buttonText
            } else if (button.screenNumber === hHMI1Screen) {
                buttonEl.classList.add('hmi-menu__button--current')
                buttonEl.textContent = button.buttonText
            } else {
                buttonEl.textContent = button.buttonText
                buttonEl.classList.add('hmi-menu__button')
                buttonEl.addEventListener('click', (e) => {
                    hHMI1Screen = button.screenNumber
                    hmiUpdate()
                })
            }
            hmiMenu.appendChild(buttonEl)
        })
    }
}
const bwtsAddButtons = (incFunc) => {
    const hmiButtons = document.querySelector('#hmi-buttons')
    hmiButtons.innerHTML = ''
    const homeButton = createBwtsButton(1,"Home", incFunc)
    const geneButton = createBwtsButton(11,"Gene", incFunc)
    const stbdButton = createBwtsButton(21,"Stbd", incFunc)
    const portButton = createBwtsButton(31,"Port", incFunc)
    const aftpButton = createBwtsButton(101,"Aftp", incFunc)
    const alrmButton = createBwtsButton(41,"Alrm", incFunc)
    const inouButton = createBwtsButton(51,"InOu", incFunc)
    const techButton = createBwtsButton(81,"Tech", incFunc)
    const pumpButton = createBwtsButton(91,"Pump", incFunc)
    hmiButtons.appendChild(homeButton)
    hmiButtons.appendChild(geneButton)
    hmiButtons.appendChild(stbdButton)
    hmiButtons.appendChild(portButton)
    hmiButtons.appendChild(aftpButton)
    hmiButtons.appendChild(alrmButton)
    hmiButtons.appendChild(inouButton)
    hmiButtons.appendChild(techButton)
    hmiButtons.appendChild(pumpButton)

    const bottomTextEl = document.createElement("div")
    bottomTextEl.classList = "hmi-buttons__container"
    const screenNumberEl = document.createElement("input")
    screenNumberEl.id = 'hmi-screen-number'
    screenNumberEl.classList = "hmi-buttons__screen-number"
    screenNumberEl.value = hHMI1Screen
    screenNumberEl.addEventListener("change", (e) =>{
        if (e.target.value) {
            hHMI1Screen = Number(e.target.value)
        } else {
            e.target.value = hHMI1Screen
        }
    })
    const vesselNameEl = document.createElement("p")
    vesselNameEl.classList = "hmi-buttons__vessel-name"
    vesselNameEl.textContent = "Vessel Name"
    bottomTextEl.appendChild(screenNumberEl)
    bottomTextEl.appendChild(vesselNameEl)
    hmiButtons.appendChild(bottomTextEl)

}
const createBwtsButton = (screenNumber, buttonText, incFunc) => {
    const buttonEl = document.createElement("button")
    buttonEl.textContent = buttonText
    buttonEl.classList = 'hmi-buttons__button'
    if (incFunc) {
        buttonEl.addEventListener('click', (e) => {
            hHMI1Screen = screenNumber
            const snEl = document.querySelector("#hmi-screen-number")
            snEl.value = screenNumber
        })
    }
    return buttonEl
}
const displayAlarmPopup = () => {
    const hmiBody = document.querySelector('#hmi-body')
    //box
    const alarmDialogEl = document.querySelector('#alarm-dialog')
    alarmDialogEl.classList = 'alarm-dialog'
    alarmDialogEl.innerHTML = ''
    //filemenu
    const alarmMenuEl = document.createElement("div")
    alarmMenuEl.classList = 'alarm-dialog__menu'
    alarmMenuEl.textContent = ''
    alarmDialogEl.appendChild(alarmMenuEl)
    const alarmCloseEl = document.createElement("div")
    alarmCloseEl.classList = 'alarm-dialog__menu--close'
    alarmCloseEl.textContent = 'X'
    alarmCloseEl.addEventListener('click', (e) => {
        alarmDisp = false
        hmiUpdate()
    })
    alarmDialogEl.appendChild(alarmCloseEl)
    //header blue
    const alarmHeaderEl = document.createElement("div")
    alarmHeaderEl.classList = 'alarm-dialog__header'
    alarmDialogEl.appendChild(alarmHeaderEl)
    //header items
    let ahNumEl = document.createElement('div')
    ahNumEl.classList = 'alarm-dialog__header--title'
    ahNumEl.textContent = 'No.'
    ahNumEl.style.width = '60px'
    alarmHeaderEl.appendChild(ahNumEl)
    let ahTimeEl = document.createElement('div')
    ahTimeEl.classList = 'alarm-dialog__header--title'
    ahTimeEl.textContent = 'Time'
    ahTimeEl.style.width = '100px'
    alarmHeaderEl.appendChild(ahTimeEl)
    let ahDateEl = document.createElement('div')
    ahDateEl.classList = 'alarm-dialog__header--title'
    ahDateEl.textContent = 'Date'
    ahDateEl.style.width = '100px'
    alarmHeaderEl.appendChild(ahDateEl)
    let ahTextEl = document.createElement('div')
    ahTextEl.classList = 'alarm-dialog__header--title'
    ahTextEl.textContent = 'Text'
    ahTextEl.style.width = '538px'
    alarmHeaderEl.appendChild(ahTextEl)
    //list yellow
    let alarmListEl = document.createElement("div")
    alarmListEl.classList = 'alarm-dialog__list'
    alarmDialogEl.appendChild(alarmListEl)
    //items cyan
    alarmsCurrent.forEach((alarm) => {
        let alarmEl = document.createElement('div')
        alarmEl.id = alarm[0]
        alarmEl.addEventListener('click', (e) => {
            alarmSel = alarm[0]
            hmiUpdate()
        })
        let alarmClassList = 'alarm-dialog__list--text'
        if (alarm[0] === alarmSel) {alarmClassList = 'alarm-dialog__list--textsel'}

        let aNumEl = document.createElement('div')
        aNumEl.classList = alarmClassList
        aNumEl.textContent = alarm[0]
        aNumEl.style.width = '60px'
        alarmEl.appendChild(aNumEl)
        let aTimeEl = document.createElement('div')
        aTimeEl.classList = alarmClassList
        aTimeEl.textContent = moment(alarm[1]).format('h:mm:ss A')
        aTimeEl.style.width = '100px'
        alarmEl.appendChild(aTimeEl)
        let aDateEl = document.createElement('div')
        aDateEl.classList = alarmClassList
        aDateEl.textContent = moment(alarm[1]).format('M/D/YYYY')
        aDateEl.style.width = '100px'
        alarmEl.appendChild(aDateEl)
        let aTextEl = document.createElement('div')
        aTextEl.classList = alarmClassList
        aTextEl.textContent = alarm[2]
        aTextEl.style.width = '510px'
        alarmEl.appendChild(aTextEl)
        alarmListEl.appendChild(alarmEl)
    })
    //footer magenta
    const alarmfooterEl = document.createElement("div")
    alarmfooterEl.classList = 'alarm-dialog__footer'
    alarmDialogEl.appendChild(alarmfooterEl)
}