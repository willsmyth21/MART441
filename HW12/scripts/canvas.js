
// mf canvas obviously
var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2, square3;
var direction;
var squareArray = [];
var lives = 10;

//mooove
$(document).ready(function(){
    setup();  
    $(this).keypress(function(event){
        getKey(event);
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"Black");
    square2 = new Square(400,400,100,100,"purple");
    square3 = new Square(150,400,50,50,"turquoise");

    $.getJSON("data/information.json",function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    }); 
}




// mooove
function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }




    var test = hasCollided(square1,square2,square3);
    var test2 = false;

    for(var i = 0; i < squareArray.length; i++)
    {
        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
    drawSquare(); 
    
}


// distance they move
function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

// cant get this json to work, just through it down here til i fugure it out 
//function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    $.getJSON("data/two.json",function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            goodArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    }); }







// physically get sqaures to show up
function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    ctx.fillStyle = square3.mainColor;
    ctx.fillRect(square3.x, square3.y, square3.width, square3.height);
    

    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);    

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}