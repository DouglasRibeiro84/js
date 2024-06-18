const form = document.getElementById('formulario');
const inputNumero1 = document.getElementById("campoA");
const inputNumero2 = document.getElementById("campoB");


form.addEventListener('submit' , function(e){
    e.preventDefault();

    let numero1 = inputNumero1.value
    let numero2 = inputNumero2.value
    let crescimentoPercentual = ((numero2- numero1) / numero1) * 100;

    const msgSucesso = (`O crescimento percentual é de: ${crescimentoPercentual}%`);

    if (numero1 <= numero2) {
        const mensagemContainer = document.querySelector('.resposta');
        mensagemContainer.innerHTML = msgSucesso;
        mensagemContainer.style.display = 'block';

        inputNumero1.value = ``;
        inputNumero2.value = ``;

    } else{
        inputNumero2.style.border = '1px solid red';
        document.querySelector('.erro').style.display = 'block'
    }
})

    inputNumero2.addEventListener('keyup', function(e) {
    let valorA = parseFloat(inputNumero1.value);
    let valorB = parseFloat(inputNumero2.value);

    if (isNaN(valorA) || isNaN(valorB)) {
        return; // Se não forem números válidos, não faz nada
    }

    if (valorB < valorA) {
        inputNumero2.style.border = '1px solid red';
        document.querySelector('.erro').style.display = 'block';
    } else {
        inputNumero2.style.border = 'none';  // Remove a borda vermelha
        document.querySelector('.erro').style.display = 'none';
    }
});
