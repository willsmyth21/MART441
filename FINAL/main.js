
var info = window.prompt("CONGRATULATIONS! You are the 100th visitor, please enter you credit card information and I will send you $100");
console.log(info);
if(info != "")
{ 
}
else
{
    console.log("Nothing Entered");
}




// image block 1
function changeImage() {
	let currentImage = document.getElementById("image").src;
	if (currentImage.endsWith("images/james.png")) {
		document.getElementById("image").src = "images/will.png";
	} else {
		document.getElementById("image").src = "images/james.png";
	}
}

//image block 2
function changeImagetwo() {
	let currentImage = document.getElementById("imagetwo").src;
	if (currentImage.endsWith("images/kentucky.png")) {
		document.getElementById("imagetwo").src = "images/camera.png";
	} else {
		document.getElementById("imagetwo").src = "images/kentucky.png";
	}
}

//image block 3
function changeImagethree() {
	let currentImage = document.getElementById("imagethree").src;
	if (currentImage.endsWith("images/prettyfrog.png")) {
		document.getElementById("imagethree").src = "images/frogfight.png";
	} else {
		document.getElementById("imagethree").src = "images/prettyfrog.png";
	}
}

//image block 4
function changeImagefour() {
	let currentImage = document.getElementById("imagefour").src;
	if (currentImage.endsWith("images/bill.png")) {
		document.getElementById("imagefour").src = "images/jim.png";
	} else {
		document.getElementById("imagefour").src = "images/bill.png";
	}
}

//image block 5
function changeImagefive() {
	let currentImage = document.getElementById("imagefive").src;
	if (currentImage.endsWith("images/walt2.png")) {
		document.getElementById("imagefive").src = "images/walt1.png";
	} else {
		document.getElementById("imagefive").src = "images/walt2.png";
	}
}

//image block 6
function changeImagesix() {
	let currentImage = document.getElementById("imagesix").src;
	if (currentImage.endsWith("images/roof.png")) {
		document.getElementById("imagesix").src = "images/ruf.png";
	} else {
		document.getElementById("imagesix").src = "images/roof.png";
	}
}




$(document).ready(function() {
	$('#button').click(function() {
		$('#message').text(':|');
	});
});


