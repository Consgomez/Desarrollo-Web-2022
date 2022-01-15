//1 Obtener referencias de los elementos a interactuar

let post = document.getElementById("buttonPost")
let clear = document.getElementById("buttonClear")
let mark = document.getElementById("buttonMark")
let del = document.getElementById("buttonDelete")

//2 Registrar el Evento

post.addEventListener("click", todoPost)
clear.addEventListener("click", todoClear)
mark.addEventListener("click", todoMark)
del.addEventListener("click", todoDel)

function todoPost(e)
{
    e.preventDefault()

    let todo = document.getElementById("todoText").value
    let list = document.getElementById("todoList")

    let div = document.createElement("div")
    let input = document.createElement("input")
    let label = document.createElement("label")

    input.type = "checkbox"
    input.name = "todo"

    label.textContent = todo

    div.appendChild(input)
    div.appendChild(label)

    list.appendChild(div)
}

function todoClear()
{
    let todos = document.getElementsByName("todo")

    for(let i = 0; i < todos.length; i++)
    {
        todos[i].checked = false;
    }
}

function todoMark()
{
    let todos = document.getElementsByName("todo")

    for(let i = 0; i < todos.length; i++)
    {
        todos[i].checked = true;
    }
}

function todoDel()
{
    let todos = document.getElementsByName("todo")
 
    for(let i = 0; i< todos.length; i++){
        if (todos[i].checked){
            todos[i].parentElement.remove()
        }
    }
}