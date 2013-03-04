$(document).ready(function(){
	$(".paginacao li").click(function() {
		$(this).siblings().removeClass("ativo");
		$(this).addClass("ativo");
		$(this).closest(".container").children(".grupo").fadeOut(400);
		$(this).closest(".container").children(".grupo").eq($(this).index()).fadeIn(600);
	});
	$(".expandir").click(function() {
		if($(this).hasClass("contrair")) {
			$(this).html("+");
			$(this).removeClass("contrair");
			$(this).parent().next(".grupo").slideToggle(100);
		}
		else {
			$(this).html("-");
			$(this).addClass("contrair");
			$(this).parent().next(".grupo").slideToggle(100);
		}
	});
	$(".localizacao .titulo").click(function() {
		$(this).next(".mapa").slideToggle(200);
	});
});