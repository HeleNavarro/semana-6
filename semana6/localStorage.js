//primero la captura del elemento que dispara un evento
const btnLogin =  document.querySelector('#btn-login');
//luego la funcion y el evento
btnLogin.onclick =  function(event){
    event.preventDefault();

    const inputs = document.querySelectorAll('input')
// inserta una claor o almacenamiento al Localstorage
inputs.forEach((inputs)=>{
    console.log(inputs)
    localStorage.setItem(inputs.name , inputs.value)
})
login()

}
//esta es la forma de capturar el elemento del localstorage
const email =localStorage.getItem('email');
const password =localStorage.getItem('password');

function login(){
    const email =localStorage.getItem('email');
    const password =localStorage.getItem('password');
    form.style.display= "none";
    usuario.Section.style.display = "block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
   
}
const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = querySelector("#cerrar-seccion");
const usuarioSesion = querySelector("#usuario-seccion");

if(email !== null && password !== null){
    //el usuario ya esta 
}else{
    usuarioSesion.style.display = "none"
}

btnCerrarSesion.onclick = function(){
//vamos a mostrar las variables del local storage
    localStorage.clear();
    //mostrar el formulario y ocultar el mensaje 
    form.style.display = "block";
    usuarioSesion.style.display = "none";
}



