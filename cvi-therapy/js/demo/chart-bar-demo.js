// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Open Sans",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barColor");
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Yellow", "Green", "Blue", "Grayscale"],
    datasets: [{
      label: "Average Score",
      backgroundColor: ['red', '#ffee17', '#5dbb63', '#1167b1', '#d3d3d3'],
      data: [80, 77, 56, 58, 26],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        // time: {
        //   unit: 'month'
        // },
        scaleLabel: {
          display: true,
          labelString: 'Color'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 10,
          maxTicksLimit: 11
        },
        scaleLabel: {
          display: true,
          labelString: 'Average Score (%)'
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
