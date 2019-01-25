var colors=generateRandomColor(numberOfSquares);
var pickedColor = pickColor();
var sqeares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var bodyColor= document.querySelector("body");
var messageDisplay = document.querySelector("#select");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var numberOfSquares =6;
var modeButtons = document.querySelectorAll(".mode");




easy.addEventListener("click",function()
{
	easyButton();
});

hard.addEventListener("click",function()
{
	hardButton();
});

hard.click();

reset.addEventListener("click",function()
{
	resetButton();
});

colorDisplay.textContent = pickedColor; 

function hardButton()
{
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numberOfSquares = 6;
	colors=generateRandomColor(numberOfSquares);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor; 
	for (var i = 0; i <sqeares.length; i++) 
	{		
		sqeares[i].style.backgroundColor = colors[i];
		sqeares[i].style.display= "block";
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

function easyButton()
{
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numberOfSquares = 3;
	colors=generateRandomColor(numberOfSquares);
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor; 
	for (var i = 0; i <sqeares.length; i++) 
	{
		if (colors[i])
		{
			sqeares[i].style.backgroundColor = colors[i];
		}
		else
		{
			sqeares[i].style.display= "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}


for(var i = 0; i <numberOfSquares;i++){
	//add click listeners to the squer
	sqeares[i].addEventListener("click",function()
	{
		//var for the click color
		var clickColor =this.style.backgroundColor;

		//loop for the choose the right color
		if(clickColor === pickedColor)
		{
			h1.style.backgroundColor=clickColor;
			messageDisplay.textContent ="Yes You did it";
		    changeColor(clickColor);
	    	reset.textContent = "Play again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent ="Sorry, Try again!!";
			reset.textContent = "New Color";			
		}
	});
}


function changeColor(color)
{
	for(var i=0; i<sqeares.length;i++){
		sqeares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num)
{
	//create the array
	var arr=[];
	//repeat the num  times
	for (var i = 0; i< num; i++){

		arr.push(randomColors());
	}
	//return the array
	return arr;
}

function randomColors()
{
	//pick a red form 0 to 255
	var r =Math.floor(Math.random() * 256);
	//pick a green form 0 to 255
	var g =Math.floor(Math.random() * 256);
	//pick a blue form 0 to 255
	var b =Math.floor(Math.random() * 256);
	return"rgb("+r+", " +g+", "+b+")";
}

function resetButton(){
	// generete all new colors
	colors=generateRandomColor(numberOfSquares);

	//check the new colors from the array
	pickedColor = pickColor();

	//change the colores of display  to match the color
	colorDisplay.textContent = pickedColor; 
	//remove the span
	messageDisplay.textContent= "";
	//change color of the square
	for (var i = 0; i < sqeares.length; i++) {
	sqeares[i].style.backgroundColor = colors[i];
	reset.textContent = "New Color";
	}
}

