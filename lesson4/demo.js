$(function() {
  $("#example").DataTable();

  // Premade test data, you can also use your own
  var testDataUrl = "https://raw.githubusercontent.com/chennighan/RapidlyPrototypeJavaScript/master/lesson4/data.json"

  $("#loadData").click(function() {
    loadData();
  });

  function loadData() {
    $.ajax({
      type: 'GET',
      url: testDataUrl,
      contentType: "text/plain",
      dataType: 'json',
      success: function (data) {
        myJsonData = data;
        populateDataTable(myJsonData);
      },
      error: function (e) {
        console.log("There was an error with your request...");
        console.log("error: " + JSON.stringify(e));
      }
    });
  }

  // populate the data table with JSON data
  function populateDataTable(data) {
    console.log("populating data table...");
    // clear the table before populating it with more data
    $("#example").DataTable().clear();
    var length = Object.keys(data.customers).length;
    for(var i = 1; i < length+1; i++) {
      var customer = data.customers['customer'+i];

      // You could also use an ajax property on the data table initialization
      $('#example').dataTable().fnAddData( [
        customer.first_name,
        customer.last_name,
        customer.occupation,
        customer.email_address
      ]);
    }
  }
})();
