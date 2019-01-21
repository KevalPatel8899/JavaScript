printReverse([1,2,3,4]);

function printReverse(index)
{
for(var i= index.length-1;i>=0;i--){
console.log(index[i]);
}
}

// match same

function match(arr){
	var first = arr[0];

	for(i = 1;i<arr.length;i++){
		if(arr[i] !== first ){
			return false;
		}
	}
	return true;
}

//sum array

function sumArray(arr){
	total = 0;
	arr.forEach(function(element){
		total += element; 
	});
}

//test max

function max(arr){
	max = arr[0];
	for(i=0;i<arr.length;i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}