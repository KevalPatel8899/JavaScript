//First array to insert the value
var todos = [];


//Prompt to show the value
var inputs= prompt("What do you want to do?? ");

//to run the command usntil this quit is not used
while (inputs !== "quit"){


	if( inputs === "list")
	{
		console.log(todos);
	}else if(inputs === "new")
	{
	//To tell the wnter the new todo list	
	var newTodo = prompt("Enter the new todo");
	//add the value from the different value to the array
	todos.push(newTodo);
	}
	//ask again for the new input
var inputs= prompt("What do you want to do?? ");
}

//End statement
console.log("Ok, You quit the app!!");