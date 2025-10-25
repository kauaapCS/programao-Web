function getNumero() {
    return parseFloat(document.getElementById("numero").value);
}

function calcularQuadrado() {
    const n = getNumero();
    document.getElementById("resultado").value = n ** 2;
}

function calcularRaiz() {
    const n = getNumero();
    document.getElementById("resultado").value = Math.sqrt(n).toFixed(4);
}

function calcularSeno() {
    const n = getNumero();
    document.getElementById("resultado").value = Math.sin(n * Math.PI / 180).toFixed(4);
}

function calcularCosseno() {
    const n = getNumero();
    document.getElementById("resultado").value = Math.cos(n * Math.PI / 180).toFixed(4);
}

function calcularAreaCirculo() {
    const r = getNumero();
    document.getElementById("resultado").value = (Math.PI * r * r).toFixed(4);
}

function decimalParaBinario() {
    const n = parseInt(document.getElementById("numero").value);
    document.getElementById("resultado").value = n.toString(2);
}

function binarioParaDecimal() {
    const n = document.getElementById("numero").value;
    document.getElementById("resultado").value = parseInt(n, 2);
}