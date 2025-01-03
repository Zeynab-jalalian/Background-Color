let bgc=document.querySelector('body');
let buttons=document.querySelectorAll('.btn');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
       bgc.style.background=e.target.textContent;
    })
})