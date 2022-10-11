const { default: Swal } = require("sweetalert2")

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const adressInput = document.querySelector('#adress')
const phoneInput = document.querySelector('#phone')
const cpfInput = document.querySelector('#cpf')
const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const adressValue = adressInput.value;
    const phoneValue = phoneInput.value;
    const cpfValue = cpfInput.value;

    if (nameValue === '' || emailValue === '' || adressValue === '' || phoneValue === '' || cpfValue === ''){
        Alert('Preencha o fomulário completo!')
    }
})