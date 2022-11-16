


document.getElementById("btn").onclick = () =>
{
    let First =document.forms["myform"]["fname"].value;
    let ftable =document.forms["myform"]["ftable"].value;
    let fphone=document.forms["myform"]["fphone"].value;
    let fdate=document.forms["myform"]["fdate"].value;
    let ftime=document.forms["myform"]["ftime"].value;
    let fpeople=document.forms["myform"]["fpeople"].value;

    if(First == "")
    {  console.log('First')
        alert("Full name must be filed out");
    document.forms["myform"]["fname"].style.border='2px solid red';
    document.forms["myform"]["fname"].placeholder='please enter a full name';
    document.getElementsByClassName('remarq')[0].style.display='block';
    
    } else if (ftime == ""){
        alert("Number of table must be filed out");
        document.forms["myform"]["ftable"].style.border='2px solid red';
        document.forms["myform"]["ftable"].placeholder='please enter the number table';
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
    
        
    } else if (ftime == ""){
        console.log(ftime)
        alert("Time must be filed out");
        document.forms["myform"]["ftime"].style.border='2px solid red';
        document.forms["myform"]["ftime"].placeholder='please enter the time';
        document.getElementsByClassName('remarq')[4].style.display='block';
    
        
    }else if (fpeople == ""){
        console.log(fpeople)
        alert("Number of pepole must be filed out");
        document.forms["myform"]["fpeople"].style.border='2px solid red';
        document.forms["myform"]["fpeople"].placeholder='please enter the address';
        document.getElementsByClassName('remarq')[5].style.display='block';
        return false;
        
    }else {
        window.location.href="finproceesing.html";

}
    

}