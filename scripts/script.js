$(document).ready(function(){


ScrollReveal().reveal('.grid', {delay: 200});
ScrollReveal().reveal('.intro', {delay: 200});
ScrollReveal().reveal('.n', {delay: 200});
ScrollReveal().reveal('.g', {delay: 50});



console.log('linked');

var homehover = false;

	$(window).scroll(function(){

		console.log('scrolled');

		if($(window).scrollTop() > 70){
			homehover = true;
			smaller();
		}else if($(window).scrollTop() < 70){
			homehover = false;
			larger();
		}

	});



	function smaller(){

		$('.n').css('height', '10rem');

		$('.l').css('height', '2.6rem');
		$('.l').css('width', '15rem');

		$('.title').css('height', '8rem');
		$('.title').css('width', '10rem');
		//$('.title').css('margin-left', '0.6rem');

		$('.t').css('height', '3rem');
		$('.t').css('width', '9rem');

		$('.t1').css('margin-top', '0rem');
		$('.t2').css('margin-top', '-0.5rem');

		$('.vid').css('display', 'none');
	}



	function larger(){

		$('.n').css('height', '10rem');


		$('.l').css('height', '12rem');
		$('.l').css('width', '50rem');

		$('.title').css('height', '15rem');
		$('.title').css('width', '14rem');

		$('.t').css('height', '3rem');
		$('.t').css('width', 'inherit');
		//$('.t').css('margin-left', '0.5rem');

		$('.t1').css('margin-top', '0rem');
		$('.t2').css('margin-top', '9rem');

		$('.vid').css('display', 'block');

	}





$('.sleeve-big').click(function(){
	$(this).addClass('sb');
});





var open = false;

$('.x').click(function(){

	open = false;

	$('body').css('overflow', 'auto');

	$('.sleeve-container').css('opacity', '0');
	$('.slc').css('opacity', '0');
	$('.slc').css('margin-top', '-2rem');

	setTimeout(function(){
		$('.sleeve-container').css('display', 'none');
	}, 100);

});




$('.sleeve-back').click(function(){
	if(open){

		$('body').css('overflow', 'auto');

		$('.sleeve-container').css('opacity', '0');
		$('.slc').css('opacity', '0');
		$('.slc').css('margin-top', '-2rem');

		setTimeout(function(){
			$('.sleeve-container').css('display', 'none');
		}, 100);
	}
});








var c;
var num;
var im;
$('.sleeve').click(function(){

	open = true;

	$('body').css('overflow', 'hidden');

	c = this.className.substring(8,10);
	num = (36-c);
	if(num < 10){
		num = "0"+num;
	}

	im = "url(images/scans/slv_00"+num+"_S"+c+".png)";

	$('.s').css('background-image', im);

	$('.sleeve-container').css('display', 'block');

	setTimeout(function(){
		$('.slc').css('margin-top', '5rem');
		$('.slc').css('opacity', '1');
		$('.sleeve-container').css('opacity', '1');
	}, 100);


});






















$('.l').mouseover(function(){

	if(homehover){
		$('.l').css('opacity', '0.4');
	}


}).mouseout(function(){

	$('.l').css('opacity', '1');

});



$('.l').click(function(){

	if(homehover){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
	}

});























});
