<html>
    <head>
        <title>PHP Database Connect</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Allerta" />
    </head>
    <body>
        <?php
         header('Content-type: application/json; charset=utf-8');
       $db_connection = pg_connect("host = firstdbinstance.cxvcjdies8vv.us-east-2.rds.amazonaws.com dbname = beginning_database user = copety  password = eridanus port = 5432");
       echo "Database opened."
       $result = pg_query($db_connection, "SELECT * FROM webholder");
       $data = array();
    while ($row = pg_fetch_array($result))
    { 
      $data[] = $row;
    } 
    echo json_encode($data);
    pg_close($db_connection);
        
        ?>
    </body>
</html>
