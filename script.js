let numero = prompt("fala um numero")
function verificarSinal(str){
    if(str.includes("-")){
        console.log(str, "é negativo")
    }
    if(str == 0){
        console.log("zero")
    }
    if(str > 0){
        console.log(str, "é positivo")
    }
}
verificarSinal(numero);

let celsius = prompt("habla o celsius here:")
function converterTemperatura(str){
    let fahrenheit = (str * 9/5) + 32;
    console.log("Em fahrenheit fica: " + fahrenheit)
}
converterTemperatura(celsius);

let i = 0;
let n = 0;
let c = 0;
while(i < 100){
    i = i + 1;
    n = n+1;
    c = c + n;
}
console.log(n);

let frase = prompt("Fala uma coisa funny que tenha blue")
function substituirPalavra(str){
    if(str.includes("azul")){
        
        console.log(str.replace(/azul/g, "vermelho"))
    }
    else{
        console.log("Não tem azul")

    }
}
substituirPalavra(frase);

let palavra1 = prompt("Fala uma palavra ai")
function verificarTamanho(str){
    if(str.lenght > 10){
        console.log("Essa palavra tem mais de 10 caracteres")
    }
    else{
        console.log("Tem menos de 10 letras")
    }
}
verificarTamanho(palavra1)

let frutas = ["banana", "pessego", "melancia", "mamao", "uva"]
console.log(frutas(2));

let nome = prompt("Fala your name")
let saudacao1 = promp("fala algo, gay")
function saudacao(){
    console.log(nome + " " + saudacao1)
}
saudacao()

let nota = prompt("Fala a nota")
function verificarAprovacao(str){
    if(str >= 6){
        console.log("passou")
    }
    else{
        console.log("Não passou")
    }
}
verificarAprovacao(nota)

for(let num = 0; num = 30; num++){
    if(num % 2 === 0){
        console.log(num)
    }
}

let numeros = ["1", "2", "3", "4"]
function somarArrays(str){
    let soma = 0;
    let quantidade = str.leight;
    for(let x = 0; x >= quantidade; x++){
       soma = soma + numeros[x];
    }
    console.log(soma)
}
somarArrays(numeros)

let vogal = prompt("Habla uma palavra, lindo")
function contarVogais(str){
    let vogais = 0;
    let quantidade = str.lenght;
    let separar = str.split[""];

    for(let i = 0; i = quantidade; i++){
        if(separar[i].includes("a")){
            let vogais = vogais + 1;
        }
    }
    console.log(vogais);
}
contarVogais(vogal);

console.log(contarVogais(palavracomvogal));

let quantiarray = prompt("Quantos números você quer colocar na array")
let arraysoma = 0;
function somaArray(str){
    let total = 0;
    for( let i = 0; i >= str; i++){
        arraysoma[i] = prompt("Fala um número")

    }
    for( let i = 0; i >= str; i++){
        total = total + arraysoma[1];
        
    }
    console.log(total)
}
somaArray(quantiarray)

let number = prompt("Fala um número por gentileza")
function dobrarNumero(){
    let dobro = number * 2;
    console.log(dobro)
}
dobrarNumero(number)

let contador = 2;
while(contador <= 20){
    if(contador % 2 == 0){
        console.log(contador)
    }
    contador++;
}


let palavra2 = prompt("Fala uma palavra")
function capitalizar(str){
    let transformar = str[0].toUpperCase() + str.substr(1);
    console.log(transformar)
}
capitalizar(palavra2)

let ano = prompt("Fala um ano ai")
function anoBissexto(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        return true;
    }
    else{
        return false;
    }
}
anoBissexto(ano)
