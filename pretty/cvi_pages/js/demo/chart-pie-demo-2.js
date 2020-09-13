// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// INITIAL DONUT CHART
var threshold = threshold = $("#thresholdSelect").val();
var sessionCounts = [6, 4, 5]; // number of sessions per category 

var totalSessions = sessionCounts.reduce(function(x, y){
        return x + y;
    }, 0);

var scoresSquare = [74, 70, 67, 76, 69, 80]; // percentage scores for each session
var scoresTriangle = [68, 75, 67, 70];
var scoresCircle = [70, 68, 77, 80, 75];

var percentsSquare = []; // the number of scores that were above the threshold
var percentsTriangle = [];
var percentsCircle = [];

console.log("---", threshold);

for (var a = 0; a < scoresSquare.length; a++) {
  score = scoresSquare[a];
  if (score >= threshold) {
    percentsSquare.push(score);
  }
}

for (var b = 0; b < scoresTriangle.length; b++) {
  score = scoresTriangle[b];
  if (score >= threshold) {
    percentsTriangle.push(score);
  }
}

for (var c = 0; c < scoresCircle.length; c++) {
  score = scoresCircle[c];
  if (score >= threshold) {
    percentsCircle.push(score);
  }
}

var ctx = document.getElementById("pieShape").getContext('2d');
var params = {
  type: 'pie',
  data: {
    labels: ["Square", "Circle", "Triangle"],
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
            percentsSquare.length, scoresSquare.length-percentsSquare.length, 
            percentsTriangle.length, scoresTriangle.length-percentsTriangle.length, 
            percentsCircle.length, scoresCircle.length-percentsCircle.length,
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
            (percentsSquare.length/scoresSquare.length), (1 - percentsSquare.length/scoresSquare.length),
            (percentsTriangle.length/scoresTriangle.length), (1 - percentsTriangle.length/scoresTriangle.length),
            (percentsCircle.length/scoresCircle.length), (1 - percentsCircle.length/scoresCircle.length)
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

pieShape = new Chart(ctx, params);

// DONUT CHARTS UPDATED FROM DROPDOWN MENU
$("#thresholdSelect").change(function (evt) {
    threshold = $("#thresholdSelect").val();
    var sessionCounts = [6, 4, 5]; // number of sessions per category 

    var totalSessions = sessionCounts.reduce(function(x, y){
            return x + y;
        }, 0);

    var scoresSquare = [74, 70, 67, 76, 69, 80]; // percentage scores for each session
    var scoresTriangle = [68, 75, 67, 70];
    var scoresCircle = [70, 68, 77, 80, 75];

    var percentsSquare = []; // the number of scores that were above the threshold
    var percentsTriangle = [];
    var percentsCircle = [];

    console.log("---", threshold);

    for (var a = 0; a < scoresSquare.length; a++) {
      score = scoresSquare[a];
      if (score >= threshold) {
        percentsSquare.push(score);
      }
    }

    for (var b = 0; b < scoresTriangle.length; b++) {
      score = scoresTriangle[b];
      if (score >= threshold) {
        percentsTriangle.push(score);
      }
    }

    for (var c = 0; c < scoresCircle.length; c++) {
      score = scoresCircle[c];
      if (score >= threshold) {
        percentsCircle.push(score);
      }
    }

    // REMOVE OLD CHART
    $('#pieShape').remove(); 
    $('#container-pieShape').append('<canvas id="pieShape" width="100%" height="50"></canvas>');

    var ctx = document.getElementById("pieShape").getContext('2d');
    var params = {
      type: 'pie',
      data: {
        labels: ["Square", "Circle", "Triangle"],
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
                percentsSquare.length, scoresSquare.length-percentsSquare.length, 
                percentsTriangle.length, scoresTriangle.length-percentsTriangle.length, 
                percentsCircle.length, scoresCircle.length-percentsCircle.length,
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
                (percentsSquare.length/scoresSquare.length), (1 - percentsSquare.length/scoresSquare.length),
                (percentsTriangle.length/scoresTriangle.length), (1 - percentsTriangle.length/scoresTriangle.length),
                (percentsCircle.length/scoresCircle.length), (1 - percentsCircle.length/scoresCircle.length)
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

    pieShape = new Chart(ctx, params);

}) 

