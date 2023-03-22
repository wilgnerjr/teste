function exibirMensagem() {
    const data = new Date();
    const hora = data.getHours();
    const diaSemana = data.getDay();
    var mensagem = "";
    var status = "";
  
    if (diaSemana === 0) { // Domingo
      mensagem = "FECHADO";
      status = "fechado";
      
    } else if (diaSemana === 6) { // Sábado
      if (hora >= 8 && hora < 11) {
        mensagem = "ABERTO";
        status = "aberto";
      } else {
        mensagem = "FECHADO";
        status = "fechado";
      }
    } else { // Dias de semana (de segunda a sexta)
      if (hora >= 7 && hora < 18) {
        mensagem = "ABERTO";
        status = "aberto";
      } else {
        mensagem = "FECHADO";
        status = "fechado";
      }
    }
  
    document.getElementById("mensagem").innerHTML = mensagem;
    document.getElementById("mensagem").className = status;
  }
  
  setInterval(exibirMensagem, 1); // a cada 1 segundo