

function showLine(nth, collection) {
    nth_num = nth
    collection_num = collection
    if (nth < 10 && nth > 0) {
        nth = '0' + nth;
    }
    else if (nth < 10 && nth == 0){
        nth = '00'
    }

    if (collection < 10) {
        collection = '0' + collection;
    }

    line_length = $('.vertical-line').css("height").split('px')[0];
    unit_size = line_length / collection_num;

    size = unit_size * nth_num
    console.log(size)
    $('.vertical-line-fill').animate({"height": size}, 'slow');

    $('#carouselExampleCaptions .text').text(nth + '/' + collection);
}

$(document).ready(function() {
    $('.vertical-line-fill').css("height", 0);
    $('.carousel').carousel({
        interval: false
    });
    
    total = $('.carousel-inner .carousel-item').length;
    nth_elm = 1;
    
    showLine(nth_elm, total);

    $('.carousel-control-prev').click(function(){
        nth_elm -= 1;
        if (nth_elm == 0){
            nth_elm = total;
        }
        showLine(nth_elm, total);
    });

    $('.carousel-control-next').click(function(){
        nth_elm += 1;
        if (nth_elm > total){
            nth_elm = 1;
        }
        showLine(nth_elm, total);
    });

});

const share = document.querySelector('.share');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);

$('.owl-one').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 10000,
    smartSpeed: 900,
    navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1  
      },
      1000: {
        items: 1
      }
    }
  });