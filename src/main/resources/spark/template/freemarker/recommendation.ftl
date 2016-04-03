<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title> recommended </title>
 <link rel="stylesheet" href="stylesheets/footer.css">
<link rel="stylesheet" href="stylesheets/header.css">
<link rel="stylesheet" href="stylesheets/login.css">
<link rel="stylesheet" href="stylesheets/recommended.css">

<script src="js/login.js" type="text/javascript"></script>
<script src="js/user_Ajax.js" type="text/javascript"></script>
</head>

<!-- left: select user to recommended  -->


<body id="body" >

<!-- header -->

<header class="page-header">

         <a href="index.html" ><img src="picture/logo.png" class="header-logo" alt="logo"></a>

		     <nav class="header-nav">
                 <ul class="header-ul">
                    <li class="header-li"><a href="recommendation">recommended</a></li>
                    <li class="header-li"><a href="contact.html">contact</a></li>
                    <li class="download-paper header-li"><a href="javascript:void(0);" onclick="show(event,'div2');">start</a>
                    </li>
                 </ul>
             </nav>

</header>

<!-- header end -->

<!-- login -->



	<div id="div2" class="div2" onclick="show(event,'div2');" style="display:none">

        <div class="login_sign">

			<div class="login_in_wrap_up" id="login_in_color">
			    <a class="form_title" href="#0" onClick="login_switch()">login in</a>
			</div>
			<div class="sign_up_wrap_up" id="sign_up_color">
			    <a class="form_title" href="#" onClick="sign_switch()">sign up</a>
				        <!-- <label class="form-title"> sign in </label> -->
		    </div>



	        <div class="login_in" id='login_in'>
				<form class="cd-form" >

					<p>
						<label class="form">E-mail</label>
						<input class="full-width has-padding has-border" id="loginin-email" type="email" placeholder="E-mail">
					</p>

					<p>
						<label class="form">Password</label>
						<input class="full-width has-padding has-border" id="loginin-password" type="text" placeholder="Password">
					</p>


					<p>
						<input class="full-width login" type="submit" value="Login in">
					</p>
				</form>
			</div>




	         <div class="sign_up" id='sign_up'>
				<form class="cd-form" >
					<p>
						<label class="form">E-mail</label>
						<input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail">
					</p>

					<p>
						<label class="form">Password</label>
						<input class="full-width has-padding has-border" id="signin-password" type="text" placeholder="Password">
					</p>

                     <p>
						<label class="form">Re-enter</label>
						<input class="full-width has-padding has-border"  type="text" placeholder="Password">
					</p>
					<p>
						<input class="full-width login" type="submit" value="sign up">
					</p>
				</form>
			</div>


</div>
</div>

<a href="#0" class="cd-close-form" onClick=hide()>Close</a>


<!-- login end -->


<!-- list -->

<div class="recommended-container">
        <ul class="recommended" >


<#list 0..users?size-1 as i>


            <li class="recommended-list">
			    <div class="recommended-cover-wp">

			        <img class="recommended-img" src=${images[i]} alt="recommended">


				  	<div class="mask"></div>
        <#if   i<3>
	     <h3 class="recommended-text" style="color:#FFAEB9" > ${users[i]} </h3>
       <#else>
		 			<h3 class="recommended-text"   > ${users[i]} </h3>
      </#if>

			        <a href="https://www.google.com" ></a>
		        </div>
		    </li>
</#list>






        </ul>

    </div>





<!-- list end -->

<!--footer -->
<footer>

<div >

    <div class="footer">

        <nav class="footer-nav">
            <div class="policyblock">

                <a href="policy.html" class="policy">Policy</a>
            </div>
        </nav>


		<div class="logoblock">
		    <div class="madeblock">
	             <label class="made">MADE BY AlanZY</label>
			</div>
		   </div>

		<div class="addressblock">
		<label class="address"> 135 N Bellefield Ave, Pittsburgh, PA 15260 </label>
		</div>

	</div>

</div>
</footer>

<!-- footer end -->
</body>
</html>
