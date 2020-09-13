// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Open Sans",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// INITIAL DONUT CHART
var threshold = threshold = $("#thresholdSelect").val();
var sessionCounts = [5, 5, 2, 2, 1]; // number of sessions per category 

var totalSessions = sessionCounts.reduce(function(x, y){
        return x + y;
    }, 0);

var scoresRed = [74, 71, 76, 80, 69]; // percentage scores for each session
var scoresYellow = [68, 72, 73, 70, 66];
var scoresGreen = [70, 62];
var scoresBlue = [59, 66];
var scoresGrayscale = [24];

var percentsRed = []; // the number of scores that were above the threshold
var percentsYellow = [];
var percentsGreen = [];
var percentsBlue = [];
var percentsGrayscale = [];

// console.log("---", threshold);

for (var a = 0; a < scoresRed.length; a++) {
  score = scoresRed[a];
  if (score >= threshold) {
    percentsRed.push(score);
  }
}

for (var b = 0; b < scoresYellow.length; b++) {
  score = scoresYellow[b];
  if (score >= threshold) {
    percentsYellow.push(score);
  }
}

for (var c = 0; c < scoresGreen.length; c++) {
  score = scoresGreen[c];
  if (score >= threshold) {
    percentsGreen.push(score);
  }
}

for (var d = 0; d < scoresBlue.length; d++) {
  score = scoresBlue[d];
  if (score >= threshold) {
    percentsBlue.push(score);
  }
}

for (var e = 0; e < scoresGrayscale.length; e++) {
  score = scoresGrayscale[e];
  if (score >= threshold) {
    percentsGrayscale.push(score);
  }
}

var ctx = document.getElementById("pieColor").getContext('2d');
var params = {
  type: 'pie',
  data: {
    labels: ["Red", "Yellow", "Green", "Blue", "Grayscale"],
    datasets: [
    {
      data: sessionCounts,
      backgroundColor: [
        "red",
        "#ffee17",
        "#5dbb63",
        "#1167b1",
        "#d3d3d3",
      ],

      data_labels: [
            sessionCounts[0]/totalSessions,
            sessionCounts[1]/totalSessions,
            sessionCounts[2]/totalSessions,
            sessionCounts[3]/totalSessions,
            sessionCounts[4]/totalSessions
            ],
    },
    {
      data: [
            percentsRed.length, scoresRed.length-percentsRed.length, 
            percentsYellow.length, scoresYellow.length-percentsYellow.length, 
            percentsGreen.length, scoresGreen.length-percentsGreen.length, 
            percentsBlue.length, scoresBlue.length-percentsBlue.length, 
            percentsGrayscale.length, scoresGrayscale.length-percentsGrayscale.length
            ],

      backgroundColor: [
        "#d0f0c0",
        "#fa8072",
        "#d0f0c0",
        "#fa8072",
        "#d0f0c0",
        "#fa8072",
        "#d0f0c0",
        "#fa8072",
        "#d0f0c0",
        "#fa8072",
      ],

      data_labels: [
            (percentsRed.length/scoresRed.length), (1 - percentsRed.length/scoresRed.length),
            (percentsYellow.length/scoresYellow.length), (1 - percentsYellow.length/scoresYellow.length),
            (percentsGreen.length/scoresGreen.length), (1 - percentsGreen.length/scoresGreen.length),
            (percentsBlue.length/scoresBlue.length), (1 - percentsBlue.length/scoresBlue.length),
            (percentsGrayscale.length/scoresGrayscale.length), (1 - percentsGrayscale.length/scoresGrayscale.length)
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

pieColor = new Chart(ctx, params);

// DONUT CHARTS UPDATED FROM DROPDOWN MENU
$("#thresholdSelect").change(function (evt) {
    threshold = $("#thresholdSelect").val();
    var sessionCounts = [5, 5, 2, 2, 1]; // number of sessions per category 

    var totalSessions = sessionCounts.reduce(function(x, y){
            return x + y;
        }, 0);

    var scoresRed = [74, 71, 76, 80, 69]; // percentage scores for each session
    var scoresYellow = [68, 72, 73, 70, 66];
    var scoresGreen = [70, 62];
    var scoresBlue = [59, 66];
    var scoresGrayscale = [24];

    var percentsRed = []; // the number of scores that were above the threshold
    var percentsYellow = [];
    var percentsGreen = [];
    var percentsBlue = [];
    var percentsGrayscale = [];

    console.log("---", threshold);

    for (var a = 0; a < scoresRed.length; a++) {
      score = scoresRed[a];
      if (score >= threshold) {
        percentsRed.push(score);
      }
    }

    for (var b = 0; b < scoresYellow.length; b++) {
      score = scoresYellow[b];
      if (score >= threshold) {
        percentsYellow.push(score);
      }
    }

    for (var c = 0; c < scoresGreen.length; c++) {
      score = scoresGreen[c];
      if (score >= threshold) {
        percentsGreen.push(score);
      }
    }

    for (var d = 0; d < scoresBlue.length; d++) {
      score = scoresBlue[d];
      if (score >= threshold) {
        percentsBlue.push(score);
      }
    }

    for (var e = 0; e < scoresGrayscale.length; e++) {
      score = scoresGrayscale[e];
      if (score >= threshold) {
        percentsGrayscale.push(score);
      }
    }

    // REMOVE OLD CHART
    $('#pieColor').remove(); 
    $('#container-pieColor').append('<canvas id="pieColor" width="100%" height="50"></canvas>');

    var ctx = document.getElementById("pieColor").getContext('2d');
    var params = {
      type: 'pie',
      data: {
        labels: ["Red", "Yellow", "Green", "Blue", "Grayscale"],
        datasets: [
        {
          data: sessionCounts,
          backgroundColor: [
            "red",
            "#ffee17",
            "#5dbb63",
            "#1167b1",
            "#d3d3d3",
          ],

          data_labels: [
                sessionCounts[0]/totalSessions,
                sessionCounts[1]/totalSessions,
                sessionCounts[2]/totalSessions,
                sessionCounts[3]/totalSessions,
                sessionCounts[4]/totalSessions
                ],
        },
        {
          data: [
                percentsRed.length, scoresRed.length-percentsRed.length, 
                percentsYellow.length, scoresYellow.length-percentsYellow.length, 
                percentsGreen.length, scoresGreen.length-percentsGreen.length, 
                percentsBlue.length, scoresBlue.length-percentsBlue.length, 
                percentsGrayscale.length, scoresGrayscale.length-percentsGrayscale.length
                ],

          backgroundColor: [
            "#d0f0c0",
            "#fa8072",
            "#d0f0c0",
            "#fa8072",
            "#d0f0c0",
            "#fa8072",
            "#d0f0c0",
            "#fa8072",
            "#d0f0c0",
            "#fa8072",
          ],

          data_labels: [
                (percentsRed.length/scoresRed.length), (1 - percentsRed.length/scoresRed.length),
                (percentsYellow.length/scoresYellow.length), (1 - percentsYellow.length/scoresYellow.length),
                (percentsGreen.length/scoresGreen.length), (1 - percentsGreen.length/scoresGreen.length),
                (percentsBlue.length/scoresBlue.length), (1 - percentsBlue.length/scoresBlue.length),
                (percentsGrayscale.length/scoresGrayscale.length), (1 - percentsGrayscale.length/scoresGrayscale.length)
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

    pieColor = new Chart(ctx, params);

}) 
