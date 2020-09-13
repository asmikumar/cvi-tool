// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pieColor2").getContext('2d');
var pieColor2 = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Red", "Yellow", "Green", "Blue", "Grayscale"],
    datasets: [
    {
      data: [25, 19, 3, 17, 6],
      backgroundColor: [
        "red",
        "#ffee17",
        "#5dbb63",
        "#1167b1",
        "#d3d3d3",
      ],
    },
    {
      data: [20, 5, 15, 4, 2, 1, 10, 7, 1, 5],
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
    },
    ]
  },
  options: {
    cutoutPercentage: '20'
  }
  
});