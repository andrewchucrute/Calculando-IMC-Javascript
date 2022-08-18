import { Modal }  from './modal.js'
import { alerterror } from './alerterror.js'
import { CalcIMC, NotaNumber } from './utills.js'

const form = document.querySelector('form')
const inputPeso = document.querySelector('#Peso')
const inputAltura = document.querySelector('#Altura')


inputPeso.oninput = () => alerterror.close()
inputAltura.oninput = () => alerterror.close()


form.onsubmit = (event) => {
    event.preventDefault()


    const weight = inputPeso.value
    const height = inputAltura.value

    const WeightOrHeightIsnotNumber = NotaNumber(weight) || NotaNumber(height)

    if (WeightOrHeightIsnotNumber) {
        alerterror.open()
        return
    }
    else {
        alerterror.close()
    }
    

    const result = CalcIMC(weight, height)
    ResultMessage(result)
}

function ResultMessage (result) {
    const message = `Seu IMC é de ${result}`


    Modal.message.innerText = message
    Modal.open() 
}