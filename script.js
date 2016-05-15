$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.coffee-pics').offset().top - ($(window).height() / 1.2)) {

    $('.coffee-pics figure').each(function(i){

    setTimeout(function(){
      $('.coffee-pics figure').eq(i).addClass('is-showing');
    }, 150 * (i+1));
    });
  }
});

$(document).ready(function(){

    setBindings();

});

function setBindings() {

  $("nav a").click(function(e){
    e.preventDefault();
      var sectionID = e.currentTarget.id + "Section";

      $("html body").animate({
        scrollTop: $("#" + sectionID).offset().top / 1.1
      }, 1000);

  });
}
