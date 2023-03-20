let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis gerais raquete
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete 1 (ESQUERDA)
let xRaquete1 = 5;
let yRaquete1 = 5;

let colidiu1 = false;

//variáveis da raquete 2 (DIREITA)
let xRaquete2 = 585;
let yRaquete2 = 305;
let velocidadeYRaquete2;

let colidiu2 = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete1,yRaquete1);
  mostraRaquete(xRaquete2,yRaquete2);
  movimentaRaquete1();
  movimentaRaquete2();
  //verificaColisaoRaquete1();
  colisaoRaquete1Biblioteca();
}

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
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
  if (xBolinha - raio < (xRaquete1 + raqueteComprimento)
      && yBolinha - raio < (yRaquete1 + raqueteAltura)
      && yBolinha + raio > yRaquete1) {
      velocidadeXBolinha *= -1;
  }
}
function colisaoRaquete1Biblioteca(){
  colidiu1 = collideRectCircle(xRaquete1,yRaquete1,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu1){
    velocidadeXBolinha *= -1;
  }
}
function movimentaRaquete2(){
  velocidadeYRaquete2 =  yBolinha - yRaquete2 - raqueteComprimento / 2 - 30;
  yRaquete2 += velocidadeYRaquete2;
}