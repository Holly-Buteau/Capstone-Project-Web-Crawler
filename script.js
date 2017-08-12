$(document).ready(function(){
    $("#submitButton").click(function() {
        $.ajax({
        type: "POST",
        url: "~/example.py"        
        })}};
