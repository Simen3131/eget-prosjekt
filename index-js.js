const seedlingEl = document.querySelector(".fa-seedling")
const xEl = document.querySelector(".fa-x")
const navLinksEl = document.querySelector(".nav-links")
const navLinksMenuEl = document.querySelector(".nav-links-menu")

seedlingEl.addEventListener("click", function () {
    seedlingEl.classList.add("active")
    xEl.classList.add("active")
    navLinksEl.classList.add("active")
    navLinksMenuEl.classList.add("active")
})

xEl.addEventListener("click", function () {
    seedlingEl.classList.remove("active")
    xEl.classList.remove("active")
    navLinksEl.classList.remove("active")
    navLinksMenuEl.classList.remove("active")
})

const cartEl = document.querySelector(".cart")
const cartPageEl = document.querySelector(".cart-page")
const BackEl = document.querySelector(".back")

cartEl.addEventListener("click", function () {
    cartPageEl.classList.add("active")
})

BackEl.addEventListener("click", function () {
    cartPageEl.classList.remove("active")
})

const addEl = document.querySelector(".add")
const itemListEl = document.querySelector(".item-list")
const counterEl = document.querySelector(".counter")
let counter = 0

function addItemToCart(a) {
    vare = a.parentElement.querySelector("p").textContent
    const itemEl = document.createElement("li")
    const deleteEl = document.createElement("button")
    deleteEl.classList.add("delete-item")
    deleteEl.textContent = "Fjern"
    itemEl.textContent = vare
    itemEl.appendChild(deleteEl)

    itemListEl.appendChild(itemEl)
    deleteEl.addEventListener("click", function () {
        this.parentElement.remove()
        counter--
        counterEl.textContent = counter
        if (counter == 0) {
            counterEl.classList.remove("active")
        }
    })
    
    if (counter == 0) {
        counterEl.classList.add("active")
    }

    counter++
    counterEl.textContent = counter

}



/* CARD 1 */

const viewIngredients1El = document.querySelector(".view-ingredients-1")
const ingredientsList1El = document.querySelector(".ingredients-list-1")
const backButton1El = document.querySelector(".back-ingredients-1")

viewIngredients1El.addEventListener("click", function () {
    ingredientsList1El.classList.add("active")
})

backButton1El.addEventListener("click", function () {
    ingredientsList1El.classList.remove("active")
})

/* CARD 2 */

const viewIngredients2El = document.querySelector(".view-ingredients-2")
const ingredientsList2El = document.querySelector(".ingredients-list-2")
const backButton2El = document.querySelector(".back-ingredients-2")

viewIngredients2El.addEventListener("click", function () {
    console.log("hei")
    ingredientsList2El.classList.add("active")
})

backButton2El.addEventListener("click", function () {
    ingredientsList2El.classList.remove("active")
})

/* CARD 3 */

const viewIngredients3El = document.querySelector(".view-ingredients-3")
const ingredientsList3El = document.querySelector(".ingredients-list-3")
const backButton3El = document.querySelector(".back-ingredients-3")

viewIngredients3El.addEventListener("click", function () {
    console.log("hei")
    ingredientsList3El.classList.add("active")
})

backButton3El.addEventListener("click", function () {
    ingredientsList3El.classList.remove("active")
})