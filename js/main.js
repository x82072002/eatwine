$(document).ready(function(e){

	//open mobile-menu
	$('.hamburger-menu').click(function(e){
		$('.mobile-menu').addClass('active');
	});

	//close mobile-menu
	$('.mobile-cancel').click(function(e){
		$('.mobile-menu').removeClass('active');
	});


	//newmenu
	$('.a-main-meal').click(function(e){
		console.log('ok');
		$('.main-meal,.salad,.dessert,.soup,.drink,.snack').removeClass('active');
		$('.main-meal').addClass('active');
	});
	$('.a-salad').click(function(e){
		console.log('ok');
		$('.main-meal,.salad,.dessert,.soup,.drink,.snack').removeClass('active');
		$('.salad').addClass('active');
	});
	$('.a-main-meal').click(function(e){
		console.log('ok');
		$('.main-meal,.salad,.dessert,.soup,.drink,.snack').removeClass('active');
		$('.main-meal').addClass('active');
	});
	$('.a-dessert').click(function(e){
		console.log('ok');
		$('.main-meal,.salad,.dessert,.soup,.drink,.snack').removeClass('active');
		$('.dessert').addClass('active');
	});
	$('.a-soup').click(function(e){
		console.log('ok');
		$('.main-meal,.salad,.dessert,.soup,.drink,.snack').removeClass('active');
		$('.soup').addClass('active');
	});
	$('.a-drink').click(function(e){
		console.log('ok');
		$('.main-meal,.salad,.dessert,.soup,.drink,.snack').removeClass('active');
		$('.drink').addClass('active');
	});
	$('.a-snack').click(function(e){
		console.log('ok');
		$('.main-meal,.salad,.dessert,.soup,.drink,.snack').removeClass('active');
		$('.snack').addClass('active');
	});


	//reservation
	$('.datepicker').pickadate();

	$('.timepicker').pickatime({
		min: [10,0],
 		max: [21,0]
	});

});