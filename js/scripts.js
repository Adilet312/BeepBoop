$(document).ready(function()
{
    $("#formID").submit(function(event){
        event.preventDefault();
        var data = parseInt($("#textID").val());
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
        //Function was copied below link (splice() function doesn't support string and it works only with arrray, so below function was developed to work with string)
       //https://stackoverflow.com/questions/20817618/is-there-a-splice-method-for-strings##targetText=No%2C%20there%20is%20no%20such,the%20string%20into%20an%20array.
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
          $("#output").text(array);
    });

});