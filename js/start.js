var entrada = document.querySelector(".entrada");
var tabuleiro1 = document.querySelector(".tabuleiro1");
var tabuleiro2 = document.querySelector(".tabuleiro2");
var principal = document.querySelector(".principal");

entrada.disabled = true; // DESABILITA O INPUT COM A CLASS "ENTRADA"

function start(){
  
    // RESETA AS VARIÁVEIS
    entrada.disabled = false; // HABILITA O INPUT COM A CLASS "ENTRADA"
    erros = 0;
    acertos = 0;
    i = Math.floor(Math.random() * palavras.length);
    caracteres = [];
    linhas = document.querySelector(".linhas");
    // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS REFERENTES AO INICIO DO JOGO
    principal.style.marginTop ="5px";
    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";
    mostraErros.innerHTML = "";
    mostraErros.style.display = "flex"; 
    novo.innerHTML = "";
    novo.style.display = "flex";
    tabuleiro1.innerHTML = `<canvas class="forca" width="400" height="400"></canvas>`;
    tabuleiro2.innerHTML = `<div class="linhas"></div>`

    novo.innerHTML = '<button class="botoes" onclick="start()">Novo jogo</button>';
    novo.innerHTML += '<button id="bntDesistir" class="botoes botaocancelar" onclick="cancelar()">Desistir</button>';
    // CHAMA AS FUNÇÕES "SORTEIA" E "DESENHAFORCA" QUE ESTÃO NO ARQUIVO "PRINCIPAL.JS"
    sorteia();
    desenhaForca();

}
