//Alertas e Console
/*
//var nome = "Lucas Dresler";
//var idade = 55;
//var idade2 = 10;
//var frase = "Japão é a melhor seleção do Mundo!";
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
*/

//Array
/*
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); //push-adiciona itens ao final da lista
//lista.popo(); //pop-exclui o último item da lista
//console.log(lista);
//console.log(lista[1]);
//console.log(lista.length); //mostra quant. de itens da lista
//console.log(lista.reverse()); //inverte a ordem dos itens da lista
//console.log(lista);
//console.log(lista.toString()); //Transforma a lista em String
//console.log(lista.join(" | ")); //Transforma a lista em String separando os itens com o caracter definido
*/

//Dicionário
/*
var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta);
*/

//Lista de dicionários
/*
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);
alert(frutas[1].nome);
*/

//Condicionais
/*
var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/
/*
var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/

//Estrutura de repetição
/*
var count = 0;
while (count < 5) {
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};
*/

//Datas

//var d = new Date();
//alert(d);
//alert(d.getDay() + 1);
//alert(d.getMonth() + 1);
//alert(d.getHours());
//alert(d.getMinutes());

//Funções
/*
function soma(n1, n2) {
    return n1 + n2;
};

alert(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
};

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));
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

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto");
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Passe o mouse aqui";
    //alert("Trocar texto");
}

function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}