function cadastrar() {
    const qitens = Number(document.getElementById("qtd").value || 0);

    if (isNaN(qitens) || 0) return alert("Número inválido!");

    const lista = [];

    for (var i = 0; i < qitens;) {
        let pitem = prompt(`Digite o item ${i+1}`);
        if (pitem != "") {
            lista.push(pitem);
            i++
        } else {
            alert("Item inválido!");
        };
    };

    alert(lista.join(", "))
}