$('.table tbody').on('click','.btn',function(){
    $(this).closest('tr').prev().remove();
});

$(document).ready(function(){
  $("#price,#qty").keyup(function(){
 

var total=0;
 let x=Number($("#price").val());
 let y=Number($("#quantity").val());
  var total=x*y;
 $("#total").val(total);

});
});
