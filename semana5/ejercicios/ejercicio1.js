//crearemos la funcion

function callMenu(){
    let nro_ejercicio=parseInt(
        prompt("Ingrese el numero de ejercicio que desea ejecutar: \r\n 1.suma. \r\n 2.Promedio de examenes \r\n 3.calcular el area del rectangulo  \r\n 4.Calcular el area del triangulo  \r\n 5.Calcular el área de una circunferencia  \r\n 6.Determinar el sueldo semanal de un trabajador  \r\n 7. determinar las pulgadas  \r\n 8.Una empresa importadora desea determinar cuántos dólares puede adquirir. \r\n9.determinar la edad de las personas. \r\n10.Se desea saber la edad y nombre la persona con menor edad. \r\n11.determinar el salario recibido en 6 años")
    );
    if(isNaN(nro_ejercicio)){
        alert("Hey!! por favor ingresa valores")
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}
//los datos se van a guardar en una variable y se va a mostrar una alerta
function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = +(prompt("ingrese el valor 1 a sumar"));
            let valor2 = +(prompt("ingrese el valor 2 a sumar"));
            alert(ej1_sumarValores(valor1, valor2))
            break;
        case 2:
            let ex1 = +(prompt("ingrese nota 1"));
            let ex2 = +(prompt("ingrese nota 2"));
            let ex3 = +(prompt("ingrese nota 3"));
            let ex4 = +(prompt("ingrese nota 4"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
            break;
        case 3:
            let base_rect = +(prompt("ingrese la base"));
            let altura_rect = +(prompt("ingrese la altura"));
            alert(ej3_calcularAreaRectangulo(base_rect,altura_rect))
            break;
        case 4: 
            let base_tri = +(prompt("Ingrese la base"));
            let altura_tri = +(prompt("Ingrese la altura"));
            alert(ej4_calcularAreaTriangulo(base_tri,altura_tri))
            break;
        case 5:
            let Pi = +(prompt("Ingrese el valor de Pi"));
            let r = +(prompt("Ingrese el valor del radio"));
            alert(ej5_calcularAreaCircunferencia(Pi,r))
            break;
        case 6: 
            let horas = +(prompt("Ingresa las horas trabajadas"));
            let pago_horas = +(prompt("Ingresa el pago por hora"));
            alert(ej6_calcularSueldoSemanaTrabajador(horas,pago_horas))
            break;
        case 7: 
            let m = +(prompt("Ingresa los metros"));
            alert(ej7_determinarCuantasPulgadas(m))
            break;
        case 8:  
            let xd = +(prompt("Ingrese la cantidad de dinero en soles"));
            let yd = +(prompt("Ingresa el precio del dolar"));
            alert(ej8_determinaCuantosDolaresAdquirir(xd,yd))
            break;
        case 9: 
            let año_nacimiento = +(prompt("Ingresa tu año de nacimiento"));
            let año_actual = +(prompt("Ingresa el año actual"));
            alert(ej9_determinar_edad(año_nacimiento,año_actual))
            break;
        case 10:
            let edad_elena = +(prompt("Ingresa la edad de Elena "));
            let edad_eduardo = +(prompt("Ingresa la edad de Eduardo"));
            let edad_Carlos = +(prompt("Ingresa la edad de Carlos"));
            alert(ej10_determinarlosDatos(edad_elena,edad_eduardo,edad_Carlos))
            break;
        case 11:
            let salario_inicial = +(prompt("Ingresa el salario inicial "));
            let salario_incrementado = +(prompt("Ingresa el salario incrementado"));
            alert(ej11_salarioRecibido(salario_inicial,salario_incrementado))
            break;

    }
}


//sumar los valores 
function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return "Por favor ingresar valores"
    }else{
        return a+b 
    }
}
//calcular el promedio
function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN(ex1)|| isNaN(ex2)|| isNaN(ex3)|| isNaN(ex4)){
        return "Por favor ingrese las notas"
    }else{
        return(ex1+ex2+ex3+ex4)/4;
    }
}
//calcular el area del rectangulo
function ej3_calcularAreaRectangulo(base_rect,altura_rect){
    if(isNaN(base_rect)|| isNaN (altura_rect)){
        return"Por favor ingrese las areas"
    }else{
    return(base_rect*altura_rect);
    }
}
//halalndo el area del triangulo 
function ej4_calcularAreaTriangulo(base_tri,altura_tri){
    if(isNaN(base_tri) || isNaN (altura_tri)){
        return"Por favor ingrese las areas del triangulo"
    }else{
          return(base_tri*altura_tri)/2;
    }
}
//hallando el area de la circunferencia
function ej5_calcularAreaCircunferencia(Pi,r){
    if(isNaN(Pi) || isNaN (r)){
        return"Por favor ingrese las areas de la circunferencia"
    }else{
          return(Pi*r**2);
    }
}
//determinar el sueldo semanal de un trabajador
function ej6_calcularSueldoSemanaTrabajador(horas,pago_horas){
    if(isNaN(horas) || isNaN (pago_horas)){
        return"Por favor ingrese los datos para poder determinar el sueldo de un trabajador"
    }else{
          return(horas*pago_horas);
    }
}
//7.Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).
function ej7_determinarCuantasPulgadas(m){
    if(isNaN(m)){
        return"Por favor ingrese los metros"
    }else{
          return(m*39.37);
    }
}
//8.determinar cuántos dólares puede adquirir..
function ej8_determinaCuantosDolaresAdquirir(xd){
    if(isNaN(xd)){
        return"Por favor ingrese las cantidades"
    }else{
          return(1*0.3);
    }
}
//9.determinar la edad de las personas.
function ej9_determinar_edad(año_nacimiento,año_actual){
    if(isNaN(año_nacimiento)|| isNaN (año_actual)){
        return"Por favor ingrese los datos sugeridos"
    }else{
          return(año_actual-año_nacimiento);
    }
}
//10.se desea saber la edad y nombre la persona con menor edad.
function ej10_determinarlosDatos(edad_elena,edad_eduardo,edad_Carlos){
    if(isNaN(edad_elena) || isNaN (edad_eduardo)|| isNaN (edad_Carlos)){
        return"Por favor ingrese los datos sugeridos"
    }else {
        if(edad_elena <= edad_eduardo <= edad_Carlos);
        return(edad_eduardo < edad_Carlos);
        }
    }

//11.determinar el salario recibido en 6 años
function ej11_salarioRecibido(salario_inicial,salario_incrementado){
    if(isNaN(salario_inicial)|| isNaN (salario_incrementado)){
        return"Por favor ingrese los datos sugeridos"
    }else{
          return(1500 +(1500*.10));
    }
}

 
    
        
