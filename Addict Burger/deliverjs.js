function validateForm()
{
    let First =document.forms["php-email-form"][fname].value;
    let ftime =document.forms["php-email-form"][ftime].value;
    let fphone=document.forms["php-email-form"][fphone].value;
    let fdate=document.forms["php-email-form"][fdate].value;
    let fcity=document.forms["php-email-form"][fcity].value;
    let faddress=document.forms["php-email-form"][faddress].value;

    if(First == "")
    {  alert("name must be filed out");
    document.forms[myform][fname].style.boder='2px solid red';
    document.forms[myform][fname].placeholder='please enter a text';
    document.getElementsByClassName('remarq')[0].style.display='block';
    
    }
    if (ftime == ""){
        alert("ftime must be fiiled out");
        document.forms[myform][ftime].style.boder='2px solid red';
        document.forms[myform][ftime].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[1].style.display='block';
    
        
    }
    if (fphone == ""){
        alert("phone must be fiiled out");
        document.forms[myform][fphone].style.boder='2px solid red';
        document.forms[myform][fphone].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[1].style.display='block';
        
        
    }
    if (fdate == ""){
        alert("date must be fiiled out");
        document.forms[myform][fdate].style.boder='2px solid red';
        document.forms[myform][fdate].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[1].style.display='block';
    
        
    }
    if (fcity == ""){
        alert("city must be fiiled out");
        document.forms[myform][fcity].style.boder='2px solid red';
        document.forms[myform][fcity].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[1].style.display='block';
    
        
    }
    if (faddress == ""){
        alert("ftime must be fiiled out");
        document.forms[myform][faddress].style.boder='2px solid red';
        document.forms[myform][faddress].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[1].style.display='block';
        return false;
        
    }
    

}