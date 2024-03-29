const loginIcon = document.querySelector(".login-icon")
const userProfile = document.querySelector(".user-icon-container")
const heartIcon = document.querySelector("#heart-icon")
const cartIcon = document.querySelector("#cart-icon")
const entryOptions = document.querySelector(".entry-options")
const exitBtn = document.querySelector("#btn-exit-entry")
const searchBtn = document.querySelector("#searchBtn")
const searchForm = document.querySelector("#searchForm")
const headerNav = document.querySelector(".header-nav")

/*  Controlador que oculta el nav en urls especificas  */

const url = window.location.href

if (url.includes("productsDisplay"))headerNav.style.display = "none"
if (url.includes("users/profile")) {
    searchForm.style.pointerEvents = "none"
    headerNav.style.display = "none"
}
if (url.includes("products/create") || url.includes("products/edit")) {
    searchForm.style.opacity = "0"
    searchForm.style.pointerEvents = "none"
    headerNav.style.display = "none"
}


/* Controlador del formulario de busqueda */

searchBtn.addEventListener("click", () => searchForm.submit())

/* Obtencion del valor de la cookie isLogged */

const cookies = document.cookie
let isLogged = null

if (cookies) {
    const cookie = document.cookie.split(";")
    const isLoggedCookie = []

    cookie.forEach(cookie => {
        if (cookie.includes("isLogged")) isLoggedCookie.push(cookie)
    })
    if (isLoggedCookie.length) {
        isLogged = isLoggedCookie[0].split("isLogged=")[1] === "true" ? true : false
    }
}
/*Controlador de elemento DOM para usuarios logueados  */

if (isLogged) {
    loginIcon.style.display = "none"
    userProfile.style.display = "flex"
    heartIcon.style.display = "flex"
    cartIcon.style.display = "flex"
}

function reLocation(){
    window.location.href = "/users/profile"
}
userProfile.addEventListener("click", reLocation)

/* --------Controladores de Opciones de Usuario----- */

let loginIconFlag = false

loginIcon.addEventListener("click", () => {
    loginIconFlag= loginIconFlag ? false : true

    if (loginIconFlag) {

        // loginIcon.style.width = '50px';
        loginIcon.style.borderRadius = '15px 15px 0 0';
        loginIcon.style.backgroundColor = 'var(--azul-intermedio-gotec)';
        entryOptions.style.display = "flex"
    } else {
        // loginIcon.style.width = '30px';
        loginIcon.style.borderRadius = '0';
        loginIcon.style.backgroundColor = 'transparent';
        entryOptions.style.display = "none"
    }


})

function heartIconRelocation(){
    window.location.href ="/users/profile?section=favorites"
}
heartIcon.addEventListener("click", heartIconRelocation)
