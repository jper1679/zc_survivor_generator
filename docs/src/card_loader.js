/**
 * Chargement du formulaire en fonction du modèle mémoire
 */ 

 function load(){
	load_headers();
	load_stats();
	load_description();
	load_card_image();
	load_card_image_shadow();
	load_image_max_range();
	load_card_level();
        load_card_slot();
	load_break_in_noise();
	load_kill_noise();
	load_dual();
	load_card_type();
	load_griffe_image();
}
 
function load_griffe_image(){
	output_griffe();
}

function load_card_image(){
	var card_image = $("#card_image");
	card_image.attr("src", current_card.card_image?current_card.card_image:"");
	
	$("#input_image_max_rate").val($("#card_image").css("max-width").replace("%",""));
	
	if(current_card.card_image){
		card_image.css('top', current_card.card_image_top+"px");
		card_image.css('left', current_card.card_image_left+"px");
		card_image.show();
	}else {
		card_image.hide();
	}
}

function load_stats(){
	$("#input_range").val(current_card.range);
	$("#input_nb_dice").val(current_card.nb_dices);
	$("#input_val_dice").val(current_card.val_dices);
	$("#input_power").val(current_card.power);
	
	output_stats();
}

function load_headers(){
	$("#input_card_name").val(get_locale_string("card_name"));
	$("#input_card_sub_name").val(get_locale_string("card_sub_name"));
	output_headers();
}

function load_card_level(){
    $("#input_ultrablue").prop("checked",!current_card.ultrarouge && !current_card.ultraorange && !current_card.ultrayellow);
    $("#input_ultrayellow").prop("checked",current_card.ultrayellow);
    $("#input_ultraorange").prop("checked",current_card.ultraorange);
    $("#input_ultrarouge").prop("checked",current_card.ultrarouge);
    output_card_level();
}

function load_card_slot(){
    $("#input_slot_none").prop("checked",!current_card.noisy_break_in && !current_card.noisy_break_in_top);
    $("#input_slot_armor").prop("checked",current_card.noisy_break_in);
    $("#input_slot_hand").prop("checked",current_card.silent_break_in);
    $("#input_slot_bag").css("top",current_card.break_in_noise_top);
    output_break_in_noise();
}

function load_break_in_noise(){
    $("#input_break_in_none").prop("checked",!current_card.noisy_break_in && !current_card.noisy_break_in_top);
    $("#input_break_in_noisy").prop("checked",current_card.noisy_break_in);
    $("#input_break_in_silent").prop("checked",current_card.silent_break_in);
    $("#calque_break_in_noise").css("top",current_card.break_in_noise_top);
    
    
    
    output_break_in_noise();
}

function load_kill_noise(){
    $("#input_kill_none").prop("checked",!current_card.noisy_kill && !current_card.noisy_kill_top);

    $("#input_kill_noisy").prop("checked",current_card.noisy_kill);
    $("#input_kill_silent").prop("checked",current_card.silent_kill);

    $("#calque_kill_noise").css("top",current_card.kill_noise_top);

    output_kill_noise();
}

function load_card_type(){
	$("#input_card_type_normal").prop("checked",!current_card.card_type || current_card.card_type == "normal");
	$("#input_card_type_pimp").prop("checked",current_card.card_type == "pimp");
	$("#input_card_type_starting").prop("checked",current_card.card_type == "starting");
	change_bleeding_areas();
}

function load_dual(){
	$("#input_dual").prop("checked",current_card.dual?current_card.dual:false);
	output_dual();
}

function load_description(){
	var description = get_locale_string("description");
	$("#input_description").val(description);
	
	$("#calque_description").css("top",current_card.description_top);
	update_descripion_text_position();
	
	output_description();
}

function load_image_max_range(){
	$("#input_image_max_rate").val(current_card.image_max_range?current_card.image_max_range:"100");
	output_image_max_range();
}

function load_card_image_shadow(){
	$("#input_image_shadow").prop('checked', current_card.card_image_shadow?current_card.card_image_shadow:false);
	
	output_card_image_shadow();
	create_card_image_shadow();
	move_shadow();
}

$(document).ready(function() {
	
		$("#input_zec_file").change(load_save_file);
		
		load();
	
})