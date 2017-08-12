$(document).ready(function(){
  $("#submitButton").click(function(e){
      e.preventDefault();
        $.ajax({type: "POST",
            url: "/formtest.php",
            data: { search_type: $document.querySelector('input[name = "searchType"]:checked').value },
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
