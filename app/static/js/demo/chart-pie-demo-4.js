// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont, Segoe UI, Avenir, sans-serif, Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// INITIAL DONUT CHART
var threshold = threshold = $("#thresholdSelect").val();
var sessionCounts = [7, 5, 3]; // number of sessions per category 

var totalSessions = sessionCounts.reduce(function(x, y){
        return x + y;
    }, 0);

var scoresLow = [74, 79, 80, 76, 79, 82, 78];  // percentage scores for each session
var scoresMedium = [57, 66, 64, 59, 61];
var scoresHigh = [35, 37, 44];

var percentsLow = []; // the number of scores that were above the threshold
var percentsMedium = [];
var percentsHigh = [];

// console.log("---", threshold);

for (var a = 0; a < scoresLow.length; a++) {
  score = scoresLow[a];
  if (score >= threshold) {
    percentsLow.push(score);
  }
}

for (var b = 0; b < scoresMedium.length; b++) {
  score = scoresMedium[b];
  if (score >= threshold) {
    percentsMedium.push(score);
  }
}

for (var c = 0; c < scoresHigh.length; c++) {
  score = scoresHigh[c];
  if (score >= threshold) {
    percentsHigh.push(score);
  }
}

var ctx = document.getElementById("pieSpeed").getContext('2d');
var params = {
  type: 'pie',
  data: {
    labels: ["Low", "Medium", "High"],
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
            percentsLow.length, scoresLow.length-percentsLow.length, 
            percentsMedium.length, scoresMedium.length-percentsMedium.length, 
            percentsHigh.length, scoresHigh.length-percentsHigh.length,
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
            (percentsLow.length/scoresLow.length), (1 - percentsLow.length/scoresLow.length),
            (percentsMedium.length/scoresMedium.length), (1 - percentsMedium.length/scoresMedium.length),
            (percentsHigh.length/scoresHigh.length), (1 - percentsHigh.length/scoresHigh.length)
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

pieSpeed = new Chart(ctx, params);

// DONUT CHARTS UPDATED FROM DROPDOWN MENU
$("#thresholdSelect").change(function (evt) {
    threshold = $("#thresholdSelect").val();
    var sessionCounts = [7, 5, 3]; // number of sessions per category 

    var totalSessions = sessionCounts.reduce(function(x, y){
            return x + y;
        }, 0);

    var scoresLow = [74, 79, 80, 76, 79, 82, 78];  // percentage scores for each session
    var scoresMedium = [57, 66, 64, 59, 61];
    var scoresHigh = [35, 37, 44];

    var percentsLow = []; // the number of scores that were above the threshold
    var percentsMedium = [];
    var percentsHigh = [];

    console.log("---", threshold);

    for (var a = 0; a < scoresLow.length; a++) {
      score = scoresLow[a];
      if (score >= threshold) {
        percentsLow.push(score);
      }
    }

    for (var b = 0; b < scoresMedium.length; b++) {
      score = scoresMedium[b];
      if (score >= threshold) {
        percentsMedium.push(score);
      }
    }

    for (var c = 0; c < scoresHigh.length; c++) {
      score = scoresHigh[c];
      if (score >= threshold) {
        percentsHigh.push(score);
      }
    }

    // REMOVE OLD CHART
    $('#pieSpeed').remove(); 
    $('#container-pieSpeed').append('<canvas id="pieSpeed" width="100%" height="50"></canvas>');

    var ctx = document.getElementById("pieSpeed").getContext('2d');
    var params = {
      type: 'pie',
      data: {
        labels: ["Low", "Medium", "High"],
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
                percentsLow.length, scoresLow.length-percentsLow.length, 
                percentsMedium.length, scoresMedium.length-percentsMedium.length, 
                percentsHigh.length, scoresHigh.length-percentsHigh.length,
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
                (percentsLow.length/scoresLow.length), (1 - percentsLow.length/scoresLow.length),
                (percentsMedium.length/scoresMedium.length), (1 - percentsMedium.length/scoresMedium.length),
                (percentsHigh.length/scoresHigh.length), (1 - percentsHigh.length/scoresHigh.length)
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

    pieSpeed = new Chart(ctx, params);

}) 

