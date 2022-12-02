
// Start fetch 
const bodyTwo = document.querySelector('.body.two');

const save = async () => {
await fetch('http://localhost/addictBurger/getCountry.php', {
  method: 'GET', // or 'PUT'
  // mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);

    // get all the country and put them in the page
    data.forEach((ele,i) => {
    bodyTwo.insertAdjacentHTML('beforeend' , 
  `<div class="country_flex">
  <p id="country_name">${ele.countryName}</p>
  <p id="country_price">${ele.countryPrice}</p>
  <p>
  <span id="${ele.countryId}" class="edit1">edit</span>
  <span id="${ele.countryId}" class="delete1">delete</span>
  </p>
  </div>`
  )
}
    )

    let allDelete1 = document.querySelectorAll('.main form .body .country_flex span.delete1');
    let allEdit1 = document.querySelectorAll('.main form .body .country_flex span.edit1');
    let main = document.querySelector('.main')

    // iterate through all the country and do action on them (delete, edit)
  for(i=0;i<allDelete1.length;i++){
    // Delete every country when press on each one of them 
    allDelete1[i].addEventListener('click', (e)=>{
      main.insertAdjacentHTML('beforeend',
      `<div class="approveDelete" id="approveDelete">
      <div id="appDel">
      <p>Are you sure you want to delete <span id="itemName">${e.target.parentNode.parentNode.querySelector("#country_name").innerText}</span>?</p>
      <div id="faithButton">
          <span id="delete">Delete</span>
          <span id="close">Close</span>
      </div>
  </div>
  </div>`);

  document.getElementById('delete').addEventListener('click', () => {
    // newProducts = products.filter(element => element.id != e.target.id)
    // localStorage.setItem('products', JSON.stringify(newProducts))
    fetch(`http://localhost/addictBurger/deleteCountry.php?id=${e.target.id}`)

    .then((response) => response.json())

    .then((repositories) => {
        console.log(repositories);
    })
    location.reload()
  })
  
  document.getElementById('close').addEventListener('click', () => {
    document.getElementById('approveDelete').remove();
  })

})
// Edit each country and price
  allEdit1[i].addEventListener("click", (e)=>{
    main.insertAdjacentHTML('beforeend',
    `<div class="approveDelete" id="approveDelete">
    <div id="appDel">
    <input type="text" id="count_name" value="${e.target.parentNode.parentNode.querySelector('#country_name').innerText}" placeholder="Country Name"/>
    <input type="number" id="count_price" type="number" min="0" value="${e.target.parentNode.parentNode.querySelector('#country_price').innerText}" placeholder="Country Price"/>
    <div id="faithButton">
        <span id="edit" class="${e.target.id}">Edit</span>
        <span id="close">Close</span>
    </div>
</div>
</div>`)
document.getElementById('edit').addEventListener('click', (e) => {
  // newProducts = products.filter(element => element.id != e.target.id)
  // localStorage.setItem('products', JSON.stringify(newProducts))
  const countryUpdate = {countryId:e.target.className,countryName: e.target.parentNode.parentNode.querySelector('#count_name').value.trim(),countryPrice: e.target.parentNode.parentNode.querySelector('#count_price').value.trim()};
  // const countryUpdate = {countryId: "181",countryName:"poppies",countryPrice:"2580"};

  // const data = {countryName: country.value.trim(),countryPrice: price.value.trim()};
  // console.log(countryUpdate);
  // console.log(JSON.stringify(countryUpdate))
  // console.log(e.target.className)
  fetch(`http://localhost/addictBurger/updateCountry.php`
  , {
    method: 'PUT', // or 'PUT'
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(countryUpdate),
  }
  )

  .then((response2) => response2.json())

  .then((repositories) => {
    // console.log(countryUpdate)
      console.log(repositories);
  }).catch((error) => {
    console.error('Error:', error);
  });
  // location.reload()
  if(e.target.parentNode.parentNode.querySelector("#count_name").value.trim() == ''){
    console.log(e.target.parentNode.parentNode.querySelector('#count_name').value.trim())
    alert('Country name can not be empty')
  }else if(e.target.parentNode.parentNode.querySelector('#count_price').value.trim() == ''){
    alert('Country price can not be empty')
  }else{
    console.log('edit it')
  }
  
})

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('approveDelete').remove();
})
  })
   
  }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

save();


// let file = "http://localhost/addictBurger/getCountry.php"
// fetch (file)
// .then(x => x.text())
// .then(y => console.log(y) );

//  // Creating the XMLHttpRequest object
//  var request = new XMLHttpRequest();

//  // Instantiating the request object
//  request.open("GET", "http://localhost/addictBurger/getCountry.php");

//  // Defining event listener for readystatechange event
//  request.onreadystatechange = function() {
//      // Check if the request is compete and was successful
//      if(this.readyState === 4 && this.status === 200) {
//          // Inserting the response from server into an HTML element
//          console.log(this.responseText);
//      }
//  };

//  // Sending the request to the server
//  request.send();


// End fetch


// Menu Toggle
const toggle1 = document.querySelector('.toggle');
const navigator = document.querySelector('.navigator');
const main = document.querySelector('.main');
const saveCountry = document.querySelector('.container-body #addCountry');
const country = document.querySelector('#country');
const price = document.querySelector('#price');
const add_country = document.getElementById('add-country');
let is_not_exist = true;
let name_not_exist = true;

const delete_item = () => {
  if(bodyTwo.children.length != 0){
    let remove_span = (ul) =>{
      if(ul.children.length != 0){
        console.log(ul.children)
          // loop through all li
          for(i=0; i<ul.children.length; i++){
              // delete the li ingredient when press on X span
              ul.children[i].onclick = (e) => {
                  if(e.target.innerText == 'X'){
                    console.log(e.target.innerText)
                      e.target.parentNode.remove();
                  }
          }
      }
    }
    }
    remove_span(bodyTwo);
  }
}

toggle1.onclick = function(){
navigator.classList.toggle('active')
main.classList.toggle('active')
}

// let Delivery = localStorage.getItem('delivery');
// console.log(Delivery)

// get old data
// if(Delivery){
// let old_data = JSON.parse(localStorage.getItem("delivery"));
// // console.log(old_data)

// old_data.forEach(element => bodyTwo.insertAdjacentHTML('beforeend', 
// `<div class="country_flex">
// <p id="country_name">${element.countryName}</p>
// <p>${element.countryPrice}</p>
// <p class="close">X</p>
// </div>`
// ))

// delete_item();
// }

const check_before_add = () => {
  if(bodyTwo.children.length != 0){
    for(i=0;i<bodyTwo.children.length;i++){
      if(bodyTwo.children[i].children[0].innerText.toLowerCase() == country.value.trim().toLowerCase()){
        is_not_exist = false;
        break;
      }else{
        is_not_exist = true;
      }
    }
  }

  if(!country.value.trim()){
    alert('Please Enter The Country Name') 
  }else if(!price.value.trim()){
  alert('Please Enter The Country Price')
  }else if(bodyTwo.children.length != 0 && is_not_exist || bodyTwo.children.length == 0 ){
const data = {countryName: country.value.trim(),countryPrice: price.value.trim()};

fetch('http://localhost/addictBurger/insertCountry.php', {
  method: 'POST', // or 'PUT'
  // mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response1) => response1.json())
  .then((data) => {
    console.log('Success:', data);
    location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });



  }else{
    alert("Country Name already exists") 
  }
  // console.log(bodyTwo.children[0].children[0].innerText)

  country.value = '';
  price.value = '';
  delete_item();
}

add_country.addEventListener('click' , check_before_add);

saveCountry.onclick = () => {


let arr = [];
let del = {
countryName: country.value,
countryPrice: price.value
};

  for(i=0;i<bodyTwo.children.length;i++){
    del = {
      countryName: bodyTwo.children[i].children[0].innerText,
      countryPrice: bodyTwo.children[i].children[1].innerText
      };
    arr.push(del)
    const save = async () => {
      try{
         const res =await fetch('http://localhost/addictBurger/insertCountry.php', {
          mode: 'no-cors',
          method: 'POST',
          body: JSON.stringify({"countryName": bodyTwo.children[i].children[0].innerText,"countryPrice": bodyTwo.children[i].children[1].innerText}),
          headers: {
              'Content-Type': 'application/json',
          },
      })
    //   .then(data => data.ok && data.json()).then(response => {
    //     alert(response.status);
    // });
      // .then((response) => response)
      // .then((responseData) => {
      //       if(responseData.status == "ok"){
      //            alert("it worked");
      //       }else{
      //            alert("it didn't work");
      //       }
      // })
      // console.log(await res.json())
      // await console.log(res.json())
  
      // const output = await res.json();
      console.log(res)
      
      // if (output.success) {
      //   console.log('success')
      // }else{
      //   console.log("not success")
      // }
      }
      catch(error){
        console.log( "error " + error.message)
      }
      }
      save();
  }

  // localStorage.setItem("delivery", JSON.stringify(arr))

}



