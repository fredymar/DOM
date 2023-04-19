let bd = [
    {
        email: "mcocuy@gmail.com",
        password: "compaq",
        username: "striker",
        active: true
    },

    {
        email: "CRocuy@gmail.com",
        password: "compaq2",
        username: "carlosReact",
        active: true
    },

    {
        email: "DB@gmail.com",
        password: "compaq3",
        username: "danielaButstrap",
        active: false
    }
]



function login() {

    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value

    for (let user of bd) {

        if(username === user.username || username === user.email){
            if (password === user.password && user.active) {
                return alert("sesión iniciada")
            }

            return alert(" La contraseña es incorrecta o el usuario fue inactivado")
        }
    }
    return alert("El usuario no existe")
}

function viewPass(){
    let type = document.querySelector("#password").type
    return document.querySelector("#password").type = "password" ? "text" : "password"

    if (type === "password") {
        document.querySelector("#password").type = "text"
    }else{
        document.querySelector("#password").type = "password"
    }
}