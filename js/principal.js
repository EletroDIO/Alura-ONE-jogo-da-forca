var palavras = [
  "xilofone",
  "saudade",
  "vertigem",
  "intrigante",
  "poesia",
  "alegria",
  "luz",
  "perfeito",
  "internet",
  "amora",
  "azulejo",
  "quartzo",
  "torpor",
  "crespo",
];
var numeroDeLetras = "";
var palavraSorteio = "";
var entrada = document.querySelector(".entrada");
var i = Math.floor(Math.random() * palavras.length);
var letras = [];
var acertos;
var palavraSorteadas = [];
var caracteres = [];
var erros;
var mostraErros = document.querySelector(".erros");
var novo = document.querySelector(".novojogo");



// FUNÇÃO QUE SORTEIA AS PALAVRAS DO ARRAY "PALAVRAS" E CRIA OUTRO ARRAY COM AS LETRAS DA PALAVRA SORTEADA
function sorteia() {
  var linhas = document.querySelector(".linhas");

  if (palavras.length == 0) {
    novoJogo();
    criaCampo();
    document.getElementById("campo").placeholder =
      "Digite uma ou mais palavras para continuar o jogo.";
  }
  letras = palavras[i].split("");
  palavraSorteio = palavras[i];
  numeroDeLetras = palavras[i].length;

  // ADICIONA CADA LETRA DA PALAVRA SELECIONADA NAS DIVs COM A CLASS SUBLINHADO
  for (var x = 0; x < numeroDeLetras; x++) {
    linhas.innerHTML += `<div class='sublinhado esconder'>${letras[x].toUpperCase()}</div>`;
  }
  palavraSorteadas.push(palavras[i]);
  palavras.splice([i], 1);
  entrada.focus();
  limpateclado();
}
 
inputverifica(entrada);
console.log(palavraSorteio);

  function clicaLetra(letra) {
    entrada.focus();
    entrada.value = letra;
    letrasDigitada();
  };
  
  entrada.addEventListener('input', function() {
    letrasDigitada();
  });

  function letrasDigitada() {
  let conteudo = document.querySelectorAll(".sublinhado");

  // FUNCIONALIDADE QUE NÃO PERMITE ADICIONAR LETRAS JÁ DIGITADAS ANTERIORMENTE
  if (!caracteres.includes(entrada.value.toUpperCase())) {
    caracteres.push(entrada.value.toUpperCase());

    if (!palavraSorteio.includes(entrada.value.toLowerCase())) {
      
      // FUNCIONALIDADE QUE VERIFICA SE A LETRA DIGITADA ESTÁ CONTIDA NO ARRAY "PALAVRAS"
      mostraErros.innerHTML += `${entrada.value.toUpperCase()}`; // SE NÃO, ESCREVE A LETRA NA DIV COM A CLASSE "ERROS"
      erros++; // ADICIONA +1 NA VARIÁVEL "ERROS"
      document.getElementById(entrada.value.toUpperCase()).classList.add("btnErro", "disabled");
    
    }

    for (var x = 0; x < numeroDeLetras; x++) {
      // VERIFICA SE A LETRA DIGITADA ESTÁ CONTIDA NAS DIVs COM A CLASSE "SUBLINHADO"
      letras = conteudo[i];

      if (conteudo[x].textContent == entrada.value.toUpperCase()) {
        conteudo[x].classList.remove("esconder"); // SE SIM, REMOVE A CLASSE "ESCONDER"
        acertos++; // ADICIONA +1 NA VARIÁVEL "ACERTOS"
        document.getElementById(entrada.value.toUpperCase()).classList.add("btnAcerto", "disabled");
        
      }
    }
  }
  desenhaBoneco();
  resultado();
  console.log(erros);
  
  // APAGA O VALOR DO INPUT A CADA CARACTER ADICIONADO FORÇANDO A FUNÇÃO A ADICIONAR SOMENTE UM CARACTER POR VEZ
  entrada.value = "";
};

  function resultado() {
  // FUNCIONADADE QUE VERIFICA A VARIÁVEL "ACERTOS" E ADICIONA UMA MENSAGEM DE PARABÉNS SE A QUANTIDADE DE ACERTOS FOR IGUAL AO NÚMERO DE CARACTERES DA PALAVRA SELECIONADA
  if (acertos == numeroDeLetras) {
    // MODIFICA O CONTEÚDO DA DIV COM A CLASS "MENSAGEM"
    principal.style.marginTop = "100px";
    tabuleiro1.style.color = "green";
    tabuleiro1.innerHTML = `<span class="mensagem">Parabéns, você venceu!</span>`;
    document.getElementById("teclado-virtual").style.display = "none";
    novoJogo();
  }
  
  if (erros > 6) {
    // MODIFICA O CONTEÚDO DA DIV COM A CLASS "MENSAGEM"
    principal.style.marginTop = "100px";
    tabuleiro1.style.color = "red";
    tabuleiro1.innerHTML = `<span class="mensagem">Opa! Você perdeu!</span>`;
    document.getElementById("teclado-virtual").style.display = "none";
    novoJogo(); // CHAMA A FUNCÃO "NOVOJOGO"
  }
}

  function desenhaBoneco() {
  // FUNCIONALIDADES QUE VERIFICAM A VARIÁVEL "ERRO" E MODIFICA ELEMENTOS DO CANVAS CONFORME O VALOR
  var pincel = document.querySelector("canvas").getContext("2d");
  pincel.strokeStyle = "#0a3871";
  pincel.lineWidth = 10;

  if (erros == 1) {
    // DESENHA A CABEÇA DO BONECO

    console.log("Ops, errou!");

    pincel.beginPath();
    pincel.arc(347, 127, 35, 0, 2 * 3.14);
    pincel.stroke();
  } else if (erros == 2) {
    // DESENHA O TRONCO

    pincel.moveTo(347, 160);
    pincel.lineTo(347, 290);
    pincel.stroke();
  } else if (erros == 3) {
    // DESSENHA O BRAÇO ESQUERDO

    pincel.moveTo(347, 180);
    pincel.lineTo(300, 230);
    pincel.lineWidth = 5;
    pincel.stroke();
  } else if (erros == 4) {
    // DESENHA O BRAÇO DIREITO

    pincel.moveTo(347, 180);
    pincel.lineTo(393, 230);
    pincel.lineWidth = 5;
    pincel.stroke();
  } else if (erros == 5) {
    // DESENHA A PERNA DIREITA

    pincel.moveTo(347, 290);
    pincel.lineTo(393, 350);
    pincel.lineWidth = 5;
    pincel.stroke();
  } else if (erros == 6) {
    // DESENHA A PERNA ESQUERDA

    pincel.moveTo(347, 290);
    pincel.lineTo(293, 350);
    pincel.lineWidth = 5;
    pincel.stroke();
  }
}
 
// FUNÇÃO PARA DESENHAR O CANVAS COM OS TRAÇOS DA FORCA
function desenhaForca() {
  var pincel = document.querySelector("canvas").getContext("2d");
  pincel.strokeStyle = "brown";
  pincel.lineWidth = 10;

  pincel.moveTo(50, 380);
  pincel.lineTo(380, 380);
  pincel.stroke();

  pincel.moveTo(150, 380);
  pincel.lineTo(150, 50);
  pincel.stroke();

  pincel.moveTo(145, 50);
  pincel.lineTo(352, 50);
  pincel.stroke();

  pincel.moveTo(347, 50);
  pincel.lineTo(347, 90);
  pincel.stroke();
}
// FUNÇÃO QUE DESBILITA O INPUT NÃO POSIBILITANDO, ASSIM, QUE ESTE RECEBA NOVOS VALORES
function novoJogo() {
  var botaoDesistir = document.querySelector("#bntDesistir");
  botaoDesistir.style.display = "none";
  entrada.disabled = true;
  limpateclado();
  console.log(palavraSorteadas.join(" / "));
}

//*********************************************************************************//

var tabuleiro1 = document.querySelector(".tabuleiro1");
var tabuleiro2 = document.querySelector(".tabuleiro2");
var principal = document.querySelector(".principal");

entrada.disabled = true; // DESABILITA O INPUT COM A CLASS "ENTRADA"

function start() {
  // RESETA AS VARIÁVEIS
  entrada.disabled = false; // HABILITA O INPUT COM A CLASS "ENTRADA"
  erros = 0;
  acertos = 0;
  i = Math.floor(Math.random() * palavras.length);
  caracteres = [];
  linhas = document.querySelector(".linhas");
  // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS REFERENTES AO INICIO DO JOGO
  document.getElementById("teclado-virtual").style.display = "flex";

  principal.style.marginTop = "0px";
  tabuleiro1.innerHTML = "";
  tabuleiro2.innerHTML = "";
  mostraErros.innerHTML = "";
  mostraErros.style.display = "flex";
  novo.innerHTML = "";
  novo.style.display = "flex";
  tabuleiro1.innerHTML = `<canvas class="forca" width="400" height="400"></canvas>`;
  tabuleiro2.innerHTML = `<div class="linhas"></div>`;

  novo.innerHTML =
    '<button class="botoes" onclick="start()">Novo jogo</button>';
  novo.innerHTML +=
    '<button id="bntDesistir" class="botoes botaocancelar" onclick="cancelar()">Desistir</button>';

  sorteia();
  desenhaForca();
}

//*******************************************************************************//

// CRIA O TEXTAREA PARA O JOGADOR ADICIONAR NOVA PALAVRA AO JOGO
function criaCampo() {
  // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS
  document.getElementById("teclado-virtual").style.display = "none";
  principal.style.marginTop = "20px";

  tabuleiro1.innerHTML = "";
  tabuleiro2.innerHTML = "";

  tabuleiro1.innerHTML =
    '<textarea maxlength="10" name="msn" id="campo" placeholder="Digite uma palavra."></textarea>';
  tabuleiro2.innerHTML =
    '<div class="aviso"><img src="img/aviso.png" alt="icone de informação" height="12px"><p>Máx. de 10 letras.</p></div>';

  novo.style.display = "flex";
  novo.innerHTML =
    '<button class="botoes" onclick="adicionaPalavra()">Salvar</button>';
  if (palavras.length == 0) {
    novo.innerHTML +=
      '<button id="bntDesistir" class="botoes botaocancelar" onclick="cancelar()">Cancelar</button>';
  } else {
    novo.innerHTML +=
      '<button class="botoes botaoiniciar" id="iniciarjogo" onclick="start()">Iniciar jogo</button>';
  }

  campo.focus();
  inputverifica(campo);
}
// CANCELA E ATUALIZA A PÁGINA
function cancelar() {
  location.reload();
}

function adicionaPalavra() {
  // ADICIONA NOVA PALAVRA AO ARRAY "PALAVRAS" 

   var campo = document.querySelector("#campo");
  
  // EXIBE ALERTA SE O TEXTAREA ESTIVER VAZIO AO CLICAR NO BOTÃO "SALVAR E COMEÇAR"
  if (campo.value.length == 0) {
    if (palavras.length == 0) {
      alert("Adicione uma palavra ou pressione em Cancelar.");
    } else {
      alert("Adicione uma palavra ou pressione em Iniciar jogo.");
    }
    campo.focus();
  } else {
    // ADICIONA A NOVA PALAVRA AO JOGO
    palavras.push(campo.value.toLowerCase());
    document.getElementById("campo").placeholder =
      "Adicione mais palavras ou Inicie o jogo.";
    novo.innerHTML =
      '<button class="botoes" onclick="adicionaPalavra()">Salvar</button>';
    novo.innerHTML +=
      '<button class="botoes botaoiniciar" onclick="start()">Iniciar jogo</button>';
    campo.value = "";
    campo.focus();
  }
  console.log(palavras);
}

function inputverifica(n) {
  //PERMITE SOMENTE LETRAS NO INPUT.

  var inputPalavra = n;
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;

    if (keyCode < 65 || keyCode > 135 || (keyCode > 90 && keyCode < 97)) {
      e.preventDefault();
    }
  });
}

//**************************************************************//

function limpateclado() { //LIMPAR TECLAS DIGITADAS
   const limpar = document.querySelectorAll(".botao-teclado");
   for (let i = 0; i < limpar.length; i++){
    limpar[i].classList.remove("btnErro");
    limpar[i].classList.remove("btnAcerto");
    limpar[i].classList.remove("disabled");
   }
}

