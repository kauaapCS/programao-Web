function setCookie(nome, valor, dias) {
    const d = new Date();
    d.setTime(d.getTime() + (dias*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}

function calcularNota() {
    const nome = document.getElementById('nome').value;
    const rgm = document.getElementById('rgm').value;
    const notaAtividades = parseFloat(document.getElementById('notaAtividades').value);
    const notaProjeto = parseFloat(document.getElementById('notaProjeto').value);
    const notaRegimental = parseFloat(document.getElementById('notaRegimental').value);

    const notaFinal = ((notaAtividades + notaProjeto + notaRegimental)/3).toFixed(2);

    let conceito = '';
    let classeConceito = '';
    if(notaFinal >= 6){
        conceito = 'Aprovado';
        classeConceito = 'aprovado';
    } else if(notaFinal <= 2.5){
        conceito = 'Reprovado';
        classeConceito = 'reprovado';
    } else {
        conceito = 'Exame';
        classeConceito = 'exame';
    }

    localStorage.setItem('nome', nome);
    localStorage.setItem('rgm', rgm);
    localStorage.setItem('notaFinal', notaFinal);

    setCookie('nome', nome, 1);
    setCookie('rgm', rgm, 1);
    setCookie('notaFinal', notaFinal, 1);

    const divResultado = document.getElementById('resultado');
    divResultado.style.display = 'block';
    divResultado.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>RGM:</strong> ${rgm}</p>
        <p><strong>Nota Atividades:</strong> ${notaAtividades}</p>
        <p><strong>Nota Projeto:</strong> ${notaProjeto}</p>
        <p><strong>Nota Regimental:</strong> ${notaRegimental}</p>
        <p><strong>Nota Final:</strong> ${notaFinal}</p>
        <span class="conceito ${classeConceito}">Conceito: ${conceito}</span>
    `;

    document.getElementById('formNotas').reset();
}