$("#btnSave").click(function () {
  //alert("");
  var std = {};
  std.Email = $("#email").val();

  std.Password = $("#password").val();
  std.UserName = $("#username").val();

  $.ajax({
    type: "POST",
    url: '@Url.Action("CreateUser")',
    data: JSON.stringify(std),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function () {
      // alert("Data has been added successfully.");
      LoadData();
    },
    error: function () {
      alert("Error while inserting data");
    }
  });
  return false;
});
