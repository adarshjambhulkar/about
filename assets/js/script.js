'use strict';


// https://colorhunt.co/palette/1b262c0f4c753282b8bbe1fa
// https://colorhunt.co/palette/14285027496d0c7b9300a8cc
// https://colorhunt.co/palette/1a1a2e16213e0f3460e94560
// https://colorhunt.co/palette/1a1a2e16213e0f3460e94560












$(".btn").click(function(){
  $(".adarsh").toggleClass(" active");
});

    var WindowsSize=function(){
        var h=$(window).height(),
            w=$(window).width();
            if(w>991){
              $("#collapseExample").removeClass("collapse");
              $(".sidebar-info").removeClass("media");
              $(".navbar").removeClass("fixed-bottom ");


            }else{
              $("#collapseExample").addClass("collapse");
              $(".sidebar-info").addClass("media");
              $(".navbar").addClass("fixed-bottom")
            }

    };
   $(document).ready(WindowsSize);
   $(window).resize(WindowsSize);
