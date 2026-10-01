function somaImpares() {
    let soma = 0;

    for (let i = 1; i <=500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) { 
            soma += i;
        }
        
    }
    alert("A soma dos ímpares e múltiplos de 3 no conjunto de 1 à 500 é:" + soma)
}
function menorEMaiorAltura() {
    const quantidadedeAlturas = 15;
    let alturas = [
        1.80,
        1.75,
        1.50,
        1.60,
        1.85,
        1.70,
        1.65,
        1.90,
        2.10,
        1.96,
        1.85,
        1.52,
        1.72,
        1.83,
        1.94

    ];

    let menor = alturas[0]
    let maior = alturas[0]

    for (let altura of alturas) {
        if (altura < menor) {
            menor = altura
        }

        if (altura > maior) {
            maior = altura;
        }
    }
    alert(`
        A quantidade de alturas percorridas é: ${quantidadedeAlturas}
        A maior altura é: ${maior} & 
        A menor altura é: ${menor}`)
}
