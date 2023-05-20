$(document).ready(function() {
   $( ".needhint" ).hover(function(e){ // задаем функцию при наведении курсора на элемент  
      $(".hint").css( "display", "block" ); 
      $(".hint").css( "top", ($(this).offset().top + $(this).height() + 5) + "px" ); 
      $(".hint").css( "left", ($(this).offset().left + $(this).width() + 5) + "px" ); 
      $('.hint').html( $('ul.secondList li[name="' + $(this).attr('name') + '"').html() );

      $(".hiddenhintname").html( $(this).attr('name') );
    }, function(e){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
      $( ".hint" ).css( "display", "none" );
      $(".hiddenhintname").html("");
    });

    $(document).keypress(function(e) {
        if (e.which == 13)
        {
          if ( $(".hiddenhintname").html() != "" ) 
          {
            $('.hintArr').css('display', 'block');
            $('ul.secondList li').removeClass('focused');
            $('ul.secondList li[name="' + $(".hiddenhintname").html() + '"').addClass('focused').parent().addClass('open');
          }
          else 
          {
            $('.hintArr').css('display', 'block');
            $('ul.secondList li').removeClass('focused');
          }
        }
      }); 


    $('ul.mainList li').click(function() {
      var $secList = $(this).children();
      if( !$secList.hasClass('open') ) {
        $secList.addClass('open');
      } else {
        $secList.removeClass('open');
      }   
    });
});
