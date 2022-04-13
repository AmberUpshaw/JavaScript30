# JavaScript30 - JS Drum Kit Solution

This is a solution to the [Drum Kit JS Project - #JavaScript30]](https://www.javascript30.com). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Press keys: A, S, D, F, G, H, J, K, L on their keyboard and hear the appointed sound. I.e. hihat

### Links

- Solution URL: [Github](https://github.com/AmberUpshaw/JavaScript30)
- Live Site URL: [Github Page](https://amberupshaw.github.io/JavaScript30/)
## My process

### Built with

- Vanilla JS
- Starter HTML/CSS and sounds provided by Wes Bos via #JavaScript30


### What I learned

While building this project, I learned more about Event Listeners, what 'this' actually refers to, and some audio functionality that I had never seen.

```javascript
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
```

### Continued development

This is the project for day 1 of 30. The plan is to complete all 30 projects and also complete JS code challenges via [CSX](https://csx.codesmith.io/home).

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - MDN Developer Network - great for JS documentation.
- [Stack Overflow](stackoverflow.com) - Great resource if ever you get stuck with your code.

## Author

- Website - [Amber Upshaw](github.com/AmberUpshaw)
- Instagram - [@jsimone.codes](instagram.com/jsimone.codes)


