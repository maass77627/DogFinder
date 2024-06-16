document.addEventListener("DOMContentLoaded", () => {
console.log("dom loaded")




fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((json) => createDog(json))

function createDog(dog) {
    console.log(dog)
    let body = document.querySelector("body")
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    let image = document.createElement("img")
    image.src = dog.message
    div.appendChild(image)
    body.appendChild(div)
}



})