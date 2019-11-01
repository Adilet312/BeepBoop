$(document).ready(function()
{
  $("#formID").submit(function(event)
  {
      event.preventDefault();
      var dataFromUser =parseInt($("#inputID").val());
      var stringVersion="";
      var array =[];
      var index=dataFromUser;
     for(var outerIdx=dataFromUser; outerIdx>=0; outerIdx--)
     {
       stringVersion = outerIdx.toString()

           for(var innerIdx=0; innerIdx<stringVersion.length; innerIdx++ )
           {
            console.log(stringVersion.length)
             if(stringVersion[innerIdx]==='1')
             {
               stringVersion.slice(innerIdx,innerIdx+1);
               console.log(stringVersion[innerIdx]);
               stringVersion[innerIdx] = "Beep";
               console.log(stringVersion[innerIdx]);
             }
             else if(stringVersion[innerIdx]==='2')
             {
               stringVersion[innerIdx]="Boop";
             }
             else if(stringVersion[innerIdx]==='3')
             {
               stringVersion[innerIdx]=" I'm sorry, Dave. I'm afraid I can't do that.";
             }
           }
           array[index]=stringVersion;
           index--;

     }
     console.log(array);
    /*
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

          else if(index<20 && index>=10)
          {
            if(element === '10' )
            {
              matrix[index] = "Beep"+"0";
              index++;
            }
            else if(element==='11')
            {
              matrix[index] = "Boop";
              index++;
            }
            else if(element ==='12')
            {
              matrix[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
              index++;
            }
            else
            {
              index++;
            }
          }


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
