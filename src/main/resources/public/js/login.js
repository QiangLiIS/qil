


function sign_switch(){  

// hide login in 
// show sign up
	 document.getElementById('login_in').className = 'hide_login';
	 document.getElementById('sign_up').className = 'sign_up_appeaer';
	  document.getElementById('login_in_color').className = 'hide_login_color';
	  document.getElementById('sign_up_color').className = 'sign_appear_color';
	 
}  

function login_switch(){  

// hide login in 
// show sign up
	 document.getElementById('login_in').className = 'login_in';
	 document.getElementById('sign_up').className = 'sign_up';
	  document.getElementById('login_in_color').className = 'login_in_wrap_up';
	  document.getElementById('sign_up_color').className = 'sign_up_wrap_up';
	 
}  

var url = '#'; 
function show(evt,div2){ 

if (evt.stopPropagation)    evt.stopPropagation();
 if (evt.cancelBubble!==null) evt.cancelBubble = true;
document.getElementById('div2').style.display = "";

} 
function hide(div2){ 
document.getElementById('div2').style.display = "none"; 
window.location = url; 
} 
document.onclick=function()
{hide('div2');
};