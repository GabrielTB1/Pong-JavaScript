let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete 1 (ESQUERDA)
let xRaquete1 = 5;
let yRaquete1 = 5;
let raquete1Comprimento = 10;
let raquete1Altura = 90;

let colidiu1 = false;

//variáveis da raquete 2 (DIREITA)
let xRaquete2 = 585;
let yRaquete2 = 305;
let raquete2Comprimento = 10;
let raquete2Altura = 90;

let colidiu2 = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete1();
  mostraRaquete2();
  movimentaRaquete1();
  //verificaColisaoRaquete1();
  colisaoRaquete1Biblioteca();
}

function mostraRaquete1(){
  rect(xRaquete1,yRaquete1,raquete1Comprimento,raquete1Altura);
}
function mostraRaquete2(){
  rect(xRaquete2,yRaquete2,raquete2Comprimento,raquete2Altura);
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
  if ((xBolinha + raio) > width || (xBolinha - raio) < 0){
    velocidadeXBolinha *= -1;
  }
  if ((yBolinha + raio) > height || (yBolinha - raio) < 0){
    velocidadeYBolinha *= -1;
  }
}
function movimentaRaquete1(){
  if (keyIsDown(UP_ARROW)){
    yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10;
  } 
}
function verificaColisaoRaquete1() {
  if (xBolinha - raio < (xRaquete1 + raquete1Comprimento)
      && yBolinha - raio < (yRaquete1 + raquete1Altura)
      && yBolinha + raio > yRaquete1) {
      velocidadeXBolinha *= -1;
  }
}
function colisaoRaquete1Biblioteca(){
  colidiu1 = collideRectCircle(xRaquete1,yRaquete1,raquete1Comprimento,raquete1Altura,xBolinha,yBolinha,raio);
  if (colidiu1){
    velocidadeXBolinha *= -1;
  }
}