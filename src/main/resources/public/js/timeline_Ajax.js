
$(function()
{
  $.ajax
  (
    {
      url:"/api/timeline_info",
      success: function(result)
      {

        var result1=JSON.parse(result);
        $("#h1").html(result1.title1);
        $("#p1").html(result1.content1);
        var image1=document.getElementById("image1");
        image1.setAttribute("style",result1.image1);
      //  $("#image1").setAttribute("style",(result1.image1));
        $("#p1").html(result1.content1);
        $("#h2").html(result1.title2);
        $("#p2").html(result1.content2);
        $("#h3").html(result1.title3);
        $("#p3").html(result1.content3);
        var image2=document.getElementById("image2");
        image2.setAttribute("style",result1.image2);
        var image3=document.getElementById("image3");
        image3.setAttribute("style",result1.image3);

        $("#header_username").html(result1.header_username);


      }
    }
  );
});


