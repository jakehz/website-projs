

$("input[type='text']").keypress(function(event){
    // if event has keypress enter (13)
    if (event.which === 13) {
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + $("input").val() + "</li>");
        $("input").val("");
    }
});

$("ul").on("click", "span", function(event) {
    // remove parent element (li in this case)
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        // $(this) now refers to the PARENT element since we called the parent function. 
        $(this).remove();
    });
    
});

$("ul").on("click", "li", function() {
    $(this).toggleClass("selected");
});

$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
});