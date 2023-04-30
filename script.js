function adivinhar(){
    var selectInicial = document.getElementById('numInicio');
    var valorInicialSelecionado = selectInicial.options[selectInicial.selectedIndex].textContent;
    console.log(valorInicialSelecionado);

    var selectFinal = document.getElementById('numFinal');
    var valorFinalSelecionado = selectFinal.options[selectFinal.selectedIndex].textContent;
    console.log(valorFinalSelecionado);

    var escolhido = document.getElementById('escolhido').value;
    console.log(escolhido);

    var parametro1 = valorFinalSelecionado - valorInicialSelecionado;
    console.log(parametro1)

    var parametro2 = valorInicialSelecionado;
    console.log(parametro2)

    var resultado = parseInt((Math.random() * parametro1)) + parametro2;
    console.log('resultado: ' + resultado);
}
