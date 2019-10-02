function createGreeting() {
  // var today = new Date();
  var hourNow = prompt('enter a number between 0 & 23'); //today.getHours();
  var greeting;
  if (hourNow > 18 && hourNow < 24) {
    greeting = 'Good evening!';
  } else if (hourNow > 12 && hourNow < 18) {
    greeting = ' Good afternoon!';
  } else if (hourNow > 0 && hourNow < 12) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome! ';
  }
  return greeting;
}
var showOrder = function() {
  //input
  var userOrder = prompt('what would you like to order');

  var orderImage = '';
  var numberOfImages;
  //processing
  while (true) {
    console.log('hi');
  }
  numberOfImages = prompt('How many images do you want?');
  for (let ctr = 0; true; ctr++) {
    if (userOrder === 'house') {
      orderImage += '<img src="images/house.png" >';
    } else if (userOrder === 'hotel') {
      orderImage = orderImage + '<img src="images/hotel.png" >';
    }
  }
  //output
  return orderImage;
};
