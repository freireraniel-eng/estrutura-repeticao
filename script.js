function somaImpares() {
    let soma = 0;

    for (let i = 1; i <=500; i++) {
        if (i % 2 !== 0 && 1 % 3 === 0) { 
            soma += i;
        }
        
    }
    alert("A soma dos ímpares e múltiplos de 3 no conjunto de 1 à 500 é:" + soma)
}
