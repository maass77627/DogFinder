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

//

commentform = document.createElement("form")
        commentform.id = "comformdiv"
        input = document.createElement("input")
        input.id = "input"
        button = document.createElement("button")
        button.innerText = "Submit"
        commentform.appendChild(input)
        commentform.addEventListener("submit", (e) => {
            e.preventDefault()
            console.log(e.target.input.value)
            commentFormSubmit(e)
           })
           commentform.appendChild(button)
//

let count = 0


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
    if (count < 7) {
    // console.log(e.target.parentNode.childNodes)
    // console.log(e.target.parentNode.childNodes[1].src)
    let likeddiv = document.createElement("div")
      likeddiv.id = "likeddiv"
    let dog = e.target.parentNode.childNodes[1].src
    let image = document.createElement("img")
    let buttontwo = document.createElement("button")
     buttontwo.innerText = "comment"
    buttontwo.addEventListener("click", (e) => commentForm(e))
    let button = document.createElement("button")
    button.innerText = "delete"
    button.addEventListener('click', (e) => deleteDog(e))
    image.id = "liked-dog-image"
    image.src = dog
    likeddiv.appendChild(button)
    likeddiv.appendChild(image)
    likeddiv.appendChild(buttontwo)
    div2.appendChild(likeddiv)
    count += 1
    }
    // count += 1
    console.log(count)
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
}

    function commentForm(e) {
        //  if (commentform) {
        //     commentform.remove()
        //  }
        // console.log(e.target.parentNode.childNodes)
        //  if (e.target.parentNode.childNodes.item(3)) {
        //      console.log("yes")} else {
    //    console.log(e.target.parentNode)
        let div = e.target.parentNode
        
        // div.id = "formdiv"



        // commentform = document.createElement("form")
        // commentform.id = "comformdiv"
        // input = document.createElement("input")
        // input.id = "input"
        // button = document.createElement("button")
        // button.innerText = "Submit"
        // commentform.appendChild(input)
        // commentform.addEventListener("submit", (e) => {
        //     e.preventDefault()
        //     console.log(e.target.input.value)
        //     commentFormSubmit(e)
        //    })
        //    commentform.appendChild(button)


        //    console.log(commentform)
        //    console.log(div)
        //    let answer = div.contains(commentform)
        //    console.log(answer)
        //    if (div.contains(commentform)) {
        //      console.log("yes")
        //     } else {

       div.appendChild(commentform)
    //    console.log(div)
        // }
    }


    function commentFormSubmit(e) {
         console.log(e.target)
        //   let form = e.target
        //   form.remove()
        
        let div = e.target.parentNode
        // let div = document.createElement("div")
        // div.id="comments"
        let p = document.createElement("paragraph")
        p.innerText = e.target.input.value
        let p2= document.createElement("paragraph")
        p2.innerText = " "
        div.appendChild(p2)
        div.appendChild(p)
         let form = e.target
         
         form.remove()
         console.log(div)
        // div2.appendChild(div)
    }


    function deleteDog(e) {
        count -= 1
        console.log(e.target.parentNode)
        let div = e.target.parentNode
        div.remove()
        console.log(count)
    }


})