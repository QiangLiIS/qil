$(document).ready(function() {


	jQuery.ajax({
	  url: '/api/timeline_info',
	  type: 'GET',
	  dataType: 'json',
	  complete: function(xhr, textStatus) {
	    //called when complete
	  },
	  success: function(data, textStatus, xhr) {
	  	var result1=data;
	  	for (var i = 0; i < result1.length; i++) {
	  		
	  		var ta = $('.result-body').find('table').find('tbody');
	   		var tr = $('<tr></tr>').appendTo(ta);
	   		$('<td></td>').text(result1[i].LastName).appendTo(tr);
	  		$('<td></td>').text(result1[i].FirstName).appendTo(tr);
	  		$('<td></td>').text(result1[i].SSN).appendTo(tr);
	  		$('<td></td>').text(result1[i].Gender).appendTo(tr);
	  		$('<td></td>').text(result1[i].DOB).appendTo(tr);
	  		$('<td></td>').text(result1[i].Age).appendTo(tr);
	  		$('<td></td>').text(result1[i].Phone).appendTo(tr);	
	  		$('<td></td>').text(result1[i].City).appendTo(tr);
	  		$('<td></td>').text(result1[i].State).appendTo(tr);
	  		$('<td></td>').text(result1[i].ZipCode).appendTo(tr);
	  	}
	  		
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    alert("error");
	  }
	});
	
	$('.searchoption').bind('click', function(event) {
		$('.searchoption').find('ul').animate({
			height: 120},
			200);
		event.stopPropagation(); 
	});

	$(document).bind('click', function(event) {
		$('.searchoption').find('ul').animate({
			height: 0},
			200);
	});

	$('.searchoption').find('li').bind('click', function(event) {
		$('.searchoption').find('ul').animate({
			height: 0},
			200);
		$('.searchoption').find('label').text($(this).text());
		event.stopPropagation(); 
	});

	$('.strecth').bind('click', function(event) {
		$('nav').animate({
			width: 250},
			200);
		$('nav ul').animate({
			width: 250},
			200);
		$('nav ul li').animate({
			width: 248},
			200);
		$('.strecth').animate({
			left: 220},
			200);
	});
});