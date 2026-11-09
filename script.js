

console.log("JavaScript carregado!");




const nomeAluno = "Samara";
let idade = 17;
const matriculado = true;

console.log(nomeAluno);
console.log(idade);
console.log(matriculado);

console.log(typeof nomeAluno);
console.log(typeof idade);
console.log(typeof matriculado);




let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);


console.log(numero1 > numero2);


console.log(numero1 === numero2);




const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log(n1 + n2);

console.log(typeof n1);
console.log(typeof n2);




const idadePessoa = Number(prompt("Digite sua idade:"));

if (idadePessoa >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}




const nota = Number(prompt("Digite sua nota:"));

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}




const numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}




const idadeTeste = Number(prompt("Idade:"));

if (idadeTeste === 18) {
    console.log("Tem exatamente 18 anos");
} else {
    console.log("Idade diferente de 18");
}

console.log(idadeTeste);




const nome = prompt("Digite o nome do aluno:");

const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

let situacao;

if (media >= 70) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);
