$(document).ready(function()
{
    $("#formID").submit(function(event){
        event.preventDefault();
        var data = parseInt($("#textID").val());
        console.log(data);
        var matrix = [];
        var index=data;
        var stringV="";
        var strinI="";
        for(var idx=data; idx>=0; idx--)
        {
            stringV=idx.toString();
            //console.log(stringV);
            for(var innerIdx = 0; innerIdx<stringV.length; innerIdx+=2)
            {
                if((stringV[innerIdx]==='1'&& stringV[innerIdx+1]==='2') || (stringV[innerIdx]==='2'&& stringV[innerIdx+1]==='1'))
                {
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+2,"boop");
                    console.log(stringV,idx);
                }
                else if((stringV[innerIdx]==='1' && stringV[innerIdx+1]==='3') || (stringV[innerIdx]==='3' && stringV[innerIdx+1]==='1'))
                {
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+2,"I'm sorry, Dave. I'm afraid I can't do that");
                }
                else if((stringV[innerIdx]==='2' && stringV[innerIdx+1]==='3')|| (stringV[innerIdx]==='3' && stringV[innerIdx+1]==='2'))
                {
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+2,"I'm sorry, Dave. I'm afraid I can't do that");
                }
                else if((stringV[innerIdx]==='1' && stringV[innerIdx+1]!='2') && (stringV[innerIdx]==='1' && stringV[innerIdx+1]!='3'))
                {
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"beep");
                }
                else if((stringV[innerIdx+1]==='1' && stringV[innerIdx]!='2') && (stringV[innerIdx+1]==='1' && stringV[innerIdx]!='3'))
                {
                    stringV = spliceSlice(stringV,innerIdx+1,innerIdx+1,"beep");
                }
                else if((stringV[innerIdx]==='2' && stringV[innerIdx+1]!='1') && (stringV[innerIdx]==='2' && stringV[innerIdx+1]!='3'))
                {
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"boop");
                }
                else if((stringV[innerIdx+1]==='2' && stringV[innerIdx]!='1') && (stringV[innerIdx+1]==='2' && stringV[innerIdx]!='3'))
                {
                    stringV = spliceSlice(stringV,innerIdx+1,innerIdx+1,"boop");
                }
                else if((stringV[innerIdx]==='3' && stringV[innerIdx+1]!='1') && (stringV[innerIdx]==='3' && stringV[innerIdx+1]!='2'))
                {
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"I'm sorry, Dave. I'm afraid I can't do that");
                }
                else if((stringV[innerIdx+1]==='3' && stringV[innerIdx]!='1') && (stringV[innerIdx+1]==='3' && stringV[innerIdx]!='2'))
                {
                    stringV = spliceSlice(stringV,innerIdx+1,innerIdx+1,"I'm sorry, Dave. I'm afraid I can't do that");
                }
                /*
                else if(stringV[innerIdx]==='1' && stringV[innerIdx+1]!='1' && stringV[innerIdx+1]!='2' && stringV[innerIdx+1]!='3')
                {
                   stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"beep");
                   console.log(stringV,idx);
                }
                else if(stringV[innerIdx]==='2' && stringV[innerIdx+1]!='2' && stringV[innerIdx+1]!='1' && stringV[innerIdx+1]!='3')
                {
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"boop"); 
                    console.log(stringV,idx);
                }
                else if(stringV[innerIdx]==='3' && stringV[innerIdx+1]!='3' && stringV[innerIdx+1]!='1' && stringV[innerIdx+1]!='2')
                {
                    
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"I'm sorry, Dave. I'm afraid I can't do that");
                    console.log(stringV,idx);
                }
                else if(stringV[innerIdx]==='1' && stringV[innerIdx+1]==='1')
                {
                    
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"beep");
                    console.log(stringV,idx);
                }
                else if(stringV[innerIdx]==='2' && stringV[innerIdx+1]==='3')
                {
                    
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"boop");
                    console.log(stringV,idx);
                }
                else if(stringV[innerIdx]==='3' && stringV[innerIdx+1]==='3')
                {
                    
                    stringV = spliceSlice(stringV,innerIdx,innerIdx+1,"I'm sorry, Dave. I'm afraid I can't do that.");
                    console.log(stringV,idx);
                }*/

            }
            matrix[index]=stringV;
            index--;
        }
        console.log(matrix);

       
        












        function spliceSlice(str, index, count, add) 
        {
            
            if (index < 0) 
            {
              index = str.length + index;
              if (index < 0)
               {
                index = 0;
              }
            }
          
            return str.slice(0, index) + (add || "") + str.slice(index + count);
          }
    });

});