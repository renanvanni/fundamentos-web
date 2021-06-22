/*
Case Sensitive = reconhece letras maiúsculas e minúsculas

Por Tag: getElementByTagName()
Por Id: getElementById()
Por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySelector()
*/

// JS para a contato.html
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')
let gif = document.querySelector('#gif')
let gif2 = document.querySelector('#gif2')
let gif3 = document.querySelector('#gif3')
let gif4 = document.querySelector('#gif4')
// colocar a verificação do thiago para email aqui

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtN = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtN.innerHTML = 'Nome Inválido'
        txtN.style.color = 'red'
    }else{
        txtN.innerHTML = 'Nome Válido'
        txtN.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtE = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtE.innerHTML = 'E-mail inválido'
        txtE.style.color = 'red'
    }else{
        txtE.innerHTML = 'E-mail válido'
        txtE.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto(){
    let txtA = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtA.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtA.style.color = 'red'
        txtA.style.display = 'block'
    }else{
        txtA.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

// JS para a hobbies.html
function gifZoom(){
    gif.style.width = '800px'
    gif.style.height = '600px'
}

function gifNormal(){
    gif.style.width = '480px'
    gif.style.height = '200px'
}

function gif2Zoom(){
    gif2.style.width = '800px'
    gif2.style.height = '600px'
}

function gif2Normal(){
    gif2.style.width = '480px'
    gif2.style.height = '200px'
}

function gif3Zoom(){
    gif3.style.width = '800px'
    gif3.style.height = '600px'
}

function gif3Normal(){
    gif3.style.width = '480px'
    gif3.style.height = '200px'
}

function gif4Zoom(){
    gif4.style.width = '800px'
    gif4.style.height = '600px'
}

function gif4Normal(){
    gif4.style.width = '480px'
    gif4.style.height = '200px'
}