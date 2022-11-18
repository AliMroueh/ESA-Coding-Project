$('.table tbody').on('click','.btn',function(){
    $(this).closest('tr').prev().remove();
});

$(document).ready(function(){
  $("#price,#qty").keyup(function(){
var res=0;
 let x=parseInt($("#price").val());
 let y=parseInt($("#quantity").val());
  res=x*y;
 $("#total").val(res);

});
});

/*
let n1=document.getElementById("price");
let n2=document.getElementById("qty");
let res;
function myfunction(n1,n2){
  return paresInt(n1.value)*paresInt(n2.value);
}
document.getElementById("total").innerHTML=myfunction(n1,n2);*/
