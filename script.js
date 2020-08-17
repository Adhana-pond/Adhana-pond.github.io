var name = prompt("Enter Your Name");
var welcome = document.getElementById("Welcome");
welcome.innerHTML = "Welcome " + name + " and Thank You for Stopping by my Page!";

function changePicture(pictureNumber){
  var image = document.getElementById("myImage");
  if (pictureNumber ===1){ 
    image.src= 
    "pictureone.JPG"
  }else{
    image.src= "picturetwo.JPG"
  }
}

function changePicture1(pictureNumber1){
  var image1 = document.getElementById("myImage1");
  if (pictureNumber1 ===1){ 
    image1.src= 
    "picturethree.JPG"
  }else{
    image1.src= "picturefour.JPG"
  }
}

function changePicture2(pictureNumber2){
  var image2 = document.getElementById("myImage2");
  if (pictureNumber2 ===1){ 
    image2.src= 
    "picturefive.JPG"
  }else{
    image2.src= "picturesix.JPG"
  }
}

function changePicture3(pictureNumber3){
  var image3 = document.getElementById("myImage3");
  if (pictureNumber3 ===1){ 
    image3.src= 
    "pictureseven.JPG"
  }else{
    image3.src= "pictureeight.JPG"
  }
}