$(document).ready(function()
{
  $("#formID").submit(function(event)
  {
      event.preventDefault();
      var dataFromUser =parseFloat($("#inputID").val());
      //console.log(dataFromUser);
      //var size=Math.sqrt(dataFromUser);
      var row = Math.ceil(dataFromUser/10);

      var col = 10;
      console.log(fullMatrix())



 function fullMatrix()
 {

      var matrix= new Array()

      for(var rowIdx=0;rowIdx<row; rowIdx++)
      {
        matrix[rowIdx] = new Array();
        for(var colIdx=0; colIdx<col; colIdx++)
        {

          //console.log(10*rowIdx+colIdx);

          if(10*rowIdx+1==colIdx)
          {
            matrix[rowIdx].splice(colIdx);
          }
          else
          {

            matrix[rowIdx][colIdx]=10*rowIdx +colIdx;
          }
          matrix[rowIdx][colIdx]=10*rowIdx +colIdx;
          console.log(matrix[rowIdx][colIdx]);

        }
        console.log("  ");

      }

      return matrix;
    }


  });

});
