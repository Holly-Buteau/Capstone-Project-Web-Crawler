$(document).ready(function(){
  $("#submitButton").click(function(e){
      e.preventDefault();
      var searchString = "";
      var selected = $("input[type='radio'][name='searchType']:checked");
      var starting = "";
      var startingValue = $("input[type='text'][name='startingURL']");
      var stopWords = "";
      var stopValue = $("input[type='text'][name='search']");
      starting = startingValue.val();
      searchString = selected.val();
      stopWords = stopValue.val();
        $.ajax({type: "POST",
            url: "/search.py",
            data: { search_type: searchString, start_url: starting, stop_words: stopWords },
            datatype:"script",
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
