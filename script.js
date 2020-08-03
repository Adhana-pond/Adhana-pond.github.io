var name = prompt("Enter Your Name");
var welcome = document.getElementById("Welcome");
welcome.innerHTML = "Welcome " + name + " and Thank You for Stopping by my Page!";

function changePicture(pictureNumber){
  var image = document.getElementById("myImage");
  if (pictureNumber ===1){ 
    image.src= 
    "https://www.grammy.com/sites/com/files/styles/news_detail_header/public/news/96306227.jpg?itok=soyTlYAt"
  }else{
    image.src= "https://data.whicdn.com/images/155762797/original.jpg"
  }
}