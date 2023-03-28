var imageSelector = "#image";
var allArtArray = new Array();
class artInfo{
    constructor(text, image)
    {
        this.text = text;
        this.image = image;
    }

    get thetext(){
        return this.text;
    }

    get theimage(){
        return this.image;
    }

    toString()
    {
        return this.text + ":" + this.image; 
    }
}
//array
function initializeArray()
{

     // 1
     var allArtArray = new artInfo ("Long Live Freedom","Nicky Nodjoumi","1978","extreme injustices over a long period of time in Persian cultures. Depicted is a dagger coming at a gagged person in jail, showing that the people with power are the base of our problems.");

     // 2
     var allArtArray1 = new artInfo ("The Artifact Piece","James Luna","1987","objectification of Indegenous people in musuems. Here he is seen putting himself on display acting as if he is dead, and being used as an archeological piece in a musuem. ");
    
     // adding objects to array
     allArtArray.push(allArtArray);
     allArtArray1.push(allArtArray1);

    //var image = new artInfo("#image", "images/muscleguy.gif","images/june.png");
    //allArt.push(image);

}
$(document).ready(function(){
    initializeArray();


    //console.log(allArt.length);
    //console.log(allArt[0].toString());
    //console.log(allArt[0].thetext);
    //console.log(allArt[0].theimage);
    
    $(allArtArray[0].thetext).src = allArtArray[0].theimage;
    $("#my_image").attr("src","june.png");
    $(allArtArray[0].thetext).attr("src", allArtArray[0].theimage);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
        
        $(allArtArray[0].thetext).fadeOut().fadeIn();
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:900}).animate({top:400}).animate({left:0}).animate({top:100});
}

