// Selecionando elementos do DOM
const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');

// Configuração inicial
let score = 0;
const imageSrc ='topeira.png'; // Imagem do jogo (exemplo)
const rows = 3;
const cols = 3;
let speed = 1000; // Tempo inicial em ms
const decrement = 50; // Reduz o tempo a cada acerto


    
// Função para criar a grade 3x3
function createGrid() {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    grid.appendChild(cell);
  }
}

// Função para gerar uma posição aleatória na matriz
function getRandomCell() {
  const index = Math.floor(Math.random() * (rows * cols));
  return grid.children[index];
}

// Função que cria uma imagem na célula e a move verticalmente
function spawnImage() {
  const cell = getRandomCell();

  const img = document.createElement('img');
   img.src = imageSrc;
  img.classList.add('image');
  img.style.top = '200px'; // Inicia fora da visão

  // Adiciona evento de clique para pontuar
  img.addEventListener('click', () => {
    bonus = Math.floor(Math.random()* 20);

    score =score + bonus;
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    speed = Math.max(200, speed - decrement); // Incrementa a dificuldade
    img.remove(); // Remove a imagem ao clicar
  });

  cell.appendChild(img);

  // Animação: mover para cima
  setTimeout(() => {
    img.style.top = '20px'; // Move para o topo da célula
  }, 50);

  // Remove a imagem após um tempo
  setTimeout(() => {
    if (img.parentNode) img.remove();
  }, speed);
}

// Inicializa o jogo
createGrid();
setInterval(spawnImage, speed);
