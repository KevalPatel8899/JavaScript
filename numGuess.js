//Define the vars for the num and guess
var number;
var guess;


// add the condition for the numbers
number = Number(prompt("Please enter the nuber which you want to guess"));

//set the value for the guess
guess = 7;


//create the condition 
if(Number(number) === guess)
{
	alert("Oh!! You are got the number");
}
else if(Number(number)>guess &&Number(number)<10 ){
	alert("You went little high");
}
else if(Number(number)>=10){
alert("You are too high");
}
else if(Number(number)<guess &&Number(number)>4 ){
	alert("You went little low");
}
else if(Number(number)<=4){
alert("You are too low");
}
else
{
	alert("Please enter the numbers not anything else");
}
