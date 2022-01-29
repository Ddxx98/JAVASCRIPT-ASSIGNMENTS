let addToDoButton = document.querySelector("button")
//let inputField = document.querySelector("input")
let todo = document.querySelector(".todos")
let todos = []

//var i = 0
//addToDoButton.addEventListener("click", addItem)

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
addToDoButton.addEventListener('click',function(){
    todo.innerHTML = ""
    todos.filter(todom => todom.completed).forEach((todom,index)=>{
        const newTodo = document.createElement('p')
        newTodo.setAttribute('key',index)
        newTodo.innerHTML = todom.title
        todo.appendChild(newTodo)
    })
})
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