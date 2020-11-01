// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
	"order": [[ 0, "desc" ]],
    "searching": false,   // Search Box will Be Disabled
	"info": true,         // Will show "1 to n of n entries" Text at bottom
	"lengthChange": false, // Show entries feature is disabled
	"pageLength": 4
  });
});
