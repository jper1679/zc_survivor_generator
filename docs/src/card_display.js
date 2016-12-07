/**
 * Mise à jour de l'apercu en fonction du modèle en mémoire
 */

function output_stats(){
    if (is_stats()) {
        $("#calque_parchemin").show();
        $("#calque_stats").show();
        $("#input_description").prop('disabled', true);
    } else {
        $("#calque_parchemin").hide();
        $("#calque_stats").hide();
        $("#input_description").prop('disabled', false);
    }
    $("#output_range").html(current_card.range?current_card.range:"");
    $("#output_nb_dice").html(current_card.nb_dices?current_card.nb_dices:"");
    $("#output_val_dice").html(current_card.val_dices?current_card.val_dices:"");
    $("#output_power").html(current_card.power?current_card.power:"");
    output_griffe();
}

function output_headers(){
    var card_name = get_locale_string("card_name");
    var card_sub_name = get_locale_string("card_sub_name");
    
    //TODO: à revoir, c'est pas tarrible !
    $("#output_card_name").html(card_name?replace_carriage_return(card_name):"");
    //$("#output_card_sub_name").html(replace_dices(card_sub_name?replace_carriage_return(card_sub_name).toUpperCase():""));
}

function output_card_level() {
    $("#calque_break_in_noise").removeClass("calque_ultrarouge calque_ultraorange calque_ultrayellow");
    
    if (current_card.ultrayellow) {
        $("#calque_ultrayellow").show();
    } else {
        $("#calque_ultrayellow").hide();
    }

    if (current_card.ultraorange) {
        $("#calque_ultraorange").show();
    } else {
        $("#calque_ultraorange").hide();
    }

    if (current_card.ultrarouge) {
        $("#calque_ultrarouge").show();
    } else {
        $("#calque_ultrarouge").hide();
    }
}

function output_slot() {
    $("#calque_slot").removeClass("calque_slot_armor calque_slot_hand calque_slot_bag");
    
    if (current_card.slot_armor){
        $("#calque_slot").addClass("calque_slot_armor");
    } else if(current_card.slot_hand){
        $("#calque_slot").addClass("calque_slot_hand");
    } else if(current_card.slot_bag){
        $("#calque_slot").addClass("calque_slot_bag");
    }
	
    if (current_card.slot_armor || current_card.slot_hand || current_card.slot_bag) {
        $("#calque_slot").show();
    } else {
        $("#calque_slot").hide();
    }
}

function output_break_in_noise() {
    $("#calque_break_in_noise").removeClass("calque_break_in_noise_noisy calque_break_in_noise_silent");
    
    
    switch (current_card.noisy_dices){
        case "door3":
            $("#calque_dice").css("background-image", "url(img/bp/door3.png)");
        case "door4":
            $("#calque_dice").css("background-image", "url(img/bp/door4.png)");
        case "door5":
            $("#calque_dice").css("background-image", "url(img/bp/door5.png)");
        case "door6":
            $("#calque_dice").css("background-image", "url(img/bp/door6.png)");
        default:
            ;
    }

//    if (current_card.noisy_dices == 1){
//        $("#calque_description").css("background-image", "url(img/bp/parchemin_1.png)");
//        $("#calque_description").css("top", "605px");
//        $("#calque_description").css("height", "145px");
//    } else if (current_card.noisy_dices == 2){
//        $("#calque_description").css("background-image", "url(img/bp/parchemin_2.png)");
//        $("#calque_description").css("top", "610px");
//        $("#calque_description").css("height", "140px");
//    } else if (lines == 3){
//        $("#calque_description").css("background-image", "url(img/bp/parchemin_3.png)");
//        $("#calque_description").css("top", "573px");
//        $("#calque_description").css("height", "177px");
//    } else if (lines == 4){
//        $("#calque_description").css("background-image", "url(img/bp/parchemin_4.png)");
//        $("#calque_description").css("top", "530px");
//        $("#calque_description").css("height", "220px");
//    } else if (lines == 5){
//        $("#calque_description").css("background-image", "url(img/bp/parchemin_5.png)");
//        $("#calque_description").css("top", "541px");
//        $("#calque_description").css("height", "209px");
//    } else if (lines == 6){
//        $("#calque_description").css("background-image", "url(img/bp/parchemin_5.png)");
//        $("#calque_description").css("top", "541px");
//        $("#calque_description").css("height", "209px");
//    } else {
//
//    }
    
    
    
    if (current_card.noisy_break_in){
        $("#calque_break_in_noise").addClass("calque_break_in_noise_noisy");
    } else if(current_card.silent_break_in){
        $("#calque_break_in_noise").addClass("calque_break_in_noise_silent");
    }
	
    if (current_card.noisy_break_in || current_card.silent_break_in) {
        $("#calque_door").show();
        $("#calque_break_in_noise").show();
        $("#calque_dice").show();
    } else {
        $("#calque_door").hide();
        $("#calque_break_in_noise").hide();
        $("#calque_dice").hide();
    }
}

function output_kill_noise() {
	
	 $("#calque_kill_noise").removeClass("calque_kill_noise_noisy calque_kill_noise_silent");
	
	if (current_card.noisy_kill){
		$("#calque_kill_noise").addClass("calque_kill_noise_noisy");
	} else if(current_card.silent_kill){
		$("#calque_kill_noise").addClass("calque_kill_noise_silent");
	}
	
    if (current_card.noisy_kill || current_card.silent_kill) {
        $("#calque_kill_noise").show();
    } else {
        $("#calque_kill_noise").hide();
    }

}

function output_dual() {
    if (current_card.dual) {
        $("#calque_dual").show();
    } else {
        $("#calque_dual").hide();
    }
}

function center_card_image(){
	$("#card_image").position({
	   my: "center",
	   at: "center",
	   of: "#card_overlay"
	});
}

var start_top_griffe;

var start_top_description;

function start_drag_description(){
	if(current_card.griffe_image){
		start_top_description = $("#calque_description").position().top;
		start_top_griffe=$("#output_griffe").position().top
	}
}

function update_descripion_text_position(){
	$("#output_description_container").height($("#card_overlay").offset().top+$("#card_overlay").height()-$("#calque_description").offset().top);
	
	// update griffe position
	if(current_card.griffe_image){
		var delta = $("#calque_description").position().top-start_top_description;
		$("#output_griffe").css("top",start_top_griffe+delta);
	}
}

function output_description(){
    var description = get_locale_string("description");
    
    if (description) {
        var lines = get_number_of_lines(description);
        if (lines == 1){
            $("#calque_description").css("background-image", "url(img/bp/parchemin_1.png)");
            $("#calque_description").css("top", "605px");
            $("#calque_description").css("height", "145px");
        } else if (lines == 2){
            $("#calque_description").css("background-image", "url(img/bp/parchemin_2.png)");
            $("#calque_description").css("top", "610px");
            $("#calque_description").css("height", "140px");
        } else if (lines == 3){
            $("#calque_description").css("background-image", "url(img/bp/parchemin_3.png)");
            $("#calque_description").css("top", "573px");
            $("#calque_description").css("height", "177px");
        } else if (lines == 4){
            $("#calque_description").css("background-image", "url(img/bp/parchemin_4.png)");
            $("#calque_description").css("top", "530px");
            $("#calque_description").css("height", "220px");
        } else if (lines == 5){
            $("#calque_description").css("background-image", "url(img/bp/parchemin_5.png)");
            $("#calque_description").css("top", "541px");
            $("#calque_description").css("height", "209px");
        } else {
            
        }
        
        description = replace_carriage_return(description);
        $("#output_description").html(replace_comp_capa(replace_dices(description)));
        //$("#output_description").html(replace_comp_capa(replace_dices(description.toUpperCase())));
        $("#calque_description").show();
        $(".input_card_stats").prop('disabled', true);
    } else {
        $("#calque_description").removeAttr("style");
        $("#output_description").html("");
        $("#calque_description").hide();
        $(".input_card_stats").prop('disabled', false);
    }
    update_descripion_text_position();
    output_griffe();
}

function output_griffe(){
	
	var griffe_image = $("#output_griffe");
	griffe_image.attr("src", current_card.griffe_image?current_card.griffe_image:"");

	
	if(current_card.griffe_image){
		griffe_image.show();
	}else {
		griffe_image.hide();
	}
	
	if(current_card.griffe_image_top){
		griffe_image.css("top",current_card.griffe_image_top);
		griffe_image.css("left",current_card.griffe_image_left);
	} else {
		
		if(get_locale_string("description")){
			griffe_image.css("top",$("#calque_description").position().top - $("#output_griffe").height()/2 + 10);
			griffe_image.css("left",$("#calque_description").position().left- $("#output_griffe").width()/2 + 10);
		} else if(is_stats()){
			griffe_image.css("top",$("#calque_stats").position().top - $("#output_griffe").height()/2 + 10);
			griffe_image.css("left",$("#calque_stats").position().left- $("#output_griffe").width()/2 + 10);
		} else {
			griffe_image.hide();
		}
		
		
	}
	
	
}

function output_image_max_range(){
	$("#card_image").css("max-width", current_card.image_max_range+"%");
	$("#card_image_shadow").css("max-width", current_card.image_max_range+"%");
}

function output_card_image_shadow(){
	if(current_card.card_image_shadow){
		$("#card_image_shadow").show();
	} else {
		$("#card_image_shadow").hide();
	}
}

function update_card_image_shadow(){
		
	if($("#input_image_shadow").is(":checked")){
		$("#card_image_shadow").show();
	} else {
		$("#card_image_shadow").hide();
	}
}

function move_shadow() {
	var card_image = $("#card_image");
	var card_image_shadow = $("#card_image_shadow");
	card_image_shadow.css("left",card_image.position().left-9);
	card_image_shadow.css("top",card_image.position().top+9);
}