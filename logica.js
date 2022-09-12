function getDaddosEnderecoPorCEP(cep) {
    let url = 'https://viacep.com.br/ws/' + cep + '/json/'

    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url)
    //console.log(url)

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let dadosJsonText = xmlHttp.responseText
            let dadosJsonObj = JSON.parse(dadosJsonText)

            let endereco = dadosJsonObj.logradouro
            let bairro = dadosJsonObj.bairro
            let cidade = dadosJsonObj.localidade
            let uf = dadosJsonObj.uf

            let = teste_msg = document.getElementById('msg_erro')

            if (teste_msg) {
                teste_msg.innerHTML = ''
            }

            document.getElementById('endereco').value = endereco
            document.getElementById('bairro').value = bairro
            document.getElementById('cidade').value = cidade
            document.getElementById('uf').value = uf
        } else if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {
            let div = document.createElement('div')
            let p = document.createElement('p')
            p.style = "color: red; font-weight: bold;"
            p.id = 'msg_erro'
            p.innerHTML = 'Digite um CEP válido!'
            div.appendChild(p)

            document.getElementById('container_principal').appendChild(div)
        }
    }

    xmlHttp.send()

}