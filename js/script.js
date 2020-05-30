$(document).ready(function(){
	$('.burger-menu-wrapper, .nav__info').click (function(event)
	{
		$('.nav, .nav-mobile, .nav-relative, .burger-menu, .burger-menu-wrapper, .promo--margin').toggleClass('active');
	});
});