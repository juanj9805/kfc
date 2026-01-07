const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const buttonSend = document.querySelector("#sendButton")
const buttonTheme = document.querySelector("#theme")
const darkTheme = document.querySelector("#darkTheme")
const lightTheme = document.querySelector("#lightTheme")

const authEmail = "juan@"
const authPassword = "123"

const login = function() {
    buttonSend.addEventListener("click", (e)=>{
        e.preventDefault()
        if(inputEmail.value == authEmail && inputPassword.value == authPassword){
            sessionStorage.setItem("isLogged","yes")
            window.location.replace("index.html")
        }
    })
}

login()

const changeTheme = function() {
    buttonTheme.addEventListener("click", ()=> {
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")
    })
}

changeTheme()