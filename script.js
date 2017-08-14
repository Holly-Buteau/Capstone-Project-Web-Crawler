$(document).ready(function(){
  function runPyScript(input){
      var searchString = "";
      var selected = $("input[type='radio'][name='searchType']:checked");
      var starting = "";
      var startingValue = $("input[type='text'][name='startingURL']");
      var stopWords = "";
      var stopValue = $("input[type='text'][name='search']");
      starting = startingValue.val();
      searchString = selected.val();
      stopWords = stopValue.val();
        var jqXHR = $.ajax({        
            type: "POST",
            url: "/search.py",      
            data: { search_type: searchString, start_url: starting, stop_words: stopWords }
        });
               return jqXHR.responseText;
    }
        
 $('#submitButton').click(function(){
        datatosend = 'this is my matrix';
        result = runPyScript(datatosend);
        console.log('Got back ' + result);
    });
});
