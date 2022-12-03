if( localStorage.getItem('role_id')==1){
    window.location.replace('product.php')
}
if( localStorage.getItem('role_id')==2)
{
    window.location.replace('admin.php')
}

$("#login").click(function () {
    var formdata = {
      mobilenumber: $("#mobileNumber").val(),
      password: $("#password").val(),
    };
  
    $.ajax({
      type: "POST",
      url: "api/loginapi.php",
      data: formdata,
      datatype: "JSON",
      success: function (data) {
        data = JSON.parse(data);
        if (data.status) {
          
  window.alert("Login succesfully")
  localStorage.setItem('token',data.output[0].token);
  localStorage.setItem('role_id',data.output[0].role_id);
  if(data.output[0].role_id==1){
    window.location.replace("product.php")
  }
  else{
    window.location.replace("admin.php")
  }
         
        }
  
        
        else {
          $("error").text(data.output);
        }
      },
  
      error: function () {},
    });
  });
  
  
  