//Exercicio1//
let idade =prompt("Qual é a sua idade?")
console.log(Number(idade))

let amiga = prompt("Qual a idade da sua melhor amiga?")
 console.log(Number(idade) >= Number(amiga))

const diferença =Number(idade) - Number(amiga)

console.log("diferença de idades", diferença) 


//2// 

let numero =Number(prompt("insira um numero par"))
console.log(numero%2) 

//c) o resultado padrão foi que quando é colocado um numero par não tem sobra e quando é impar sempre tem um numero de sobra//

//d) quando é impar sempre sobra o numero 1// 


//3// 

let listaDeTarefas = []
 listaDeTarefas[0]=prompt("Quais são as suas tarefas do dia?") 
 listaDeTarefas[1]=prompt("Quais são as suas tarefas do dia?") 
 listaDeTarefas[2]=prompt("Quais são as suas tarefas do dia?") 
 console.log(listaDeTarefas) 

let indice=prompt("Digite 0, 1, 2")
console.log(indice)

listaDeTarefas .splice( indice, 1)

console.log(listaDeTarefas)

//4//

let nome=prompt("Digiet seu nome")
let email=prompt("Digite seu email!")
alert(" O seu email " +email +" foi cadastrado com sucesso. seja Bem-vindo "+nome)




