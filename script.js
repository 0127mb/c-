 var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });  let div = document.querySelector('.swiper-button-prev')
    let div1 = document.querySelector('.swiper-button-next')
 let body = document.querySelector('body')
    div.addEventListener('click',()=>{
      body.classList.toggle ('green')
if(body.classList =='green'){
  body.style.background = 'green'
}else{body.style.background ='linear-gradient(to right, #f6a663, #ffd1a6)'}
    })
 div1.addEventListener('click',()=>{





    })

