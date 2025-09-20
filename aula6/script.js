// alert("Olá");

// nome = prompt("Digite seu nome: ");
// idade = prompt("Digite sua idade: ");

// if (idade >= 16) {
//     alert("Você pode votar!");
// } else {
//     alert("Você não pode votar...")
// };

// alert("Até a próxima...")

function mudar() {
    const cores = {
        vermelho: "#ff0000",
        azul: "#0000ff",
        amarelo: "#ffff00",
        verde: "#00ff00"
    }
    sel_negrito = document.getElementById("negrito").checked;
    cor = cores[document.getElementById("cor").value.toLowerCase()];
    if (sel_negrito) {
        document.getElementById("conteudo").style.fontWeight = "bold";
    } else {
        document.getElementById("conteudo").style.fontWeight = "normal";
    };
    document.getElementById("conteudo").style.color = cor || "#000000";
};