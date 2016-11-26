// JavaScript Document
function slider(i){
	$("#mainbody #slidernumber").find('.activeslidernumber').removeClass('activeslidernumber');
	$("#mainbody #slidernumber").find('.'+i+'').addClass('activeslidernumber');
	$("#mainbody #slider  #pictures").find('.'+i+'').css('display','block');
	$("#mainbody #slider  #pictures").find('.'+i+'').animate({'opacity':'1'},2000,function(){
	$("#mainbody #slider  #pictures").find('.'+i+'').css('display','none');	
	$("#mainbody #slider  #pictures").find('.'+i+'').animate({'opacity':'0'});
	$("#mainbody #slider  #pictures").find('.'+(i+1)+'').css('display','block');
	$("#mainbody #slidernumber").find('.'+i+'').removeClass('activeslidernumber');	
	$("#mainbody #slider  #pictures").find('.'+(i+1)+'').animate({'opacity':'1'},2000,function(){
		slider(i+1);
		});
	 
	
	
	});
	
//<!--var x = document.getElementsByClassName("1");
//    for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//	  x[i].style.opacity = "0";
//    }
//    slideIndex++;
//    if (slideIndex > x.length) {slideIndex = 1}
//    x[slideIndex-1].style.display = "block";
//    setTimeout(slider, 2000); // Change image every 2 seconds-->
	
}