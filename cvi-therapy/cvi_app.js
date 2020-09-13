var input_speed = 50; // low = 50, medium = 125, high = 200
var speedModifier = 0.001*input_speed; // DO NOT CHANGE

// --------------------------------------------------------------------

$(document).ready(function(){
    animateDiv();
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - $('#anim_ball').height();
    var w = $(window).width() - $('#anim_ball').width();
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#anim_ball').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('#anim_ball').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    }); 
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
