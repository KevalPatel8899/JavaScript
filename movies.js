//add the movies information in the Array
var movies=[
{
	name: "Frozon",
	rating:4.5,
	seen:true
},
{
	name:"Mad Max Fury Roads",
	rating:5,
	seen:true
},
{
	name:"In Bruges",
	rating:5,
	seen:false
},
{
	name:"Les Miserables",
	rating:3.5,
	seen:false
}
];

//create the function to display the movies and it's informations
function movieBuilder(movie){
var result = "You have"
	if(movie.seen){
		result += " have seen";
	}
	else
	{
		result += " not seen";
	}
	result += " \""+movie.name + "\" " +" - "+movie.rating + " star";	

	return result;
}


//use the movies array and movieBuilder function in the forEach method
movies.forEach(function(movie)
{
	console.log( movieBuilder(movie));
});
