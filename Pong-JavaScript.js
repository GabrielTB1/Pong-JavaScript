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

//variáveis da raquete 2 (DIREITA)
let xRaquete2 = 585;
let yRaquete2 = 305;
let raquete2Comprimento = 10;
let raquete2Altura = 90;

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