$(document).ready(function(){
  $("#submitButton").click(function(e){
      e.preventDefault();
        $.ajax({type: "POST",
            url: "/formtest.php",
            ata: { search_type: "testValue" },
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
