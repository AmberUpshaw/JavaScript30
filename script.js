function playSound(e){
	//Grabs corresponding audio element for specific key
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	//Grabs div with key class
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	if(!audio) return; //Stop function from running
	audio.currentTime = 0; //rewind to the start
	audio.play();
	
	//add class of playing to key so that squares are highlighted 
	key.classList.add('playing');
}

function removeTransition(e){
	if(e.propertyName !== 'transform') return; //skip it if it's not transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//Listen for the keydown event
//When it happens, run some function on event (e)
window.addEventListener('keydown', playSound);