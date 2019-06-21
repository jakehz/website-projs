

$("input").keypress(function(event){
    // if event has keypress enter (13)
    if (event.which === 13) {
        $("ul").append("<li><span>X</span> " + $("input").val() + "</li>");
        $("input").val("");
    }
})

$("ul").on("click", "span", function() {
    // remove parent element (li in this case)
    $(this).parent().remove();
})

$("ul").on("click", "li", function() {
    $(this).toggleClass("selected");
})