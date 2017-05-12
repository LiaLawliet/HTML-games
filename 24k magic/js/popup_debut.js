$(document).ready(function() {
	$(".popup_debut").find(".cover").fadeIn('slow');
	$(".popup_debut").find(".popup").fadeIn('slow');
  $(".popup_debut").find(".play").click(function() {
    $(".popup_debut").find(".cover").fadeOut('fast');
    $(".popup_debut").find(".popup").fadeOut('fast');
  });
});


