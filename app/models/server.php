<?php 

	require('connection.php');

	
	$link = mysqli_connect($server, $user, $password, $database) or die(mysql_error($link));
	$query = $_POST['query'];
	$tName = $_POST['tableName'];
	

	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
	if($result)
	{
	    $rows = mysqli_num_rows($result); // количество полученных строк

	    $columnsName = mysqli_query($link, 'SHOW COLUMNS FROM '.$tName);

  		echo '<tr>';
	    for($i = 0; $i < mysqli_num_fields($result); $i++) {
	    	$cnRow = mysqli_fetch_row($columnsName);
	    	echo '<th>'.$cnRow[0].'</th>';
	    }
		echo '</tr>';

	    for ($i = 0 ; $i < $rows ; ++$i)
	    {
	    	echo '<tr>';
	        $row = mysqli_fetch_row($result); 
	        foreach ($row as $key) {
           	echo '<td>'.$key.'</td>';
           }       
           echo '</tr>';	                  
	    }

	    // очищаем результат
	    mysqli_free_result($result);
	}



	mysqli_close($link);
 ?>