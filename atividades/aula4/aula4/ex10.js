let A = parseFloat(prompt("Digite o valor de a:"));
let B = parseFloat(prompt("Digite o valor de b:"));
let C = parseFloat(prompt("Digite o valor de c:"));

let delta = B**2 - 4*A*C;

if(delta < 0){
    console.log("A equação não possui raízes reais.");
} else {
    let x1 = (-B + Math.sqrt(delta)) / (2*A);
    let x2 = (-B - Math.sqrt(delta)) / (2*A);
    console.log("As raízes da equação são: x1 = " + x1 + ", x2 = " + x2);
}