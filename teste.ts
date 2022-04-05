// var mensagem:string = "Hello World!"
// var pontuacao:number = 1000;
// var pontuacao2:number = 9.9;
// var soma = pontuacao + pontuacao2 
// console.log(mensagem);
// console.log("Primeira Pontuação: " + pontuacao)
// console.log("Segunda Pontuação: " + pontuacao2)
// console.log("A Soma das pontuações : " + soma)

//var num:number= "impacta"; 

// const idParticipantes = {
//     participantesA: 1,
//     participantesB: 2,
//     participantesC: 3,
//     participantesD: 4
// };
// console.log(idParticipantes);

// idParticipantes.participantesB = 8;

// console.log(idParticipantes.participantesB);

// var y:any;
// // var z:any = 'a b c';

// // for(y in z){
// //  console.log(z[y])   
// // }

// let umArray: Array<number> = [150, 200, 10, 5, 999];

// for(y of umArray){
//     console.log(y);
// };

// var  numero:number = 10;

// var fatorial:number = 1;

// while(numero >= 1){
//     fatorial = fatorial * numero
//     numero--
// }

// console.log("O valor do Fatorial de 10 até 1 é: " + fatorial);


// var novoNum:number = 13;
// console.log("Valores encontrados durante a interação do loop do ..while");

// //declarando o Loop

// do{
//     console.log(novoNum)
//     novoNum--
// }while(novoNum >= 0)


// for(var i = 0; i < numero.length; i++) {
//     soma += numero[i];
// }
// console.log(soma);

// for(let indice in numero){
//     soma = soma + numero[indice];
//     console.log(" Indice: " + indice + " numero: " + numero[indice ] + "\n");
//     console.log("Resultado Parcial:" + soma + "\n");
// } 

// console.log("Resultado Total: " + soma);
// const numero:Array<number> = [8,9,3,4,7];
// let soma:number = 0;
// let indice:number = 0;
// while(indice < numero.length){
  
//     soma += numero[indice];
//     indice++;
//     console.log(" Indice: " + indice + " numero: " + numero[indice ] + "\n");
//     console.log("Resultado Parcial:" + soma + "\n");
// }

// console.log("Resultado Total: " + soma);

// const nomes:Array<string> = ["Ana", "alice", "Henrique", "Augusto", "Jair", "Sueli" ];
// let novoNome:Array<string> = [];

// for( let nome of nomes){
//     if(nome[0] == "A" || nome[0] == "a" ){
//         novoNome.push(nome);
//     }
// }

// console.log( novoNome);

class Saudacao {
    saudacao():void{
        console.log("Hello World a partir de uma classe.")
    }
}

var obj = new Saudacao();

obj.saudacao();