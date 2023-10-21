/* Bruno Gabriel Developer - 2023 */   
/* Código simples apenas para garantir as funcionalidades propostas pela página estática.*/   

$(document).ready(function(){ /* Garante o carregamento da página. Colocado na versão 2.2.1 */
   
   document.body.style.zoom = 1.0; /* Garante que o zoom da página esteja em 1x. Colocado na versão 2.2.1 */
   
   $("li").click(function() { /* Código da navegação. */
   
   
      if (this.id == "apresentacao-btn"){
        $("#apresentacao").css("display","flex");
        $("#projetos").css("display","none");
        $("#contato").css("display","none");
        $(this).addClass("botao-ativo");
        $("#projetos-btn").removeClass("botao-ativo");
        $("#contato-btn").removeClass("botao-ativo");
      }  
      
      if (this.id == "projetos-btn"){
        $("#projetos").css("display","flex");
        $("#apresentacao").css("display","none");
        $("#contato").css("display","none");
        $(this).addClass("botao-ativo");
        $("#apresentacao-btn").removeClass("botao-ativo");
        $("#contato-btn").removeClass("botao-ativo");
      } 
      
      if (this.id == "contato-btn"){
        $("#contato").css("display","flex");
        $("#apresentacao").css("display","none");
        $("#projetos").css("display","none");
      
        $(this).addClass("botao-ativo");
        $("#apresentacao-btn").removeClass("botao-ativo");
        $("#projetos-btn").removeClass("botao-ativo");
        
      } 
      
   });

  
});
