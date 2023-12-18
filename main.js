const root = document.querySelector('#root')

function Counter() {
    function makeElement(tag, attr_n, attr_v, Content) {
        let output = document.createElement(tag)
        output.setAttribute(attr_n, attr_v)
        output.textContent = Content
        return output
    }
    
    const counter = makeElement('div','class','counter', '')
    const btnInc = makeElement('button','class','btn-inc','+')
    const number = makeElement('h3','class','number','0')
    const btnDec = makeElement('button','class','btn-dec','-')
    const btnClr = makeElement('button','class','btn-clr','C')
    const btnDel = makeElement('button','class','btn-del','X')
    const input = document.getElementById('counterValue')

    let countNum = 0
    
    const updateCounter = ()  => {
        const value = parseInt(input.value)
        if (!isNaN(value)) {
            countNum = value
            number.textContent = countNum
        }
    }

    const delCounter = () => {
        counter.remove()
    }
    
    btnInc.addEventListener('click', () => {
        const value = parseInt(input.value)
        if (!isNaN(value)) {
            countNum += value
            number.textContent = countNum
        }
    })
    
    btnDec.addEventListener('click', () => {
        const value = parseInt(input.value)
        if (!isNaN(value)) {
            countNum -= value
            number.textContent = countNum
        }
    })
    
    btnClr.addEventListener('click', () => {
        countNum = 0
        number.textContent = countNum
    })
    
    btnDel.addEventListener('click', delCounter)

    counter.append(btnInc, number, btnDec, btnClr, btnDel)
    return counter
}

const hd1AddCounter = () => {
    root.append(Counter())
}

const Addbtn = document.querySelector('.addBtn')
Addbtn.addEventListener('click', hd1AddCounter)
