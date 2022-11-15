const toggle2 = document.querySelector('.toggle');
const navigator2 = document.querySelector('.navigator');
const main2 = document.querySelector('.main');

toggle2.onclick = function(){
    navigator2.classList.toggle('active')
    main2.classList.toggle('active')
}