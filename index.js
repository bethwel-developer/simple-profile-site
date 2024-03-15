$(".services-button").click(function(){
  $(".nav-content").fadeOut();
  $(".foot").fadeOut();
  $("#services ").fadeIn(1500);
});


$(".contact-button").click(function(){
  $("#services").fadeOut();
  $(".nav-content").fadeOut();
  $(".foot").fadeIn(1500);
});



$(".navbar-brand").click(function(){
  $(".nav-content").fadeIn(1500);
  $(".foot").fadeIn();
  $("#services").fadeIn();
});



  $(".dropdown-industries").mouseenter(function(){
    $(".dropdown-for-industries").fadeIn(800); 
  });

  $(".dropdown-for-industries, .dropdown-industries").mouseleave(function(){
    $(".dropdown-for-industries").hide(); 
  });


  $(".dropdown-company").mouseenter(function(){
    $(".dropdown-for-company").fadeIn(800); 
  });

  $(".dropdown-for-company, .dropdown-company").mouseleave(function(){
    $(".dropdown-for-company").hide(); 
  });
