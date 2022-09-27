// CRIA O TEXTAREA PARA O JOGADOR ADICIONAR NOVA PALAVRA AO JOGO
function criaCampo() {
    // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS 
    principal.style.marginTop ="30px";

    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";

    tabuleiro1.innerHTML = '<textarea maxlength="10" name="msn" id="campo" placeholder="Digite uma palavra."></textarea>';
    tabuleiro2.innerHTML += '<div class="aviso"><img src="img/aviso.png" alt="icone de informação" width="14px"><p>Máx. de 10 letras.</p></div>';
   
    novo.style.display = "flex";
    novo.innerHTML = '<button class="botoes" onclick="adicionaPalavra()">Salvar</button>';
    if (palavras.length == 0) {
       novo.innerHTML += '<button id="bntDesistir" class="botoes botaocancelar" onclick="cancelar()">Cancelar</button>';
    } else {
        novo.innerHTML += '<button class="botoes botaoiniciar" id="iniciarjogo" onclick="start()">Iniciar jogo</button>';
    }

    campo.focus();
    inputverificar()
}
// CANCELA E ATUALIZA A PÁGINA
function cancelar() {
    location.reload();
}

function adicionaPalavra() {// ADICIONA NOVA PALAVRA AO ARRAY "PALAVRAS" QUE ESTÁ NO "PRINCIPAL.JS"

    var campo = document.querySelector("#campo");
    // EXIBE ALERTA SE O TEXTAREA ESTIVER VAZIO AO CLICAR NO BOTÃO "SALVAR E COMEÇAR"
    if(campo.value.length == 0) {
        alert("Adicione uma palavra ou clique em Cancelar.");
        campo.focus();
    } else { // ADICIONA A NOVA PALAVRA AO JOGO
       palavras.push(campo.value.toLowerCase());
       document.getElementById("campo").placeholder ="Adicione mais palavras ou Inicie o jogo.";
       novo.innerHTML = '<button class="botoes" onclick="adicionaPalavra()">Salvar</button>';
       novo.innerHTML += '<button class="botoes botaoiniciar" onclick="start()">Iniciar jogo</button>';
       campo.value = '';
       campo.focus();
    }
    console.log(palavras);
}

    function inputverificar() { //permite so letras no input 

       var inputPalavra = document.querySelector("#campo");
           inputPalavra.addEventListener("keypress", function (e) {
            var keyCode = e.keyCode ? e.keyCode : e.which;
    
            if (keyCode < 65 || keyCode > 135 || (keyCode > 90 && keyCode < 97)) {    
                e.preventDefault();
            }
        });
    }
    
    