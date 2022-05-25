$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    `<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.png"></button>`,
  nextArrow:
    `<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.png"></button>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function ()  {
  menu.classList.add(activeClass);
});

window.addEventListener('click', function(e){   
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
    menu.classList.remove(activeClass);
  } 
});