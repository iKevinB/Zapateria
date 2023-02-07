
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrousel__list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots',
        duration: 1,
        arrows: {
            prev: '.carrousel__previous',
            next: '.carrousel__next'
        },
        responsive: [
            {
              // screens greater than >= 480px
              breakpoint: 480,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '1',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 1
              }
            },{
              // screens greater than >= 768px
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 1
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 1
              }
            }
          ]
        });
    });

// second slider, section women

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrousel__list2'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.dots',
        duration: 1,
        arrows: {
            prev: '.carrousel__previous2',
            next: '.carrousel__next2'
        },
        responsive: [
            {
              // screens greater than >= 480px
              breakpoint: 480,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '1',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 768px
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 1
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 1
              }
            }
          ]
    });
});    

// Third slider, section kids
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrousel__list3'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        duration: 1,
        arrows: {
            prev: '.carrousel__previous3',
            next: '.carrousel__next3'
        },
        responsive: [
            {
              // screens greater than >= 480px
              breakpoint: 480,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '1',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 768px
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 1
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 1
              }
            }
          ]
    });
}); 


document.addEventListener('click', e =>{
  
  if (e.target.matches('.btn-section__women')) {
    document.querySelector('.btn-section__women').style.backgroundColor = "gold"
    document.querySelector('.btn-section__man').style.backgroundColor = "#e9e9e9"
    document.querySelector('.btn-section__kids').style.backgroundColor = "#e9e9e9"
    document.querySelector('.carrousel-woman').style.position = "static"
    document.querySelector('.carrousel-man').style.display = "none"
    document.querySelector('.carrousel-kids').style.position = "absolute"
  }
  else if (e.target.matches('.btn-section__kids')) {
    document.querySelector('.btn-section__kids').style.backgroundColor = "gold"
    document.querySelector('.btn-section__man').style.backgroundColor = "#e9e9e9"
    document.querySelector('.btn-section__women').style.backgroundColor = "#e9e9e9"
    document.querySelector('.carrousel-kids').style.position = "static"
    document.querySelector('.carrousel-man').style.display = "none"
    document.querySelector('.carrousel-woman').style.position = "absolute"
  }
  else if (e.target.matches('.btn-section__man')) {
    document.querySelector('.btn-section__man').style.backgroundColor = "gold"
    document.querySelector('.btn-section__women').style.backgroundColor = "#e9e9e9"
    document.querySelector('.btn-section__kids').style.backgroundColor = "#e9e9e9"
    document.querySelector('.carrousel-kids').style.position = "absolute"
    document.querySelector('.carrousel-man').style.display = "block"
    document.querySelector('.carrousel-woman').style.position = "absolute"
  }
})
