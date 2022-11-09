
  // Menu Toggle
  const toggle1 = document.querySelector('.toggle');
  const navigator = document.querySelector('.navigator');
  const main = document.querySelector('.main');
  
  toggle1.onclick = function(){
      navigator.classList.toggle('active')
      main.classList.toggle('active')
  }

let all = JSON.parse(localStorage.getItem("category"));
console.log(all)
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
        if(lii[i].innerText.slice(0,lii[i].innerText.indexOf('X')) != txt.value.trim()){
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
if(del.children.length != 0){
    // loop through all li
    for(i=0; i<del.children.length; i++){
        // delete the li ingredient when press on X span
        del.children[i].onclick = (e) => {
            if(e.target.innerHTML == 'X'){
                e.target.parentNode.remove();
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

bog(selector_admin_food_cat,down_admin_food_cat,up_admin_food_cat,list_admin_food_cat,li_admin_food_cat,p_admin_food_cat);

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
let imageContainer = document.getElementById('images');
let numOfFiles = document.getElementById('num-of-files');

//   Start function for images
const preview = () =>{
// empty imageContainer
imageContainer.innerHTML = "";
// check if there is more than 4 images
if(fileInput.files.length > 4 ){
alert('You can not choose more than 4 images')
}else{
numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

for(i of fileInput.files){
let reader = new FileReader();
let figure = document.createElement("figure");
let figCap = document.createElement("figcaption");

figCap.innerText = i.name;
figure.appendChild(figCap);
reader.onload = () => {
    let img = document.createElement("img");
    img.setAttribute("src", reader.result);
    // insert img before figCap
    figure.insertBefore(img, figCap);
}
imageContainer.appendChild(figure);
// readAsDataURL(blob) – read the binary data and encode it as base64 data url.
reader.readAsDataURL(i);
console.log(imageContainer)
}
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
let Allimages = document.querySelectorAll('#images figure img');
let name_not_exist = true;
let radioButtons = document.querySelectorAll('.typeCategories input[name="category"]');
var ischecked = false;
// check the data if they are good

// check if type of category is chosen
  for(const radioButton of radioButtons){
    if(radioButton.checked==true){
        ischecked = true;
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
let ingredients_li = [];
let Images = [];

for(i=1;i<=ingredients.children.length;i++){
ingredients_li.push(ingredients.childNodes[i].innerHTML.slice(0,ingredients.childNodes[i].innerHTML.indexOf('<span')))
}
for(x=0;x<Allimages.length;x++){
Images.push(Allimages[x].src)
}

let obj={
name: Name,
price: Price,
ingredients: ingredients_li,
category:Category,
images: Images,
numReview: 0,
numOrders: 0
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
    old_data.push(obj);
    // save the old + new data to local storage
    let new_data = JSON.stringify(old_data);
    localStorage.setItem("products",new_data);
    location.reload();
}

}
}