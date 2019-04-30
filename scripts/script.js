$(document).ready(function(){

console.log('linked');

	$(window).scroll(function(){

		console.log('scrolled');

		if($(window).scrollTop() > 100){
			smaller();
		}else if($(window).scrollTop() < 100){
			larger();
		}

	});



	function smaller(){
		$('.l').css('height', '2.6rem');
		$('.l').css('width', '25%');

		$('.title').css('height', '8rem');
		$('.title').css('width', '10rem');

		$('.t').css('height', '3rem');
		$('.t').css('width', '9rem');
		$('.t').css('margin-left', '0.5rem');

		$('.t1').css('margin-top', '0rem');
		$('.t2').css('margin-top', '-0.5rem');

		$('.vid').css('display', 'none');

		console.log('smaller');
	}



	function larger(){
		$('.l').css('height', '12rem');
		$('.l').css('width', '50rem');

		$('.title').css('height', '15rem');
		$('.title').css('width', '14rem');

		$('.t').css('height', '3rem');
		$('.t').css('width', 'inherit');
		$('.t').css('margin-left', '0.5rem');

		$('.t1').css('margin-top', '0rem');
		$('.t2').css('margin-top', '9rem');

		$('.vid').css('display', 'block');

	}





$('.sleeve-big').click(function(){

console.log('clicked');
$(this).addClass('sb');


});












var open = false;




$('.x').click(function(){

open = false;

$('.sleeve-container').css('opacity', '0');
$('.slc').css('opacity', '0');
$('.slc').css('margin-top', '-10rem');

setTimeout(function(){
	$('.sleeve-container').css('display', 'none');
}, 100);

});



var c;
var num;
var im;
$('.sleeve').click(function(){



open = true;


c = this.className.substring(8,10);
console.log(c);
num = (36-c);
if(num < 10){
	num = "0"+num;
}

im = "url(images/scans/slv_00"+num+"_S"+c+".png)";
console.log(im);


$('.s').css('background-image', im);

console.log(c);


$('.sleeve-container').css('display', 'block');

setTimeout(function(){
	$('.slc').css('margin-top', '5rem');
	$('.slc').css('opacity', '1');
	$('.sleeve-container').css('opacity', '1');
}, 100);


});



$('.sleeve-back').click(function(){

	if(open){

		$('.sleeve-container').css('opacity', '0');
		$('.slc').css('opacity', '0');
		$('.slc').css('margin-top', '-10rem');

		setTimeout(function(){
			$('.sleeve-container').css('display', 'none');
		}, 100);
	}

});













































});
