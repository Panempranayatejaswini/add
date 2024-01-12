const todo = document.querySelector('.todo')
const add = document.getElementById('add')
const input = document.getElementById('in')



const array = []

add.onclick = ()=>{
    let data = input.value
    if(data!= ""){
        let html = `<div class = "list">
        <p class ="val">${data}</p>
        <button class = "delete">x</button>
        </div>`
        array.push(html)
        renderfun()
    }

}

const renderfun = () => {
    todo.innerHTML = ""
    array.forEach((item) => {
        todo.innerHTML += item
    })
    const delet = document.querySelectorAll('.delete')
    delet.forEach((button, index) => {
        button.onclick = () => {
            array.splice(index, 1)
            renderfun()
        }
    })
}