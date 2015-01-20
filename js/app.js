$(document).ready(function(){

  gradient();
  getContent();
  initHiddenStuff();

  $("#left").click(function () { 
    var leftPos = $('#viewContainer').scrollLeft();
    $("#viewContainer").animate({scrollLeft: leftPos - 500}, 800);
  });

  $("#right").click(function () { 
    var leftPos = $('#viewContainer').scrollLeft();
    $("#viewContainer").animate({scrollLeft: leftPos + 500}, 800);
  });

  $("#xxx").click(function () { 
    $("#viewContainer").animate({scrollLeft: 0}, 800);
  });

});

function getContent(){

  $.getJSON( "json/content.json", function( data ) {
    //console.log(data);
    $.each( data.contents, function( index, content ) {
      console.log(content);
      content = '<a href="'+content.link+'"><div class="content" id="content'+content.id+'" style="background-image: url(img/contents/'+content.img+')"><h1>'+content.title+'</h1></div></a>'
      $('#viewContainer').prepend(content);
    });
  });

};

function gradient(){

    // Gradient Thingy

        var colors = new Array(
          [9,12,155],
          [61,82,213],
          [180,197,228],
          [251,255,241]);
          // [254,95,85]);

        var step = 0;
        //color table indices for: 
        // current color left
        // next color left
        // current color right
        // next color right
        var colorIndices = [0,1,2,3];

        //transition speed
        var gradientSpeed = 0.002;

        function updateGradient()
        {
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

         $('#mainWrap').css({
           borderImage: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+")) 14% stretch"}).css({
            borderImage: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%) 14% stretch"});

          step += gradientSpeed;
          if ( step >= 1 )
          {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
            
            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            
          }
        }

        setInterval(updateGradient,10);

};

function initHiddenStuff(){
  $("#spotify").hide();
  $("#soundcloud").hide();

  $("#").click(function() {
    $("#spotify").fadeIn();
    $("#soundcloud").fadeIn();
    animateDiv();
    animateDiv2();
  });
}

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 200;
    var w = $(window).width() - 200;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
};

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#spotify').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#spotify').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });    
};

function animateDiv2(){
    var newq = makeNewPosition();
    var oldq = $('#soundcloud').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#soundcloud').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv2();        
    });    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.7;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};