const products = JSON.parse(localStorage.getItem('products'));
const cats = JSON.parse(localStorage.getItem('category'));
let searchInput = document.querySelector("[data-search]");
let allProducts = document.getElementsByClassName('product');
//   console.log(products)
//   console.log(cats)
searchInput.addEventListener('input', (e) => {
  value = e.target.value.toLowerCase();
  for(i=0;i<allProducts.length;i++){
    if(allProducts[i].querySelector('.info h2').textContent.toLowerCase().includes(value)){
      console.log(allProducts[i])
    allProducts[i].classList.remove('hide')
    }else{
      console.log('no match')
      allProducts[i].classList.add('hide')
    }
  }
})

products.map((element,i) => {
    let all = '';
    for(x=0;x<element.ingredients.length;x++){
        all += 
        element.ingredients[x].allowDeny ?
        `<span class="oneIngrd activate">${element.ingredients[x].name}</span>`
        : `<span class="oneIngrd">${element.ingredients[x].name}</span>`;
    }
    document.querySelector('.body.products').insertAdjacentHTML("beforeend",
        `<div class="product">
                <ion-icon class="edit" id="${element.id}" name="create-outline"></ion-icon>
                <ion-icon class="delete" id="${element.id}" name="trash-outline"></ion-icon>
                <img src="${element.images[0]}" alt="Burger1"/>
                <div class="info">
                    <h2>${element.name}</h2>
                    <span class="price">${element.price}<span>   L.L</span></span>
                    <div class="MyIngred">
                        ${all}
                        </div>
                    <p><span class="icon"><ion-icon name="receipt"></ion-icon></span> <span>${element.numOrders}</span> <span><ion-icon name="eye"></ion-icon></span> <span>${element.numReview}</span>
                    <span><ion-icon name="heart-circle"></ion-icon></span> <span>${element.love}</span>
                    </p>
                </div>
            </div> `
    )
    
});

console.log(products[1].name);
let newProducts = '';
let allDelete = document.querySelectorAll('ion-icon.delete');
let allEdit = document.querySelectorAll('ion-icon.edit');
let bodyProducts = document.querySelector('.body.products')
console.log(allDelete)

for(i=0;i<allDelete.length;i++){
  console.log(i)
  allDelete[i].addEventListener('click', (e)=>{
    bodyProducts.insertAdjacentHTML('beforeend',
    `<div class="approveDelete" id="approveDelete">
    <div id="appDel">
    <p>Are you sure you want to delete <span id="itemName">${e.target.parentNode.querySelector(".info h2").innerText}</span>?</p>
    <div id="faithButton">
        <span id="delete">Delete</span>
        <span id="close">Close</span>
    </div>
</div>
</div>`)
document.getElementById('delete').addEventListener('click', () => {
  newProducts = products.filter(element => element.id != e.target.id)
  localStorage.setItem('products', JSON.stringify(newProducts))
  location. reload()
})

document.getElementById('close').addEventListener('click', () => {
  console.log(  document.getElementsByClassName('approveDelete'))
  document.getElementById('approveDelete').remove();
})
  })
  allEdit[i].addEventListener("click", (e)=>{
    window.location.href = `DashboardEditProduct.html?id=${e.target.id}`;
  })
 
}


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
        list_all.insertAdjacentHTML('beforeend',`<li>All</li>`
        )
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