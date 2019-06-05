function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } else{
        return false;
    }
}

// initial attempt
/* function kebabToSnake(name){
    var newName = "";
    for (var i = 0; i < name.length; i++) {
        if (name.charAt(i) !== "-" ){
            newName += name.charAt(i);
        }
        else {
            newName += "_";
        }
    }
    return newName;
} */

// simpler method; uses regex
function kebabToSnake(name){
    var newName = name.replace(/-/g, '_');
    return newName;
}