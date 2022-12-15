
document.getElementById("btn").onclick = () =>
{
    let First =document.forms["myform"]["fname"].value;
    let ftime =document.forms["myform"]["ftime"].value;
    let fphone=document.forms["myform"]["fphone"].value;
    let fdate=document.forms["myform"]["fdate"].value;
    let fcity=document.forms["myform"]["fcity"].value;
    let faddress=document.forms["myform"]["faddress"].value;

    if(First == "")
    {  console.log('first name')
        alert("name must be filed out");
    document.forms["myform"]["fname"].style.border='2px solid red';
    document.forms["myform"]["fname"].placeholder='please enter a full name';
    document.getElementsByClassName('remarq')[0].style.display='block';
    
    } else if (ftime == ""){
        alert("ftime must be filed out");
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
    
        
    } else if (fcity == "select a city"){
        console.log(fcity)
        alert("city must be filed out");
        document.forms["myform"]["fcity"].style.border='2px solid red';
        document.forms["myform"]["fcity"].placeholder='please enter the city';
        document.getElementsByClassName('remarq')[4].style.display='block';
    
        
    }else if (faddress == ""){
        alert("ftime must be filed out");
        document.forms["myform"]["faddress"].style.border='2px solid red';
        document.forms["myform"]["faddress"].placeholder='please enter the address';
        document.getElementsByClassName('remarq')[5].style.display='block';
        return false;
        
    }else { window.location.href="orderSummary.html";
}
    

 }


// const productDelivery = JSON.parse(localStorage.getItem('products'));
// console.log(productDelivery);
// let prodtName=document.textContent=productDelivery.price[1];
// console.log(prodtName)

// // $("productDelivery").each(async function() {

// // let productName1 = JSON.parse(localStorage.getItem('title'));
// // let productPrice = JSON.parse(localStorage.getItem.price('productDelivery'));
// // let productQuantity = JSON.parse(localStorage.getItem.quantity ('productDelivery'));
// // let productTotal =  JSON.parse(localStorage.getItem.total('productDelivery'));
// // console.log(productPrice);

// // });

// let products1 = {};
// if (localStorage.getItem("products")) {
//     products1 = JSON.parse(localStorage.getItem("products"));
// }

// let tbody = document.getElementById("tbody");

// for (let id in products1) {
//     let item = products1[id];

//     let tr = document.createElement('tr')

//     let title_td = document.createElement('td')
//     title_td.textContent = item.title
//     tr.appendChild(title_td)


//     let price_td = document.createElement("td");
//     price_td.textContent = item.price;
//     tr.appendChild(price_td);

//     let qty_td = document.createElement("td");
//     qty_td.textContent = item.quantity;
//     tr.appendChild(qty_td);

//     let total_td = document.createElement("td");
//     total_td.textContent = item.total;
//     tr.appendChild(total_td);

//     let extra_td = document.createElement("td");
//     extra_td.textContent = item.extra;
//     tr.appendChild(extra_td);

//     let without_td = document.createElement("td");
//     without_td.textContent = item.without;
//     tr.appendChild(without_td);
 
    
//     tbody.appendChild(tr)

// }



// $countext= count($arrayExtra);
//         for($i=0; $i<$countext; $i++){
//             $extId=$arrayExtra[$i];
//             try{
//                 $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//                 $sql = "INSERT INTO `products_extras`(product_Id, extra_Id)  VALUES ('$LAST_ID', '$extId')";
//                 $con->exec($sql);

//             }catch(PDOException $e){
//                 echo $e->getMessage();
//             }
//             }
//             // echo json_encode($arrayExtra);
        
