
  $(document).ready(function() {
  /* Efecto splash*/
  $('#mainview').hide();
  setTimeout(function() {
    $('#splashview').fadeOut(500);
    $('#mainview').show();
  }, 1000);

  /* Accediendo a caracteres ingresados por el usuario*/
  $("#search").keyup(function() {
    var category = $(this).val().toLowerCase();
    /*console.log (category);*/
    });

});
