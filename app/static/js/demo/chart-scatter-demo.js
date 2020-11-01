// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI, Avenir, sans-serif, Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatterSize");
var scatterSize = new Chart(ctx, {
  type: 'scatter',
  data: {
            datasets: [

                // small = 100 - <150, medium = 150 - <200, large = 200 - 250
                {
                  data: [
                      { x: 120, y: 24 }, 
                      { x: 120, y: 10 }, 
                  ],
                  backgroundColor: '#89cfef',
                  borderWidth: 0,
                  label: 'Small',
                },

                {
                  data: [
                      { x: 170, y: 62 }, 
                      { x: 150, y: 52 }, 
                      { x: 150, y: 55 },
                      { x: 150, y: 61 },
                  ],
                  backgroundColor: '#0492c2',
                  borderWidth: 0,
                  label: 'Medium',
                },

                {
                  data: [
                      { x: 245, y: 77 }, 
                      { x: 250, y: 72 }, 
                      { x: 250, y: 75 },
                      { x: 250, y: 68 },
                      { x: 250, y: 79 },
                      { x: 210, y: 72 },
                      { x: 225, y: 76 },
                      { x: 250, y: 80 },
                      { x: 230, y: 77 },
                  ],
                  backgroundColor: '#1338be',
                  borderWidth: 0,
                  label: 'Large',
                },  
            ]
        },
        options: {
          legend: {
            display: true,
            onClick: null
          },
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                      beginAtZero: false,
                      steps: 17,
                      stepSize: 10,
                      min: 100,
                      max: 250,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Size (px)'
                    },
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                      steps: 11,
                      stepSize: 10,
                      min: 0,
                      max: 100,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Score (%)'
                    }
                }]
            }
        }

    });
