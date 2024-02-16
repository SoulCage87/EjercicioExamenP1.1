
let btncalcular = document.getElementById('calc');
let btnlimpiar = document.getElementById('limp');

btncalcular.addEventListener('click', calcular)
btnlimpiar.addEventListener('click', limpiar)


function calcular(){
let prod1 = parseFloat(document.getElementById('pdt1').value);
let prod2 = parseFloat(document.getElementById('pdt2').value);
let prod3 = parseFloat(document.getElementById('pdt3').value);
let prod4 = parseFloat(document.getElementById('pdt4').value);
let prod5 = parseFloat(document.getElementById('pdt5').value);
let label = document.getElementById('card');
let total;

if (isNaN(prod1) || isNaN(prod2) || isNaN(prod3) || isNaN(prod4) || isNaN(prod5)) {
    alert("Debe ingresar todos los productos a sumar");
    return; 
}

let subtotal = prod1 + prod2 + prod3 + prod4+ prod5;

if (subtotal <= 999.99){
 label.innerHTML = `No aplica un descuento <br> total:${subtotal} <br>`
} else if(subtotal >= 1000.00 & subtotal <= 4999.99){
let descuento = subtotal * 0.10
total = subtotal - descuento
label.innerHTML = `Su descuento es del 10% <br> subtotal:${subtotal} <br> total: ${total}`
} else if(subtotal >=5000.00 & subtotal <= 8999.99){
  descuento = subtotal * 0.20
  total = subtotal - descuento
  label.innerHTML = `Su descuento es del 20% <br> subtotal: ${subtotal} <br> total: ${total}`
} else if(subtotal >= 9000.00 & subtotal <= 12999.99){
  descuento = subtotal * 0.30
  total = subtotal - descuento
  label.innerHTML = `Su descuento es del 30% <br> subtotal: ${subtotal} <br> total: ${total}`
}else {
    descuento = subtotal * 0.40
    total = subtotal - descuento
    label.innerHTML = `Su descuento es del 40% <br> subtotal: ${subtotal} <br> total: ${total}`
}

}

function limpiar() {
    document.getElementById('pdt1').value = ""
    document.getElementById('pdt2').value = ""
    document.getElementById('pdt3').value = ""
    document.getElementById('pdt4').value = ""
    document.getElementById('pdt5').value = ""
    document.getElementById('card').innerHTML = ""
}