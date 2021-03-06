function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function criandoDias (){
    const dias = document.querySelector("#days");
    for (let k of dezDaysList) {
        let dia = document.createElement("li");
        dia.innerText = k;
        if ( k === 24 || k === 31) {
            dia.className = "day holiday";
        } else if (k === 4 || k === 24 || k === 11 || k === 18) {
            dia.className= "day friday";
        } else if(k === 25) {
            dia.className = "day holiday friday";
        }else {
            dia.className = "day";
        } 
        dias.appendChild(dia)
    }
  }
  criandoDias()

//   Exercício 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  function botaoFeriadinhos (string) {
    let btn = document.createElement("button")
    btn.innerText = string; // é o nome que vai ficar no botão
    btn.id = "btn-holiday";
    document.getElementsByClassName("buttons-container")[0].appendChild(btn)
  }


botaoFeriadinhos("Feriados")

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
// let clicar = document.createElement("click")

function mostrarFeriados () {
    document.querySelector("#btn-holiday").addEventListener('click', function(){
        let feriados = document.querySelectorAll(".holiday")
        for (let k of feriados) {
            if (k.style.backgroundColor === "green"){
                k.style.backgroundColor = "rgb(238,238,238)";
            } else {
                k.style.backgroundColor = "green";
            }
        }
    })
};

mostrarFeriados()


// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function sexFeira(string) {
    let botaoSexFeira = document.createElement("button");
    botaoSexFeira.innerText = string;
    botaoSexFeira.id = "btn-friday";
    document.querySelector(".buttons-container").appendChild(botaoSexFeira);
}

sexFeira("Sexta-Feira")

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function sexFeiraEvent(fridayCc) {
    document.querySelector("#btn-friday").addEventListener('click', function() {
        let fridaySs = document.querySelectorAll(".friday")
        for (let i = 0; i<fridaySs.length;i++) {
            if (fridaySs[i].innerText != "SEXTOUUU!"   ){
                fridaySs[i].innerText = "SEXTOUUU!"
            } else {
                fridaySs[i].innerText = fridayCc[i]
            }
        }
    })
}

sexFeiraEvent([4, 11 ,18 ,25])

//Exercício 6:
//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia 
//deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function crescer(){
    document.querySelector('#days').addEventListener('mouseover', function(event){
        event.target.style.fontSize ='35px';
        event.target.style.fontWeight = '500';
    })
}


function diminuir(){
    document.querySelector('#days').addEventListener('mouseout', function(event){ //se atentar que aqui é mouseout
        event.target.style.fontWeight = '200';
        event.target.style.fontSize ='20px';
    })
}

crescer();
diminuir();

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a s
// tring com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function tarefas(string) {
    document.querySelector(".my-tasks").appendChild(document.createElement("span")).innerText = string;
}
tarefas("Estudar para a trybe")

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
//Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function legenda(cor){
    const elementLegenda = document.createElement("div")
    elementLegenda.className = "task"
    elementLegenda.style.backgroundColor = cor
    document.querySelector('.my-tasks').appendChild(elementLegenda)
}
legenda("green")

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua 
//a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function seTask () {
    let tar = document.querySelector(".task")
    tar.addEventListener('click', function() {
         if( tar.className === "task"){
             tar.className = "task selected"
         } else {
            tar.className = "task"
         }
     })
}

seTask()

// Exercício 10:
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function dayCor () {
    let dc = document.querySelector("#days")
    let tar = document.querySelector(".task")
    dc.addEventListener('click', function(event){
        if (tar.className === "task selected"){
            event.target.style.color = "green";
        } else {
            event.target.style.color = "(255,0,0)";
        }
    })
}

dayCor()

//Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à 
//lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR". Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma 
//mensagem de erro ao clicar em "ADICIONAR". Ao pressionar a tecla "enter" o evento também deverá ser disparado. Dica - Propriedade: key .
function addTask() {
    document.querySelector("#btn-add").addEventListener("click", function(){
        if(document.querySelector('#task-input').value.length > 0) { //O value é para acessarmos oque foi imputado e o length é para vermos se ta vazio
            let itemLi = document.createElement("li")
            itemLi.innerText = document.querySelector('#task-input').value
            document.querySelector(".task-list").appendChild(itemLi) //Aqui estamos guardando o item da lista, criada no momento anterior,na lista
            document.querySelector('#task-input').value = ''
        } else {
            alert('Error: Digite algo!');
        }
    }) 
    document.querySelector('#task-input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter' && document.querySelector('#task-input').value.length > 0) {
          let itemLi = document.createElement('li');
          itemLi.innerText = document.querySelector('#task-input').value;
    
          document.querySelector(".task-list").appendChild(itemLi);
          document.querySelector('#task-input').value = '';
        }
    });
}

addTask()

