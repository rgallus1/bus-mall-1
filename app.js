'use strict';

var imageArray = []
// var leftBox = document.getElementById('left');
// var rightBox = document.getElementById('right');
// var centerBox = document.getElementById('center');
var imageContainer = document.getElementById('image_container');
var differentImages = ['bag', 'banana', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass']
var totalTimesClicked = 0;
var randomIndex = Math.floor(Math.random()*differentImages.length);
console.log(differentImages[randomIndex]);


function Images(productName, path) {
  this.productName = productName;
  this.path = 'img/' + productName + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  imageArray.push(this);
}


function pushArray (){
for(var i = 0; i < differentImages.length; i++) {
  imageArray.push(new Images(differentImages[i]));

  }
}

function imagePlacement(){
  var leftImage = imageArray[Math.floor(Math.random() * 20)].path;
  var rightImage = imageArray[Math.floor(Math.random() * 20)].path;
  var centerImage = imageArray[Math.floor(Math.random() * 20)].path;

  if(totalTimesClicked < 25){
    while (leftImage === rightImage || leftImage === centerImage || rightImage === centerImage){
    leftImage = imageArray[Math.floor(Math.random() * 20)].path;
    rightImage = imageArray[Math.floor(Math.random() * 20)].path;
    centerImage = imageArray[Math.floor(Math.random() * 20)].path;
  }
  }

  left.src = leftImage;
  center.src = rightImage;
  right.src = centerImage;
}

console.log(imageArray);


pushArray();
imagePlacement();
