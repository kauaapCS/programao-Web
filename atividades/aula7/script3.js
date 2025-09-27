const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (var i = 0; i < lista.length; i++) {
    console.log(lista[i])
};

lista.map(x => soma += x);

console.log(soma);