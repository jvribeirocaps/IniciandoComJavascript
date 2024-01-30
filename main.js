// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let a = 4;
let b = 8;
let sum = Number(a + b)
alert(`O resultado da soma de ${a} e ${b}: ${sum}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
// Declaração da variável

let valor = 5;

function verifyIfNumber(valor) {
    if (typeof valor === 'number') {
        alert("É um número");
    } else {
        alert("Não é um número");
    }
}
verifyIfNumber (valor);


// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let valor = "Olá mundo!";

function verifyIfString(valor) {
    if (typeof valor === 'string') {
        alert("É uma string");
    } else {
        alert("Não é uma string");
    }
}
verifyIfString (valor);


// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let valor = false;

function verifyIfBoolean(valor) {
    if (typeof valor === 'boolean') {
        alert("É um booleano");
    } else {
        alert("Não é um boolean");
    }
}
verifyIfBoolean (valor);



// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let a = 4;
let b = 8;
let sub = Number(a - b)
alert(`O resultado da subtração de ${a} e ${b}: ${sub}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let a = 4;
let b = 8;
let mult = Number(a * b)
alert(`O resultado da multiplicação de ${a} e ${b}: ${mult}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let a = 4;
let b = 8;
let div = Number(a / b)
alert(`O resultado da divisão entre ${a} e ${b}: ${div}`)


// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let valor = 4;
function verifyIfEven(valor) {
    if (valor % 2 === 0) {
        alert("É um número par");
    } else {
        alert("Não é um número par");
    }
}
verifyIfEven (valor);

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let valor = 7;
function verifyIfOdd(valor) {
    if (valor % 2 !== 0) {
        alert("É um número ímpar");
    } else {
        alert("Não é um número ímpar");
    }
}
verifyIfOdd (valor);