$(function(){ // start document ready
function popup_position(){
         var my_popup = $('.popup'), // наш попап
                 my_popup_w = my_popup.width(), // ширина попапа
                 my_popup_h = my_popup.height(), // высота попапа
                 popup_half_w = my_popup_w/2, // половина ширины попапа
                 popup_half_h = my_popup_h/2, // половина высоты попапа
                 win_w = $(window).width(), // ширина окна
                 win_h = $(window).height(); // высота окна
 
         if ( win_w > my_popup_w ) { // если ширина окна больше ширины попапа
                 my_popup.css({'margin-left':-popup_half_w, 'left': '50%'});
         }
         if ( win_w < my_popup_w ) { // если ширина окна меньше ширины попапа                  
                 my_popup.css({'margin-left': 5, 'left': '0'});
         }
         if ( win_h > my_popup_h ) { // если высота окна больше ширины попапа
                 my_popup.css({'margin-top': -popup_half_h, 'top':'50%'});
         }
         if ( win_h < my_popup_h ) { // если высота окна меньше ширины попапа
                 my_popup.css({'margin-top': 5, 'top': '0'});
         }
 }

 popup_position();

}); // end document ready