const vetor = [];
for (let i = 0; i < 10; i++) {
    vetor.push(Math.floor(Math.random() * 100) + 1);
}
const numerosPares = vetor.filter(numero => numero % 2 === 0);
document.getElementById("result").innerHTML = `
    Vetor: ${vetor.join(", ")} <br> 
    Números Pares: ${numerosPares.join(", ")}
`;
