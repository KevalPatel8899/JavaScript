var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var reset = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winnig = 5;
var winnigDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");

// addEventListener in for the all buttons 
p1Button.addEventListener("click",function(){
	player1();
}); 
p2Button.addEventListener("click",function(){
	player2();
}); 

reset.addEventListener("click",function(){
 resetButton();
});


// function for the all code to make the dry code
function player1(){
	if(!gameOver){
			p1Score++;
		if(p1Score === winnig){
			p1.classList.add("winner");
			p2.classList.add("looser");
			gameOver = true;
			alert("player1 wins the game")

		}
		p1.textContent =p1Score;
	}
}

function player2(){
		if(!gameOver){
			p2Score++;
		if(p2Score === winnig){
			p2.classList.add("winner");
			p1.classList.add("looser");
			gameOver = true;
			alert("player2 wins the game")
		}
		p2.textContent =p2Score;
	}	
}

function resetButton(){
p1Score=0;
p2Score=0
p1.textContent=0;
p2.textContent=0;
p1.classList.remove("winner");
p2.classList.remove("looser");
p2.classList.remove("winner");
p1.classList.remove("looser");
gameOver =false;
winnigDisplay.textContent = 5;
winnig = 5;
numInput.value = 0;
}


//Number input for the change the value as per requirment
numInput.addEventListener("change",function(){
winnigDisplay.textContent= numInput.value;
if(Number(numInput.value) < 0){
	alert("input number should be greater then 0;");
	gameOver = true;
}
else{
	winnig= Number(numInput.value);
}
});