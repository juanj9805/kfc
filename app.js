const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const buttonSend = document.querySelector("#sendButton")
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
            alert("ok")
        }else{alert("bad")}
    })
}

const changeTheme = function() {
    darkTheme.addEventListener("click", ()=> {
        document.querySelector("body").classList.add("dark")
    })
    lightTheme.addEventListener("click", ()=> {
        document.querySelector("body").classList.remove("dark")
    })
}

document.addEventListener("DOMContentLoaded", () => {
    login()
    changeTheme()
})
