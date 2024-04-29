var posX = 0;
var posY = 0;
$(document).ready(() => {
   var field = $(".field");
   var figures = [];
   
   var min = 0;
   var max = 250;
   var colors = ["blue", "green", "purple", "yellow"];
   $(".start").click(() => {
        if (figures.length > 0){
            figures.each(function(){
                $(this).remove();
            })
        }
        console.log($("#rangeObjects").val());
        for (let i = 0; i < $("#rangeObjects").val(); ++i){
            $( ".field" ).prepend($(`<div class="figure"></div>`));
        }
        figures = $(".figure");
        figures.each(function(){
            $(this).css({top: Math.floor(Math.random() * (max - min + 0)) + min + min, left: Math.floor(Math.random() * (max - min + 0)) + min});
            $(this).css({'background-color': colors[Math.floor(Math.random()*colors.length)]});
            console.log(colors[Math.floor(Math.random()*colors.length)]);

    });
    var interval = window.setInterval(moveRandom, 300);
   });
    
   function moveRandom(){
    figures.each(function(){
        var figure = $(this);
        if (posY < field.height() - figure.height() && posX < field.width() - figure.width()){
        posX = Math.floor(Math.random() * (max - min + 0)) + min;
        posY = Math.floor(Math.random() * (max - min + 0)) + min;
      }
      
      figure.animate({left: posX + "px", top: posY + "px"}, {
          step: function (){
              if(overlap($(this), $(".position1"))){
                $(this).remove();
               } 
          }
      });
      
    });
  }
  function overlap(class1, class2){
      var obj1 = class1,
      obj2 = class2,
      offset1 = obj1.offset(),
      offset2 = obj2.offset(),
      top1 = offset1.top,
      top2 = offset2.top,
      left1 = offset1.left,
      left2 = offset2.left,
      width1 = obj1.width(),
      width2 = obj2.width(),
      height1 = obj1.height(),
      height2 = obj2.height();
       var leftTop = left2 > left1 && left2 < left1 + width1 
               && top2 > top1 && top2 < top1 + height1,
               rightTop = left2 + width2 > left1 && left2 + width2 < left1 + width1
               && top2 > top1 && top2 < top1 + height1,
               leftBottom = left2 > left1 && left2 < left1 + width1 
               && top2 + height2 > top1 && top2 + height2 < top1 + height1,
               rightBottom = left2 + width2 > left1 && left2 + width2 < left1 + width1
               && top2 + height2 > top1 && top2 + height2 < top1 + height1;
       return leftTop || rightTop || leftBottom || rightBottom;
  }
});



