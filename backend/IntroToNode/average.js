var average = function(vals){
    var sum = 0;
    for (var i = 0; i < vals.length; i++) {
        sum += vals[i];
    }
    var avg = sum / vals.length;
    return Math.round(avg);
}

var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(scores));
console.log(average(scores2));