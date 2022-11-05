
const crear = document.querySelector("#crear-session")
const obtener = document.querySelector("#obtener-session")
const eliminar = document.querySelector("#eliminar-session")
// funcion para la primer boton 
crear.onclick = function(){
    //para poder crear la variable.... invocar a session
    sessionStorage.setItem(
        "variable_1",
        "mi primera variable en session storage"
    )
}
//segundo boton
obtener.onclick = function(){
    const variable = sessionStorage.getItem("variable_1");
    console.log(variable)
    }
//tercera boton
 eliminar.onclick = function(){
    sessionStorage.clear()
    //sessionStorage.removeItem("variable_1")... puedo utilizar este si deseo 
}


