const notas = [6.5, 8.0, 7.5, 6.0, 9.0];

document.getElementById('notas').innerHTML = `Notas: ${notas.join(', ')}`;

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

let resultado = '';
if (media >= 7) {
    resultado = `Média: ${media.toFixed(2)} - Aprovado!`;
} else {
    resultado = `Média: ${media.toFixed(2)} - Reprovadoo.`;
}

document.getElementById('resultado').innerHTML = resultado;
