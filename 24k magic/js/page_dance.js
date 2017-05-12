var sec = 0,
score = 0,
combo = 0;

// si je clique sur le bouton go chrono sa lance en boucle chrono qui gère le temps
$('#btn_chrono_crashtest').on('click', function() {
	interval = setInterval(chrono, 100);
 	$("#music").trigger("play");
	// $("#bg_videox").trigger("play");
});


function combo_spe(){
	if (combo >= 0){
		$("#level_text").html("no level");//change le nom du combo level
		$("#level_text").css("color", "#690c63");//change la couleur du combo level
	}
	if (combo >= 5){
		score += 50;// si on est au dessus du combo 5 on rajoute au score 50pt
		$("level_text").html("Level 1");//change le nom du combo level
		$("level_text").css("color", "#00E27A");//change la couleur du combo level
	}
	if (combo >= 10){
		score += 100;// si on est au dessus du combo 10 on rajoute au score 100pt
		$("#level_text").html("Level 2");//change le nom du combo level
		$("#level_text").css("color", "#FF0090");//change la couleur du combo level
	}
	if (combo >= 15){
		score += 200;// si on est au dessus du combo 15 on rajoute au score 200pt
		$("#level_text").html("Level 3");//change le nom du combo level
		$("#level_text").css("color", "#D1AE08");//change la couleur du combo level
	}
}// end function combo_spe

function combox() {
	// COMB0
	// COMBO si égal à 5 combo :
	if(combo == 5){
		$("#effect_combo_right").attr("src", "img/dance_1/effect_combo_gif/smoke_combo_right.gif");// Giff effect hover combo typo
		$("#effect_combo").attr("src", "img/dance_1/effect_combo_gif/combo_shape_1.gif");// Giff effect hover combo perso
	}
	// COMBO si égal à 10 combo :
	if(combo == 10){
		$("#effect_combo_right").attr("src", "img/dance_1/effect_combo_gif/smoke_combo_right.gif");// Giff effect hover combo typo
		$("#effect_combo").attr("src", "img/dance_1/effect_combo_gif/combo_shape_2.gif");// Giff effect hover combo perso
	}
	// COMBO si égal à 15 combo :
	if(combo == 15){
		$("#effect_combo_right").attr("src", "img/dance_1/effect_combo_gif/smoke_combo_right.gif");// Giff effect hover combo typo
		$("#effect_combo").attr("src", "img/dance_1/effect_combo_gif/combo_flame.gif");// Giff effect hover combo perso
	}
} // end function combo 

function smiley() {
	// SMILEY
	// SMILEY BAD si moins de 0 score :
	if(score < 0){
		$("#smile_effect_left").attr("src", "img/dance_1/smiley/smile_effect_left.gif");// Giff effect smiley
		$("#smile").attr("src", "img/dance_1/smiley/smiley_bad.svg");// Picto smiley
		$("#smile_text").html("BAD !");// Nom du smiley
	}
	// SMILEY MOYEN si plus 1 score :
	else if(score >= 0){
		$("#smile_effect_left").attr("src", "img/dance_1/smiley/smile_effect_left.gif");// Giff effect smiley
		$("#smile").attr("src", "img/dance_1/smiley/smiley_moyen.svg");// Picto smiley
		$("#smile_text").html("MOYEN !");// Nom du smiley
	}
	// SMILEY GOOD si plus 500 score :
	else if(score >= 500){
		$("#smile_effect_left").attr("src", "img/dance_1/smiley/smile_effect_left.gif");// Giff effect smiley
		$("#smile").attr("src", "img/dance_1/smiley/smiley_good.svg");// Picto smiley
		$("#smile_text").html("GOOD !");// Nom du smiley
	}
	// SMILEY PERFECT si plus 500 score :
	else if(score >= 1000){
		$("#smile_effect_left").attr("src", "img/dance_1/smiley/smile_effect_left.gif");// Giff effect smiley
		$("#smile").attr("src", "img/dance_1/smiley/smiley_perfect.svg");// Picto smiley
		$("#smile_text").html("PERFECT !");// Nom du smiley
	}
}// end function smiley

// CHRONO BOUCLE AUTO POUR TEMPS + INDIC PAS
function chrono() {
	sec++;
	$("p#chrono_crashtest").html(sec);
	$("#point_go").html(score);
	$("#xcombo_nb").html(combo);

	$("#score_end").html(score);

	// POP UP FIN MUSIC
	if(sec == 1020){
		$(".popup_fin").find(".cover").fadeIn('slow');
		$(".popup_fin").find(".popup").fadeIn('slow');
	}

	// DANSE INDIC
	if(sec == 1){// DANCE 0
		$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/0_dancing_perso.gif");
	}
	if(sec == 52){// DANCE 1
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", ".8");
	}
	if(sec == 91){// DANCE 2
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", ".8");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 131){// DANCE 3
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 161){// DANCE 4
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", ".8");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 190){// DANCE 5
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 222){// DANCE 6
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}


	// PART2
	if(sec == 240){// DANCE 7
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 272){// DANCE 8
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 310){// DANCE 9
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", ".8");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 331){// DANCE 10
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", ".8");
	}



	if(sec == 351){// DANCE 11
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 370){// DANCE 12
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 391){// DANCE 13
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", ".8");
	}
	if(sec == 402){// DANCE 14
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 421){// DANCE 15
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 440){// DANCE 16
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", ".8");
	}
	if(sec == 451){// DANCE 17
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", ".8");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 461){// DANCE 18
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 472){// DANCE 19
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", ".8");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 491){// DANCE 20
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 472){// DANCE 21
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 491){// DANCE 22
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", ".8");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}

	if(sec == 351){// DANCE 23
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 370){// DANCE 24
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 391){// DANCE 25
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", ".8");
	}
	if(sec == 402){// DANCE 26
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}

	if(sec == 421){// DANCE 27
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
		if(sec == 351){// DANCE 28
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 370){// DANCE 29
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 391){// DANCE 30
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", ".8");
	}
	if(sec == 402){// DANCE 31
		$("img#indic_pas_top").css("opacity", "0");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", ".8");
		$("img#indic_pas_left").css("opacity", "0");
	}
	if(sec == 421){// DANCE 32
		$("img#indic_pas_top").css("opacity", ".8");
		$("img#indic_pas_right").css("opacity", "0");
		$("img#indic_pas_bottom").css("opacity", "0");
		$("img#indic_pas_left").css("opacity", "0");
	}




}// END CHRONO

// ACTION DES PAS DE DANSE
$(document).keyup(function(le_click) {

	// DANCE 1
	if(sec > 52 && sec < 91){
		// je clique sur left
		if (le_click.keyCode == 37){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/1_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 38 || 39 || 40){
				// alors il se passe ca :
				combo = 0;
				score -= 200;
			}
		}
	}// END DANCE 1

	// DANCE 2
	if(sec > 91 && sec < 131){
		// je clique sur right
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/2_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur top
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 38 || 37 || 40){
				// alors il se passe ca :
				combo = 0;
				score -= 200;
			}
		}
	}// END DANCE 2

	// DANCE 3
	if(sec > 131 && sec < 161){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/3_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 40){
				// alors il se passe ca :
				combo = 0;
				score -= 200;
			}
		}
	}// END DANCE 3

	// DANCE 4
	if(sec > 161 && sec < 190){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/4_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 38 || 40){
				// alors il se passe ca :
				combo = 0;
				score -= 200;
			}
		}
	}// END DANCE 4

	// DANCE 5
	if(sec > 190 && sec < 222){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/5_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				score -= 200;
			}
		}
	}// END DANCE 5

	// DANCE 6 FIN DE L'INTRO
	if(sec > 222 && sec < 240){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/6_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 40){
				// alors il se passe ca :
				combo = 0;
				score -= 200;
			}
		}
	}// END DANCE 6
	

	// PART 2
	// DANCE 7
	if(sec > 240 && sec < 272){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/7_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				score -= 100;
			}
		}
	}// END DANCE 7

	// DANCE 8
	if(sec > 272 && sec < 310){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/8_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 40){
				// alors il se passe ca :
				combo = 0;
				score -= 100;
			}
		}
	}// END DANCE 8

	// DANCE 9
	if(sec > 310 && sec < 341){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/9_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 38 || 40){
				// alors il se passe ca :
				combo = 0;
				score -= 100;
			}
		}
	}// END DANCE 9

	// DANCE 10
	if(sec > 341 && sec < 361){
		// je clique sur <
		if (le_click.keyCode == 37){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/10_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 10



	// DANCE 11
	if(sec > 361 && sec < 375){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/11_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 37 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 11

	// DANCE 12
	if(sec > 375 && sec < 391){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/12_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 37 || 38){
				// alors il se passe ca :
				combo += 0;
				// score -= 200;
			}
		}
	}// END DANCE 12

	// DANCE 13
	if(sec > 391 && sec < 420){
		// je clique sur <
		if (le_click.keyCode == 37){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/13_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 39 || 38){
				// alors il se passe ca :
				combo += 0;
				// score -= 200;
			}
		}
	}// END DANCE 13

	// DANCE 14
	if(sec > 420 && sec < 435){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/14_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo += 0;
				// score -= 200;
			}
		}
	}// END DANCE 14

	// DANCE 15
	if(sec > 435 && sec < 450){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/15_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 39 || 37){
				// alors il se passe ca :
				combo += 0;
				// score -= 200;
			}
		}
	}// END DANCE 15

	// DANCE 16
	if(sec > 450 && sec < 465){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/16_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 16

	// DANCE 17
	if(sec > 465 && sec < 480){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/17_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 40 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 17

	// DANCE 18
	if(sec > 480 && sec < 510){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/18_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 18


	// DANCE 19
	if(sec > 510 && sec < 530){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/19_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 19

	// DANCE 20
	if(sec > 530 && sec < 601){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/20_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 20

	// DANCE 21
	if(sec > 601 && sec < 625){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/21_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 21

	// PART 4
	// DANCE 22
	if(sec > 625 && sec < 635){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/22_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 40 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 22


	// PART3
	// DANCE 23
	if(sec > 635 && sec < 650){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/23_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 37 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 23

	// DANCE 24
	if(sec > 750 && sec < 820){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/24_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 37 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 24

	// DANCE 25
	if(sec > 820 && sec < 845){
		// je clique sur <
		if (le_click.keyCode == 37){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/25_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 25

	// DANCE 26
	if(sec > 845 && sec < 860){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/26_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 26

	// DANCE 27
	if(sec > 860 && sec < 880){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/27_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 39 || 37){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 27




	// DANCE 28
	if(sec > 880 && sec < 910){
		// je clique sur <
		if (le_click.keyCode == 39){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/28_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 37 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 28

	// DANCE 29
	if(sec > 910 && sec < 930){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/29_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 37 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 29

	// DANCE 30
	if(sec > 930 && sec < 950){
		// je clique sur <
		if (le_click.keyCode == 37){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/30_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 30

	// DANCE 31
	if(sec > 950 && sec < 980){
		// je clique sur <
		if (le_click.keyCode == 40){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/31_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 37 || 39 || 38){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 31

	// DANCE 32
	if(sec > 980 && sec < 1000){
		// je clique sur <
		if (le_click.keyCode == 38){
			// alors il se passe ca :
			$("#perso_gif").attr("src", "img/dance_1/dancing_go_gif/32_dancing_perso.gif");// Lance le Giff corespondant à la parti  de music
			combo += 1; //on rajoute au coombo 1
			score += 100; // on rajoute au score 100pt
			combo_spe();
			smiley();
			combox();
		}//end je clique sur <
		else {
			// je clique sur autre tab
			if (le_click.keyCode == 40 || 39 || 37){
				// alors il se passe ca :
				combo = 0;
				// score -= 200;
			}
		}
	}// END DANCE 32























});// END ACTION DES PAS DE DANSE

