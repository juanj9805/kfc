const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const buttonSend = document.querySelector("#sendButton")
const buttonTheme = document.querySelector("#theme")

const authEmail = "juanjoseb9805@gmail.com"
const authPassword = "123"

buttonSend.addEventListener("click", (e)=>{
    e.preventDefault()
    if(inputEmail.value == authEmail && inputPassword.value == authPassword){
        sessionStorage.setItem("isLogged","yes")
        window.location.href = "index.html"
    }else{
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    });
    inputPassword.value = "";
    inputPassword.classList.add("is-invalid");
    }
})

buttonTheme.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
});
