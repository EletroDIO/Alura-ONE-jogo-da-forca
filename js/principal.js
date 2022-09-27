var palavras = ["xilofone", "saudade", "vertiginoso", "intrigante", "poesia", "alegria", "luz", "perfeito", "internet", "amora", "azulejo", "quartzo", "torpor", "crespo" ];
var numeroDeLetras = "";
var palavraSorteio = "";
var tela = document.querySelector("html");
var entrada = document.querySelector(".entrada");
var i = Math.floor(Math.random() * palavras.length);
var letras = [];
var acertos;
var palavraSorteadas = [];
var caracteres = [];
var erros;
var mostraErros = document.querySelector(".erros");
var novo = document.querySelector('.novojogo');

// FUNÇÃO QUE SORTEIA AS PALAVRAS DO ARRAY "PALAVRAS" E CRIA OUTRO ARRAY COM AS LETRAS DA PALAVRA SORTEADA
function sorteia() {
    var linhas = document.querySelector(".linhas");
    var entrada = document.querySelector(".entrada");

    if(palavras.length == 0) {
        novoJogo();
        criaCampo();
        document.getElementById("campo").placeholder = "Digite uma ou mais palavras para continuar o jogo.";

    }
     letras = palavras[i].split("");
     palavraSorteio = palavras[i];
     numeroDeLetras =  palavras[i].length;

    // ADICIONA CADA LETRA DA PALAVRA SELECIONADA NAS DIVs COM A CLASS SUBLINHADO
    for(var x = 0; x < numeroDeLetras; x++){
        linhas.innerHTML += `<div class='sublinhado esconder'>${letras[x].toUpperCase()}</div>`;
    }
    palavraSorteadas.push(palavras[i]);
    palavras.splice([i],1);
    entrada.focus();
    
 }
// FUNÇÃO PARA SELECIONAR O INPUT ESCONDIDO CLICANDO EM QUALQUER PARTE DA TELA
tela.addEventListener("click", function(event){
    var entrada = document.querySelector(".entrada");
    event.target = entrada.focus();
});

console.log(palavraSorteio);

entrada.addEventListener("input", function(){
    var conteudo = document.querySelectorAll(".sublinhado");
        
    // FUNCIONALIDADE QUE NÃO PERMITE ADICIONAR LETRAS JÁ DIGITADAS ANTERIORMENTE
        if(!caracteres.includes(this.value.toUpperCase())){
           
            caracteres.push(this.value.toUpperCase());

            if (!palavraSorteio.includes(this.value.toLowerCase())){ // FUNCIONALIDADE QUE VERIFICA SE A LETRA DIGITADA ESTÁ CONTIDA NO ARRAY "PALAVRAS"
                mostraErros.innerHTML += `${this.value.toUpperCase()}`; // SE NÃO, ESCREVE A LETRA NA DIV COM A CLASSE "ERROS"
                erros++; // ADICIONA +1 NA VARIÁVEL "ERROS"
            }
            
            for(var x = 0; x < numeroDeLetras; x++){ // VERIFICA SE A LETRA DIGITADA ESTÁ CONTIDA NAS DIVs COM A CLASSE "SUBLINHADO" 
                letras = conteudo[i];
                
                if(conteudo[x].textContent == this.value.toUpperCase()){
                    
                    conteudo[x].classList.remove("esconder"); // SE SIM, REMOVE A CLASSE "ESCONDER"
                    acertos++; // ADICIONA +1 NA VARIÁVEL "ACERTOS"
                }
                
            }
        }

    // FUNCIONADADE QUE VERIFICA A VARIÁVEL "ACERTOS" E ADICIONA UMA MENSAGEM DE PARABÉNS SE A QUANTIDADE DE ACERTOS FOR IGUAL AO NÚMERO DE CARACTERES DA PALAVRA SELECIONADA
    if(acertos == numeroDeLetras){
        // MODIFICA O CONTEÚDO DA DIV COM A CLASS "MENSAGEM"
        principal.style.marginTop ="100px";
        tabuleiro1.style.color = "green";
        tabuleiro1.innerHTML = `<span class="mensagem">Parabéns, você venceu!</span>`; 
        novoJogo();
    }
    
    // FUNCIONALIDADES QUE VERIFICAM A VARIÁVEL "ERRO" E MODIFICA ELEMENTOS DO CANVAS CONFORME O VALOR
    var pincel = document.querySelector("canvas").getContext("2d");
    pincel.strokeStyle ='#0a3871';
    pincel.lineWidth = 10;

    if(erros == 1){ // DESENHA A CABEÇA DO BONECO
   
        console.log("Ops, errou!");
        
        pincel.beginPath();
        pincel.arc(347, 127, 35, 0, 2*3.14);
        pincel.stroke();

    } else if ( erros == 2) { // DESENHA O TRONCO 
        
        pincel.moveTo(347, 160);
        pincel.lineTo(347, 290);
        pincel.stroke();

    } else if (erros == 3) { // DESSENHA O BRAÇO ESQUERDO
  
        pincel.moveTo(347, 180);
        pincel.lineTo(300, 230);
        pincel.lineWidth = 5;
        pincel.stroke();

    } else if(erros == 4) { // DESENHA O BRAÇO DIREITO

        pincel.moveTo(347, 180);
        pincel.lineTo(393, 230);
        pincel.lineWidth = 5;
        pincel.stroke();

    } else if (erros == 5) { // DESENHA A PERNA DIREITA

        pincel.moveTo(347, 290);
        pincel.lineTo(393, 350);
        pincel.lineWidth = 5;
        pincel.stroke();

    } else if (erros == 6) { // DESENHA A PERNA ESQUERDA

        pincel.moveTo(347, 290);
        pincel.lineTo(293, 350);
        pincel.lineWidth = 5;
        pincel.stroke();
        
        // MODIFICA O CONTEÚDO DA DIV COM A CLASS "MENSAGEM"
        principal.style.marginTop ="100px";
        tabuleiro1.style.color = "red";
        tabuleiro1.innerHTML = `<span class="mensagem">Opa! Você perdeu!</span>`; 
      
        novoJogo() // CHAMA A FUNCÃO "NOVOJOGO"
    }

    console.log(erros);
    // APAGA O VALOR DO INPUT A CADA CARACTER ADICIONADO FORÇANDO A FUNÇÃO A ADICIONAR SOMENTE UM CARACTER POR VEZ
    this.value = "";
});

// FUNÇÃO PARA DESENHAR O CANVAS COM OS TRAÇOS DA FORCA
function desenhaForca() {
    var pincel = document.querySelector("canvas").getContext("2d");
    pincel.strokeStyle = 'brown';
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
function novoJogo () {
    var botaoDesistir = document.querySelector("#bntDesistir");
        botaoDesistir.style.display = "none";
    entrada.disabled = true;
    console.log(palavraSorteadas.join(" / "));
}

