let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis de placar do jogo
let meusPontos = 0;
let oponentePontos = 0;

//variáveis gerais raquete
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//variáveis da raquete 1 (ESQUERDA)
let xRaquete1 = 5;
let yRaquete1 = 5;

//variáveis da raquete 2 (DIREITA)
let xRaquete2 = 585;
let yRaquete2 = 305;
let velocidadeYRaquete2;

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
  verificaColisaoRaquete(xRaquete1,yRaquete1);
  verificaColisaoRaquete(xRaquete2,yRaquete2);
  mostraPlacar();
  marcaPonto();
}

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function mostraPlacar(){
  fill(255);
  text(meusPontos, 280,26);
  text(oponentePontos, 320, 26);
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
function movimentaRaquete2(){
  velocidadeYRaquete2 =  yBolinha - yRaquete2 - raqueteComprimento / 2 - 30;
  yRaquete2 += velocidadeYRaquete2;
}
function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    oponentePontos += 1;
  }
}