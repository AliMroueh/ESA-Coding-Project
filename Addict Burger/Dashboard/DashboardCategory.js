
    let all = JSON.parse(localStorage.getItem("category"));
    let txt = document.querySelector(".addIngrd input");
    let btn = document.querySelector(".addIngrd button");
    let ul = document.querySelector(".ingrds-div.one .ingrds-ul");
    let lii = document.querySelectorAll(".ingrds-div .ingrds-ul li");
    let del = document.querySelector(".ingrds-div.one .ingrds-ul");

    
    let txt1 = document.querySelector(".addIngrd.two input");
    const btn1 = document.querySelector(".addIngrd.two button");
    let ul1 = document.querySelector(".ingrds-div.two .ingrds-ul");

    const save_change = document.querySelector('.save_change');

    // console.log(all.food_cat)
    // console.log(all.drink_cat)
    let add_span = (content,position) => {
        for(i=0;i<content.length;i++){
        position.innerHTML += `<li class="li">${content[i]}<span class="span">X</span></li>`;
    }
    }
    if(all != null){
    add_span(all.food_cat,ul)
    add_span(all.drink_cat,ul1)}
    // for(x=0;x<all.drink_cat.length;x++){
    //     ul1.innerHTML += `<li class="li">${all.drink_cat[x]}<span class="span">X</span></li>`;
    // }
    
    let remove_span = (ul) =>{
        if(ul.children.length != 0){
            // loop through all li
            for(i=0; i<ul.children.length; i++){
                // delete the li ingredient when press on X span
                ul.children[i].onclick = (e) => {
                    if(e.target.innerHTML == 'X'){
                        e.target.parentNode.remove();
                    }
            }
        }
    }
    }
   remove_span(ul);
   remove_span(ul1);
   
    let add_remove_ingredients = (txt,btn,ul) => {
    let not_exist = true;
    // check if the txt is not empty
    if(txt.value.trim() != ''){
        // check if there is li
        if(ul.children.length != 0){
            // check if there is common name in the li 
            for(i=0;i<ul.children.length;i++){
                if(ul.children[i].innerText.slice(0,ul.children[i].innerText.indexOf('X')-1) != txt.value.trim()){
                    not_exist = true;
                }else{
                    not_exist = false;
                    // go out side function if there is common
                    break;
                }
                console.log(not_exist)
            }
            // if there is no common then add it
                if(not_exist){
                    // add li to ul
                ul.innerHTML += `<li class="li">${txt.value}<span class="span">X</span></li>`;
                // clean the txt
                txt.value = '';
                }else{

                }
            }else{
                // add li to ul
                ul.innerHTML += `<li class="li">${txt.value}<span class="span">X</span></li>`;
                // clean the txt
                txt.value = '';
            }
        
        
        // check the ul is not empty
        // remove span when click on X
        remove_span(ul);
}else{
        txt.value = '';
    }
  }


  //   Activate the function when press enter
  txt.addEventListener("keypress",  (e) => {
    if (e.key === "Enter"){ 
        add_remove_ingredients(txt,btn,ul)
    }
  });
  btn.addEventListener("click", () => {add_remove_ingredients(txt,btn,ul)});

    txt1.addEventListener("keypress",  (e) => {
    if (e.key === "Enter"){ 
        add_remove_ingredients(txt1,btn1,ul1)
    }
  });
  btn1.addEventListener("click", () => { add_remove_ingredients(txt1,btn1,ul1)});

    save_change.onclick = () =>{
        let food  = [];
        let drink = [];

        // console.log(document.querySelectorAll(".ingrds-div.two .ingrds-ul li"))
        let liFood = document.querySelectorAll(".ingrds-div.one .ingrds-ul li");
        let liDrink = document.querySelectorAll(".ingrds-div.two .ingrds-ul li");

        for(x=0;x<liDrink.length;x++){
            drink.push(liDrink[x].innerText.slice(0,liDrink[x].innerText.indexOf('X')-1))
        }
        for(i=0;i<liFood.length;i++){
            food.push(liFood[i].innerText.slice(0,liFood[i].innerText.indexOf('X')-1))
        }
        console.log(drink)
        console.log(food)
        let cats={
                food_cat: food,
                drink_cat: drink,
            };
            console.log(cats)
        localStorage.setItem("category", JSON.stringify(cats));
    }

    const toggle2 = document.querySelector('.toggle');
  const navigator2 = document.querySelector('.navigator');
  const main2 = document.querySelector('.main');
  
  toggle2.onclick = function(){
      navigator2.classList.toggle('active')
      main2.classList.toggle('active')
  }

const saveItem = document.querySelector('.container-body.two #addItem');
const itemName = document.getElementById('itemName');
const price = document.getElementById('price');
const bodyTwo = document.querySelector('.body.two');
const add_item = document.getElementById('add-item');
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

let Extra = localStorage.getItem('extra');
console.log(Extra)

// get old data
let old_data = JSON.parse(localStorage.getItem("extra"));
console.log(old_data)

if(old_data){
old_data.forEach(element => bodyTwo.insertAdjacentHTML('beforeend', 
`<div class="country_flex">
<p id="country_name">${element.productName}</p>
<p>${element.productPrice}</p>
<p class="close">X</p>
</div>`
))
}

delete_item();


const check_before_add = () => {
  if(bodyTwo.children.length != 0){
    for(i=0;i<bodyTwo.children.length;i++){
      if(bodyTwo.children[i].children[0].innerText.toLowerCase() == itemName.value.trim().toLowerCase()){
        is_not_exist = false;
        break;
      }else{
        is_not_exist = true;
      }
    }
  }

  if(!itemName.value.trim()){
    alert('Please Enter The Item Name') 
  }else if(!price.value.trim()){
  alert('Please Enter The Item Price')
  }else if(bodyTwo.children.length != 0 && is_not_exist || bodyTwo.children.length == 0 ){
    bodyTwo.insertAdjacentHTML('beforeend' , 
  `<div class="country_flex">
  <p id="country_name">${itemName.value}</p>
  <p>${price.value}</p>
  <p class="close">X</p>
  </div>`
  )
  }else{
    alert("Item Name already exists") 
  }
  // console.log(bodyTwo.children[0].children[0].innerText)

  itemName.value = '';
  price.value = '';
  delete_item();
}

add_item.addEventListener('click' , check_before_add);

saveItem.onclick = () => {

let arr = [];
let del = {
productName: itemName.value,
productPrice: price.value
};

  for(i=0;i<bodyTwo.children.length;i++){
    del = {
        productName: bodyTwo.children[i].children[0].innerText,
        productPrice: bodyTwo.children[i].children[1].innerText
      };
    arr.push(del)
  }
  localStorage.setItem("extra", JSON.stringify(arr))

}