// Q1.A) Crie uma variável constante chamada nome, armazenando uma string com seu nome
const nome = "bruno";
// Q1.B) Imprima na tela a frase "Meu nome é SEU NOME. Este nome tem NUMERO DE LETRAS letras", trocando SEU NOME e NUMERO DE LETRAS pelos valores correspondentes
console.log(`Meu nome é ${nome}. Este nome tem ${nome.length} letras`);
// Q1.C) Crie uma função umaLetraDeVez(palavra), que imprime todas as letras da palavra uma de cada vez
let umaLetraDeVez = (palavra) => {
    for (i = 0; i < palavra.length; i++) {
        console.log(`${palavra[i]}`);
    }
  };
// Q1.D) Chame a função umaLetraDeVez passando como argumento a variável nome
umaLetraDeVez(nome);