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

    para.addEventListener("click",deleteItem)
    
    function deleteItem(){
        //console.log(para.textContent,"deleted") 
        todo.removeChild(para)  
    }
}