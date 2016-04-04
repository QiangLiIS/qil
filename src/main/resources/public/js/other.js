$(document).ready(function() {
	jQuery.ajax({
	  url: '/api/info',
	  type: 'GET',
	  dataType: 'xml',
	  complete: function(xhr, textStatus) {
	    //called when complete
	  },
	  success: function(xml) {
	  	    $(xml).find('user_profile').each(function(index, el) {
	   		var lastname = $(this).children('LastName').text();
	   		var firstname = $(this).children('FirstName').text();
	   		var ssn = $(this).children('SSN').text();
	   		var gender = $(this).children('Gender').text();
	   		var DOB= $(this).children('DOB').text();
	   		var age = $(this).children('Age').text();
	   		var phone = $(this).children('Phone').text();
	   		var city = $(this).children('City').text();
	   		var state = $(this).children('State').text();
	   		var zipcode = $(this).children('Zipcode').text();
	   		var ta = $('.result-body').find('table').find('tbody');
	   		var tr = $('<tr></tr>').appendTo(ta);
	   		$('<td></td>').text(lastname).appendTo(tr);
	   		$('<td></td>').text(firstname).appendTo(tr);
	   		$('<td></td>').text(ssn).appendTo(tr);
	   		$('<td></td>').text(gender).appendTo(tr);
	   		$('<td></td>').text(DOB).appendTo(tr);
	   		$('<td></td>').text(age).appendTo(tr);
	   		$('<td></td>').text(phone).appendTo(tr);
	   		$('<td></td>').text(city).appendTo(tr);
	   		$('<td></td>').text(state).appendTo(tr);
	   		$('<td></td>').text(zipcode).appendTo(tr);
	   })
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