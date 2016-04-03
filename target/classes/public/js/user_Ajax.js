


$(document).ready(function(){
  $('#sign-up-input').click(function()
  {

        var email = document.getElementById("signup-email").value;
        var password = document.getElementById("signup-password").value;

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
            window.location.href='/index.html';
         }

        });
    }
  );
});




$(document).ready(function(){
  $('#login-in-input').click(function()
  {

        var email = document.getElementById("loginin-email").value;
        var password = document.getElementById("loginin-password").value;

         var send= JSON.stringify({ "loginin-password": password , "loginin-email": email});
      $.ajax({
          contentType:'application/json',
          url:"/getuser",
          type:"POST",
          datatype: "json",
          data: send,
          success: function(data)
          {
            alert("succeeded");
            window.location.href='/index.html';
         }

        });
    }
  );
});


