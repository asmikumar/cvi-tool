// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Open Sans",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barShape");
var barShape = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Square", "Triangle", "Circle"],
    datasets: [{
      label: "Average Score",
      backgroundColor: "#1e90ff",
      borderColor: "rgba(2,117,216,1)",
      data: [78, 60, 71],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        scaleLabel: {
          display: true,
          labelString: 'Shape'
        },
        gridLines: {
          display: false
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
