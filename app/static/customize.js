var speedModifier = 0.125;

$(document).ready(function(){
    animateDiv();
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - sliderSize.value;
    var w = $(window).width() - sliderSize.value;
    
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

var sliderSpeed = document.getElementById("rangeSpeed");
var sliderSize = document.getElementById('rangeSize');
var output = document.getElementById("anim_ball");

$("#full").spectrum({
    color: "#FF5722",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function() {
    },
    hide: function () {
    
    },
    change: function(color) {
    var output = document.getElementById("anim_ball");
    output.style.setProperty("background-color", color.toHexString());
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

$("#full2").spectrum({
    color: "#FFFFFF",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function() {
    },
    hide: function () {
    
    },
    change: function(color) {
    
    document.body.style.setProperty("background-color", color.toHexString());
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});

// Update the current slider SPEED value (each time you drag the slider handle)
sliderSpeed.oninput = function() {
    speedModifier = 0.001*sliderSpeed.value;
    // console.log(sliderSpeed.value);
    document.getElementById("speed_value").innerHTML = sliderSpeed.value;
}

// Update the current slider SIZE value (each time you drag the slider handle)
sliderSize.oninput = function(){
    document.getElementById("anim_ball").style.height = sliderSize.value.toString().concat("px");
    document.getElementById("anim_ball").style.width = sliderSize.value.toString().concat("px");
    document.getElementById("size_value").innerHTML = sliderSize.value;
}

// select a shape from array ---------------------------------
$(document).on("click", "#figures img", function(){
    // console.log($(this).css("border-left-color").toString()); // rgba(0, 0, 0, 0)
    // console.log($(this).css("border-left-color").toString()); // rgb(221, 160, 221)
    var currentColor = $(this).css("border-left-color").toString();
    var location = this.src;
    location_picked = location; // for linking to cvi.html

    // toggling as active or inactive
    if (currentColor == "rgba(0, 0, 0, 0)") {
        $(this).css("border","5px solid plum"); // rgb(221, 160, 221)
        document.getElementById("tracking-toggle").disabled = false;
        document.getElementById("anim_ball").src = location.toString();
    }
    else {
        $(this).css("border","5px solid transparent"); // rgba(0, 0, 0, 0)
        document.getElementById("tracking-toggle").disabled = true;
        document.getElementById("anim_ball").src = "{{url_for('static', filename='images/shapes/blank.png')}}";
    }
    $("#figures img").not($(this)).css("border","5px solid transparent");
});
