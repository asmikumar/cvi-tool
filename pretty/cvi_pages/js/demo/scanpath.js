// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var scanpathChart = document.getElementById("scanpath");

var dataFirst = {
    label: "Child",
    data: [0, 59, 75, 20, 20, 55, 40],
    lineTension: 0,
    fill: false,
    borderColor: "rgba(255,51,0,1)",
    backgroundColor: "rgba(255,51,0,0.2)",
    pointRadius: 0
  };

var dataSecond = {
    label: "Computer",
    data: [20, 15, 60, 60, 65, 30, 70],
    lineTension: 0,
    fill: false,
    borderColor: "rgba(102,204,0,1)",
    backgroundColor: "rgba(102,204,0,0.2)",
    pointRadius: 0
  };

var data = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  scales: {
    xAxes: [{
                display: false //this will remove all the x-axis grid lines
            }],
    yAxes: [{
                display: false //this will remove all the x-axis grid lines
            }],
  },
  legend: {
    display: true,
    position: 'top',
    labels: {
      fontColor: 'black'
    }
  },
  events: []

};

var scanpath = new Chart(scanpathChart, {
  type: 'line',
  data: data,
  options: chartOptions
});