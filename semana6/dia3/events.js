
const btnPrueba = document.querySelector('#btn-prueba')
//atrape el boton

btnPrueba.onclick = function(event){
    console.log("click desde el boton")
    //palabras reservadas
    console.log(event)
    Swal.fire("hola mundo")
}
//............
//definimos una una funcion para el sweet alert

function ShowAlert(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer:"<a href ='http://google.com'> Link de footer"
    })
}

btnError.onclick = function(){
    ShowAlert("error", "hubo un error", "email or password");
};

    //.......................................
    const btnWarning = document.querySelector("#btn-warning")

    btnWarning = document.querySelector("#btn-warning")
    ShowAlert("warning", "alerta de trigo","el peligro se acerca" )


    // 
    const btnAlertBotones = document.querySelector("#btn-alert-botones")

    btnAlertBotones.onclick = function(){
        Swal.fire({
            title: "alert",
            text: "Text de Alerta",
            showDenyButton:true,
            showDenyButton: true,
            confirmButtonText: "guardar",
            denyButtonText: "negar",
        }).then((resultado)=>{
            console.log("resultado", resultado);
        })

    }
    

const btnPregunta = document.querySelector('#btn-pregunta')

btnPrugunta.onclick= function(){
    Swal.fire("alguna pregunta", "aca en texto de la pregunta en cuestion")
}

//.............
const btnError = document.querySelector('#btn-error')

btnError.onclick =function(){
    Swal.fire("error", " hubo en error", "email or password errorneos");
    title:"input"
}

btnAlertinputs.onclick = function(){
    Swall.fire({
        title: "input para email",
        input:"email",
        inputPlacholder:"el correo debe ser valido",
    }).then(())
}



