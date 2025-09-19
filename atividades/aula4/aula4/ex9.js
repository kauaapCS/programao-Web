let cateto1 = parseFloat(prompt("Digite o comprimento do primeiro cateto:"));
let cateto2 = parseFloat(prompt("Digite o comprimento do segundo cateto:"));
let hipotenusa = Math.sqrt(cateto1**2 + cateto2**2);
console.log("A hipotenusa do triângulo é: " + hipotenusa);