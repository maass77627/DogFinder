document.addEventListener("DOMContentLoaded", () => {
console.log("dom loaded")




fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((json) => createDog(json))

const div = document.createElement("div")
div.id = "dog-container"

function createDog(dog) {
    
    console.log(dog)
    let body = document.querySelector("body")
    // let div = document.createElement("div")
    // div.id = "dog-container"
    let h1 = document.createElement("h1")
    h1.innerHTML = "Dog"
    let button = document.createElement("button")
    let buttontwo = document.createElement("button")
    buttontwo.innerHTML = "new dog"
    buttontwo.addEventListener('click', (e) => getNewDog(e))
    button.innerHTML = "Like"
    button.addEventListener('click', (e) => likedDogs(e))
    let image = document.createElement("img")
    image.src = dog.message
    image.id = "dog-image"
    div.appendChild(h1)
    div.appendChild(image)
    div.appendChild(button)
    div.appendChild(buttontwo)
    body.appendChild(div)

}

function getNewDog(e) {
    div.innerHTML = " "

fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((json) => createDog(json))
}

function likedDogs(e) {
    console.log(e.target.parentNpde)
}



})