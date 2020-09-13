// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pieShape2").getContext('2d');
var pieShapeTrial = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  }
});

$("#dataType").change(function (evt) {
        pieShapeTrial.update();
        // var timeSelection = eval($("#dataType").val());
        // var chart = c3.generate({
        //     data: {
        //         rows: timeSelection,
        //         type: 'pie' 
        //     }
        // });

        // var ctx = document.getElementById("chart").getContext('2d');
        var pieSizeTrial2 = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
            datasets: [{
              backgroundColor: [
                "#2ecc71",
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c",
                "#34495e"
              ],
              data: [120, 19, 3, 17, 28, 24, 7]
            }]
          }
        });

        // pieSize3.destroy()
        // pieSize3.update()

    });