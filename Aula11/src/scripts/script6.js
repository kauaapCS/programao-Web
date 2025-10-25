function gerarTabela() {
    const linhas = parseInt(document.getElementById('linhas').value);
    const colunas = parseInt(document.getElementById('colunas').value);
    const container = document.getElementById('tabelaContainer');

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
        alert("Informe valores válidos para linhas e colunas!");
        return;
    }

    container.innerHTML = '';

    const tabela = document.createElement('table');

    for (let i = 0; i < linhas; i++) {
        const linha = document.createElement('tr');
        for (let j = 0; j < colunas; j++) {
        const celula = document.createElement('td');
        celula.textContent = `(${i},${j})`;

        if (j % 2 === 0) {
            celula.style.backgroundColor = 'lightgreen';
        } else {
            celula.style.backgroundColor = 'khaki';
        }

        linha.appendChild(celula);
        }
        tabela.appendChild(linha);
    }

    container.appendChild(tabela);
}