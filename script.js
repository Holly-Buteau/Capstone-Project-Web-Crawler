$(document).ready(function(){
    $("#submitButton").click(function() {
        $.ajax({
        type: "POST",
        url: "~/example.py"        
        }).done(function(e) {
            alert("Post to example.py successful");
        });
    });
