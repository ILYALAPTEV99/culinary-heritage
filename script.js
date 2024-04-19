let head_button_scroll = document.querySelector('.head_button_scroll')


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

let form = document.querySelector('.forma');   
head_button_scroll.addEventListener('click', function () {
  form.scrollIntoView({ 
    block: 'start',
    behavior: 'smooth',
  });
});