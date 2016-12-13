'use strict';

var imageArray = []
var leftBox = document.getElementById('left');
var rightBox = document.getElementById('right');
var centerBox = document.getElementById('center');
var imageContainer = document.getElementById('image_container');
var differentImages = ['bag', 'banana', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass']
var totalTimesClicked = 0;
var randomIndex = Math.floor(Math.random()*differentImages.length);
console.log(differentImages[randomIndex]);


var Images = function(productName, path){
  this.productName = productName;
  this.path = 'img/' + productName + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  imageArray.push(this);
}


function pushArray (){
for(var i = 0; i < differentImages.length; i++) {
  imageArray.push(new Images(differentImages[i])+Images.path);
  }
}
function imagePlacement(){
 left.src = imageArray[Math.floor(Math.random() * 20)].path;
 center.src = imageArray[Math.floor(Math.random() * 20)].path;
 right.src = imageArray[Math.floor(Math.random() * 20)].path;
}

console.log(imageArray);
Images();
pushArray();
imagePlacement();





// function createRandImage(){
// if(totalTimesClicked < 25){
//   var randImage1 = randomImage();
//   var randImage2 = randomImage();
//   var randImage3 = randomImage();
//
//   while (randImage1 === randImage2 || randImage1 === randImage3){
//     randImage1 = randomImage();
//   }
//   while (randImage2 === randImage1 || randImage2 === randImage3){
//     randImage2 = randomImage();
//   }
//   while(randImage3 === randImage1 || randImage3 === randImage2)
//   randImage3 = randomImage();
//
// }
// }
// left.src = imageArray[leftBox].src;
// center.src = imageArray[centerBox].src;
// right.src = imageArray[rightBox].src;

//
//
// var ProductPic = function(img1, img2, img3) {
//   this.img1 = img1,
//   this.img2 = img2,
//   this.img3 = img3,
//   this.clickcounter = [],
//
//   function(){
//
//
//   }
//
// }
