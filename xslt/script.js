$( document ).ready(function() {
	function activateButton() {
		v1=$("#shortinput").val();
		v2=$("#longinput").val();
		if (v1 && v2) { 
			$("#savebutton").css("background", "green");
		}
	}


  $("input").change( activateButton );
});



