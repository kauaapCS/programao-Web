function somarIdades() {
    const tabela = document.getElementById("tabelaIdades");
    const celulas = tabela.getElementsByTagName("td");
    let soma = 0;

    for (let i = 1; i < celulas.length; i += 2) {
        soma += parseInt(celulas[i].innerText);
    }

    const novaLinha = tabela.insertRow(-1);
    const celula1 = novaLinha.insertCell(0);
    const celula2 = novaLinha.insertCell(1);

    celula1.innerText = "Idade somada:";
    celula2.innerText = soma;

    const btn = document.getElementById("btnSomar");
    btn.disabled = true;
    btn.textContent = "Idade somada!";
}