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
var numInput = document.querySelector("#number");

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winnig){
			p1.classList.add("winner");
			p2.classList.add("looser");
			gameOver = true;
		}
		p1.textContent =p1Score;
	}
}); 
p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winnig){
			p2.classList.add("winner");
			p1.classList.add("looser");
			gameOver = true;
		}
		p2.textContent =p2Score;
	}
}); 

reset.addEventListener("click",function(){
p1Score=0;
p2Score=0
p1.textContent=0;
p2.textContent=0;
p1.classList.remove("winner");
p2.classList.remove("looser");
p2.classList.remove("winner");
p1.classList.remove("looser");
gameOver =false;
});

