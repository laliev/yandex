  function setEqualizer(selector, timeout, colWidth,timeEqualizer) {
          if (!colWidth) {
              colWidth = 1;
          }
          $(selector).css({
              verticalAlign: 'bottom',
              lineHeight: $(selector).height() + 'px'
          });
      
          // Кол-во столбиков
          var colQuantity = Math.ceil($(selector).width()/colWidth);
          var cols = new Array(colQuantity);
          for (var i = 0; i < cols.length; i++) {
              var span = $('<span/>').appendTo(selector);
              span.css({
                  verticalAlign: 'bottom',
                  display: 'inline-block',
      
                  fontSize: 0,
                  lineHeight: 0,
      
                  width: colWidth,
                  background: 'pink',
                  borderTop: '2px solid red'
              });
          }
      
          run_equalizer(selector, timeout,timeEqualizer);
      }
      
      function run_equalizer (selector, timeout, timeEqualizer) {
      	for (var i = 0; i<timeEqualizer; i++) {
      		  $(selector + ' span').each(function (i) {
              var colHeight = Math.round($(selector).height() * Math.random());
              $(this).animate({height: colHeight},timeout);
          });
      
          $(selector + ' span').animate(
              {height: $(selector).height()/2},
              timeout,
              'linear'
          );

      	};

      }
      
      window.onload = function () {
          setEqualizer('#eq_1 .equalizer', 1000, 2, 10);
          setEqualizer('#eq_2 .equalizer', 1000, 2, 10);
          setEqualizer('#eq_3 .equalizer', 1000, 2, 10);
      }