$(document).ready(function() {
	var tool={
		modify_css:function(object,attr,value){ //设置css的封装函数 （object：对象，attr：要改变的css属性，value：改变的值）
			object.css(attr,value);
		},
		modify_animate:function(object,attr,value,duration,fun){ //设置左右欢动效果的封装函数 （object：对象，attr：要改变的css属性，value：改变的值）
				object.animate({height : value},duration,function(){fun});
			},
		modify_event:function(object,event,fun){ //设置事件的封装函数 （object：对象，event：事件名称，fun：触发的函数）
				object.bind(event,fun);
			}
	}

	jQuery.ajax({
	  url: '/api/timeline_info',
	  type: 'GET',
	  dataType: 'json',
	  complete: function(xhr, textStatus) {
	    //called when complete
	  },
	  success: function(data, textStatus, xhr) {
	  	var result1=JSON.parse(data);
	   var ta = $('.result-body').find('table').find('tbody');
	   		var tr = $('<tr></tr>').appendTo(ta);
	   		$('<td></td>').text(result1.header_username).appendTo(tr);
	  		$('<td></td>').text(result1.title1).appendTo(tr);
	  		$('<td></td>').text(result1.content1).appendTo(tr);
	  		$('<td></td>').text(result1.title2).appendTo(tr);
	  		$('<td></td>').text(result1.content2).appendTo(tr);
	  		$('<td></td>').text(result1.title3).appendTo(tr);
	  		$('<td></td>').text(result1.content3).appendTo(tr);	
	  		$('<td></td>').text(result1.title1).appendTo(tr);
	  		$('<td></td>').text(result1.title1).appendTo(tr);
	  		$('<td></td>').text(result1.title1).appendTo(tr);
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    alert("error");
	  }
	});
	
	$('.searchoption').bind('click', function(event) {
		$('.searchoption').find('ul').animate({
			height: 120},
			200)
		event.stopPropagation(); 
	});

	$(document).bind('click', function(event) {
		$('.searchoption').find('ul').animate({
			height: 0},
			200)
	});

	$('.searchoption').find('li').bind('click', function(event) {
		$('.searchoption').find('ul').animate({
			height: 0},
			200)
		$('.searchoption').find('label').text($(this).text());
		event.stopPropagation(); 
	});

	$('.strecth').bind('click', function(event) {
		$('nav').animate({
			width: 250},
			200)
		$('nav ul').animate({
			width: 250},
			200)
		$('nav ul li').animate({
			width: 248},
			200)
		$('.strecth').animate({
			left: 220},
			200)
	});
});