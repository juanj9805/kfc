    const logged = sessionStorage.getItem("isLogged")

if(logged != "yes"){
    window.location.href ="login.html"
}