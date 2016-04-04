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
	  	$result1.each(function(index, el) {
	  		var ta = $('.result-body').find('table').find('tbody');
	   		var tr = $('<tr></tr>').appendTo(ta);
	   		$('<td></td>').text(el.header_username).appendTo(tr);
	  		$('<td></td>').text(el.title1).appendTo(tr);
	  		$('<td></td>').text(el.content1).appendTo(tr);
	  		$('<td></td>').text(el.title2).appendTo(tr);
	  		$('<td></td>').text(el.content2).appendTo(tr);
	  		$('<td></td>').text(el.title3).appendTo(tr);
	  		$('<td></td>').text(el.content3).appendTo(tr);	
	  		$('<td></td>').text(el.title1).appendTo(tr);
	  		$('<td></td>').text(el.title1).appendTo(tr);
	  		$('<td></td>').text(el.title1).appendTo(tr);
	  	});
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