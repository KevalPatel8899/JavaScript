// define the age variable show the default message

var age= Number(prompt("Please enter the rear age"));

// Create the if else and nested if conditions to create the age limiter app

if(age >18 && age <=21){
	alert("You are allowed to enter the Bar")
}
else if(age >21)
{
alert("You are allowed to enter the pub and also drink ")
}
else {
	alert("Sorry you are not old enough")
}


//create the math condition to show that if the square route then throw this message 
if(age % Math.sqrt(age) === 0){
	console.log("Oh, Your age is perfect square");
}


// if age is devideble to the 2 then throw this massage
if(age %2 !==0){
console.log("Ok your age is odd");
}