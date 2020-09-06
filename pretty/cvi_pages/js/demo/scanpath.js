// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var scanpathChart = document.getElementById("scanpath");

var dataFirst = {
    label: "Child",
    // data: [0, 59, 75, 20, 20, 55, 40],
    data: [
                  { x: 100, y: 30 }, 
                    { x: 0, y: 100 }, 
                    { x: 39, y: 88 }, 
                    { x: 198, y: 500 }, 
                    { x: 443, y: 51 },
                    { x: 997, y: 109 }, 
                    { x: 856, y: 325 }, 
                    { x: 564, y: 623 }, 
                    { x: 112, y: 62 }
                ],
    lineTension: 0,
    fill: false,
    borderColor: "rgba(255,51,0,1)",
    backgroundColor: "rgba(255,51,0,0.2)",
    showLine: true,
    pointRadius: 0
  };

var dataSecond = {
    label: "Computer",
    data: [
                  { x: 80, y: 100 }, 
                    { x: 0, y: 241 }, 
                    { x: 50, y: 90 }, 
                    { x: 240, y: 510 }, 
                    { x: 410, y: 46 },
                    { x: 980, y: 123 }, 
                    { x: 870, y: 365 }, 
                    { x: 578, y: 620 }, 
                    { x: 110, y: 80 }
                ],
    lineTension: 0,
    fill: false,
    borderColor: "rgba(102,204,0,1)",
    backgroundColor: "rgba(102,204,0,0.2)",
    showLine: true,
    pointRadius: 0
  };

var data = {
  // labels: ["80", "160", "240", "320", "400", "480", "560", "640", "720", "800", "880", "960", "1040", "1120", "1200", "1280"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  scales: {
    xAxes: [{
              display: true,
                ticks: {
                  beginAtZero: true,
                  steps: 17,
                  stepSize: 160,
                  max: 1280,
                },
              scaleLabel: {
                display: true,
                labelString: 'Horizontal Position (px)'
              }
            }],
    yAxes: [{
              display: true,
                ticks: {
                  beginAtZero: true,
                  steps: 12,
                  stepSize: 120,
                  max: 720,
                },
              scaleLabel: {
                display: true,
                labelString: 'Vertical Position (px)'
              }
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
  type: 'scatter',
  data: data,
  options: chartOptions
});