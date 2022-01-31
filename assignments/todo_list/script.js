let addToDoButton = document.querySelector("button")
//let inputField = document.querySelector("input")
let todo = document.querySelector(".todos")
let drop = document.querySelector("#dropdown")
let todos = []

//var i = 0
addToDoButton.addEventListener("click", work)

async function main(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const json = await response.json()
        todos = json.slice(0,10)
        console.log(todos)
        todos.forEach((todom,index) => {
            const newTodo = document.createElement('p')
            newTodo.setAttribute('key',index)
            newTodo.innerHTML = todom.title
            todo.appendChild(newTodo)
        });
    }catch(e){
        console.log(e)
    }
}

function work(){
    if(drop.value === "list"){
        main()
    }else if(drop.value === "completed"){
        completed()
    }else if(drop.value === "pending"){
        pending()
    }
}

function completed(){
    todo.innerHTML = ""
    todos.filter(todom => todom.completed).forEach((todom,index)=>{
        const newTodo = document.createElement('p')
        newTodo.setAttribute('key',index)
        newTodo.innerHTML = todom.title
        todo.appendChild(newTodo)
    })
}
function pending(){
    todo.innerHTML = ""
    todos.filter(todom => !todom.completed).forEach((todom,index)=>{
        const newTodo = document.createElement('p')
        newTodo.setAttribute('key',index)
        newTodo.innerHTML = todom.title
        todo.appendChild(newTodo)
    })
}
main()
// function addItem(){
//     var para = document.createElement('p')
//     para.setAttribute("key",i)
//     i = i + 1
//     para.innerHTML = inputField.value
//     todo.appendChild(para)
//     inputField.value = ""
//     //console.log(para.textContent," added")

//     para.addEventListener("click",()=> deleteItem(para))
//     //para.addEventListener("click",deleteItem(para))
    
// }

// function deleteItem(para){
//     //console.log(para.textContent,"deleted") 
//     //var p = document.getElementById('val')
//     todo.removeChild(para)  
// }