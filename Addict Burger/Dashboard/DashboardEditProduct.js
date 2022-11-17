const products = JSON.parse(localStorage.getItem('products'));
let oneProduct = '';
let pId = window.location.href.slice(window.location.href.indexOf('id=')+3, window.location.href.lastIndexOf('%'));

oneProduct = products.filter(e => e.id == pId)

let Name = document.getElementById('ProductName');
let Price = document.getElementById('ProductPrice');
let AddProduct = document.getElementById('AddProduct');
let ingredients = document.getElementById('ingredients');
let Category = document.querySelector('#addItem p').innerHTML;
// let Allimages = document.querySelectorAll('#images figure img');
let Allimages = document.querySelectorAll('#images .slider span img');
let name_not_exist = true;
let radioButtons = document.querySelectorAll('.typeCategories input[name="category"]');
let ul1 = document.querySelector(".container-body .form form .ingrds-div .ingrds-ul");
const p_admin_food_cat1 = document.querySelector('.container-body .top .category.admin-food-cat .selector p');
let typeCategories1 = document.querySelector('.typeCategories');
let all = JSON.parse(localStorage.getItem("category"));
let ext = JSON.parse(localStorage.getItem("extra"));
let typeExtra1 = document.querySelector('.typeExtra');

Name.value = oneProduct[0].name;
Price.value = oneProduct[0].price;
oneProduct[0].ingredients.forEach(ele =>{ 
    ul1.insertAdjacentHTML("beforeend",
    `<li class="li">${ele.name}<span class="${ele.allowDeny? 'activate' : ''}">Allow Deny</span><span class="span">X</span></li>`
    )
    // check the ul is not empty
if(ul1.children.length != 0){
    // loop through all li
    for(i=0; i<ul1.children.length; i++){
        // delete the li ingredient when press on X span
        ul1.children[i].onclick = (e) => {
            if(e.target.innerHTML == 'X'){
                e.target.parentNode.remove();
            }else if(e.target.innerHTML == 'Allow Deny'){
              // toggle for allow to deny the item in the cart item menu
              e.target.classList.toggle('activate')
            }
    }
}
}
}
    )
p_admin_food_cat1.innerText = oneProduct[0].category.name;
if(p_admin_food_cat1.innerText == 'Foods'){
    console.log('Foods')
    typeCategories1.innerHTML = '';
    for(i=0;i<all.food_cat.length;i++){
        if(oneProduct[0].category.type == all.food_cat[i]){
        typeCategories1.insertAdjacentHTML('beforeend',
            `<input type="radio" name="category" checked id="${i}" value="${all.food_cat[i]}">
            <label for="${i}">${all.food_cat[i]}</label>`
        )
    }else{
        typeCategories1.insertAdjacentHTML('beforeend',
            `<input type="radio" name="category" id="${i}" value="${all.food_cat[i]}">
            <label for="${i}">${all.food_cat[i]}</label>`
        )
    }
}
  }else if(p_admin_food_cat1.innerText == 'Drinks'){
    console.log('Drinks')
    typeCategories1.innerHTML = '';
    for(i=0;i<all.drink_cat.length;i++){
        if(oneProduct[0].category.type == all.drink_cat[i]){
            typeCategories1.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" checked id="${i}" value="${all.food_cat[i]}">
                <label for="${i}">${all.drink_cat[i]}</label>`
            )
        }else{
            typeCategories1.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" id="${i}" value="${all.drink_cat[i]}">
                <label for="${i}">${all.drink_cat[i]}</label>`
            )
        }
    }
  }else{
    typeCategories1.innerHTML = '';
  }
if(oneProduct[0].extras.length>0){
    oneProduct[0].extras.forEach(e=>
        typeExtra1.insertAdjacentHTML('beforeend', 
      `<p class="flexExtra">${e.name}<span>${e.price}</span><span class="cursor">X</span></p>`
      )
        )
}

let fileInput1 = document.getElementById('file-input');
let numOfFiles1 = document.getElementById('num-of-files');
let button1 = document.getElementById('button');

const preview1 = () =>{
  let images = document.createElement('div');
  images.id = 'images';
  let slider = document.createElement('div');
  slider.className = 'slider';
  let x=0;

  for(i=0;i<oneProduct[0].images.length;i++){
    x++;
    if(oneProduct[0].images.length == 1 ){
      slider.insertAdjacentHTML('beforeend', `
      <span><img src="${oneProduct[0].images[i]}" alt=""></span>
      `)
    }else{
    slider.insertAdjacentHTML('beforeend', `
    <span style="transform: rotateY(calc(${x}* ${360/oneProduct[0].images.length}deg)) translateZ(200px);"><img src="${oneProduct[0].images[i]}" alt=""></span>
    `)
    }
  }
  images.appendChild(slider);
  button1.insertAdjacentElement('beforebegin', images)

  }
  preview1()
console.log(oneProduct)
console.log(oneProduct[0].name)


  // Menu Toggle
  const toggle1 = document.querySelector('.toggle');
  const navigator = document.querySelector('.navigator');
  const main = document.querySelector('.main');
  
  toggle1.onclick = function(){
      navigator.classList.toggle('active')
      main.classList.toggle('active')
  }


const btn = document.querySelector(".container-body .form form .addIngrd button");
const txt = document.querySelector(".container-body .form form .addIngrd input");
let typeCategories = document.querySelector('.typeCategories');

let add_remove_ingredients = () => {
let txt = document.querySelector(".container-body .form form .addIngrd input");
const btn = document.querySelector(".container-body .form form .addIngrd button");
let ul = document.querySelector(".container-body .form form .ingrds-div .ingrds-ul");
let lii = document.querySelectorAll(".container-body .form form .ingrds-div .ingrds-ul li");
const del = document.querySelector(".container-body .form form .ingrds-div .ingrds-ul");
let not_exist = true;
// check if the txt is not empty
if(txt.value.trim() != ''){
// check if there is li
if(lii.length != 0){
    // check if there is common name in the li 
    for(i=0;i<lii.length;i++){
        if(lii[i].innerText.slice(0,lii[i].innerText.indexOf('Allow')).toLowerCase() != txt.value.trim().toLowerCase()){
            not_exist = true;
        }else{
            not_exist = false;
            // go out side function if there is common
            break;
        }
    }
    // if there is no common then add it
        if(not_exist){
            // add li to ul
            ul.innerHTML += `<li class="li">${txt.value}<span>Allow Deny</span><span class="span">X</span></li>`;
        // clean the txt
        txt.value = '';
        }else{

        }
    }else{
        // add li to ul
        ul.innerHTML += `<li class="li">${txt.value}<span>Allow Deny</span><span class="span">X</span></li>`;
        // clean the txt
        txt.value = '';
    }


// check the ul is not empty
if(del.children.length != 0){
    // loop through all li
    for(i=0; i<del.children.length; i++){
        // delete the li ingredient when press on X span
        del.children[i].onclick = (e) => {
            if(e.target.innerHTML == 'X'){
                e.target.parentNode.remove();
            }else if(e.target.innerHTML == 'Allow Deny'){
              // toggle for allow to deny the item in the cart item menu
              e.target.classList.toggle('activate')
            }
    }
}
}
}else{
txt.value = '';
}
}
//   Activate the function when press enter
txt.addEventListener("keypress",  (e) => {
if (e.key === "Enter"){ 
add_remove_ingredients()
}
});
btn.addEventListener("click", add_remove_ingredients);

// Admin select box
const selector_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector');
const p_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector p');
const down_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector .down');
const up_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat .selector .up');
const list_admin_food_cat = document.querySelector('.container-body .top .category.admin-food-cat #list');
const li_admin_food_cat = document.querySelectorAll('.container-body .top .category.admin-food-cat #list li')

bog1(selector_admin_food_cat,down_admin_food_cat,up_admin_food_cat,list_admin_food_cat,li_admin_food_cat,p_admin_food_cat,oneProduct);

// choose food categories for edit page
function bog1(one,two,three,four,five,sex){
one.onclick = (e) => {
two.classList.toggle('disabled');
three.classList.toggle('disabled');
four.classList.toggle('disabled');
}

five.forEach(element => {
element.onclick = (e) => {
  sex.innerText = element.innerText;
  two.classList.toggle('disabled');
  three.classList.toggle('disabled');
  four.classList.toggle('disabled'); 
  if(sex.innerText == 'Foods'){

    typeCategories1.innerHTML = '';
    for(i=0;i<all.food_cat.length;i++){
        if(oneProduct[0].category.type == all.food_cat[i]){
            typeCategories1.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" checked id="${i}" value="${all.food_cat[i]}">
                <label for="${i}">${all.food_cat[i]}</label>`
            )
        }else{
            typeCategories1.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" id="${i}" value="${all.food_cat[i]}">
                <label for="${i}">${all.food_cat[i]}</label>`
            )
        }
    }
  }else if(sex.innerText == 'Drinks'){
    
    typeCategories1.innerHTML = '';
    for(i=0;i<all.drink_cat.length;i++){

        if(oneProduct[0].category.type == all.drink_cat[i]){
            typeCategories1.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" checked id="${i}" value="${all.drink_cat[i]}">
                <label for="${i}">${all.drink_cat[i]}</label>`
            )
        }else{
            typeCategories1.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" id="${i}" value="${all.drink_cat[i]}">
                <label for="${i}">${all.drink_cat[i]}</label>`
            )
        }
    }
  }else{
    typeCategories1.innerHTML = '';
  }
}
});
}
// choose food categories
function bog(one,two,three,four,five,sex){
    one.onclick = (e) => {
    two.classList.toggle('disabled');
    three.classList.toggle('disabled');
    four.classList.toggle('disabled');
    }
    
    five.forEach(element => {
    element.onclick = (e) => {
      sex.innerText = element.innerText;
      two.classList.toggle('disabled');
      three.classList.toggle('disabled');
      four.classList.toggle('disabled'); 
      if(sex.innerText == 'Foods'){
        console.log('Foods')
        typeCategories.innerHTML = '';
        for(i=0;i<all.food_cat.length;i++){
            typeCategories.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" id="${i}" value="${all.food_cat[i]}">
                <label for="${i}">${all.food_cat[i]}</label>`
            )
        }
      }else if(sex.innerText == 'Drinks'){
        console.log('Drinks')
        typeCategories.innerHTML = '';
        for(i=0;i<all.drink_cat.length;i++){
            typeCategories.insertAdjacentHTML('beforeend',
                `<input type="radio" name="category" id="${i}" value="${all.drink_cat[i]}">
                <label for="${i}">${all.drink_cat[i]}</label>`
            )
        }
      }else{
        typeCategories.innerHTML = '';
      }
    //   console.log(sex.innerText)
    }
    });
    }
let fileInput = document.getElementById('file-input');
let numOfFiles = document.getElementById('num-of-files');
let button = document.getElementById('button');

const preview = () =>{
  let imageContainer = document.getElementById('images');
  // empty imageContainer
  // delete the images if exists
  if(imageContainer){
    imageContainer.remove()
  }
  
  // check if there is more than 4 images
  if(fileInput.files.length > 4 ){
  alert('You can not choose more than 4 images')
  }else if(fileInput.files.length == 0){
    // put the number of images selected
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;
    // delete the images if exists
    if(imageContainer){
      imageContainer.remove()
    }
  }else{

  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

  let x=0;
  let images = document.createElement('div');
  images.id = 'images';
  let slider = document.createElement('div');
  slider.className = 'slider';

  for(i=0;i<fileInput.files.length;i++){

  let reader = new FileReader();

  reader.onload = () => {
    x++;

    if(fileInput.files.length == 1 ){
      slider.insertAdjacentHTML('beforeend', `
      <span><img src="${reader.result}" alt=""></span>
      `)
    }else{
    slider.insertAdjacentHTML('beforeend', `
    <span style="transform: rotateY(calc(${x}* ${360/fileInput.files.length}deg)) translateZ(200px);"><img src="${reader.result}" alt=""></span>
    `)
    }
  }
  // readAsDataURL(blob) – read the binary data and encode it as base64 data url.
  reader.readAsDataURL(fileInput.files[i]);
  }
  images.appendChild(slider);
  button.insertAdjacentElement('beforebegin', images)

  }
  }

//   End function for images

// Start Add the product to local storage
AddProduct.onclick = () => {
let Name = document.getElementById('ProductName').value;
let Price = document.getElementById('ProductPrice').value;
let AddProduct = document.getElementById('AddProduct');
let ingredients = document.getElementById('ingredients');
let Category = document.querySelector('#addItem p').innerHTML;
// let Allimages = document.querySelectorAll('#images figure img');
let Allimages = document.querySelectorAll('#images .slider span img');
let name_not_exist = true;
let radioButtons = document.querySelectorAll('.typeCategories input[name="category"]');
let typeExtra = document.querySelector('.typeExtra');
let ischecked = false;

// check the data if they are good

// check if type of category is chosen
  for(const radioButton of radioButtons){
    if(radioButton.checked==true){
        ischecked = true;
        catType = radioButton.value;
    }
}

if(Name.trim() == ''){
alert("Please Enter The Item's Name")
}else if(Price.trim() == ''){
alert("Please Enter The Item's Price")
}else if(ingredients.children.length == 0){
alert("Please Enter The Ingredients")
}else if(Category.trim() == '-- Please choose category'){
alert("Please Enter The Item's Category")
}else if(ischecked==false && Category.trim() !== 'Special Offers'){
alert("Please Enter The category type")
}else if(Allimages.length == 0){
alert("Please Enter The Item's Images")
}else{
let eachIngreds = {
  name: '',
  allowDeny: ''
}
let ingredients_li = [];
let Images = [];
let check = false;
theExtras = [];

for(i=1;i<=ingredients.children.length;i++){
  console.log(ingredients.childNodes[i].innerHTML);
  check = ingredients.childNodes[i].innerHTML.includes('activate');
  console.log(check);
  eachIngreds.allowDeny = check;
  eachIngreds.name = ingredients.childNodes[i].innerHTML.slice(0,ingredients.childNodes[i].innerHTML.indexOf('<span'));
  ingredients_li.push({name:ingredients.childNodes[i].innerHTML.slice(0,ingredients.childNodes[i].innerHTML.indexOf('<span')),
allowDeny:check})
}

if(typeExtra.children.length > 0){
  for(i=1;i<=typeExtra.children.length;i++){
    console.log(typeExtra.childNodes[i].innerHTML.slice(0,typeExtra.childNodes[i].innerHTML.indexOf('<span>')));
    console.log(typeExtra.childNodes[i].innerHTML.slice(typeExtra.childNodes[i].innerHTML.indexOf('>')+1,typeExtra.childNodes[i].innerHTML.indexOf('</span>')))
    theExtras.push({name: typeExtra.childNodes[i].innerHTML.slice(0,typeExtra.childNodes[i].innerHTML.indexOf('<span>')),
  price: typeExtra.childNodes[i].innerHTML.slice(typeExtra.childNodes[i].innerHTML.indexOf('>')+1,typeExtra.childNodes[i].innerHTML.indexOf('</span>'))})

  }
}

for(x=0;x<Allimages.length;x++){
Images.push(Allimages[x].src)
}

let obj={
id: parseInt(pId),
name: Name,
price: Price,
ingredients: ingredients_li,
category:{name:Category,type:catType},
extras:theExtras,
images: Images,
numReview: 0,
numOrders: 0,
love: 0
};

// if there is no save at start then save an empty array
if(localStorage.getItem("products") == null){
localStorage.setItem("products", '[]');
}

// get old data
let old_data = JSON.parse(localStorage.getItem("products"));
// loop through old data and check if the name is already exist
for(y=0;y<old_data.length;y++){
if(old_data[y].name == obj.name){
   alert(`${obj.name} already exists`);
   name_not_exist = false;
   break;
}
}

// if the name is not already exist then add it to local storage or data base
if(name_not_exist){
    old_data = old_data.filter(element => element.id != parseInt(pId));
    old_data.push(obj);
    // save the old + new data to local storage
    let new_data = JSON.stringify(old_data);
    localStorage.setItem("products",new_data);
    // location.reload();
}

}
}


// Admin select box
const selector_extra = document.querySelector('.container-body .top .category.extra .selector');
const p_extra = document.querySelector('.container-body .top .category.extra .selector p');
const down_extra = document.querySelector('.container-body .top .category.extra .selector .down');
const up_extra = document.querySelector('.container-body .top .category.extra .selector .up');
const list_extra = document.querySelector('.container-body .top .category.extra #list');
const li_extra = document.getElementsByClassName('li-extra');
let is_not_exist1 = false;
let typeExtra = document.querySelector('.typeExtra');

console.log(ext)
// add extra to li
for(i=0;i<ext.length;i++){
    list_extra.insertAdjacentHTML('beforeend',
    `<li class="li-extra" data-price="${ext[i].productPrice}">${ext[i].productName}</li>`
    )
}

if(li_extra){
    bog(selector_extra,down_extra,up_extra,list_extra,li_extra,p_extra);
}


// choose food categories
function bog(one,two,three,four,five,sex){
one.onclick = (e) => {
two.classList.toggle('disabled');
three.classList.toggle('disabled');
four.classList.toggle('disabled');
}

Array.from(five).forEach(element => {
element.onclick = (e) => {
  two.classList.toggle('disabled');
  three.classList.toggle('disabled');
  four.classList.toggle('disabled'); 
  if(typeExtra.children.length != 0){
    del();
    for(i=0;i<typeExtra.children.length;i++){
        is_not_exist1 = typeExtra.children[i].innerHTML.includes(element.innerText);
        console.log(typeExtra.children[i].getElementsByClassName('cursor'))      
        if(is_not_exist1 == true){
            break;
        }
      }
      !is_not_exist1 && typeExtra.insertAdjacentHTML('beforeend', 
      `<p class="flexExtra">${element.innerText}<span>${element.dataset.price}</span><span class="cursor">X</span></p>`
      )

  }else{
    typeExtra.insertAdjacentHTML('beforeend', 
  `<p class="flexExtra">${element.innerText}<span>${element.dataset.price}</span><span class="cursor">X</span></p>`
  )
  }
del()
}
});
}
function del(){
  let cur = document.getElementsByClassName('cursor')
  for(i=0;i<cur.length;i++){
    cur[i].addEventListener('click',(e) => {
      if(e.target.innerText == 'X'){
          console.log(cur.length)
          e.target.parentNode.remove()
          console.log(cur.length)
      }
    }
    )
  }
}
del()



