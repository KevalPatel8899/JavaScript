//First array to insert the value
var todos = [];


//Prompt to show the value
var inputs= prompt("What do you want to do?? ");

//to run the command usntil this quit is not used
while (inputs !== "quit"){

	if( inputs === "list")
	{
		listTodos();
	}else if(inputs === "new")
	{
		addTodos();
	}
	//To delete the index
	else if(inputs === "delete")
	{
		deletTodos();
	}
	//ask again for the new input
var inputs= prompt("What do you want to do?? ");
}

//End statement

alert("Ok, You quit the app!!");



// Function for lists

function listTodos(){
console.log("**********");
		todos.forEach(function(todo , i )
		{
			console.log(i +" : "+todo);
		});
		console.log("**********");	
}

//function for add new todolist
function addTodos(){
	//To tell the wnter the new todo list	
		var newTodo = prompt("Enter the new todo");
		//add the value from the different value to the array
		todos.push(newTodo);
}

//function for delete todos
function deletTodos(){
		// enter the todo which the user want too delete
		var index = prompt("Enter the todo number which you want to delete");
		//Enter the splice method to delete
		todos.splice(index,1);
		//Alert
		alert("Deleted");
}