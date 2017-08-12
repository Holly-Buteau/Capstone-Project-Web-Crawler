function bindButtons(){
    var buttonData = document.getElementById('submitButton');

    myButton.addEventListener('click', function(event){                
        var req = new XMLHttpRequest();
        var searchType = getRadioValue();
        var searchUrl = document.getElementById('startingURL').value;       
        var fullSend = "/" + searchType

        req.open("GET", fullSend, true);
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("StartUrl", startingURL);

        req.addEventListener('load', function(event){
            if(req.status >= 200 && req.status < 400){               
               console.log(req.responseText);
               
          } else {              
              console.log("Error.")

          }
      });

        req.send();
        event.preventDefault(); 
    });

};
