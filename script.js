//Listen for the keydown event
//When it happens, run some function on event (e)
window.addEventListener('keydown', function(e){
	//Grabs corresponding audio element for specific key
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(!audio) return; //Stop function from running
	audio.play();
});