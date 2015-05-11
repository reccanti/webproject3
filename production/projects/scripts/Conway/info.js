displayText = function(selected) {

	//get a list of all text boxes and make them invisible
	var textboxes = document.getElementsByName("content");
	for(var i = 0; i < textboxes.length; i++) {
		textboxes[i].style.display="none";
	}
	
	//display the selected text box
	textboxes[selected].style.display="block";
	
}