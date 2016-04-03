
var caution=false;
function setCookie(name,value,expires,path,domain,secure)
{
 var curCookie=name+"="+escape(value) +
 ((expires)?";expires="+expires.toGMTString() : "") +
 ((path)?"; path=" + path : "") +
 ((domain)? "; domain=" + domain : "") +
 ((secure)?";secure" : "");
 if(!caution||(name + "=" + escape(value)).length <= 4000)
 {
 document.cookie = curCookie;
 }
 else if(confirm("Cookie exceeds 4KB and will be cut!"))
 {
 document.cookie = curCookie;
 }
}

function getCookie(name)
{
 var prefix = name + "=";
 var cookieStartIndex = document.cookie.indexOf(prefix);
 if (cookieStartIndex == -1)
 {
 return null;
 }
 var cookieEndIndex=document.cookie.indexOf(";",cookieStartIndex+prefix.length);
 if(cookieEndIndex == -1)
 {
 cookieEndIndex = document.cookie.length;
 }
 return unescape(document.cookie.substring(cookieStartIndex+prefix.length,cookieEndIndex));
}


function deleteCookie(name, path, domain)
{
 if(getCookie(name))
 {
 document.cookie = name + "=" +
 ((path) ? "; path=" + path : "") +
 ((domain) ? "; domain=" + domain : "") +
 "; expires=Thu, 01-Jan-70 00:00:01 GMT";
 }
}

function fixDate(date)
{
 var base=new Date(0);
 var skew=base.getTime();
 if(skew>0)
 {
 date.setTime(date.getTime()-skew);
 }
}
var now=new Date();
fixDate(now);
now.setTime(now.getTime()+365 * 24 * 60 * 60 * 1000);
var visits = getCookie("counter");
if(!visits)
{
 visits=1;
}
else
{
 visits=parseInt(visits)+1;
}
setCookie("counter", visits, now);


function start()
{
  traffic();
  show_username();
}

window.onload=start;
function traffic()
{
  //var traffic=document.getElementById("traffic");
   document.getElementById("show_traffic").innerHTML=visits;
}


function show_username()
{
                try{

              xmlDoc= new ActiveXObject("Microsoft.XMLDOM");
          }catch(e){

              try{

                  xmlDoc= document.implementation.createDocument("","",null);
              }catch(e1){

                  alert(e1.message);
                  return;
              }
          }
          xmlDoc.async = false;
          xmlDoc.load("xml/user.xml");

          document.getElementById("header_username").innerHTML=xmlDoc.getElementsByTagName("name_header")[0].childNodes[0].nodeValue;
        //  var url=xmlDoc.getElementsByTagName("image")[0].childNodes[0].nodeValue;
        //  var img=document.getElementById("image1");
        //  img.setAttribute('src',url);
          //  document.getElementById("from").innerHTML=xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
        //  document.getElementById("message").innerHTML=xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
          document.getElementById("content_username").innerHTML=xmlDoc.getElementsByTagName("user_name")[0].getAttribute("name");
          document.getElementById("content_n_timeline").innerHTML=xmlDoc.getElementsByTagName("num_timelines")[0].getAttribute("n_timelines");
          document.getElementById("description").innerHTML=xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
          document.getElementById("tag1").innerHTML=xmlDoc.getElementsByTagName("tag1")[0].childNodes[0].nodeValue;
          document.getElementById("tag1_number1").innerHTML=xmlDoc.getElementsByTagName("num_events1")[0].childNodes[0].nodeValue;
          document.getElementById("tag2").innerHTML=xmlDoc.getElementsByTagName("tag2")[0].childNodes[0].nodeValue;
          document.getElementById("tag2_number2").innerHTML=xmlDoc.getElementsByTagName("num_events2")[0].childNodes[0].nodeValue;
          var user_image=document.getElementById("user_image");
          user_image.setAttribute('src',xmlDoc.getElementsByTagName("user_image")[0].childNodes[0].nodeValue);
      }



