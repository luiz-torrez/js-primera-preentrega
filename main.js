let producto ="";
let cantidad =0;
let precio =0;
let seguirComprando = false;
let precioTotal= 0;
let cantidadTotal = 0;
do{
    producto = prompt("Queres compara un celular samsung , Xiaomi , Motorola O Iphone ?").toLowerCase();
    cantidad = parseInt(prompt("Cuantos quiere comprar?"));

    while (isNaN(cantidad) || (cantidad <= 0)){
        alert("ingrese una cantdad valida!");
        cantidad = parseInt(prompt("Cuantos quiere comprar?"));
    }
switch(producto) {
    case"samsung":
        precio = 1200
        break;
    case"xiaomi":
        precio = 1100
        break;
    case"motorola":
        precio = 1100
        break;
    case"iphone":
        precio = 1300
        break;
    default:
        alert("El producto ingresado no es valido!")
        cantidad = 0;
            

}
precioTotal += precio * cantidad;
cantidadTotal += cantidad;

seguirComprando = confirm("Desea seguir comprando?");    
if(precioTotal >=20000 ){
    alert( "esta seguro de su compra")

};
}
while (seguirComprando);
alert("Ha comprado "  +  cantidadTotal + " productos y el precio final es de $ " + precioTotal );

    
