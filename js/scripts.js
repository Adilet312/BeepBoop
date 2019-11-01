$(document).ready(function()
{
  $("#formID").submit(function(event)
  {
      event.preventDefault();
      var dataFromUser =$("#inputID").val();
      console.log(dataFromUser);
  });

});
