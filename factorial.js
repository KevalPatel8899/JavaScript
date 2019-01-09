
function factorial(x){

if(x<0){
	return null;}
	else{

		//define the result variable 
		var result=1;
	
		// calculate the factoriale and store the value
			for(var y=2 ; y <=x; y++){

			result *= y;
	}
	// return the result variable
	return result;}
}