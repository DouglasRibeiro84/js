const form = document.getElementById('formulario');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    let inputNumero1 = document.getElementById("campoA").value;
    let inputNumero2 = document.getElementById("campoB").value;
    let numero1 = parseInt(inputNumero1);
    let numero2 = parseInt(inputNumero2);

    if (numero1 > numero2) {
        alert("O primeiro número é maior.");
    } else {
        alert("O segundo número é maior.");
    }
})




