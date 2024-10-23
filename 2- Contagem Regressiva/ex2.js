function contagemRegressiva() {

    const numero = parseInt(document.getElementById('numero').value);
    let resultado = '';

    if (isNaN(numero) || numero < 0) {
        resultado = 'Por favor, insira um número inteiro positivo.';
    } else if (numero < 10) {
        resultado = 'O número é menor que 10. A contagem não será realizada.';
    } else {
        for (let i = 10; i >= numero; i--) {
            resultado += i + ' ';
        }
    }
    document.getElementById('result').innerHTML = resultado;
}
