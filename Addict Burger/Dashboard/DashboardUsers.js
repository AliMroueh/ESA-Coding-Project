// Menu Toggle
const toggle = document.querySelector('.toggle');
const navigator = document.querySelector('.navigator');
const main = document.querySelector('.main');

toggle.onclick = function(){
navigator.classList.toggle('active')
main.classList.toggle('active')
}

let block = document.getElementsByClassName('block');
let del = document.getElementsByClassName('delUser');

for(i=0;i<block.length;i++){
    block[i].addEventListener('click', (e) =>{
        if(e.target.innerText == 'Block'){
            e.target.innerText = 'UnBlock';
            e.target.style.backgroundColor = 'var(--dark-red)';
        }else{
            e.target.innerText = 'Block';
            e.target.style.backgroundColor = 'var(--cheese)';
        }
    })
}

for(i=0;i<del.length;i++){
del[i].addEventListener('click', (e)=>{
    e.target.parentNode.parentNode.remove()
})
}