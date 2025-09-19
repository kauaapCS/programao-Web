let alturaDegrau = parseFloat(prompt("Digite a altura do degrau (m):"));
let alturaDesejada = parseFloat(prompt("Digite a altura desejada (m):"));
let degraus = Math.ceil(alturaDesejada / alturaDegrau);
console.log("O pedreiro precisará subir " + degraus + " degraus.");