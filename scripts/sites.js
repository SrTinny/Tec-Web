// Definir imagem inicial
document.getElementById('background').style.backgroundImage = "url('img/site1.png')";

// Função para trocar o fundo ao clicar
function changeBackground(imagePath) {
  const background = document.getElementById('background');
  background.style.backgroundImage = `url('${imagePath}')`;
}
