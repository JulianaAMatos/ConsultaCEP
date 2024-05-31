

let nome = document.querySelector('#nome')
let labelNome= document.querySelector('#labelNome')
let validNome=false

let email = document.querySelector('#Email')
let labelEmail= document.querySelector('#labelEmail')
let validEmail=false

let password = document.querySelector('#Senha')
let labelsenha= document.querySelector('#labelSenha')
let validPassword=false

let password2 = document.querySelector('#Senha2')
let labelConfirmSenha= document.querySelector('#labelConfirmSenha')
let validPassword2=false

let msgError= document.querySelector('#msgError')
let msgSucess= document.querySelector('#msgSucess')

nome.addEventListener('keyup', () => {
     
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')

    labelNome.innerHTML= '<strong>Nome *Insira no mínimo 4 caracteres</strong>'
    nome.setAttribute('style', 'border-color:red')
    validNome=false

  }else{
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML= 'Nome'
    nome.setAttribute('style', 'border-color:green')
    validNome=true
  }
})

email.addEventListener('keyup', () => {
     
  if(email.value.length <= 20){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML= '<strong>Email *Insira seu email</strong>'
    email.setAttribute('style', 'border-color:red')
    validEmail=false
    
  }else{
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML= 'Email'
    email.setAttribute('style', 'border-color:green')
    validEmail=true
    
  }
})

password.addEventListener('keyup', () => {
     
  if(password.value.length <= 5){
    labelsenha.setAttribute('style', 'color: red')
    labelsenha.innerHTML= '<strong>Senha *Insira no mínimo 8 caractres</strong>'
    password.setAttribute('style', 'border-color:red')
    validPassword=false
  }else{
    labelsenha.setAttribute('style', 'color: green')
    labelsenha.innerHTML= 'Senha'
    password.setAttribute('style', 'border-color:green')
    validPassword=true
  }})


  password2.addEventListener('keyup', () => {
     
    if(password.value != password2.value){
      labelConfirmSenha.setAttribute('style', 'color: red')
      labelConfirmSenha.innerHTML= '<strong>*As senhas não conferem</strong>'
      password2.setAttribute('style', 'border-color:red')
      validPassword2=false
    }else{
      labelConfirmSenha.setAttribute('style', 'color: green')
      labelConfirmSenha.innerHTML= 'Confirmar senha'
      password2.setAttribute('style', 'border-color:green')
     validPassword2=true
    }})



function Cadastrar(){
    
    
    if(validNome && validEmail && validPassword && validPassword2){

        let listaUsers =JSON.parse(localStorage.getItem('listaUsers') || '[]')
        
        listaUsers.push(
            {
            nomeCad: nome.value,
            emailCad: email.value,
            senhaCad: senha.value
        })
      
        localStorage.setItem('listaUsers', JSON.stringify(listaUsers))

       msgSucess.setAttribute('style', 'display: block')
       msgSucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
       msgError.setAttribute('style', 'display: none')
       msgError.innerHTML=''
      
    
        window.location.href= 'http://127.0.0.1:5500/public/emailcadastro.html'


    }else{
       
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML= '<strong>Preencha todos os campos</strong>'
        msgSucess.innerHTML=''
        msgSucess.setAttribute('style', 'display: none')
    }
    
    
    
    
}