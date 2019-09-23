//
$("#findMyWeather").click(function(event) {
  event.preventDefault();
  $(".alert").hide();
  if ($("#city").val()!="") {
    $.get("scraper.php?city="+$("#city").val(),
    function( data ) {
      if (data=="") {
        $("#fail").fadeIn();
      }else {
        $("#success").html(data).fadeIn();
      }
    });
  }else{
    $("#noCity").fadeIn();
  }
});
//Setting the container div to window's height
$(.container).css("height", $(window).height());
