// var taxRate = 0.05;
// var shipping = 15.0;
$(function() {
  var jsonData = [
    {
      title: "Addict Chicken",
      price: 38,
      quantity: 1,
      total: 38,
      extra:"cheddar cheese",
      without:"sauce"
    },
    {
      title: "Mozerlla",
      price: 23.5,
      quantity: 1,
      total: 23.5,
      extra:"tomato sauce",
      without:"chili"
    },
    {
      title: "Item 3",
      price: 100,
      quantity: 1,
      total: 100,
      extra:"tomato",
      without:"honey master"
    },
    {
      title: "Item 4",
      price: 45,
      quantity: 1,
      total: 45,
      extra:"lettuce",
      without:"tomato"
    },
    {
      title: "Item 5",
      price: 66,
      quantity: 1,
      total: 66,
      extra:"cheese",
      without:"pickles"
    },
    {
      title: "Item 6",
      price: 199,
      quantity: 1,
      total: 199,
      extra:" pickles",
      without:"lettuce"
    }
  ];
  var html = "<tbody>";
  $.each(jsonData, function() {
    html +=
      '<tr class="cart-item">' +
      "        <td>" +
      '          <input type="checkbox" class="cart-item-check" checked />' +
      "        </td>" +
      "        <td class='title'>" +
      "          " +
      this.title +
      "        </td >" +
      "        <td class='price'>$" +
      this.price +
      "</td>" +
      "        <td >" +
      '          <input class="cart-item-qty" style="width:100px" type="number" min="1" value="' +
      this.quantity +
      '" data-price="' +
      this.price +
      '">' +
      "        </td>" +
      '        <td class="cart-item-total">$' +
     
      this.total +
      "        </td>" +
      "        <td class='extra' >" +
      this.extra +
      "        </td>" +
      "        <td class='without'>" +
      this.without +
      "</td>" +
      "        <td>" +
      '          <a class="btn btn-danger is-small">Remove</a>' +
      "        </td>" +
      "      </tr>";
  });
  html += "</tbody>";
  $(".shopping-cart").append(html);
  
  recalculateCart();

  $(".cart-item-check").change(function() {
    recalculateCart();
  });

  $(".cart-item-qty").change(function() {
    var $this = $(this);
    var parent = $this.parent().parent();
    parent.find(".cart-item-check").prop("checked", "checked");
    var price = $this.attr("data-price");
    var quantity = $this.val();
    var total = price * quantity;
    parent.find(".cart-item-total").html(total.toFixed(2));
    recalculateCart();
  });

  $(".btn-danger").click(function() {
    var parent = $(this)
      .parent()
      .parent();
    parent.remove();
    recalculateCart();
  });
});
function recalculateCart() {
  var subTotal = 0;
  var grandTotal = 0;
  var tax = 0;
  var items = $(".cart-item");
  $.each(items, function() {
    var itemCheck = $(this).find(".cart-item-check");
    var itemQuantity = $(this).find(".cart-item-qty");
    if (itemCheck.prop("checked")) {
      var itemTotal = itemQuantity.val() * itemQuantity.attr("data-price");
      subTotal += itemTotal;
    }
    //eza ma fa local storage products 5l2la local storage product ykoun empty array
    // if(localStorage.getItem("products") == null){
    //   localStorage.setItem("products", '[]');
    //   }      
  });
  // if (subTotal > 0) {
  //   tax = subTotal * taxRate;
  //   grandTotal = subTotal + tax + shipping;
  //   $(".totals,.checkout").show();
  // } else {
  //   $(".totals,.checkout").hide();
  // }
  $("#cart-subtotal").html(subTotal.toFixed(2));
  $("#cart-total").html(grandTotal.toFixed(2));
  $("#cart-tax").html(tax.toFixed(2));
  // $("#cart-shipping").html(shipping.toFixed(2));
}

let products = [];
let oneProduct={
  title: "",
  price: 0,
  quantity: 0,
  total: 0,
  extra:"",
  without:""
};
$(function(){
$("#checkoutId").click(function() {

    if(localStorage.getItem("products") != null){
      // localStorage.setItem("products", '[]');
      localStorage.removeItem("products");
      }else{
        localStorage.setItem("products", '[]');
      }
      
$(".cart-item").each(async function() {
  $this = $(this);
  let title = $this.find(".title").html();
  let price = $this.find(".price").html();
  let quantity = $this.find(".cart-item-qty").val();
  let total = $this.find(".cart-item-total").html();
  let extra = $this.find(".extra").html();
  let without = $this.find(".without").html();
//  oneProduct.title = title;
//   oneProduct.price = price;
//   oneProduct.quantity=quantity;
//   oneProduct.total=total;
//  oneProduct.extra=extra;
  // oneProduct.without=without;
  //console.log(title);
  //console.log(price);
 //console.log(quantity);
 //console.log(total);
  //console.log(extra);
 //console.log(without);
 await products.push(oneProduct={
  title: title,
  price:price,
  quantity:quantity,
  total:total,
  extra:extra,
  without:without
 });

console.log(oneProduct)
console.log(products)
// window.localStorage.getItem('oneProduct')
});
console.log(products)
// if(localStorage.getItem("products") != null){
//   // localStorage.setItem("products", '[]');
//   localStorage.removeItem("products");
//   }else{
//     localStorage.setItem("products", '[]');
//   }
localStorage.setItem('products',JSON.stringify(products));
products=[];
location.href = "proceesingpage.html";
});
});

