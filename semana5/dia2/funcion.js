//una funcion es un conjunto de soluciones o ejecuciones para poder realizar tareas
function nombreDeLaFuncion(){
    //una vez declarada mi funcion todo el codigo que hagamos
    // dentro de este solo se va ejecutar cuanddo la llame


console.log("estudinado funciones")
}

nombreDeLaFuncion()

function sumar (number1, number2){
    //primero voy aconvertirlos parametros a numeros
    const converNumo1 = +number1;
    const converNumo2 = +number2;

    const suma = converNumo1 +converNumo2

    console.log("es el resultado", suma)
}
  sumar(20,20)

  //que cosa es return


  const suma2 = (a,b)=>{
    return a + b 

  }
  console.log("otra forma", suma2(60,30))

  
