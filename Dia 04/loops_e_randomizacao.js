var tentativas = 3;
var resposta = document.querySelector("#resposta");
var numeroCorreto = Math.round((Math.random() * 9) + 1);
var numeroDigitado = document.querySelector("#numero-digitado").value;

function validarNumero(){
    if(numeroCorreto == parseInt(numeroDigitado)){
        resposta.textContent = "Parabéns esse é o número correto!"  
    }
    else if(tentativas < 0){
        alert(`Jogo acabado! O número correto era ${numeroCorreto}. Tente novamente!`)
        location.reload();
    }
    else {
        resposta.textContent = "Por favor tente novamente!";
        tentativas--;
    }
}