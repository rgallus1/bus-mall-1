'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var picContainer = document.getElementById('image_container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var names = ['bag', 'banana', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass']


// Global variables
// -----------------
var allProducts = [];
var newArray = [];
var oldArray = [];
var clickCounter = 0;
var clicked = [];
var viewed = [];

// Constructor
// -----------------
function Product(name,filepath) {
  this.name = name;
  this.filepath = 'img/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}



// Instances
// -----------------
// new Product ('bag');
// new Product ('banana');

for(var i = 0; i < names.length; i++) {
  new Product(names[i]);
}
// console.table(allProducts);

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

function rand() {
  return Math.floor(Math.random() * allProducts.length);
  // generate a random number between 0 and allProducts.length
}

//---------------
// function preventDupes() {
//   // logic to prevent duplicates
//   // duplicates with prior set of images
//   // duplicates within the current set of images
// }
function makeArrayOfThreeNumbers() {
  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]){
    // console.log(newArray, 'broken value in first position of new array');
    newArray[0] = rand();
    // console.log('fixed');
  }

  newArray[1] = rand();

  while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] || newArray[1] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[1] = rand();
    // console.log('caught dupes between 1st and 2nd numbers');
  }

  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
    // console.log(newArray, 'old broken array');
    newArray[2] = rand();
    // console.log('caught a dupe with the 3rd number');
  }
}


function showThreePics() {
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filepath;
  allProducts[newArray[0]].views += 1;
  center.src = allProducts[newArray[1]].filepath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filepath;
  allProducts[newArray[2]].views += 1;

  // this will place three new images on the page
}
document.getElementById('display-button').style.visibility = 'hidden';

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  console.log(event.target, 'was clicked');
  // display 3 new images
  // prevent duplicates
  // alert for clicks not on images
  if(event.target.id === 'image_container'){
    return alert ('Click on a picture not on a background!');
  }

  // tally the click
  if (event.target.id === 'left') {
    allProducts[newArray[0]].clicks += 1;
    console.log(allProducts[newArray[0]]);
    }
  if (event.target.id === 'center') {
    allProducts[newArray[1]].clicks += 1;
    console.log(allProducts[newArray[1]]);
    }
  if (event.target.id === 'right') {
    allProducts[newArray[2]].clicks += 1;
    console.log(allProducts[newArray[2]]);
    }
    // clear old images
    clickCounter += 1;
    console.log(clickCounter, 'total clicks so far');
  // check whether total clicks <25
  if (clickCounter < 5) {
    showThreePics();

    } else {
      var imgs =
      document.removeEventListener('click', imgs);
      document.getElementById('display-button').style.visibility = 'visible';
      return alert('You outta clicks dude!');
    }





  // after 25, remove event listeners on picNames
  // after 25, show "Results" button

}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
showThreePics();

picContainer.addEventListener('click', handleClick);

var displayButton = document.getElementById('display-button');
displayButton.addEventListener('click', makeChart);

// var myChart = new Chart({})
function makeChart () {
  function myImageNames () {
    var names = [];
    for(var i = 0; i < 20; i++) {
      names.push(allProducts[i].name);
    }
    return names;
  };
//   function renderList() {
//  for (var i=0; i < allProducts.length; i++){
//    viewed[i] = allProducts[i].views;
//    clicked[i] = allProducts[i].clicks;
//  }
// }
  // function numberOfClicks(){
  //   var clicks = []
  //   for(var i = 0; i < allProducts.length; i++) {
  //     clicks.push(allProducts[i].clicks);
  // }
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: myImageNames(),
          datasets: [{
              label: '# of clicks',
              data: clicked,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}
