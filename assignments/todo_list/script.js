let addToDoButton = document.querySelector("button")
let inputField = document.querySelector("input")
let todo = document.querySelector(".todos")

var i = 0
addToDoButton.addEventListener("click", addItem)

function addItem(){
    var para = document.createElement('p')
    para.setAttribute("key",i)
    i = i + 1
    para.innerHTML = inputField.value
    todo.appendChild(para)
    inputField.value = ""
    //console.log(para.textContent," added")

    para.addEventListener("click",()=> deleteItem(para))
    //para.addEventListener("click",deleteItem(para))
    
}

function deleteItem(para){
    //console.log(para.textContent,"deleted") 
    //var p = document.getElementById('val')
    todo.removeChild(para)  
}