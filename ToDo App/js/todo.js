//-------------------------------------------------------------------------
//----------------------MINI CHALLENGES CODE-------------------------------
//-------------------------------------------------------------------------
var newTask = {title: "Coding School", when: "6am", What:"Javascript Final"};
var myJSON = JSON.stringify(newTask);

document.getElementById("myTask").innerHTML = myJSON;

var Task = '{"title": "Coding School", "when": "6am", "What":"Javascript Final"}';
var JSONstring = JSON.parse(Task);

document.getElementById("string").innerHTML = JSONstring.title + " at " + JSONstring.when + " tomorrow morning.";

localStorage.setItem("Task", "JS Final");
document.getElementById("storage").innerHTML = localStorage.getItem("Task");
//--------------------------/END CHALLENGES CODE----------------------------
//--------------------------------------------------------------------------

function getTodos(){ //this function gets the task from input
    var todos = new Array; //this creates an arry of tasks that are inputed
    var todosStr = localStorage.getItem("todo"); //pull the task that was saved in web browser memory
    if (todosStr !== null){ //if the input is not null then JSON, parse will communicate with the browser to make the task JS object
        todos = JSON.parse(todosStr); 
    }
    return todos;
}

function add(){ //adds the inputed task to the getTodos function array
    var task = document.getElementById("task").value; //takes the input task and creates a variable of it

    var todos = getTodos(); 
    todos.push(task); //adds a new task to the end of the array
    localStorage.setItem("todo", JSON.stringify(todos)); //this converts the task input into a JSON string
    document.getElementById("task").value="";
    show();

    return false;
}

function show(){ //function keeps the tasks permanently displayed on screen
    var todos= getTodos(); //sets the task that was retrieved as a variable
    var html = "<ul>"; //sets up each task as an unordered list
    for (var i=0; i<todos.length; i++){ //displays a task to the list in the order that it is inputed
        html += "<li>" + todos[i] + '<button class="remove" id="' + i + '">x</button</li>'; //also displays the task as a list and creates the button with the "x"
    };
    html += "</ul>";
    document.getElementById("todos").innerHTML = html; //displays the task as a list

    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    };
}
document.getElementById("add").addEventListener('click', add); //displays the inputed task when the "add item" button is clicked
show(); //this will keep the inputs displayed on screen

function remove(){ //removes task from array
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    todos.pop(task); //removes from array
    localStorage.setItem('todo', JSON.stringify(todos));

    show(); //how to display a removed item on screen

    return false;

}
