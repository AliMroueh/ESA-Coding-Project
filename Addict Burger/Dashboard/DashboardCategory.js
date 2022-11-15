
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

    console.log(all.food_cat)
    console.log(all.drink_cat)
    let add_span = (content,position) => {
        for(i=0;i<content.length;i++){
        position.innerHTML += `<li class="li">${content[i]}<span class="span">X</span></li>`;
    }
    }
    add_span(all.food_cat,ul)
    add_span(all.drink_cat,ul1)
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