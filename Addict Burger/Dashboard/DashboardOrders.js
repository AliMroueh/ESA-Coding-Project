const toggle2 = document.querySelector('.toggle');
const navigator2 = document.querySelector('.navigator');
const main2 = document.querySelector('.main');

toggle2.onclick = function(){
    navigator2.classList.toggle('active')
    main2.classList.toggle('active')
}



fetch('http://localhost:90/testDelivery/Dashboard/orderDashborad.php')
.then(response1 => response1.json())
.then(data => {
   console.log(data)
   
//create table head
    let table_head =  ``;
      for(i in data[0]){
        if(/\d/.test(i) == false){
            table_head += `<th>${i}</th>` ;
        }        
        
console.log(/\d/.test(i))
      }
      table_head = `<thead><tr>${table_head}</tr></thead>`;
     //----
    //Create table body

     let table_body = `` ;
     for(i in data){
       table_body += 
       `<tr>
       <td>${data[i].OrderId}</td>
       <td>${data[i].status}</td>
       <td>${data[i].orderType}</td>
       <td>${data[i].customerName}</td>
       <td>${data[i].timeOrder}</td>
       <td>${data[i].phoneNumber}</td>
       <td>${data[i].dateDelivery}</td>
       <td>${data[i].address}</td>
       <td>${data[i].city}</td>
       <td>${data[i].deliveryPrice}</td>
       <td>${data[i].nbOfTable}</td>
       <td>${data[i].message}</td>
       </tr>
       ` ;
   
   }
  table_body = `<tbody><tr>${table_body}</tr></tbody>`;


   const table = document.querySelector("#data-table");
    //table.id="nour";
    //table.classList= "table table-striped table-dark"
   table.innerHTML = 
   ` <table class="table table-striped" id="data-table">
   
        ${table_head}
        ${table_body}
    </table>
   `;
   

            
})