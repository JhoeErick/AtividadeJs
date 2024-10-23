function isPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const vetor = [3, 5, 8, 13, 17, 21, 29, 35, 37, 40];
document.getElementById('vetor').innerHTML = `Vetor: ${vetor.join(', ')}`;

const primos = vetor.filter(isPrimo);

document.getElementById('primos').innerHTML = `Números Primos: ${primos.join(', ')}`;
