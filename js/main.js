
//This controls the hamburger menu//

$('.boigah-box').click(function() {
  $(".mobile-nav").toggle("display");
  $(".line-2").toggleClass("go-away");
  $(".line-1").toggleClass("tilt-down");
  $(".line-3").toggleClass("tilt-up");
});
 
$('.desktop-nav li').hover(function(){
  $(this).addClass("underline");
}, function(){
  $(this).removeClass("underline")
});

$('a[href*="index.html"]').hover(function(){
  $(this).addClass("underline");
}, function(){
  $(this).removeClass("underline")
});

//Buttons underneath the albums 

$(".button").hover(function() {
  $(this).css({"background":"#efefef",
                "cursor": "pointer",
                "color": "#aaa"});
}, function() {
  $(this).css({"background":"#aaa",
                "color":"#efefef"});
});

//For help on the ol' slick slider, go here: https://kenwheeler.github.io/slick/

//Initialize slick slider
$(document).ready(function(){
    $('.multiple-items').slick({
      // setting-name: setting-value
      infinite: true,
			slidesToShow: 3,
      slidesToScroll: 3,
			dots: true,
      responsive: [

      {
        breakpoint: 1900, 
        settings: {
            slidesToShow: 3, 
            slidesToScroll: 3
        }
},
{
       breakpoint: 767, 
        settings: { 
            slidesToShow: 2, 
            slidesToScroll: 2
        }
},
{
        breakpoint: 650, 
        settings: {
            slidesToShow: 1, 
            slidesToScroll: 1
        }
}
    ]

    });
});

//Display track listings

var tracks = '';

for(i = 0; i < items.length; i++) {
  
  tracks += "<li><span>" + items[i].song + "</span><br><audio controls='controls' src='" + items[i].trackURL + "' type='audio/mp3'></audio></li>";
}

$('.track-list').html(tracks);



