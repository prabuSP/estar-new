<?php $imgurl = file_create_url(path_to_theme().'/images/login_logo.png'); ?>
<div class="user_login_page">
	<ul class="w3lsg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<div class="login_content_Section">
		<div class="login_img_section">
			<img src='<?php print $imgurl; ?>' class="white_img">
		</div>
 		<ul>
		  	<li>Welcome to Estar systems</li>
		  	<li>For already existing client please log in below</li>
		 	<li>If you are a new customer please come to our new client web site here</li>
	 	</ul>
 	</div>
	 <div class="login_info_Section">
	 	<?php print drupal_render_children($form) ?>
	 </div>
 </div>
