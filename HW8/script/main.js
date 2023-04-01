
//here is my text
$(document).ready(function() {
    var words = ['HELLOOO', 'AHHHHHH', 'GOODBYE!!'];
    var currentIndex = 0;
  
    //to fade it
    setInterval(function() {
      $('#word-container').fadeOut(500, function() {
        $(this).text(words[currentIndex]).fadeIn(500);
        currentIndex = (currentIndex + 1) % words.length;
      });
    }, 3000);
  });


// here are my images
$(document).ready(function() {
    //defining both images here
    var images = ['image1.jpg', 'image2.jpg'];
    //make this 0!
    var currentIndex = 0;
    var interval;
  
    $(function() {
      
    // 500 seems to be the most visually pleasing
      interval = setInterval(changeImage, 500);
    });
  
    //to actaully change the image and fade in and out
    function changeImage() {
      $('#image-container img').eq(currentIndex).animate({
        opacity: 0
      }, 1000);

      currentIndex = (currentIndex + 1) % images.length;
      $('#image-container img').eq(currentIndex).animate({
        opacity: 1
      }, 1000);
    }
  });
  

  $(document).ready(function() {
    var interval;
  
    $(function() {
      
    // 500 seems to be the most visually pleasing
      interval = setInterval(moveSquare, 1000);
    });
  
    
    function moveSquare()
{
    $("#square").animate({left:400}).animate({top:400}).animate({left:0}).animate({top:100});
}

  });
  


  