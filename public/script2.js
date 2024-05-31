


// let userLogado = JSON.parse(localStorage.getItem('userLogado'))

// let logado = document.querySelector('#logado')
// logado.innerHTML = `Olá ${userLogado.nome}`

// if(localStorage.getItem('token') == null){
    //     alert('Você precisa estar logado para acessar essa página')
    //     window.location.href =""
    
    
    // const btn = document.getElementById('btn')
    // const username = document.getElementById('username')
    // const userEmail = document.getElementById('Email')
// const senha = document.getElementById('senha')

// btn.addEventListener('submit', (e) => {
//   e.preventDefault()

//   checkInputs()
// })

// function checkInputs(){

//     const usernameValue = username.value.trim()
//     const userEmail = Email.value.trim()
//     const password = senha.value.trim()

//     if(usernameValue === ''){
    
//         errorValidation(username, 'Preencha esse campo')
//     }
// }

//  function errorValidation(input, message){

    //  }
    function Entrar(){
        
    let email =document.querySelector('#email')
    let labelEmail =document.querySelector('#emailLabel') 
        
    let senha= document.querySelector("#Senha")
    let senhaLabel= document.querySelector('#senhaLabel')
    
    let msgError = document.querySelector('#msgError')

    let listaUsers = []

    let userValid={
        nome: '',
        email: '',
        senha: ''
    }

    listaUsers= JSON.parse(localStorage.getItem('listaUsers'))

    listaUsers.forEach((item) => {
        if(email.value === item.emailCad && senha.value === item.senhaCad){
            userValid= {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });

    if(email.value == userValid.email && senha.value == userValid.senha){

     window.location.href='http://127.0.0.1:5500/public/cadastrocep.html'

     let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
     localStorage.setItem('token', token)

    }else{
        labelEmail.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML= "Usuário ou senha incorretos"
        email.focus()

    }
}