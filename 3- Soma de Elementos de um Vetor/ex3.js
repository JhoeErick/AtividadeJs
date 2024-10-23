const vetor = [5, 10, 15, 20, 25, 30];
document.getElementById('vetor').innerHTML = `Vetor: ${vetor.join(', ')}`;
let soma = 0;
for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}
document.getElementById('soma').innerHTML = `Soma dos Elementos: ${soma}`;
