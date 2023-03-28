// My array
var myViewMasterArray = new Array();

class ViewMaster
{
    // creating my objects
    constructor(text, image)
    {
        this.text = text;
        this.image = image;
    
    }

    
    toString()
    {
        return this.text + this.image
    }

}


// array m
function initializeArray()
{
    // 1
    var myViewMaster = new ViewMaster("Long Live Freedom","Nicky Nodjoumi","1978","extreme injustices over a long period of time in Persian cultures. Depicted is a dagger coming at a gagged person in jail, showing that the people with power are the base of our problems.");

    // 2
    var myViewMaster1 = new ViewMaster("The Artifact Piece","James Luna","1987","objectification of Indegenous people in musuems. Here he is seen putting himself on display acting as if he is dead, and being used as an archeological piece in a musuem. ");
    // 3
    var myViewMaster2 = new ViewMaster("Untitled(Your Body Is a Battleground", "Barbara Kruger" , "1989", "equality. Printed on flyers and distributed at the 1989 March for Women's Equality and Women's Lives, it comes off incredibly bold and powerful.");
    // 4
    var myViewMaster3 = new ViewMaster("David Wojnarowicz (Silence=Death)", "Andreas Sterzing" , "1989" , "the aids epidemic and the slogan activists often used. This was a work to better educate the public about the crisis of aids at the time." )
    //5
    var myViewMaster4 = new ViewMaster("White Squad V","Leon Golub","1984","police brutality and cries to demilitarize the police. This work is part of a seven painting series focused on Salvadoran death squads.");

    // adding objects to array
    myViewMasterArray.push(myViewMaster);
    myViewMasterArray.push(myViewMaster1);
    myViewMasterArray.push(myViewMaster2);
    myViewMasterArray.push(myViewMaster3);
    myViewMasterArray.push(myViewMaster4);
    

}





// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewMasterArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewMasterArray[randomNumber].toString();

}