function inverterTexto() {
    const texto = document.getElementById("entrada").value;
    document.getElementById("resultado").value = texto.split("").reverse().join("");
}

function contarVogais() {
    const texto = document.getElementById("entrada").value.toLowerCase();
    const vogais = texto.match(/[aeiouáéíóúãõâêô]/g);
    document.getElementById("resultado").value = vogais ? vogais.length + " vogais encontradas" : "Nenhuma vogal encontrada";
}

function verificarPalindromo() {
    const texto = document.getElementById("entrada").value.toLowerCase().replace(/\s+/g, '');
    const invertido = texto.split('').reverse().join('');
    const resultado = texto === invertido ? "Sim, é um palíndromo!" : "Não, não é um palíndromo.";
    document.getElementById("resultado").value = resultado;
}

function capitalizarPalavras() {
    const texto = document.getElementById("entrada").value.toLowerCase();
    const resultado = texto.replace(/\b\w/g, c => c.toUpperCase());
    document.getElementById("resultado").value = resultado;
}

function mascararCPF() {
    let cpf = document.getElementById("entrada").value;
    const padrao = /^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/;
    if (padrao.test(cpf)) {
        cpf = cpf.replace(padrao, "xxx.$2.$3-xx");
        document.getElementById("resultado").value = cpf;
    } else {
        document.getElementById("resultado").value = "Formato de CPF inválido. Use 000.000.000-00";
    }
}