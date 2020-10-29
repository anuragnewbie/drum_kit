// Detecting button press
var a = document.querySelectorAll(".drum");

for(var i=0; i<a.length; i++)
{
	a[i].addEventListener("click", function ()
	{
		keyispressed(this.textContent);
		drumAnimation(this.textContent);
	});
}

// Detecting ke press
document.addEventListener("keypress", function (e) {
	keyispressed(e.key);
	drumAnimation(e.key);
});


// Mapping key press/button press with the music play
function keyispressed(key)
{
	switch (key)
	{
		case "w":   var crash = new Audio("sounds/crash.mp3");
					crash.play();
					break;

		case "a": 	var kick = new Audio("sounds/kick-bass.mp3");
					kick.play();
					break;

		case "s": 	var snare = new Audio("sounds/snare.mp3");
					snare.play();
					break;

		case "d": 	var tom1 = new Audio("sounds/tom-1.mp3");
					tom1.play();
					break; 

		case "j": 	var tom2 = new Audio("sounds/tom-2.mp3");
					tom2.play();
					break; 

		case "k": 	var tom3 = new Audio("sounds/tom-3.mp3");
					tom3.play();
					break; 

		default: alert("Incorrect key pressed 😪!");
	}
}

// Key press/Button press animation
function drumAnimation(value) {	
	document.querySelector("." + value).classList.add("pressed");

	setTimeout(function() {
		document.querySelector("." + value).classList.remove("pressed");
	}, 100);
}