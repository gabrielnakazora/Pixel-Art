function salvarCores(objeto) {
  localStorage.setItem("colorPalette", JSON.stringify(objeto));
}

function getColorsFromLocal() {
    const pegaCor = JSON.parse(localStorage.getItem("colorPalette"));
    // console.log(typeof pegaCor);
    if (pegaCor) {
      setColorBox(pegaCor[0], pegaCor[1], pegaCor[2], pegaCor[3]);
    }
}    

function setColorBox(color1, color2, color3, color4) {
  const colors1 = document.getElementById('color1');
  const colors2 = document.getElementById('color2');
  const colors3 = document.getElementById('color3');
  const colors4 = document.getElementById('color4');

  colors1.style.backgroundColor = color1;
  colors2.style.backgroundColor = color2;
  colors3.style.backgroundColor = color3;
  colors4.style.backgroundColor = color4;
}

setColorBox("black", "crimson", "Chartreuse", "darkorange");

function novaCor() {
    const letra = '0123456789ABCDEF';
    let novaCor = '#';
    
    for (let i = 0; i < 6; i++) {
      novaCor += letra[Math.floor(Math.random() * 16)];
    }
    return novaCor; 
  }


  function handleClick() {
    const blackColor = "#000000"
    const newColors2 = novaCor();
    const newColors3 = novaCor();
    const newColors4 = novaCor();

    salvarCores([blackColor, newColors2, newColors3, newColors4]);

    setColorBox(blackColor, newColors2, newColors3, newColors4);
  }

const clickDoBotao = document.getElementById("button-random-color");
clickDoBotao.addEventListener("click", handleClick); 

getColorsFromLocal();

// --------------------------------------------------

// board

const tamanhoBoard = document.getElementById("LINHAS");
console.log(tamanhoBoard.value);


function criarBoard() {
  const boardPixel = document.getElementById("pixel-board");
  const tamanho5 = tamanhoBoard.value ? tamanhoBoard.value : 25;
  //for (let i = 0; i < tamanho5; i++) {
    //const divLinha = document.createElement("div");
    //boardPixel.appendChild(divLinha);
    for (let j = 0; j < tamanho5; j++) {
      const divColuna = document.createElement("div");
      divColuna.classList.add("pixel");
      //divLinha.appendChild(divColuna);
      boardPixel.appendChild(divColuna);  
    }
  }
//}

  
tamanhoBoard.addEventListener("change", (evento) => {
  evento.preventDefault();
  console.log(tamanhoBoard.value)
});

criarBoard();

// ---------------------------------

function botaoReset() {
  const tudoBranco = document.getElementsByClassName('pixel');
  for (let i = 0; i < tudoBranco.length; i++) {
    tudoBranco[i].style.backgroundColor = "white";
  }
}

const botaoResetador = document.getElementById("clear-board");
botaoResetador.addEventListener("click", botaoReset);

// -------------------------------------

const cores = document.getElementsByClassName('color');


function corSelecionada(evento) {
  const corEscolhida = evento.target;
  if (!corEscolhida.classList.contains('selected')) {
    for (let i = 0; i < cores.length; i++) {
      cores[i].classList.remove('selected');
    }
    corEscolhida.classList.add('selected');
  }
}
for (let i = 0; i < cores.length; i++) {
  cores[i].addEventListener('click', corSelecionada);
}

// -----------------------------------------------


function pintarQuadradinho(evento) {
  const quadradoCliclado = evento.target;
  const corDeEscolha = document.querySelector('.color.selected').style.backgroundColor;
  quadradoCliclado.style.backgroundColor = corDeEscolha;
}
const quadrado = document.getElementsByClassName('pixel');
for (let i = 0; i < quadrado.length; i++) {
  quadrado[i].addEventListener('click', pintarQuadradinho);
}

// ------------------------------------------------

