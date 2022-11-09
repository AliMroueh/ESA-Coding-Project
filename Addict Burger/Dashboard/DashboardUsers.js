        // Menu Toggle
        const toggle = document.querySelector('.toggle');
        const navigator = document.querySelector('.navigator');
        const main = document.querySelector('.main');
        
        toggle.onclick = function(){
            navigator.classList.toggle('active')
            main.classList.toggle('active')

        }