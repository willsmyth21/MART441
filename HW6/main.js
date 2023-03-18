
//JS!!!

var imageNames = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankImagePath = "images/heen2.jpeg";


var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;


// JSON declaration
var player = {"firstname":"", "lastname":"", "age":0, "score":0};


//  array for images
var actualImages = new Array();
    
function printBlanks()
{
   
    createRandomImageArray();
    
    for(var i = 0; i < imageNames.length; i++)
    {
     
        var element = document.getElementById(imageNames[i]).src= blankImagePath;
        console.log(element, imageNames[i]);
    }
         
}

document.addEventListener("DOMContentLoaded", () => {
    printBlanks();
  });



function createRandomImageArray()
{
    // my actual images array:
    var actualImagePath = ["images/dvx1002.jpeg", "images/HMC1502.jpeg", "images/hpx1702.jpeg","images/hvx2002.jpeg", "images/vx210002.jpeg"];

    // array so they dont get added twice??!!
    var count = [0,0,0,0,0];

    
    
    // fix this when add more images
    while(actualImages.length < actualImagePath.length*2)
    {
        // get a random number between 0 and the number total number of images that we can choose from - 1
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
    
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    console.log("Complete");   
}

console.log("isthisworking")

function flipImage(number)
{
    
    // second image appears
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
        
    }

    // first image appears
    else if(firstNumber < 0) 
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];
    
    }

    // do images match?
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // do not match?
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {  
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "end.html";
        }
    }
}


//this part confusing
function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}


//JSON

//fixthisalso

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "game.html";
}


// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }
    
   
}