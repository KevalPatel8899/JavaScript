let num =  Math.floor((Math.random() * 100) + 1);
var number = document.querySelector(".Number");
var reset = document.querySelector(".reset");
var submit = document.querySelector(".submit");
var input = document.querySelector("input");
number = 10;
var display = document.querySelector(".display");
var score = document.querySelector(".score");

alert(num);


submit.addEventListener("click",function()
{
	submitButton();
});

reset.addEventListener("click",function()
{
	resetButton();
})


function submitButton(){
if(num == Number(input.value))
	{	
	console.log("You have did it");
	display.textContent = "You did the find the number which is " + num;
	number++;
	score.textContent = number ; 

}
else
{
	console.log('No but you may be close');
	display.textContent = "Please try again";
	number--;
	score.textContent = number;
}

function resetButton(){

}

}