let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let texto = document.querySelector('#texto1');
let nomeOk = false;
let emailOk = false;

function validaNome(){
    if(nome.value.length < 3){
        // nome.style.borderRadius = '1em'
        nome.style.border = '3px solid red'
    }else{
        nome.style.border = '3px solid green'
        nomeOK = true
    }
}

function validaEmail(){
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email.style.border = '3px solid red'
    }else{
        email.style.border = '3px solid green'
        emailOK = true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}