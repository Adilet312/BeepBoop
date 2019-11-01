$(document).ready(function()
{
  $("#formID").submit(function(event)
  {
      event.preventDefault();
      var dataFromUser =parseFloat($("#inputID").val());

      var matrix = [];
      var index = 0;
      var element ="";
      while(dataFromUser>=0)
      {
        dataFromUser--;
        matrix[index]=index;
        element = index.toString();
        if(index<10)
        {

            if(element === '1' )
            {

              matrix[index] = "Beep";
              index++;
            }
            else if(element==='2')
            {
              matrix[index] = "Boop";
              index++;
            }
            else if(element ==='3')
            {
              matrix[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
              index++;
            }
            else
            {
              index++;
            }
          }
          /*
          else if(index<20 && index>=10)
          {
            if(index === 10 )
            {
              matrix[index] = "Beep";
              index++;
            }
            else if(index===2)
            {
              matrix[index] = "Boop";
              index++;
            }
            else if(index ===3)
            {
              matrix[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
              index++;
            }
            else
            {
              index++;
            }
          }*/


      }
      console.log(matrix);






      /*
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

          if(10*rowIdx+1==colIdx)
          {
            matrix[rowIdx][colIdx]="Beep"
          }
          else if(10*rowIdx+2==colIdx)
          {
            matrix[rowIdx][colIdx]="Boop"
          }
          else if(10*rowIdx+3==colIdx)
          {
            matrix[rowIdx][colIdx =  "I'm sorry, Dave. I'm afraid I can't do that."
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
    }*/


  });

});
