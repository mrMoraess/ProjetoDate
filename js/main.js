// class AddDate {
//     constructor() {
//         this.localDate = document.querySelector('.data-atual')
//         this.localDiasRestantes = document.querySelector('.dias-restantes')
//         this.primeiraData = document.querySelector('#date-1')
//         this.segundaData = document.querySelector('#date-2')
//         this.btn = document.querySelector('.btn')
//         this.add(this.localDate)
//         this.addDiasRestantes(this.localDiasRestantes)
//         this.createAndCalculate(this.primeiraData, this.segundaData, this.btn)
//     }

//     add = function(local) {
//         let myLocal = setInterval(refreshTime, 1000)

//         // essa funcao mostra apenas as horas
//         function myTime() {
//             let d = new Date(), displayDate;
//             if (navigator.userAgent.toLocaleLowerCase().indexOf('brave') > -1) {
//                 displayDate = d.toLocaleTimeString('pt-BR');
//             } else {
//                 displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'});
//             }
//             local.innerHTML = displayDate
//         }

//         // essa aqui ta completinha
//         function refreshTime() {
//             let dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
//             let formattedString = dateString.replace(", ", " - ");
//             local.innerHTML = formattedString;
//         }
//     }

//     addDiasRestantes = function(dias) {
//         let date = new Date()
//         let fim = new Date(date.getFullYear() + 1, 0 + 0, 0).toLocaleDateString('pt-BR')
//         function calcFim(dataAtual, dataFinal) {
//             console.log(fim)
//             let calc = Math.abs(dataAtual - dataFinal)
//             return Math.ceil(calc / (1000 * 60 * 60 * 24));
//         }
//         dias.innerHTML = calcFim(date.toLocaleDateString('pt-BR'), fim)
//     }   

//     createAndCalculate = function(data1, data2, btn) {
//         function addDates(data1, data2) {
//             let div = new createDiv()
//             let local = document.querySelector('.container-dias')
//             let dataInit = document.createTextNode(data1.value)
//             let dataFim = document.createTextNode(data2.value)
//             div.appendChild(dataInit)
//             div.appendChild(dataFim)
    
            
//             local.appendChild(div)
//         }

        
//         btn.addEventListener('click', function(e) {
//             e.preventDefault()
//             if (!data1.value && !data1.value) {
//                 document.querySelector('#compromisso').value = ''
//                 alert('Adicione as datas')
//             } else {
//                 addDates(data1, data2)
//                 data1.value = ''
//                 data2.value = ''
//                 console.log(data1.value)
//             }
//         })
//     }

//     createDiv = function() {
//         let div = document.createElement('div')
//         // div.setAttribute('class', 'div-result')

//         return div
//     }
// }

// let init = new AddDate()


let local =  document.querySelector('.data-atual')
let data1 = document.querySelector('#date-1')
let data2 = document.querySelector('#date-2')
let btn = document.querySelector('.btn')



function addDate (local) {
    let myLocal = setInterval(refreshTime, 1000)
    
            // essa funcao mostra apenas as horas
    function myTime() {
        let d = new Date(), displayDate;
        if (navigator.userAgent.toLocaleLowerCase().indexOf('brave') > -1) {
                displayDate = d.toLocaleTimeString('pt-BR');
        } else {
            displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'});
        }
           local.innerHTML = displayDate
    }
    
            // essa aqui ta completinha
    function refreshTime() {
        let dateString = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
        let formattedString = dateString.replace(", ", " - ");
        local.innerHTML = formattedString;
    }
}

function addSave() {
    event(data1, data2)
}

function verifica(d1, d2) {
    let valid = true

    if (d1.value && d2.value) {
        valid = true
    } else {
        valid = false
    }
    return valid;
}

function event(d1, d2) {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        let check = verifica(d1, d2)
        if (check) {
            addBoxDate()
        } else {
            alert('Adicione as datas')
        }
        d1.value = ''
        d2.value = ''
    })
}

function addBoxDate() {
    let local = document.querySelector('.container-dias')
    let box = createDiv()
    box.setAttribute('class', 'div-result')

    primeiraData = new Date(data1.value)
    segundaData = new Date(data2.value)

    const dataInit = document.createTextNode(data1.value)
    const dataFim = document.createTextNode(data2.value)
    let calc = document.createTextNode(calculateDays(primeiraData, segundaData))

    const div1 = createDiv()
    const div2 = createDiv()
    const div3 = createDiv()
    div1.setAttribute('class', 'data')
    div2.setAttribute('class', 'data')
    div3.setAttribute('class', 'data')
    div1.appendChild(dataInit)
    div2.appendChild(dataFim)
    div3.appendChild(calc)

    box.appendChild(div1)
    box.appendChild(div2)
    box.appendChild(div3)

    local.appendChild(box)
}

function calculateDays(dataOne, dataTwo) {
    const difference = Math.abs(dataOne - dataTwo)
    days = difference/(1000 * 3600 * 24)
    console.log(days)

    return days;
}

function diasRestantes() {
    let local = document.querySelector('.dias-restantes')
    let date = new Date()
    let fim = new Date(date.getFullYear() + 1, 0 + 0, 0)
    function calcFim(dataAtual, dataFinal) {
        console.log(fim)
        let calc = Math.abs(dataAtual - dataFinal)
        return Math.ceil(calc / (1000 * 60 * 60 * 24));
    }
    local.innerHTML = calcFim(date, fim)  

}

function createDiv() {
    let div = document.createElement('div')
    return div;
}

function init() {
    addDate(local)
    addSave()
    diasRestantes()
}

init()