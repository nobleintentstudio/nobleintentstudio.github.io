function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){

  $('.hero--video').click(function(){
    if($(this).hasClass('paused')) {
      $(this).removeClass('paused');
      $('.hero--home').addClass('playing');
      $('.hero--video')[0].play();
    } else {
      $(this).addClass('paused');
      $('.hero--home').removeClass('playing');
      $('.hero--video')[0].pause();
    }
    
  });

  if($(window).width() > 600 && $('video').length ){
    $(this).removeClass('paused');
    $('.hero--home').addClass('playing');
    $('.hero--video')[0].play();
  }

  $('form').submit(function(e){
    var $form = $(this);
    e.preventDefault();
    var destination = $(this).attr('action');
    var data = {};
    $(this).find('input').each(function(){
      var val = $(this).val();
      var key = $(this).attr('name');
      data[key] = val;
    });

    $(this).find('textarea').each(function(){
      var val = $(this).val();
      var key = $(this).attr('name');
      data[key] = val;
    });

    data.page = document.location.href;

    function greatSuccess() {
      $form.html($form.data('thanks'));
    }

    $.post(destination, data).then(function(response){
      greatSuccess();
    }, function() {
      console.log('error');
    });
  });

  $lighters = $('.square');

  if($lighters.length) {
    var timer_animation = 150;
    var timer_class= 900;

    var counter = 0;
    $('.square').each(function(){
      $(this).attr('data-shimmer', counter);
      counter++;
    });

    
    function lightemup(count){
      var nextSeeds = [];
      if(count>0 && count !=12 && count !=24) {
        nextSeeds.push(count - 1);
      }
      if(count !=11 && count !=23 && count !=35) {
        nextSeeds.push(count + 1);
      }
      if(count<=23) {
        nextSeeds.push(count + 12);
      }
      if(count>=12) {
        nextSeeds.push(count - 12);
      }
      nextSeeds.push(count);
      //console.log(nextSeeds);
      
      for(var i=0;i<nextSeeds.length;i++) {
        $light =$($lighters[nextSeeds[i]]);
        $light.addClass('lit');
        (function($light){
          window.setTimeout(function(){
            $light.removeClass('lit');
          }, timer_class);
        })($light);
      }
    }

    function startemup(){
      seed = getRandomInt(0, $lighters.length-1);
      seedPosition = seed;
      lightemup(seed);
    }

    $('.square').hover(function(){
      //console.log('hovered');
      var count = $(this).attr('data-shimmer');
      lightemup(count);
    });

    //window.setInterval(startemup, timer_animation);

  }

  var adjectives = [ 'memorable', 'effective', 'inspiring', 'persuasive', 'meaningful', 'innovative'];

  var $adj = $('.js-adjective');
  var counter = 0;

  var changeHomepageAdj = function() {
    window.setTimeout(function(){
      counter++;
      var nextText = adjectives[counter];
      if(!nextText) {
        counter = 0;
        nextText = adjectives[counter];
      }
      var countDown = true;
      var countUp = 0;

      var type = window.setInterval(function() {
        var currentText = $adj.text();
        if(currentText && countDown) {
          var newText = currentText.slice(0,currentText.length-1);
          if(!newText) {
            newText = '&nbsp;';
            countDown = false;
          }
          $adj.html(newText);
        } else {
          countUp++;
          $adj.text(nextText.slice(0,countUp));
          if(countUp == nextText.length) {
            window.clearInterval(type);
            changeHomepageAdj();
          }
        }
       
      }, 100);

    }, 3000);

  }

  if($adj.length) {
    changeHomepageAdj();
  }

  $('.menu-toggle').click(function(){
    var $menu = $('.navigation-menu');
    $menu.toggleClass('open');
  });
  
});