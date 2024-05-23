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
                 