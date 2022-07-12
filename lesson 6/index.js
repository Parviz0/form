let form = document.forms.register
let inputs = form.querySelectorAll('input')
let send = document.querySelector('button[data-send]')
let patterns = {
    name: /^[а-я ,.'-]+$/i,
    surname: /^[а-я ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    phoneNumber: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/,
    YourMomsname: /^[а-я ,.'-]+$/i,
    YourPapsname: /^[а-я ,.'-]+$/i,
    AboutYou: /^[а-я ,.'-]+$/i,
    WhatisJavaScript: /^[а-я ,.'-]+$/i,
    WhatisHtml:  /^[а-я ,.'-]+$/i,
    WhatisCss: /^[а-я ,.'-]+$/i,
    YourFavouriteCar: /^[а-я  ,.'-]+$/i,
}

let Success = document.querySelector('.Success')
let Error = document.querySelector('.Error')

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

inputs.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp, patterns[inp.name])
    }
    inp.onfocus = () => {
        inp.nextSibling.nextSibling.innerHTML = ""
    }
})


form.onsubmit = (event) => {
    event.preventDefault()
    let Success_count = 0
    let Error_count = 0
    
    
    inputs.forEach(inp => {
        if(inp.classList.contains('invalid') || inp.value.length === 0 && inp.getAttribute('data-req') == "") {
            inp.nextSibling.nextSibling.innerHTML = "ошибка!"
            Error_count++
            inp.classList.add('invalid')
        } 
        if(inp.value.length !== 0 && !inp.classList.contains('invalid')) {
            Success_count++
        }
    })
    
    Success.innerHTML = `Сделано ${Success_count}/7 `
    Error.innerHTML = `Ошибок ${Error_count}/12 `
    
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}
