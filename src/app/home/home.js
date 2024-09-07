


// FUNÇÃO PARA MUDAR A COR DE BODY
function mudarCorBody() {
    var mudarCorBody = document.body;
    

    var nav_bar = document.querySelectorAll(`#nav_bar`)
    // EFEITO PARA MUDAR A COR DO TEXTO 
    var mudarCor_Textos = document.querySelectorAll(`.mudarCor_Texto`)
    // MUDAR COR DOS ICONS DA SECTION 1 - CARD 1
    var mudarCor_Icon = document.querySelectorAll(`.mudarCor_Icon`)
    // EXIBIR A BORDA BRANCA AO MUDAR O ESTADO
    var borda = document.querySelectorAll(`.borda`)
    // MUDAR A COR DOS TITULOS PARA WHITE QUANDO O BODY FICAR PRETO
    var colorH3_white = document.querySelectorAll(`.colorH3_white`)
      


    // MUDAR OS ICONS
    var sol = document.getElementById('sol');
    var lua = document.getElementById('lua');

    // Alternar ícones de Sol e Lua
    if (sol.style.display === 'none' || sol.style.display === '') {
        sol.style.display = 'flex';
        sol.style.color = '#fd7e14'; // Laranja para o sol
        lua.style.display = 'none';
    } else {
        sol.style.display = 'none';
        lua.style.display = 'flex';
    }

    // Obter a cor de fundo atual do body
    var corAtual = window.getComputedStyle(mudarCorBody).backgroundColor;

    // Verificar se a cor é branca ou preta
    if (corAtual === 'rgb(255, 255, 255)' || corAtual === 'white') {
        mudarCorBody.style.backgroundColor = '#000000'; // Mudar para preto
        //   MUDA A COR DA NAV BAR 
        nav_bar.forEach(function (home) {
            home.style.backgroundColor = 'var(--bs-white)' //MUDA PARA BRANCO
        })

        // MUDAR A COR DPS TEXTOS 
        mudarCor_Textos.forEach(function(elementoP){
            elementoP.style.color = 'var( --bs-white)'
        })

        // MUDAR COR DOS ICONS DA SECTION 1 - CARD 1 
        mudarCor_Icon.forEach(function(icons){
            icons.style.color = 'var( --bs-white)'
        })
        // MUDA A COR DA BORDA DA SECTION 1 - CARD 1 E CARD 2
        borda.forEach(function(elementoBorda){
            elementoBorda.style.border = '1px solid white'  
        })

            // MUDAR A COR DOS TITULOS PARA WHITE QUANDO O BODY FICAR PRETO
        colorH3_white.forEach(function(colorH3_white_C){// cria uma função e um paramentro
            colorH3_white_C.style.color = 'white'
        })
     
      
        

    } else {
        mudarCorBody.style.backgroundColor = '#ffffff'; //MUDA PARA BRANCO
        
         // Restaurar estilo original da nav bar
         nav_bar.forEach(function(home) {
            home.style.backgroundColor = ''; // Limpar o background color para o padrão do CSS
        });
        // MUDAR A COR DPS TEXTOS 
        mudarCor_Textos.forEach(function(elementoP){
            elementoP.style.color = 'var(--bs-gray-600)'
        })

         // MUDAR COR DOS ICONS DA SECTION 1 - CARD 1 
         mudarCor_Icon.forEach(function(icons){
            icons.style.color = ''
        })
        // MUDA A COR DA BORDA DA SECTION 1 - CARD 1 E CARD 2
        borda.forEach(function(elementoBorda){
            elementoBorda.style.border = ''  
        })
          // MUDAR A COR DOS TITULOS PARA PRETO QUANDO O BODY FICAR BRANCO
          colorH3_white.forEach(function(colorH3_white_C){// cria uma função e um paramentro
            colorH3_white_C.style.color = 'var(--bs-dark)'
        })
        
    }
}



//FUNÇÃO PARA A MENSAGEM DO PORTFOLIO
function portfolio(){
    alert('Página em desenvolviemtno, obrigado pela atenção! ')
}

// FUNÇÃO PARA EXIBIR MENSAGEM WHATSAPP
function abriChat(){
  var mensagem = confirm('Deseja entrar em contato com o desenvolvedor do site?')
    if(mensagem){
        location.href = 'https://wa.me/61981579569?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA%20e%20saber%20mais%20detalhes%20sobre%20como%20funciona%20cada%20etapa%20do%20desenvolvimento.'
    }
    else{
        return
    }
}



// Função para abrir/fechar O MENU DEVICE
function abrirMenu() {
    var carrinhoProdutos = document.getElementById('menu');
  
    if (carrinhoProdutos.classList.contains('show')) {
      carrinhoProdutos.classList.remove('show');
      setTimeout(function () {
        carrinhoProdutos.style.display = 'none';
      }, 300);
    } else {
      carrinhoProdutos.style.display = 'flex';
      setTimeout(function () {
        carrinhoProdutos.classList.add('show');
      }, 70);
    }
  }

