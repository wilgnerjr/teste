// nessa linha chamamos o id que foi definido na tag <strong> no doc html
const textDisplay = document.getElementById('efeito')
// nessa linha são definidas as tres frases que serão animadas
const phrases = ['SOLUÇÕES GRÁFICAS INTELIGENTES', 'SOLUÇÕES GRÁFICAS INTELIGENTES', 'SOLUÇÕES GRÁFICAS INTELIGENTES']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (10 -50) + 100
  const normalSpeed = Math.random() * (10 -50) + 60
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()


// ========================================================================

// window.onload = function() {
//   var body = document.getElementById('esse');
//   body.style.width = '100%';
//   body.style.overflow = 'hidden';
//   var telaDeAbertura = document.getElementById('telaDeAbertura');
//   telaDeAbertura.style.opacity = 0;
//   var iagem = document.getElementById('iagem');
//   iagem.style.transform = 'translate(0px , 70px) scale(0.50)';
//   //  transform: translate(0px , 70px) scale(0.67);
//   setTimeout(function(){
//     telaDeAbertura.style.display = 'none';
//     body.style.overflow = 'visible';
//   }, 4000);

// };


window.onload = function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  continuarExecucao();
};

function continuarExecucao() {

  // Coloque aqui o código que você quer executar depois da atualização da página
  var body = document.getElementById('esse');
  body.style.width = '100%';
  body.style.overflow = 'hidden';
  var telaDeAbertura = document.getElementById('telaDeAbertura');
  telaDeAbertura.style.opacity = 0;
  var iagem = document.getElementById('iagem');
  iagem.style.transform = 'translate(0px , 70px) scale(0.50)';
  //  transform: translate(0px , 70px) scale(0.67);
  setTimeout(function(){
    telaDeAbertura.style.display = 'none';
    body.style.overflow = 'visible';
  }, 4000);
}