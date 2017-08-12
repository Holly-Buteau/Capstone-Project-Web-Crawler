$(document).ready(function(){
  $("#submitButton").click(function(e){
      e.preventDefault();
        $.ajax({type: "POST",
            url: "/formtest.php",
            data: { search_type: $('input[name="searchType"]:checked').val() }
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
