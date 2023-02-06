//window prompt question
var info = window.prompt("Do you know a Derek");
console.log(info);
if(info != "")
{ 
}
else
{
    console.log("Nothing Entered");
}

//story 
function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML; 
    var answer2 = document.getElementById("choice2").innerHTML;

    if (choice == 1 && answer1 == "Yep") {
            document.getElementById("story").innerHTML = "I agree, what do you think will happen to him?"
            document.getElementById("choice1").innerHTML = "He will explode"
            document.getElementById("choice2").innerHTML = "He will turn into a cow"
    }
  else if (choice == 2 && answer2 == "Noooo") {
            document.getElementById("story").innerHTML = "Are you positive?"
            document.getElementById("choice1").innerHTML = "Actually yes this could be awesome"
            document.getElementById("choice2").innerHTML = "Yes I am positive, the human body is not meant to endure that much dairy at once, this sounds rather dangerous in my opinion"

}
else if (choice == 1 && answer1 == "He will explode") {
    document.getElementById("story").innerHTML = "Derek exploded !"
    document.getElementById("choice1").innerHTML = "Send condolences"
    document.getElementById("choice2").innerHTML = "I should try and save Derek!!!"
}

else if (choice == 2 && answer2 == "He will turn into a cow") {
    document.getElementById("story").innerHTML = "Why would anyone turn into a cow after drinking milk?"
    document.getElementById("choice1").innerHTML = "Oh ya my bad, ill try this again"
    document.getElementById("choice2").innerHTML = "who?"
}
else if (choice == 1 && answer1 == "Actually yes this could be awesome") {
    document.getElementById("story").innerHTML = "Good choice, can he do it under 5 minutes?"
    document.getElementById("choice1").innerHTML = "YESSSS"
    document.getElementById("choice2").innerHTML = "Wait Derek dont do it!"

}

else if (choice == 2 && answer2 == "Yes I am positive, the human body is not meant to endure that much dairy at once, this sounds rather dangerous in my opinion") {
    document.getElementById("story").innerHTML = "What a responsible choice, are you proud of yourself?"
    document.getElementById("choice1").innerHTML = "Yes"
    document.getElementById("choice2").innerHTML = "No"
}

// story endings

else if (choice == 2 && answer2 == "I should try and save Derek!!!") {
    document.getElementById("story").innerHTML = "Are you positive?"
    document.getElementById("choice1").innerHTML = "Actually yes this could be awesome"
    document.getElementById("choice2").innerHTML = "Yes I am positive, the human body is not meant to endure that much dairy at once, this sounds rather dangerous in my opinion"

}
else if (choice == 1 && answer1 == "Oh ya my bad, ill try this again") {
    document.getElementById("story").innerHTML = "Are you positive?"
    document.getElementById("choice1").innerHTML = "Actually yes this could be awesome"
    document.getElementById("choice2").innerHTML = "Yes I am positive, the human body is not meant to endure that much dairy at once, this sounds rather dangerous in my opinion"

}
else if (choice == 2 && answer2 == "Wait Derek dont do it!") {
    document.getElementById("story").innerHTML = "Are you positive?"
    document.getElementById("choice1").innerHTML = "Actually yes this could be awesome"
    document.getElementById("choice2").innerHTML = "Yes I am positive, the human body is not meant to endure that much dairy at once, this sounds rather dangerous in my opinion"

}



else if (choice == 1 && answer1 == "Send condolences") {
    document.getElementById("story").innerHTML = "RIP Derek :(";
  
}
else if (choice == 2 && answer2 == "who?") {
    document.getElementById("story").innerHTML = "RIP Derek :(";
  
}
else if (choice == 1 && answer1 == "Yes") {
    document.getElementById("story").innerHTML = "RIP Derek :(";
  
}
else if (choice == 2 && answer2 == "No") {
    document.getElementById("story").innerHTML = "Congratulations you have won the game.";
  
}
else if (choice == 1 && answer1 == "YESSSS") {
    document.getElementById("story").innerHTML = "Congratulations you have won the game.";
  
}



}