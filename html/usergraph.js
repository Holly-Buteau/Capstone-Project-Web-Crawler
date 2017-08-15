$(document).ready(function(){
   // Get user cookie and updat field with value
   var userId = getUserCookie();
   // Set the userId in the UI if id=userid
   $("#userid").html(userId);
   var searchCode = location.search.split('id=')[1];
   // Perform GET for user's crawls
   $.ajax({type: "GET",
            url: "/cgi-bin/web-crawler/usergraphs.py",
            data: { user_id: userId,search_code: searchCode},
            dataType:"text",
            success:function(data){
		// DUMP JSON into HTML this should be used as the D3 data source
	      $("#graphdata").html(data);
            },
           error:function(result)
            {
             console.log(result);
           }
       });

    
});
