'use strict';


$(".btn").click(function(){
  $(".adarsh").toggleClass(" active");
});

    var WindowsSize=function(){
        var h=$(window).height(),
            w=$(window).width();
            if(w>991){
              $("#collapseExample").removeClass("collapse");
              $(".sidebar-info").removeClass("media");
              $(".navbar").removeClass("fixed-bottom");
              $(".info-fream").addClass(" has-scrollbar ");

            }else{
              $("#collapseExample").addClass(" collapse");
              $(".sidebar-info").addClass("media");
              $(".navbar").addClass("fixed-bottom");
              $(".info-fream").removeClass("has-scrollbar");
            }

    };
   $(document).ready(WindowsSize);
   $(window).resize(WindowsSize);
