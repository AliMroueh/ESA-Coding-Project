  // Start Add Products
let products = JSON.parse(localStorage.getItem('products'));
let cardContainer = document.querySelector('.row.row-cards');
console.log(products)

products.map(element => {
  cardContainer.insertAdjacentHTML('beforeend',
  `<div class="card filter-starters" style="width: 18rem; margin: 10px 0">
  <img src="${element.images[0]}" class="card-img-top h-50 d-inline-block" alt="..." style="margin-top: 10px;">
  <i class="bi bi-heart-fill love"></i>
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <h6>${element.price} L.L</h6>
    <div class="text-end">
      <button href="#" class="btn addto" data-id=${element.id}>+</button>
    </div>
  </div>
</div>`
  )
})

// add and remove love
let love = document.getElementsByClassName('love');
for(i=0;i<love.length;i++){
  love[i].addEventListener('click', (e)=>{
    console.log(e.target)
    e.target.classList.toggle('active_love')
  })
  
}

// End Add Products
  
let addto = document.querySelectorAll('.card .addto');
console.log(addto)

for(i=0;i<addto.length;i++){
  let btns = '';
  let imgs = '';
  let ingrds = '';
  let nIngrds = '';
  let extra = '';

addto[i].onclick = (e) =>{
  console.log(e.target.dataset.id)
  for(x=0;x<products.length;x++){
    if(products[x].id == e.target.dataset.id){
      products[x].ingredients.map((ing,x) =>{
        ing.allowDeny ? ingrds += `<div>
        <input type="checkbox" value="${ing.name}" id="${x}" checked/>
        <label for="${x}">${ing.name}</label>
      </div>` : nIngrds += `<div><label for="${x}">${ing.name}</label>
    </div>`;
      })
      if(products[x].extras){
      products[x].extras.map(ex => 
        extra += `<div>
      <input type="checkbox" value="${ex.price}" id="${ex.price}" class="extra"/>
      <label for="${ex.price}">${ex.name}</label>
      <label for="${ex.price}">: ${ex.price}</label>
    </div>`);
    // add the extra chosen price to the total price
      }
      products[x].images.map((ele,i) =>{ 
        
        if(i==0){
          btns+= `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`
          imgs+=`<div class="carousel-item active">
          <img src="${ele}" class="d-block w-100" alt="...">
          </div>`
        }else{
          btns+= `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="" aria-current="true" aria-label="Slide ${i+1}"></button>`
        imgs+=`<div class="carousel-item">
         <img src="${ele}" class="d-block w-100" alt="...">
         </div>`}
        });

  cardContainer.insertAdjacentHTML('beforeend',
  `<div class="item active">
  <div class="container">
    <i class="bi bi-x-lg"></i>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
       ${btns}
      </div>
      <div class="carousel-inner">
      ${imgs}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="info">
      <h1>${products[x].name}</h1>
      <h3><span id="pPrice">${products[x].price}</span> L.L</h3>
      <h2>Ingredients: </h2>
      <form action="" class="checkbox">
      ${nIngrds}
      ${ingrds}
      <h2>Extra: </h2>
      ${extra}
      <br>
      <input type="number" min="1" value="1" id="quantityNumber"/>
      <br>
      <h5>Total Price: <span id="totalPrice">${products[x].price}</span></h5>
        <input type="submit" value="Add item"/>
      </form>
    </div>
  </div>
</div>`
  )

  // document.getElementById('quantityNumber').addEventListener('input',(e) => {
  //   console.log(e.target.value)
  //   // console.log(old)
  //   // document.getElementById('totalPrice').innerText = document.getElementById('quantityNumber').value * document.getElementById('totalPrice').innerText
  //   document.getElementById('totalPrice').innerText = document.getElementById('totalPrice').innerText * e.target.value;
  // }
  // )

// get all check boxes
let extraFlavour = document.getElementsByClassName('extra');

  // change the total price when adding quantity
  document.getElementById('quantityNumber').addEventListener('input',(e) => {
    let extr = 0
    // check if there is extra are added
    for(j=0;j<extraFlavour.length;j++){
        if(extraFlavour[j].checked){     
          extr += parseInt(extraFlavour[j].value)
        }
    }

    // if there is extra then add them to the price of the product then mutiple them by the user number of product
    document.getElementById('totalPrice').innerText = Math.abs((parseInt(extr)+parseInt(Math.abs(document.getElementById('pPrice').innerText)))*parseInt(e.target.value))
  }
  )

  // add and remove the extra prices to the total price when change the checkbox status
  for(j=0;j<extraFlavour.length;j++){
    extraFlavour[j].addEventListener("change", (e)=>{
      console.log(e.target)
      if(e.target.checked){         
        document.getElementById('totalPrice').innerText =(Math.abs(parseInt(e.target.value))*document.getElementById('quantityNumber').value + parseInt(document.getElementById('totalPrice').innerText))
      }else{
        document.getElementById('totalPrice').innerText =Math.abs(document.getElementById('totalPrice').innerText - Math.abs(document.getElementById('quantityNumber').value) * e.target.value)

      }
    })
  }
  document.querySelector('.item i').onclick = (e) =>{
    btns = '';
    imgs = '';
    ingrds = '';
    extra = '';
    nIngrds = '';
    e.target.parentNode.parentNode.remove();
  }
}
}
}
}
// const item = document.querySelector('.item');
// let closeItem = document.querySelectorAll('.item i');
// for(i=0;i<closeItem.length;i++){
//   closeItem[i].onclick = () =>{
//     closeItem[i].parentNode.parentNode.remove('active')
//     }
// }
// console.log(closeItem)



  //  show the items image

  // const addto = document.querySelector('.card .addto');
  // const item = document.querySelector('.item');
  // const closeItem = document.querySelector('.item i');

  // addto.onclick = () =>{
  //   item.classList.toggle('active')
  // }
  // closeItem.onclick = () =>{
  //   item.classList.remove('active')
  // }

    /**
   * Easy selector helper function
   */
     const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
  /**
   * Scrolls to an element with header offset
   */
   const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }
  
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
   let selectHeader = select('#header')
   let selectTopbar = select('#topbar')
   if (selectHeader) {
     const headerScrolled = () => {
       if (window.scrollY > 100) {
         selectHeader.classList.add('header-scrolled')
         if (selectTopbar) {
           selectTopbar.classList.add('topbar-scrolled')
         }
       } else {
         selectHeader.classList.remove('header-scrolled')
         if (selectTopbar) {
           selectTopbar.classList.remove('topbar-scrolled')
         }
       }
     }
     window.addEventListener('load', headerScrolled)
     onscroll(document, headerScrolled)
   }

