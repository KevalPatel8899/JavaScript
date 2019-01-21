var button = document.querySelector("#button");
var isBlue = false;


button.eventListener("click",function(){
	if(isBlue){
	document.body.style.background = "blue";
}
else{
	document.body.style.background = "white";
	isBlue = true;
})