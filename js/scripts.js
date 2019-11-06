/*
    Beckend logic for numbers "Beep Boop".
*/
function beckEndfunction(data)
{
    var array = [];
        var indexPosition=0;
        var str ="";
        for(var idx=0; idx<=data;idx++)
        {   
            
            str = idx.toString();
                for(var index=0; index<str.length; index+=2)
                {   if(str[index]==='1'&& str[index+1]==='1'&& str[index+2]==='2')
                    {
                        str = spliceSlice(str,index,3,"beepboop");
                    }

                    else if(str[index]==='1'&& str[index+1]==='1'&& str[index+2]==='3')
                    {
                        str = spliceSlice(str,index,3,"beepI'm sorry, Dave. I'm afraid I can't do that");
                    }
                    else if(str[index]==='2'&& str[index+1]==='2'&& str[index+2]==='3')
                    {
                        str = spliceSlice(str,index,3,"boopI'm sorry, Dave. I'm afraid I can't do that");
                    }
                    // Replace "12" or"21" if they in row by word "boop".
                    else if((str[index]==='1'&& str[index+1]==='2') ||
                       (str[index]==='2'&& str[index+1]==='1'))
                    {
                        str = spliceSlice(str,index,2,"boop");
                    }
                    // Replace "13" or"31" if they in row by word "I'm sorry, Dave. I'm afraid I can't do that".
                    else if((str[index]==='1' && str[index+1]==='3') ||
                            (str[index]==='3' && str[index+1]==='1'))
                    {
                        str = spliceSlice(str,index,2,"I'm sorry, Dave. I'm afraid I can't do that");
                    }
                    // Replace "23" or"32" if they in row by word "I'm sorry, Dave. I'm afraid I can't do that".
                    else if((str[index]==='2' && str[index+1]==='3')||
                            (str[index]==='3' && str[index+1]==='2'))
                    {
                        str = spliceSlice(str,index,2,"I'm sorry, Dave. I'm afraid I can't do that");
                    }
                    //Replace "1" by word "beep"
                    else if(str[index]==='1' && str[index+1]==='1')
                    {
                        str = spliceSlice(str,index,2,"beepbeep");
                    }
                    else if(str[index]==='1' && str[index+1]!='1')
                    {
                        str = spliceSlice(str,index,1,"beep");
                    }
                    else if(str[index+1]==='1'&& str[index]!='1')
                    {
                        str =spliceSlice(str,index+1,1,"beep")
                    }
                    //Replace "2" by word "boop"
                    if(str[index]==='2' && str[index+1]==='2')
                    {
                        str = spliceSlice(str,index,2,"boopboop");
                    }
                    else if(str[index]==='2' && str[index+1]!='2')
                    {
                        str = spliceSlice(str,index,1,"boop");
                    }
                    else if(str[index+1]==='2'&& str[index]!='2')
                    {
                        str =spliceSlice(str,index+1,1,"boop")
                    }
                    //Replace "3" by word "boop"
                    if(str[index]==='3' && str[index+1]==='3')
                    {
                        str = spliceSlice(str,index,2,"I'm sorry, Dave. I'm afraid I can't do that I'm sorry, Dave. I'm afraid I can't do that");
                    }
                    else if(str[index]==='3' && str[index+1]!='3')
                    {
                        str = spliceSlice(str,index,1,"I'm sorry, Dave. I'm afraid I can't do that");
                    }
                    else if(str[index+1]==='3'&& str[index]!='3')
                    {
                        str =spliceSlice(str,index+1,1,"I'm sorry, Dave. I'm afraid I can't do that")
                    }
                    
                }
                array[indexPosition] = str;
                console.log(array[indexPosition]);
                indexPosition++;
                
                
            
        }
        // Function splices string data 
       
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

    return array; 
}
/* Beckend logic for name ( takes a name. For numbers that are divisible by 3, 
   replace the name Dave in "I'm sorry, Dave. I'm afraid I can't do that" with the name provided by the user. ) */
   function nameDivisibleByThree(name)
   {
       var stringName = "";
        if(name.length%3===0)
        {
            stringName = "I'm sorry, Dave. I'm afraid I can't do that. ( " +name+" is divisible by three.)";
            return (stringName);
        }
        return (stringName);
   }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Frontend logic  */
$(document).ready(function()
{
   $("#formID").submit(function(event)
    {
        event.preventDefault();
        var inputNumber = parseInt($("#textID").val());
        var inputName = $("#textID2").val();
       var numberResult = beckEndfunction(inputNumber);
       var nameResult = nameDivisibleByThree(inputName);
        $("#output").text(numberResult);
        $("#outputName").text(nameResult);
    });
});