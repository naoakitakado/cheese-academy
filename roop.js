
$(function(){
    $('.slider__inner').each(function(){
      var sliderWidth = $(this).width();
 
      $(this).clone(true).insertBefore(this);
      $(this).clone(true).insertAfter(this);
 
      $('.slider').css('width', sliderWidth*3); // 親要素の横幅を子要素の３倍にする
    });