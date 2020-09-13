// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Open Sans",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// INITIAL DONUT CHART
var threshold = threshold = $("#thresholdSelect").val();
var sessionCounts = [3, 4, 8]; // number of sessions per category 

var totalSessions = sessionCounts.reduce(function(x, y){
        return x + y;
    }, 0);

var scoresSmall = [34, 38, 29]; // percentage scores for each session
var scoresMedium = [56, 60, 62, 61];
var scoresLarge = [68, 74, 79, 77, 80, 83, 82, 79];

var percentsSmall = []; // the number of scores that were above the threshold
var percentsMedium = [];
var percentsLarge = [];

// console.log("---", threshold);

for (var a = 0; a < scoresSmall.length; a++) {
  score = scoresSmall[a];
  if (score >= threshold) {
    percentsSmall.push(score);
  }
}

for (var b = 0; b < scoresMedium.length; b++) {
  score = scoresMedium[b];
  if (score >= threshold) {
    percentsMedium.push(score);
  }
}

for (var c = 0; c < scoresLarge.length; c++) {
  score = scoresLarge[c];
  if (score >= threshold) {
    percentsLarge.push(score);
  }
}

var ctx = document.getElementById("pieSize").getContext('2d');
var params = {
  type: 'pie',
  data: {
    labels: ["Small", "Medium", "Large"],
    datasets: [
    {
      data: sessionCounts,
      backgroundColor: [
        "#89cfef",
        "#0492c2",
        "#1338be",
      ],

      data_labels: [
            sessionCounts[0]/totalSessions,
            sessionCounts[1]/totalSessions,
            sessionCounts[2]/totalSessions
            ],
    },
    {
      data: [
            percentsSmall.length, scoresSmall.length-percentsSmall.length, 
            percentsMedium.length, scoresMedium.length-percentsMedium.length, 
            percentsLarge.length, scoresLarge.length-percentsLarge.length,
            ],

      backgroundColor: [
        "#d0f0c0",
        "#fa8072",
        "#d0f0c0",
        "#fa8072",
        "#d0f0c0",
        "#fa8072"
      ],

      data_labels: [
            (percentsSmall.length/scoresSmall.length), (1 - percentsSmall.length/scoresSmall.length),
            (percentsMedium.length/scoresMedium.length), (1 - percentsMedium.length/scoresMedium.length),
            (percentsLarge.length/scoresLarge.length), (1 - percentsLarge.length/scoresLarge.length)
      ],
    },
    ]
  },
  options: {
    cutoutPercentage: '20',
    legend: {
        onClick: null
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];    
          var currentValue = dataset.data_labels[tooltipItem.index];
          var percentage = Math.floor((currentValue * 100)+0.5);  
          return percentage + "%";
        }
      }
    }
  }

}

pieSize = new Chart(ctx, params);

// DONUT CHARTS UPDATED FROM DROPDOWN MENU
$("#thresholdSelect").change(function (evt) {
    threshold = $("#thresholdSelect").val();
    var sessionCounts = [3, 4, 8]; // number of sessions per category 

    var totalSessions = sessionCounts.reduce(function(x, y){
            return x + y;
        }, 0);

    var scoresSmall = [34, 38, 29]; // percentage scores for each session
    var scoresMedium = [56, 60, 62, 61];
    var scoresLarge = [68, 74, 79, 77, 80, 83, 82, 79];

    var percentsSmall = []; // the number of scores that were above the threshold
    var percentsMedium = [];
    var percentsLarge = [];

    console.log("---", threshold);

    for (var a = 0; a < scoresSmall.length; a++) {
      score = scoresSmall[a];
      if (score >= threshold) {
        percentsSmall.push(score);
      }
    }

    for (var b = 0; b < scoresMedium.length; b++) {
      score = scoresMedium[b];
      if (score >= threshold) {
        percentsMedium.push(score);
      }
    }

    for (var c = 0; c < scoresLarge.length; c++) {
      score = scoresLarge[c];
      if (score >= threshold) {
        percentsLarge.push(score);
      }
    }

    // REMOVE OLD CHART
    $('#pieSize').remove(); 
    $('#container-pieSize').append('<canvas id="pieSize" width="100%" height="50"></canvas>');

    var ctx = document.getElementById("pieSize").getContext('2d');
    var params = {
      type: 'pie',
      data: {
        labels: ["Small", "Medium", "Large"],
        datasets: [
        {
          data: sessionCounts,
          backgroundColor: [
            "#89cfef",
            "#0492c2",
            "#1338be",
          ],

          data_labels: [
                sessionCounts[0]/totalSessions,
                sessionCounts[1]/totalSessions,
                sessionCounts[2]/totalSessions
                ],
        },
        {
          data: [
                percentsSmall.length, scoresSmall.length-percentsSmall.length, 
                percentsMedium.length, scoresMedium.length-percentsMedium.length, 
                percentsLarge.length, scoresLarge.length-percentsLarge.length,
                ],

          backgroundColor: [
            "#d0f0c0",
            "#fa8072",
            "#d0f0c0",
            "#fa8072",
            "#d0f0c0",
            "#fa8072"
          ],

          data_labels: [
                (percentsSmall.length/scoresSmall.length), (1 - percentsSmall.length/scoresSmall.length),
                (percentsMedium.length/scoresMedium.length), (1 - percentsMedium.length/scoresMedium.length),
                (percentsLarge.length/scoresLarge.length), (1 - percentsLarge.length/scoresLarge.length)
          ],
        },
        ]
      },
      options: {
        cutoutPercentage: '20',
        legend: {
            onClick: null
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];    
              var currentValue = dataset.data_labels[tooltipItem.index];
              var percentage = Math.floor((currentValue * 100)+0.5);  
              return percentage + "%";
            }
          }
        }
      }

}

    pieSize = new Chart(ctx, params);

}) 


