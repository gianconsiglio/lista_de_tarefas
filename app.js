let key = 'key'
let listaDeTarefas = []


verificarElementos()
mostrarElementos()

function adicionarTarefa(){
    let a = String(document.getElementById('txt1').value).trim()
    if (a.length === 0){
        alert('adicione algum valor a sua lista!')
        return
    }
    document.getElementById('itens').innerText = ''
    listaDeTarefas.push(document.getElementById('txt1').value)
    localStorage.setItem(key,JSON.stringify(listaDeTarefas))
    document.getElementById('txt1').value=''
    mostrarElementos()
}

function mostrarElementos(){
    for (x of listaDeTarefas){
        criarElemento()        
    }
}

function criarElemento(){
    let new_button = document.createElement('button')
    let new_value = document.createElement('span')
    document.getElementById('itens').appendChild(new_button).textContent='x'
    document.getElementById('itens').appendChild(new_value) 
    new_value.innerHTML = `${x}<br>`
    new_button.onclick = function(){
        let pos = listaDeTarefas.indexOf(x)
        listaDeTarefas.splice(pos,1)
        new_button.remove()
        new_value.remove()  
        localStorage.setItem(key,JSON.stringify(listaDeTarefas))

        
    }
    
}

function verificarElementos(){

if (localStorage.getItem('key') === null){
    localStorage.setItem(key,'lista')
}

    let lista = JSON.parse(localStorage.getItem(key))
    listaDeTarefas = lista

}


