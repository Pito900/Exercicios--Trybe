//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(palavra) {
    let palavraInversa = "";
    for (let i= palavra.length-1; i >= 0; i--) {
        palavraInversa = palavraInversa + palavra[i];
    }
    console.log(palavraInversa)
    if (palavra === palavraInversa) {
       return (console.log(true));
    } else {
        return (console.log(false));
    }
}
palindromo("arara")

//tbm temos esse método:


//.split('') transforma uma string em um array
//.reverse('') inverte um array
// .join('')  -- junsta os elemento de um array as "" retiram qualquer separador
function palindromo(palavra) {
    let palavraInv = palavra.split('').reverse().join('');
    if (palavra === palavraInv) {
       return (console.log(true));
    } else {
        return (console.log(false));
    }
}
 palindromo('arara')

 //2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

 function mItem(array) {
    let maiorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[0]) {
            maiorNumero = array[i];
        };
    };
    return (console.log(array.indexOf(maiorNumero))); // Esse indexOf é para vermos qual indice pertence o elemento q temos o array
 };

 
mItem([2, 3, 6, 7, 10, 1]);

//3-Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function mItem(array) {
    let menorNumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[0] > array[i]) {
            menorNumero = array[i];
        };
    };
    return (console.log(array.indexOf(menorNumero))); // é a mesma coisa do exercício anterior
};

mItem([2, 4, 6, 7, 10, 0, -3]);

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function mStr (array) {
    let maiorString = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > maiorString.length) { //a mesma ideia dos exercícios anteriores
            maiorString = array[i];
        };
    };
    return (console.log(maiorString));
};

mStr(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }

  //6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
 function SF(n) {
    let somatorio = 0;
    for (let i = 0; i <= n; i++) {
        somatorio = somatorio + i;
    }
    return (console.log(somatorio));
 }

 SF(5);

 //7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o
 //final da string word . Considere que a string ending sempre será menor que a string word .
 
 function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split(''); // transformamos a string em array
    fimPalavra = fimPalavra.split('');
    controle = true; // se o final for igual temos um true
    for (let index = 0; index < fimPalavra.length; index++) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) { //sacada da preula no indice
        controle = false;
      }
    }
    return controle;
  } //no exemplo da trybe no primeiro for ele verifica se o elemento 3 (da palavra) é igual ao indice 0 do fim da palavra. 
  // e assim or diante...Se aumento um indice for diferente a função já retorna false

/////////////////////////////////////////////////////////////////////////////////
//////////////////////BONUS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, 
//busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOFNumbers(vector) {
  let nPares = [];
  for (let i = 0; i < vector.length; i++) {
    for (let j of vector[i]) {
      if (j % 2 === 0) {
        nPares.push(j);
      };
    };
  };
  return (console.log(nPares));
};
arrayOFNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]);

//3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece
//no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 
//1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: 
//Sua cesta possui: x Melancias, x Abacates...
let cesta = {}
function func(basket) {
  for (let i of basket) {
    let cont = 0;
    for (let j of basket){
      if (j === i) {
        cont++;
      };
    };
    cesta[i] = cont;
  };
  return (cesta)
};



func([
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
])

let showingCesta = [];
for (let key in cesta){
  showingCesta.push(cesta[key] + ' ' + key);
}
console.log("Sua cesta possui: " + showingCesta.join(", "));

//Usando o objeto abaixo, faça os exercícios a seguir:

 let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};


//4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.
//log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".


// console.log(" O morador do bloco 2 de nome " + moradores.blocoDois[1].nome + "  " + moradores.blocoDois[1].sobrenome
// + " mora no andar " + moradores.blocoDois[1].andar + " apartamento " + moradores.blocoDois[1].apartamento);

//5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , 
//depois faça o mesmo para os moradores do bloco 2.


//Para o bloco 1
for(let i = 0; i < moradores.blocoUm.length; i++){
      console.log(moradores.blocoUm[i]["nome"] + ' ' + moradores.blocoUm[i]["sobrenome"])
}

//Para o bloco 2

for(let i = 0; i < moradores.blocoDois.length; i++){
  console.log(moradores.blocoDois[i]["nome"] + ' ' + moradores.blocoDois[i]["sobrenome"])
}
