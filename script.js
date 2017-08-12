$(document).ready(function(){
  $("#submitButton").click(function(e){
      e.preventDefault();
        $.ajax({type: "POST",
            url: "/example.py",
            //data: { id: $("#button_1").val() },
            success:function(result){
              alert('ok');
            },
           error:function(result)
            {
            alert('error');
           }
       });
    });
});
