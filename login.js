Byfunction validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;
    function allLetter(name)
      {
       var letters = /^[A-Za-z]+$/;
       if(name.value.match(letters))
         {
          return true;
         }
       else
         {
         alert("Name can't have numbers");
         return false;
         }
      }  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  
    
    