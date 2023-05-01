function adivinhar(){
    var selectInicial = document.getElementById('numInicio');
    var valorInicialSelecionado = selectInicial.options[selectInicial.selectedIndex].textContent;
    console.log(valorInicialSelecionado);

    var selectFinal = document.getElementById('numFinal');
    var valorFinalSelecionado = selectFinal.options[selectFinal.selectedIndex].textContent;
    console.log(valorFinalSelecionado);

    var escolhido = document.getElementById('escolhido').value;
    console.log(escolhido);

    var mensagem = document.getElementById('msg');

    //validando parametros do usuário

    if(parseInt(valorInicialSelecionado) > parseInt(valorFinalSelecionado)){
        mensagem.innerHTML = 'O Valor Inicial Deve ser Menor Que o Final';
        mensagem.classList.remove('msg-certo');
        mensagem.classList.add('msg-erro');
    }else if(parseInt(escolhido) > parseInt(valorFinalSelecionado) || parseInt(escolhido) < parseInt(valorInicialSelecionado)){
        mensagem.innerHTML = 'Número Inválido';
        mensagem.classList.remove('msg-certo');
        mensagem.classList.add('msg-erro');
    }else if(escolhido.length == 0){
        mensagem.innerHTML = 'Por Favor, Digite Um Número';
        mensagem.classList.remove('msg-certo');
        mensagem.classList.add('msg-erro');
    }else{
        var parametro1 = valorFinalSelecionado - valorInicialSelecionado;
        console.log(parametro1);
    
        var parametro2 = valorInicialSelecionado;
        console.log(parametro2);
    
        var resultado = Math.floor(Math.random() * parseInt(parametro1)) + parseInt(parametro2);
        console.log('resultado: ' + resultado);
        
        if(escolhido == resultado){
            mensagem.innerHTML = 'Você Acertou! Parabéns';
            mensagem.classList.remove('msg-erro');
            mensagem.classList.add('msg-certo');
        }else{
            mensagem.innerHTML = 'Você Errou! Tente Novamente';
            mensagem.classList.remove('msg-certo');
            mensagem.classList.add('msg-erro');
        }
    }
}