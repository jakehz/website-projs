function printList(myList) {
    console.log("********");
    myList.forEach(function(elem, i){
        console.log(i + ": " + elem);
    });
    console.log("********");
}

var todos = [];

window.setTimeout(function() {
    var response = prompt("What would you like to do?");

    while (response !== "quit") {
        if (response === "new") {
            todos.push(prompt("Input new todo:"));
        } 
        if (response === "list") {
            printList(todos);
        }
        if (response === "delete"){
            target = Number(prompt("Which index would you like to delete?")); 
            // remove one argument at specified target index
            todos.splice(target, 1);
        }
        response = prompt("What would you like to do?");
    }

}, 500);