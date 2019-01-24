var colors=generateRandomColor(6);
var pickedColor = pickColor();
var sqeares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var bodyColor= document.querySelector("body");
var messageDisplay = document.querySelector("#select");


colorDisplay.textContent = pickedColor; 

for(var i = 0; i < sqeares.length;i++){
	//add initializer colorsto find
	sqeares[i].style.backgroundColor = colors[i];

	//add click listeners to the squer
sqeares[i].addEventListener("click",function(){
//var for the click color
var clickColor =this.style.backgroundColor;

console.log(clickColor,pickedColor);
//loop for the choose the right color
if(clickColor === pickedColor)
{
	messageDisplay.textContent ="Yes You did it";
    changeColor(clickColor);

}
else
	{
		this.style.backgroundColor = bodyColor.style.backgroundColor;
	}
})

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

