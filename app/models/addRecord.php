<?php 
	require('connection.php');

	$link = mysqli_connect($server, $user, $password, $database) or die(mysql_error($link));
	
	$query = "SELECT * FROM ".$_GET['tableName'];

	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
	if($result)
	{
	    $rows = mysqli_num_rows($result); // количество полученных строк

	    $columnsName = mysqli_query($link, 'SHOW COLUMNS FROM '.$_GET['tableName']) or die("Ошибка " . mysqli_error($link));
		if($columnsName) {
			for($i = 0; $i < mysqli_num_fields($result); $i++) {
		    	$cnRow = mysqli_fetch_row($columnsName);
		    	echo ''.$cnRow[0].' | ';
		    }			
			mysqli_free_result($columnsName);
		}    
	    // очищаем результат
	    mysqli_free_result($result);
	}



	mysqli_close($link);

?>

<label><span>dsada</span><input type="text"></label>