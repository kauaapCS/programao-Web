function getDateFromInput(id) {
    const valor = document.getElementById(id).value;
    return valor ? new Date(valor + 'T00:00:00') : null;
}

function diferencaDatas() {
    const data1 = getDateFromInput('data1');
    const data2 = getDateFromInput('data2');

    if (!data1 || !data2) {
        document.getElementById("resultado").value = "Informe as duas datas!";
        return;
    }

    const diferenca = Math.abs(data2 - data1);
    const dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    document.getElementById("resultado").value = `${dias} dias de diferença`;
}

function adicionarDias() {
    const data1 = getDateFromInput('data1');
    const dias = parseInt(document.getElementById('dias').value);

    if (!data1 || isNaN(dias)) {
        document.getElementById("resultado").value = "Informe a data e o número de dias!";
        return;
    }

    const novaData = new Date(data1);
    novaData.setDate(data1.getDate() + dias);

    document.getElementById("resultado").value = novaData.toLocaleDateString('pt-BR');
}

function formatarData() {
    const data1 = getDateFromInput('data1');
    if (!data1) {
        document.getElementById("resultado").value = "Informe uma data!";
        return;
    }
    document.getElementById("resultado").value = data1.toLocaleDateString('pt-BR');
}

function verificarFimDeSemana() {
    const data1 = getDateFromInput('data1');
    if (!data1) {
        document.getElementById("resultado").value = "Informe uma data!";
        return;
    }
    const dia = data1.getDay();
    if (dia === 0 || dia === 6) {
        document.getElementById("resultado").value = "É fim de semana!";
    } else {
        document.getElementById("resultado").value = "Dia útil (semana)";
    }
}

function contadorRegressivo() {
    const hoje = new Date();
    const data2 = getDateFromInput('data2');
    if (!data2) {
        document.getElementById("resultado").value = "Informe a data final!";
        return;
    }

    const diferenca = data2 - hoje;
    const diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    if (diasRestantes > 0) {
        document.getElementById("resultado").value = `Faltam ${diasRestantes} dias para a data.`;
    } else if (diasRestantes === 0) {
        document.getElementById("resultado").value = "A data é hoje!";
    } else {
        document.getElementById("resultado").value = `Essa data foi há ${Math.abs(diasRestantes)} dias.`;
    }
}