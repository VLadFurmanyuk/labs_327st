$(document).ready(function() {

	$tableName = 'customer';

	$queryStr = 'SELECT * FROM ' + $tableName;
	$.ajax({
		type: 'POST',
		url: 'app/models/server.php',
		data: {tableName: $tableName,
				query: $queryStr},
		success: function(data) {			
			$('#mainTable').html(data);
		}
	});	

	$('.table-select button').click(function(e) {
		e.preventDefault();
		$('.table-select button').removeClass('active');
		$('#linkedTable').html('');

		$tableName = $(this).attr('id');
		$(this).addClass('active');
		$queryStr = 'SELECT * FROM ' + $tableName;

		$.ajax({
			type: 'POST',
			url: 'app/models/server.php',
			data: {tableName: $tableName,
					query: $queryStr},
			success: function(data) {			
				$('#mainTable').html(data);				
			}
		});
		
	});

	$('table#mainTable').on('click', 'td', function(event) {
		
		$searchID = $(this).parent().children().first().text();			
		$query = '';
		var tName = '';

		switch ($tableName) {
			case 'customer': 
				$query = "SELECT * FROM orders WHERE CustNo=" + $searchID;
				tName = 'orders';
				break;
			case 'orders':
				$query = 'SELECT * FROM items WHERE OrderNo=' + $searchID;
				tName = 'items';
				break;
			case 'items':
				$searchID = $(this).parent().children().eq(2).text();	
				$query = 'SELECT * FROM parts WHERE PartNo=' + $searchID;
				tName = 'parts';
				break;			
		}
		
		$.ajax({
			type: 'POST',
			url:'app/models/server.php',
			data: {tableName: tName,
					query: $query},
			success: function(data) {
				$('#linkedTable').html(data);
			}
		});

	});

	$('table#mainTable').on('dblclick', 'td', function(event) {
		alert('dblclick');
	});


	$('#addRecord').click(function(event) {		
		location.href="app/models/addRecord.php?tableName=" + $tableName;
	});



	$('.head-box .h1').click(function(event) {
		$('.hintArr').css('display','block');
	});

	$('.hintArr i').click(function() {
		$('.hintArr').css('display','none');
	});


});



document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});