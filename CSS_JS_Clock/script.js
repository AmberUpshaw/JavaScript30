//grabs div with class 'second-hand' from index.html
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
	//creates new date instance
	const now = new Date();
	//grabs seconds from now instance
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	
	//determines placement on clock based on seconds variable
	const secondsDegrees = ((seconds/60) * 360) + 90;
	const minutesDegrees = ((minutes/60) * 360) + 90;
	//removed 90 to ensure hour hand started in right position
	const hoursDegrees = (hours/60) * 360;
	//move second hand based off secondsDegrees
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	// console.log(seconds);
}

//Run setDate() function every 1000ms -> 1s
setInterval(setDate, 1000);