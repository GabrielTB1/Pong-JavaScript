let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//sons do jogo
let raquetada;
let ponto;
let trilha;

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

function preload(){
  trilha = loadSound("sounds/trilha.mp3");
  ponto = loadSound("sounds/ponto.mp3");
  raquetada = loadSound("sounds/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
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
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(230,10,40,20);
  rect(330,10,40,20);
  fill(255);
  text(meusPontos,250,26);
  text(oponentePontos,350, 26);
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
    raquetada.play();
  }
}
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    oponentePontos += 1;
    ponto.play();
  }
}