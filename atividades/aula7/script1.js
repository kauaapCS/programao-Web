const qitem = 3;
const lista = [];

for (var i = 0; i < qitem;) {
    let pitem = prompt(`Digite o item ${i+1}`);
    if (pitem != "") {
        lista.push(pitem);
        i++
    } else {
        alert("Item inválido!");
    };
};

alert(lista.join(", "))