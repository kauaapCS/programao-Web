function listarPessoas() {
    const listaDiv = document.getElementById('lista');
    listaDiv.innerHTML = '';
    pessoas.forEach(p => {
        const div = document.createElement('div');
        div.className = `pessoa-card ${p.genero.toLowerCase()}`;
        div.innerHTML = `
            <div class="header">${p.nome}</div>
            <div class="body">
                <img src="${p.foto}" alt="${p.nome}">
                <div class="info">
                    <div><strong>Idade:</strong> ${p.idade}</div>
                    <div><strong>Altura:</strong> ${p.altura}</div>
                    <div><strong>Peso:</strong> ${p.peso}</div>
                    <div><strong>Gênero:</strong> ${p.genero}</div>
                </div>
            </div>
            <div class="footer">
                <div>${p.profissao}</div>
                <div>${parseFloat(p.salario).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</div>
            </div>
        `;
        listaDiv.appendChild(div);
    });
}

function calcularDados() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (pessoas.length === 0) {
        resultadoDiv.innerHTML = "<p>A lista de pessoas está vazia!</p>";
        return;
    }

    const mediaIdade = pessoas.reduce((acc, p) => acc + p.idade, 0) / pessoas.length;

    const homens = pessoas.filter(p => p.genero === "Masculino");
    let homemMaisVelho = null;
    if (homens.length > 0) {
        homemMaisVelho = homens.reduce((a, b) => a.idade > b.idade ? a : b);
    }

    let maiorSalario = pessoas.reduce((a, b) => 
        parseFloat(a.salario) > parseFloat(b.salario) ? a : b
    , pessoas[0]);

    resultadoDiv.innerHTML += `<h2>Resultados:</h2>`;
    resultadoDiv.innerHTML += `<p><strong>Média das idades:</strong> ${mediaIdade.toFixed(2)}</p>`;

    if (homemMaisVelho) {
        resultadoDiv.innerHTML += `
            <h3>Homem mais velho</h3>
            <div class="pessoa-card masculino">
                <div class="header">${homemMaisVelho.nome}</div>
                <div class="body">
                    <img src="${homemMaisVelho.foto}" alt="${homemMaisVelho.nome}">
                    <div class="info">
                        <div><strong>Idade:</strong> ${homemMaisVelho.idade}</div>
                        <div><strong>Profissão:</strong> ${homemMaisVelho.profissao}</div>
                    </div>
                </div>
                <div class="footer">
                    <div>${homemMaisVelho.profissao}</div>
                    <div>${parseFloat(homemMaisVelho.salario).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</div>
                </div>
            </div>
        `;
    } else {
        resultadoDiv.innerHTML += `<p>Não há homens na lista.</p>`;
    }

    if (maiorSalario) {
        resultadoDiv.innerHTML += `
            <h3>Maior salário</h3>
            <div class="pessoa-card ${maiorSalario.genero.toLowerCase()}">
                <div class="header">${maiorSalario.nome}</div>
                <div class="body">
                    <img src="${maiorSalario.foto}" alt="${maiorSalario.nome}">
                    <div class="info">
                        <div><strong>Idade:</strong> ${maiorSalario.idade}</div>
                        <div><strong>Profissão:</strong> ${maiorSalario.profissao}</div>
                    </div>
                </div>
                <div class="footer">
                    <div>${maiorSalario.profissao}</div>
                    <div>${parseFloat(maiorSalario.salario).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</div>
                </div>
            </div>
        `;
    }
}