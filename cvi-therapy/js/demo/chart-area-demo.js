// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Open Sans",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("lineProgress");
var lineProgress = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
    datasets: [{
      label: "Average Score",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [41, 53, 59, 62, 70, 65, 67, 66, 76, 80, 76, 77, 82, 81, 84],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        // time: {
        //   unit: 'date'
        // },
        scaleLabel: {
          display: true,
          labelString: 'Session Number'
        },
        gridLines: {
          display: false
        },
        ticks: {
          stepSize: 1
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Score (%)'
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        },
        ticks: {
          beginAtZero: true,
          steps: 11,
          stepSize: 10,
          max: 100,
        },
      }],
    },
    legend: {
      display: false
    }
  }
});
