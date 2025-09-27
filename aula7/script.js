const qnotas = 3;
const notas = [];
let soma = 0;

const $ = document.getElementById("media");

for (var i = 0; i < qnotas;) {
    let pnota = Number(prompt(`Digite a nota ${i+1}`) || "null");
    if (!isNaN(pnota) && pnota >= 0 && pnota <= 10) {
        notas.push(pnota);
        i++
    } else {
        alert("Número inválido!");
    };
};

notas.map(x => soma += x);

$.innerText = `Média: ${soma / notas.length}`;