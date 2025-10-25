function criarTabela() {
    const qtd = parseInt(document.getElementById("qtdLinhas").value);
    const container = document.getElementById("tabelaContainer");
    const btn = document.getElementById("btnCriar");

    if (isNaN(qtd) || qtd <= 0) {
        container.innerHTML = "<p style='color:red;'>Por favor, insira um número válido de linhas!</p>";
        return;
    }

    let tabela = "<table><tr><th>Milissegundo</th><th>Valor Aleatório</th></tr>";

    for (let i = 0; i < qtd; i++) {
        let datetime = new Date();
        let millisec = datetime.getMilliseconds();
        let randomVal = Math.random().toPrecision(5);
        tabela += `<tr><td>${millisec}</td><td>${randomVal}</td></tr>`;
    }

    tabela += "</table>";
    container.innerHTML = tabela;

    btn.disabled = true;
    btn.textContent = "Tabela Criada!";
}