var horaAtual = new Date().getHours();
var mensagem = "";
var mensagemElemento = document.getElementById("mensagem");

if (horaAtual >= 7 && horaAtual < 18) {
  mensagem = "Aberto";
  mensagemElemento.classList.remove("estadoFechado");
  mensagemElemento.classList.add("estadoAberto");
}else {
  mensagem = "Fechado";
  mensagemElemento.classList.remove("estadoAberto");
  mensagemElemento.classList.add("estadoFechado");
}

mensagemElemento.innerHTML = mensagem;