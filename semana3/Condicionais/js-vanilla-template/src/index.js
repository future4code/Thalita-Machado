//1//
/*Respostas : foram feitas duas const na primeira faz um prompt no qual era perguntado o numero de teste,
na segunda const numero ele foi transformado em Number .
então ele fez um precessamento na condição usando if no qual foi digitado pelo usuario  comparando  o resto da divisão por 2 e comparando por 0 
logo imprimia "passou no teste" se numero for par,no else imprimia "não passou" se o numero for impar*/


//2//

/*a) REsposta: serve para facilitar a escrita dos codigos o switch tem a mesma função que o if e else que são as tomadas de decisões porém
 o switch não precisa de tantas funções e também compara a variavel com a case*/
 
//b)Vai imprimir : "O preço da fruta" Maçã "é" " R$" 2.25 

//c) vai imprimir : "Opreço da fruta" Pêra "é" " R$" 5.5

//d) Quando não se tem o BREAK ele não para na case até que se tenha um break.// 

//3// 

//a) foi feita uma const numero, Number eprompt pedindo pro usuario digitar um numero.//

/*b) se o usuario digitar o numero 10, será impresso no cosole "Esse numero passou no teste",
que o if (numero >0 ). no -10 não apareceria nunhuma mensagem*/

/* c) if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}
console.log(mensagem)
Sim,pois o scopo consta fechando a chave no let então o console que esta fora não reconhece a variavel mensagem
se fecharmos a chave a baixo do console a mensagem é impressa. */


//4//

/*let idade = Number(prompt("Digite sua idade"))

if(idade >= 18) {

console.log("você pode Dirigir!")
}

else{
 console.log("Você não pode Dirigir")
 
} */

//5//

/*let turno= prompt("Digite o turno que você estuda M (Matutino) V (Vespetino) N (Noturno)")

if(turno === "M"){

  console.log("Bom Dia!")

}
 else if(turno ==="V") {

  console.log("Boa Tarde!")

 }
else if (turno === "N"){

  console.log("Boa Noite!")

} */

//6//

/*let turno = prompt("Digite o turno que você está estudando M(matutino) V (Vespetino) N(Noturno")

switch(Turno){
  case 'M': 
  console.log("Bom dia!")
  break


case 'V':
console.log("Boa Tarde!")
break


case 'N': 
console.log("Boa Noite!")
break
default:
  console.log("Turno NÃO encontrado")
  break 
} */ 

//7//

let Filme=prompt("Digite o gênero do filme escolhido")
let ingresso =prompt("Quanto custo o ingresso?")

if(Filme ==="fantasia" && ingresso <=15){
  console.log("Bom Filme!:)")
}

else{
  console.log("Escolha outro Filme!:(")
}

