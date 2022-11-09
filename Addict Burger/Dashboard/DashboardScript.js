const products = JSON.parse(localStorage.getItem('products'));
const cats = JSON.parse(localStorage.getItem('category'));
//   console.log(products)
//   console.log(cats)
      products.forEach((element,i) => {
          let all = '';
          for(x=0;x<element.ingredients.length;x++){
              all += `<span class="oneIngrd">${element.ingredients[x]}</span>`;
          }
          document.querySelector('.body.products').insertAdjacentHTML("beforeend",
              `<div class="product">
                      <ion-icon class="edit" name="create-outline"></ion-icon>
                      <ion-icon class="delete" name="trash-outline"></ion-icon>
                      <img src="${element.images[0]}" alt="Burger1"/>
                      <div class="info">
                          <h2>${element.name}</h2>
                          <span class="price">${element.price}<span>   L.L</span></span>
                          <p class="MyIngred">
                              ${all}
                              </p>
                          <p><span class="icon"><ion-icon name="receipt"></ion-icon></span> <span>${element.numOrders}</span> <span><ion-icon name="eye"></ion-icon></span> <span>${element.numReview}</span></p>
                      </div>
                  </div> `
          )
          
      });

// Admin select box
const selector = document.querySelector('.container-body .top .category.food .selector');
const p = document.querySelector('.container-body .top .category.food .selector p');
const down = document.querySelector('.container-body .top .category.food .selector .down');
const up = document.querySelector('.container-body .top .category.food .selector .up');
const list = document.querySelector('.container-body .top .category.food #list');
const li = document.querySelectorAll('.container-body .top .category.food #list li');

// Admin select box
const selector_all = document.querySelector('.container-body .top .category.cat .selector');
const p_all = document.querySelector('.container-body .top .category.cat .selector p');
const down_all = document.querySelector('.container-body .top .category.cat .selector .down');
const up_all = document.querySelector('.container-body .top .category.cat .selector .up');
const list_all = document.querySelector('.container-body .top .category.cat #list');
const li_all = document.querySelectorAll('.container-body .top .category.cat #list li');

// open and close the left category
selector.onclick = () => {
  down.classList.toggle('disabled');
  up.classList.toggle('disabled');
  list.classList.toggle('disabled');
}

// add the types of categories in the right one after choose the category in the left one
li.forEach(element => {
  element.onclick = (e) => {
      p.innerText = element.innerText;
      if(element.innerText == "Foods"){
        list_all.innerHTML = '';
        cats.food_cat.forEach(element => {
          list_all.insertAdjacentHTML('beforeend',`<li>${element}</li>`
      )
        })
      p_all.innerText = 'All';
        
      }else if(element.innerText == "Drinks"){
        list_all.innerHTML = '';
        list_all.insertAdjacentHTML('beforeend',`<li>All</li>`
      )
      document.querySelector('.container-body .top .category.cat .selector p').innerText = 'All';
        cats.drink_cat.forEach(element => {
          list_all.insertAdjacentHTML('beforeend',`<li>${element}</li>`
      )
        })
      }else if(element.innerText == "Special Offers"){
        list_all.innerHTML = '';
      p_all.innerText = '----';
      }
      
      down.classList.toggle('disabled');
      up.classList.toggle('disabled');
      list.classList.toggle('disabled'); 
  }
});

// Adds the food category to the right category when load the page
cats.food_cat.forEach(element => {
  list_all.insertAdjacentHTML('beforeend',`<li>${element}</li>`
)
})
  

// open and close the right category and choose the type of the category
  selector_all.onclick = () => {
    down_all.classList.toggle('disabled');
    up_all.classList.toggle('disabled');
    list_all.classList.toggle('disabled');

  Array.from(list_all.children).forEach(element =>{
    element.onclick = (e) => {
        p_all.innerText = element.innerText;        
        down_all.classList.toggle('disabled');
        up_all.classList.toggle('disabled');
        list_all.classList.toggle('disabled'); 
    }
  }
  )
}

  // Menu Toggle
  const toggle1 = document.querySelector('.toggle');
  const navigator = document.querySelector('.navigator');
  const main = document.querySelector('.main');
  
  toggle1.onclick = function(){
      navigator.classList.toggle('active')
      main.classList.toggle('active')
  }


    // Admin select box
    const selector_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector');
    const p_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector p');
    const down_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector .down');
    const up_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector .up');
    const list_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat #list');
    const li_admin_food_cat = document.querySelectorAll('.container-body .top .category.admin-food-cat #list li')
  
    bog(selector_admin_food_cat,down_admin_food_cat,up_admin_food_cat,list_admin_food_cat,li_admin_food_cat,p_admin_food_cat);

   

  function bog(one,two,three,four,five,sex){
    one.onclick = () => {
      // console.log(e.target)
      two.classList.toggle('disabled');
      three.classList.toggle('disabled');
      four.classList.toggle('disabled');
      console.log(Array.from(four.children)[1].innerText)
      let new1 = document.querySelector('.container-body .top .category.admin-food-cat #list');
    }
    
    five.forEach(element => {
      element.onclick = (e) => {
          sex.innerText = element.innerText;
          two.classList.toggle('disabled');
          three.classList.toggle('disabled');
          four.classList.toggle('disabled'); 
      }
    });
  }
  



  // End Dashboard page

  // Start AddProductsPage 

  const text = document.querySelector(".container-body .form form .addIngrd input");
  const btn = document.querySelector(".container-body .form form .addIngrd button");
  const ul = document.querySelector(".container-body .form form .ingrds-div .ingrds-ul");
console.log('hello')
  btn.onclick = () =>{
    // console.log(text.value)
    ul.appendChild(`<li>${text.value}<span>X</span</li>`);
  }
  // End AddProductsPage

  // Start Delivery Page
  // const addCountry = document.querySelector('.container-body #addCountry');
  // addCountry.onclick = () => {
  //   console.log('hello')
  // }
  // End Delivery Page