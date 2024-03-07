let=conteogatos=0
let =conteoperros=0
cadena="perro"
cadenag="gato"
let edadgatos=0
let edadperros=0
while(true){
let mascota 
mascota= prompt("escribe porfa")
var masco=mascota.toLowerCase();
document.write(masco)

if(masco!= cadena && masco != cadenag){
    break;
}else if(masco==="perro"){
    let edad = parseFloat (prompt("escribe porfa edad perro") )
conteoperros=conteoperros+1
edadperros=edadperros+edad
}else if(masco==="gato"){
    let edad = parseFloat (prompt("escribe porfa edad gato") )
    conteogatos=conteogatos+1

    edadgatos=edadgatos+edad

}

}
document.write("la cantidad de gatos es: " +conteogatos, "<br>")
document.write("la cantidad de perros es: " +conteoperros, "<br>")
let suma = 0
suma = conteogatos+conteoperros
document.write("la cantidad de animales ingresado es: " +suma, "<br>")
document.write("la suma de la edad de gatos es : " +edadgatos, "<br>")
document.write("la suma de la edad de perros es: " +edadperros, "<br>")



