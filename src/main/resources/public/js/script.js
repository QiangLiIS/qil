$(document).ready(function() {
	$('#submit').click(function()
  {

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

    //  var obj = $('#signin-input').serializeJSON();
      // var send = JSON.stringify(obj);
       //var send=password;


         var send= JSON.stringify({ "signup-password": password , "signup-email": email});
      $.ajax({
          contentType:'application/json',
          url:"/adduser",
          type:"POST",
          datatype: "json",
          data: send,
          success: function(data)
          {
            alert("succeeded");
            window.location.href='/user_info';
         }

        });
    }
  );
	
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