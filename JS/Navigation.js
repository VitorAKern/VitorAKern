$(document).ready(function($) {
    $('li').click(function() {
      $(this).addClass('active').siblings('li').removeClass('active');
      if($('#logo').hasClass('active')) { $('#logo').removeClass('active'); }
      $('section:nth-of-type('+$(this).data('rel')+')').stop().fadeIn(400, 'linear').siblings('section').stop().fadeOut(400, 'linear'); 
    });
  })(jQuery);