function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;    
    var address = document.reg_form.address;    
    var gender = document.reg_form.gender;    
    var email = document.reg_form.email;        

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }   
    function allLetter(fname)
    {
     var letters = /^[A-Za-z]+$/;
     if(fname.value.match(letters))
     {
       return true;
      }
    else
      {
      alert("Name can't have numbers");
       return false;
      }
     }  

    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    function allLetter(fname)
    {
     var letters = /^[A-Za-z]+$/;
     if(fname.value.match(letters))
     {
       return true;
      }
    else
      {
      alert("Name can't have numbers");
       return false;
      }
     }  
    if (address.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
    function ValidateForm(form){
    ErrorText= "";
     if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) )
{
      alert ( "Please choose your Gender: Male or Female" );
return false;
}
      if (ErrorText= "") { form.submit() }
}           
      if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
   function ValidateEmail(email) 
   {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
{
return (true)
}
alert("You have entered an invalid email address!")
return (false)
}