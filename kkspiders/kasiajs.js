

		// 1. Find and store the element we want to listen to events on.
		var clickerButton = document.getElementById("clicker");
		// 2. Define the function that will respond to the event.
		// callback 
		var onButtonClick = function() {
			clickerButton.textContent = "Welcome to animal kingdom!";
		};
		// 3. Add the event listener for the element and function
		// anonymous "inline"
		clickerButton.addEventListener("click", onButtonClick);
		
		// When the user submits the form,
    //   Check what answer they picked
    //   And tell them if they're correct

    // submit
    $("#quiz-form").on("submit", function(event) {
        event.preventDefault();
        var $answer = $("#quiz-answer"); 
        var answer = $answer.val();
        console.log(answer);
        if (answer === "4 pairs") {
            $("#result").text("Congratulations! You are expert on jumping spiders!");
        } else {
            $("#result").text("Try again!");
        }
        
    });
	
	 var spiderAttack = document.getElementById("spider-attack");
  spiderAttack.style.width = "50px";
  
  // Step 2. What function will change it each time?
  var startTime = new Date().getTime();
  var makeItBigger = function() {
      var currTime = new Date().getTime();
      var newWidth = (50 + ((currTime - startTime)/1000) * 30);
       spiderAttack.style.width = newWidth + "px"; 
       
       if (newWidth < 240) {
           window.requestAnimationFrame(makeItBigger);
       }
    
  };
  makeItBigger();
