function MostrarResultado()
{
    // Pegando os valores
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    linguagemDeProgramacao = document.getElementById("linguagemDeProgramacao").value;

    // Alterando o texto
    h.textContent = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramacao}!`;
}

// Declarando variaveis
var nome = "";
var idade = 0;
var linguagemDeProgramacao = "";
var h = document.getElementById("Resultado");

var botaoResultado = document.getElementById("botaoResultado");
botaoResultado.onclick = function(){MostrarResultado()}