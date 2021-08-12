
function sum(...args){
    console.log(args);
}

console.log(sum(5,5,5,2,3));


/*
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //    alert("Obrigado por Clicar");
}

function redirecionar(){
    window.open("https://www.azoup.com.br/");
    //window.location.href = "https://www.azoup.com.br/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse aqui";
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
//var valida = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false 
    }
    return validar;
}

function validaIdade(idade){
    if (idade >= 18){
        return true
    }else{
        return false 
    }
}

var idade = prompt("qual sua idade");
console.log(validaIdade(idade));

/*
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome, novo_nome);
}



alert(soma(5,10));
alert(setReplace("Vai Japão","Japão","Brasil"));

/*
var d = new Date();
alert(d.getDay()+1);
alert(d.getMonth()+1);
alert(d.getFullYear());

/*
var count;
for (count = 0; count <= 5; count++){
    alert(count);
}

/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;  
    count++;
};

/*
// Pergunta para saber idade... abre opção para digitar
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};

/*
// Lista de dicionários
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];

console.log(frutas);

console.log(frutas[1].nome);

console.log(frutas[1].cor);


// Dicionário
var fruta = {nome:"maça", cor:"vermelha"};

console.log(fruta);

console.log(fruta.nome);

console.log(fruta.cor);


/*
// lista
var lista = ["maça", "pera", "laranja"];

// exibe a lista
console.log(lista);

// adiciona item a lista
lista.push("uva");

// Exclui item da lista
lista.pop();

// Exibe o tamanho da lista
console.log(lista.length);

// inverte a ordem da lista
console.log(lista.reverse());

// exibe a lista como string
console.log(lista.toString());

// exibe o primeiro item da lista
console.log(lista[0]);

// exibe o primeiro caracter do primeiro item da lista
console.log(lista.toString()[0]);

// Adiciona uma informação na lista
console.log(lista.join(" - "));

/*
var nome = "Evandro Luiz Miguel";
var idade = 36;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert("Meu Primeiro js"); 
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome + " tem " + idade + " anos");
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

alert(frase.replace("Japão","Brasil"));
*/