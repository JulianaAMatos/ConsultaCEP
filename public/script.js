function consultaCEP(cep){
    cep= cep.replace(/\D/g,'') //Expressão regular, expressão de substituição de caractere(regex)

    if(cep != ""){
       
        const padraoCEP = /^[0-9]{8}$/ //Expressão regular const padraoCEP = /^[0-9][a-z](8)$/ //Expressão regular- com letras

        if(padraoCEP.test(cep)) {
            document.querySelector('#bairro').setAttribute('readonly', '')
            document.querySelector('#cidade').setAttribute('readonly', '')
            document.querySelector('#uf').setAttribute('readonly', '')
             
            const requisicao = new Request(`https://viacep.com.br/ws/${cep}/json/` , {
            "method": "GET",
            "headers":{
            "Content-type": "aplication/json"
             }
            
        });//Endereço

        fetch(requisicao)
            .then(resposta =>  resposta.json())
            .then(resposta => {

                if(!(resposta.erro)){

                 document.querySelector('#logradouro').value = (resposta.logradouro); //buscar dados atualizados
                 document.querySelector('#bairro').value = (resposta.bairro);
                 document.querySelector('#cidade').value = (resposta.localidade);
                 document.querySelector('#uf').value = (resposta.uf);
                }
                else{
                    limpaFormulario();
                    window.alert('CEP não localizado')

                    document.querySelector('#bairro').removeAttribute('readonly')
                    document.querySelector('#cidade').removeAttribute('readonly')
                    document.querySelector('#uf').removeAttribute('readonly')


                    document.querySelector('#logradouro').focus();
                }
            }); //buscar dados atualizados

        }
        else { //caso cep esteja fora do padrão
            limpaFormulario();
            window.alert('O formato do CEP é inválido')
        }
    }
    else{ //caso CEP esteja vazio
     limpaFormulario();
     window.alert('Digite um CEP') 
    }
}


function limpaFormulario(){
    document.querySelectorAll('input:not(#cep)').forEach(input => {
        input.value = ''
    })

}

function PesqRua(logradouro, bairro, localidade,uf){

    
    if(CEPpadrao.test(cep)) {
        document.querySelector('#bairro').setAttribute('readonly', '')
        document.querySelector('#cidade').setAttribute('readonly', '')
        document.querySelector('#uf').setAttribute('readonly', '')

    const buscarRequisicao = new Request(`https://viacep.com.br/ws/${logradouro}${bairro}${localidade}${uf}/json/` , {
            "method": "GET",
            "headers":{
            "Content-type": "aplication/json"
             }
            
        });//Endereço

        fetch(buscarRequisicao)
            .then(resposta =>  resposta.json())
            .then(resposta => {
            
                document.querySelectorAll('#cep').value = resposta.cep
           
                 
    })}}


    function CadastraCEP(enderecoCompleto){

        // parte1url parte2 https
        fetch('http://localhost:3000/endereco', {
            'method': 'POST',
            'headers':{
                'Content-type': 'application/json'
            },
            "body": JSON.stringify(enderecoCompleto)
        }). then(resposta => {
            // if(resposta.ok) window.alert('Endereço cadastrado')
            // else window.alert('ERRO:'+resposta.status)
            // operador ternario
            resposta.ok ? window.alert('Endereço Cadastrado') :
            window.alert('Erro: '+ resposta.status);


    })

    }
    function AtualizarCEP(UppdateCEP){
    
        fetch(`http://localhost:3000/endereco/id`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titile: cep,
                body: body,
                id: id
            })
        })
         .then(resposta => {
            return resposta.json()
        })
         .then(data => console.log(data))

    }
      
    if(localStorage.getItem('token') == null){

        alert('Você precisa estar logado para acessar essa página')
        window.location.href='http://127.0.0.1:5500/public/emailcadastro.html'
    }

    function sair(){

        localStorage.removeItem('token')
        window.location.href='http://127.0.0.1:5500/public/emailcadastro.html'
    }
    // function login(){

    //     const usuarios = [{
    //         login: "Juliana@juliana",
    //         pass: "123"
    //  }];

    // const login = document.getElementById('Email').value
    // const senha = document.getElementById('Senha').value

//     for( let i in usuarios){

//     if(login === usuarios[i].login && senha === usuarios[i].pass){
//     location.href ="cadastrocep.html"
//   } else{
//     alert('ERRO')
//   }}}


//     form.addEventListener('submite' ,(event) =>{
//         event.preventDefault()
//        checkInputEmail();
//        checkInputSenha();
//     })


//   function checkInputEmail(){
//     const userEmailValue = userEmail.value
//     if(userEmailValue === ''){}
//         //mostrar mensagem de erro
//   }

//   function checkInputSenha(){
//     const senhaValue = senha.value
//     if(senhaValue === ''){
//         errorInput(senha, "A senha é obrigatória")
//     }else if(senhaValue.length <8){
//         errorInput(senha, "A deve ter mais que oito caracteres")

//     }
//   }

    // function AtualizarCEP(UppdateCEP){

    //     fetch('http://localhost:3000', {
    //         'method': 'PATCH',
    //         'headers':{
    //             'Content-type': 'application/json'
    //         },
    //         "body": JSON.stringify(UppdateCEP)
    //     }). then(resposta => resposta.json()){
    //         console.log(id)
    //         // if(resposta.ok) window.alert('Endereço atualizado')
    //         // else window.alert('ERRO:'+ resposta.status)
         
    //     }
       
    // }





        //   //  document.getItem('SalvarDados').removeEventListener('click', CapturarInformacoesDados)
         
        //     const retornoData = JSON.parse(localStorage.getItem("endereco"))
            
        //     const CEPencontrado = retornoData.find((userfind) => userfind.idendereco == id)
         
        //     document.getElementById("cep").value =CEPencontrado.cep;
        //     document.getElementById("logradouro").value= CEPencontrado.logradouro;
        //     document.getElementById("bairro").value= CEPencontrado.bairro;
        //     document.getElementById("cidade").value= CEPencontrado.cidade;
        //     document.getElementById("uf").value= CEPencontrado.uf;
         
            
         
         
    

        //  UppdateCEP.put('/endereco/:id', (requisicao,resposta) =>{
        //     const id = requisicao.padraoCEP.id
        //     const existeCEP= consultaCEP.find((cep)=> cep.id === id)
        //  })
        //     if(!consultaCEP){
        //         window.alert('CEP Inexistente')
        //     }