

document.getElementById("btn").onclick = () =>
{
    let First =document.forms["myform"]["fname"].value;
    let ftime =document.forms["myform"]["ftime"].value;
    let fphone=document.forms["myform"]["fphone"].value;
    let fdate=document.forms["myform"]["fdate"].value;


    if(First == "")
    {  console.log('first name')
        alert("Full name must be filed out");
    document.forms["myform"]["fname"].style.border='2px solid red';
    document.forms["myform"]["fname"].placeholder='please enter a full name';
    document.getElementsByClassName('remarq')[0].style.display='block';
    
    } else if (ftime == ""){
        alert("time must be filed out");
        document.forms["myform"]["ftime"].style.border='2px solid red';
        document.forms["myform"]["ftime"].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[1].style.display='block';
    
        
    } else if (fphone == ""){
        alert("phone must be filed out");
        document.forms["myform"]["fphone"].style.border='2px solid red';
        document.forms["myform"]["fphone"].placeholder='please enter the number phone';
        document.getElementsByClassName('remarq')[2].style.display='block';
        
        
    } else if (fdate == ""){
        alert("date must be filed out");
        document.forms["myform"]["fdate"].style.border='2px solid red';
        document.forms["myform"]["fdate"].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[3].style.display='block';
        
    }else { window.location.href="orderSummaryTakeaway.html";
}
    

}