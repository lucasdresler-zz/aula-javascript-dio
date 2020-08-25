//alert("Meu primeiro js");

//var nome = "Lucas Dresler";
//alert("Bem vindo " + nome);

//var idade = 55;
//alert(nome + " tem " + idade + " anos");

//var idade2 = 10;
//alert(idade + idade2);

//console.log(nome);
//console.log(idade + idade2);

//var frase = "Japão é o melhor time do mundo."
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));

//console.log(frase.toUpperCase("Japão", "Brasil"));
//ou toLowerCase para minúsculas

//Array

//var lista = ["Maçã", "Pera", "Laranja"];
//console.log(lista); //escreve toda a lista
//console.log(lista[1]);

//alert(lista[1]);

//lista.push("Uva"); //.push adiciona item
//console.log(lista);
//lista.pop(); //.pop exclui item

//console.log(lista.length);//Mostra a quantidade de itens

//console.log(lista.reverse());//Mostra os itens da lista na ordem contrária
//console.log(lista.toString()); //Mostra a lista como string
//console.log(lista.join(" | ")); //Mostra a lista como string e separa ou não os itens

//Dicionário
/*
var fruta = { nome: "Maça", cor: "Vermelha" };
console.log(fruta);
alert(fruta.cor);
*/

//Lista de dicionários
/*
var frutas = [{ nome: "Maça", cor: "Vermelha" }, { nome: "Uva", cor: "Roxa" }];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var idade = 18;

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/

/*
var idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    alert("Você é maior de idade");
} else {
    alert("Você é menor de idade, pirralho!!!");
}
*/

/*
//Estrutura de Repetição 
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1; //ou count++
}
*/

/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}
*/

//Datas
/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
*/

//Funções

/*
function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var validar;

function validaidade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaidade(idade)
console.log(validar);
*/

/*
function clicou() {
    alert("Obrigado por clicar!");
}

*/


function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}



function redirecionar() {
    window.open("https://lucasdresler.top/"); //Abre em outra aba
    //Ou
    //window.location.href = "https://lucasdresler.top/"; //Abre na mesma aba
}

/*
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto");
}
*/

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

/*
function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
*/


function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
    //alert("Trocar texto");
}


function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}