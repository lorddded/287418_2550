
/*let producto ;
let iva;
let productototal
let totalproducto
producto=parseFloat(prompt("escriba porfa"));
iva= producto*.16;
totalproducto=iva+producto;
console.log(totalproducto.toFixed(2));
document.write("el valor es " +totalproducto.toFixed(2));

let nota1, nota2, nota3, notafinal, n1,n2,n3;
nota1=parseFloat(prompt("escriba porfa nota1 "));
nota2= parseFloat(prompt("escriba porfa"));
nota3=parseFloat(prompt("escriba porfa"));
n1=nota1*.4;
n2=nota2*.3;
n3=nota3*.3;
notafinal=n1+n2+n3;
document.write("nota final " +notafinal.toFixed(3));
*/
let paquete = parseInt(prompt("ingrese el peso"))
if(!isNaN(paquete)){
    if(paquete<2)
    {
        console.log("paquete vale 5000")
    }else if(paquete>=2 && paquete<=5){
        console.log("vale 10000")
    }else if(paquete>5){
        console.log("vale 15000")
    }
console.log(paquete);
}else{console.log("no valido el peso");
}

