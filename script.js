$(document).ready(function(){
  $("#submitButton").click(function(e){
      e.preventDefault();
      var searchString = "";
      var selected = $("input[type='radio'][name='searchType']:checked");
      searchString = selected.val();
        $.ajax({type: "POST",
            url: "/formtest.php",
            data: { search_type: searchString },
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
