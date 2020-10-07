
/*var edad = Number(prompt("Ingresá tu edad"));

if (edad < 18) {
    alert("Usted es menor de edad");
} else {
    alert("Usted es mayor de edad");
}

var notaTesisAbogacia = 5;
var notaTesisRedes = 9;


if( ( notaTesisAbogacia == 5 ) && ( notaTesisRedes == 9 ) ) {
	alert("Se cumplen las dos condiciones");
} else {

	alert("No se cumple alguna de las condiciones")
}*/

/* IF ELSE CLASE 2

var sign = prompt("Cual es tu signo?");

if (sign == "Libra") {
  console.log("Tu signo es igual al mio y es de Aire");
} else if (sign == "Cancer" || sign == "Piscis" || sign == "Escorpio") {
	console.log("Tu signo es diferente al mio y es de Agua")

} else  {
	console.log("El signo es diferente al mio y es de Fuego o Tierra")

}

*/
/*sumar();

function sumar(){
 var numero1 = 3;
 var numero2 = 5;
 resultado = numero1 + numero2;
 alert("El resultado es " + resultado);
 }
*/
 //DIAS DE LA SEMANA

 function diasPares (){
    var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    console.log(dias)
    
    var pares = [];

    for(var i = 0 ; i < 7; i++){
		if(i == 6){
            alert("El ultimo día es: " + dias[6]);
        }

        if (i % 2 == 0) {
            pares[i] = "El dia " + dias[i] + " es par\n";
        }
    }
    
    console.log(pares)
}

anime();
 function anime(){
 	var anime;
 	var nombreProtagonista = "Asuna ";
 	var apellidoProtagonista = "Yuuki";

 	anime = nombreProtagonista + apellidoProtagonista;
 	console.log(anime);
 }