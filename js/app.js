$(document).ready(function() {

  $("#goToMentor").click(function (){
        console.log("sdcsdvc");
          $('html, body').animate({scrollTop: $('#mentors').offset().top -100 }, 'slow');

  });


  $("#goToCourses").click(function (){
        console.log("sdcsdvc");
          $('html, body').animate({scrollTop: $('#courses').offset().top -100 }, 'slow');

  });

  $('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})



  });