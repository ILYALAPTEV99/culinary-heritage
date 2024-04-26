anime({
  targets: '.head_button_scroll',
  scale: [
      { value: 1, duration: 700},
      { value: 1.2, duration: 1100},
      { value: 1, duration: 700},
    ],
  loop: true,
  duration: 2500,
  easing: 'linear'
})

let head_button_scroll = document.querySelector('.head_button_scroll')
let main = document.querySelector('#main')
let about = document.querySelector('#about')
let contact = document.querySelector('#contact')
let menu = document.querySelector('#menu')
let book = document.querySelector('.book_table')
let form = document.querySelector('.forma'); 



head_button_scroll.addEventListener('click', function(){
  form.scrollIntoView({ 
    block: 'start',
    behavior: 'smooth',
  });
});

main.addEventListener("click",function(){window.location.href = "index.html"})
menu.addEventListener("click",function(){window.location.href = "menu.html"})
about.addEventListener("click",function(){window.location.href = "about.html"})
contact.addEventListener("click",function(){window.location.href = "contact.html"})
book.addEventListener("click",function(){window.location.href = "contact.html"})

