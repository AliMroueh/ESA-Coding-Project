// Menu Toggle
const toggle1 = document.querySelector('.toggle');
const navigator = document.querySelector('.navigator');
const main = document.querySelector('.main');
const saveCountry = document.querySelector('.container-body #addCountry');
const country = document.querySelector(' #country');
const price = document.querySelector(' #price');
const bodyTwo = document.querySelector('.body.two');
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

let Delivery = localStorage.getItem('delivery');
console.log(Delivery)

// get old data
let old_data = JSON.parse(localStorage.getItem("delivery"));
console.log(old_data)

old_data.forEach(element => bodyTwo.insertAdjacentHTML('beforeend', 
`<div class="country_flex">
<p id="country_name">${element.countryName}</p>
<p>${element.countryPrice}</p>
<p class="close">X</p>
</div>`
))

delete_item();


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
    bodyTwo.insertAdjacentHTML('beforeend' , 
  `<div class="country_flex">
  <p id="country_name">${country.value}</p>
  <p>${price.value}</p>
  <p class="close">X</p>
  </div>`
  )
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
  }
  localStorage.setItem("delivery", JSON.stringify(arr))

}



