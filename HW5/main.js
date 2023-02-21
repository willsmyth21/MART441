
// my images
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9"];

var blankImagePath = "images/heen.jpeg";

var actualImages = new Array();
 


function printBlanks()
{
   // call random image creation function
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}

function createRandomImageArray()
{
    // here is my array of images
    var actualImagePath = ["images/vx21000.jpeg","images/dvx100.jpeg", "images/hvx200.jpeg", "images/vx21000.jpeg", "images/HMC15.jpeg", "images/hpx170.jpeg"];

    // this keeps them from being added twice????
    var count = [0,0];

    
    
// cant figure out how to make not just the first two show up!!!
  
    while(actualImages.length < 9)
    {
        
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
     
        if(count[randomNumber] < 9)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
    
    
    
        
}
function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed
        
      
}

