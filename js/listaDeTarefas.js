(  ()  => { //não deixa o cod funcionar pois esta no modo anonimo para não vazar dados do cod.
    //chamando as "variaveis/funçoes" do botão e do input que estão no HTML.
const novaTarefa = document.querySelector('[data-form-button]')  
const inputTarefa = document.querySelector('[data-form-input]')  


function criarTarefa(evento)             
{
    //O DOM assume o camando e não deixa carregar a pagina/ remove o "recarregar pagina" padrão do botão
    evento.preventDefault()  
  
    //pega a string da nova tarefa e adiciona na lista
    const valorTarefa = "- " + inputTarefa.value + "."                      
    const listaDeTarefas = document.querySelector('[data-task]')    

    //label 
    novaLabel = document.createElement('label')
    novaLabel.innerText = valorTarefa
    novaLabel.className = "form-check-label"


    novoItem = document.createElement('li')
    novoItem.appendChild(novaLabel)

    //adiciona um "filho" no conjunto de lista
    listaDeTarefas.appendChild(novoItem)

    //limpa o barra depois que adicionou uma nova tarefa
    inputTarefa.value = " "    
}


//adiciona um evento quando o botão é precionado
novaTarefa.addEventListener('click', criarTarefa)   

})(/*deixa o cod funcionar com o modo anonimo mas n mostra nenhum dado*/)