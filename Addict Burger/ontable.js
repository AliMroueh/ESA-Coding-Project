


document.getElementById("btn").onclick = () =>
{
    let fname =document.forms["myform"]["fname"].value;
    let ftable =document.forms["myform"]["ftable"].value;
    

    if(fname == "")
    {  console.log('fname')
        alert("Full name must be filed out");
    document.forms["myform"]["fname"].style.border='2px solid red';
    document.forms["myform"]["fname"].placeholder='please enter a full name';
    document.getElementsByClassName('remarq')[0].style.display='block';
    
    } else if (ftable == ""){
        alert("Number of table must be filed out");
        document.forms["myform"]["ftable"].style.border='2px solid red';
        document.forms["myform"]["ftable"].placeholder='please enter the number table';
        document.getElementsByClassName('remarq')[1].style.display='block';
    
    
        
    
        
    }else {
        window.location.href="finproceesing.html";

}
    

}