let nome = prompt("Digite seu nome:");
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
let anoAtual = parseInt(prompt("Digite o ano atual:"));
let idade = anoAtual - anoNascimento;
console.log("Nome: " + nome);
console.log("Idade: " + idade);