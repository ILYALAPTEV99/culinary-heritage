try {
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
}
catch (e) {
    console.log("i");
}

let head_button_scroll = document.querySelector('.head_button_scroll')
let main_menu = document.querySelector('#main_menu')
let about_menu = document.querySelector('#about_menu')
let contact_menu = document.querySelector('#contact_menu')
let menu_main = document.querySelector('#menu_main')
let about_main = document.querySelector('#about_main')
let contact_main = document.querySelector('#contact_main')
let main_about = document.querySelector('#main_about')
let menu_about = document.querySelector('#menu_about')
let contact_about = document.querySelector('#contact_about')
let main_contact = document.querySelector('#main_contact')
let menu_contact = document.querySelector('#menu_contact')
let about_contact = document.querySelector('#about_contact')
let menu = document.querySelector('#menu')
let book = document.querySelector('.book_table')
let form = document.querySelector('.forma'); 


try{
  head_button_scroll.addEventListener('click', function(){
    form.scrollIntoView({ 
      block: 'start',
      behavior: 'smooth',
    });
  });
}
catch(e){
  console.log("i");
}

try {
  main_menu.addEventListener("click",function(){window.location.href = "index.html"})
  about_menu.addEventListener("click",function(){window.location.href = "about.html"})
  contact_menu.addEventListener("click",function(){window.location.href = "contact.html"})
}
catch (e) {
  try {
    menu_main.addEventListener("click",function(){window.location.href = "menu.html"})
    about_main.addEventListener("click",function(){window.location.href = "about.html"})
    contact_main.addEventListener("click",function(){window.location.href = "contact.html"})
    book.addEventListener("click",function(){window.location.href = "contact.html"})
  }
  catch (e) {
    try{
      main_about.addEventListener("click",function(){window.location.href = "index.html"})
      menu_about.addEventListener("click",function(){window.location.href = "menu.html"})
      contact_about.addEventListener("click",function(){window.location.href = "contact.html"})
    }
    catch (e) {
      main_contact.addEventListener("click",function(){window.location.href = "index.html"})
      menu_contact.addEventListener("click",function(){window.location.href = "menu.html"})
      about_contact.addEventListener("click",function(){window.location.href = "about.html"})
    }
  }
}

