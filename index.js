document.addEventListener("DOMContentLoaded", () => {
console.log("dom loaded")

const body = document.querySelector("body")
const div = document.createElement("div")
div.id = "dog-container"
const formdiv = document.createElement("div")
formdiv.id = "form-div"
let form = document.getElementById("form")

const div2 = document.createElement("div")
div2.id = "liked-dogs"
let h1 = document.createElement("h1")
h1.innerHTML = "Liked Dogs"
div2.appendChild(h1)
body.appendChild(div2)


form.addEventListener("submit", (e) => {
e.preventDefault()
dogFilter(e)})

formdiv.appendChild(form)
body.appendChild(formdiv)

fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((json) => createDog(json))




function createDog(dog) {
    console.log(dog)
    let h1 = document.createElement("h1")
    h1.innerHTML = "Dogs"
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
    div.innerHTML = ""
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => createDog(json))
}

  


function likedDogs(e) {
    console.log(e.target.parentNode.childNodes)
    console.log(e.target.parentNode.childNodes[1].src)
     let likeddiv = document.createElement("div")
     likeddiv.id = "likeddiv"
    let dog = e.target.parentNode.childNodes[1].src
    let image = document.createElement("img")
    let button = document.createElement("button")
    button.innerText = "delete"
    button.addEventListener('click', (e) => deleteDog(e))
    image.id = "liked-dog-image"
    image.src = dog
    //let body = document.querySelector("body")
   likeddiv.appendChild(button)
   likeddiv.appendChild(image)
    div2.appendChild(likeddiv)
    }

    function dogFilter(e) {
        console.log(e.target.childNodes[4].value)
        let breed = e.target.childNodes[4].value
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => response.json())
        .then((json) => breeds(json))
    }

    function breeds(json) {
        console.log(div.childNodes[1].src)
        let remo = div.childNodes[1]
        let breed = json.message
        remo.src = breed
        // div.appendChild(image)
       // div.appendChild(remo)
}

    function deleteDog(e) {
        console.log(e.target.parentNode)
        let div = e.target.parentNode
        div.remove()
    }


})