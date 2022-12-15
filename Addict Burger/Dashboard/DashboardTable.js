const toggle2 = document.querySelector('.toggle');
const navigator2 = document.querySelector('.navigator');
const main2 = document.querySelector('.main');

toggle2.onclick = function(){
    navigator2.classList.toggle('active')
    main2.classList.toggle('active')
}


fetch('http://localhost:90/AddictBurger/Dashboard/tableorder.php')
.then(response => response.json())
.then(data => {
   console.log(data)
   
//create table head
    let table_head = ``;
      for(i in data[0]){

        if(/\d/.test(i) == false){
          table_head += `<th>${i}</th>` ;
      }  
//console.log(i)
      }
      table_head = `<thead><tr>${table_head}</tr></thead>`;
      //console.log(  table_head)
     //----
    //Create table body

     let table_body = `` ;
     for(i in data){
       table_body += 
       `<tr>
       <td>${data[i].tableId}</td>
       <td>${data[i].nameCustomer}</td>
       <td>${data[i].numberTable}</td>
       <td>${data[i].numberPepole}</td>
       <td>${data[i].phone}</td>
       <td>${data[i].date}</td>
       <td>${data[i].time}</td>
       <td>${data[i].message}</td>
       <td>${data[i].userId}</td>
       <td>${data[i].status}</td>
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
fetch('http://localhost:90/testDelivery/get.php')
.then(response => response.json())
.then(data => {
        console.log(data)
        data.forEach(element => 
            document.querySelector('.info').insertAdjacentHTML('beforeend', `<div>${element.id}  ${element.name}
            <input type='text' id="updateText"/>
            <input type='button' value='edit' class='edit' id='${element.id}'/>
            <input type='button' value='delete' class='delete' id='${element.id}'/>
            </div>`)
        );
        let allDelete = document.getElementsByClassName('delete');
        let allEdit = document.getElementsByClassName('edit');

for(let i=0;i<allDelete.length;i++){
    allDelete[i].onclick = (e) => {
        console.log('hello')
            fetch(`http://localhost:90/testDelivery/delete.php?id=${e.target.id}`)
    
            .then((response) => response.json())
    
            .then((repositories) => {
                console.log(repositories);
            }).catch((error) => {
              console.error('Error:', error);
            });
            location.reload()
        }

    allEdit[i].onclick = (e) => {
        let data = {
            id: e.target.id,
            name: e.target.parentNode.querySelector('#updateText').value
        }
        fetch(`http://localhost:90/FetchExercices/update.php`
        , {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
        )
        .then((response2) => response2.json())
      
        .then((repositories) => {
            location.reload();
            // console.log(repositories);
        }).catch((error) => {
          console.error('Error:', error);
        });
    }
        
}
}
    ).catch((error) => {
      console.error('Error:', error);
    });
