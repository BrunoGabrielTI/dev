   
 $("li").click(function() {


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

$(document).ready(function(){
  document.body.style.zoom = 1.0
});
