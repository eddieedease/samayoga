$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').on('click', function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-to-top').tooltip('show');

  var header = $(".header");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100 && $(this).width() > 769) {
      header.addClass("navbar-fixed-top");
    } else {
      header.removeClass('navbar-fixed-top');
    }
  });

  var $searchlink = $('#searchlink');

  $searchlink.on('click', function(e){
    var target = e ? e.target : window.event.srcElement;

    if($(target).attr('id') == 'searchlink' || target.nodeName.toLowerCase() === 'i') {
      if($searchlink.hasClass('open')) {
        $searchlink.removeClass('open');
      } else {
        $searchlink.addClass('open');
      }
    }
  });
    
});

var $ = jQuery.noConflict();