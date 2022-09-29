// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // psuedoclassical assumed
  // 'this' references our Object.create(makeDancer.prototype);

  // assign top, left, timebetweensteps properties
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition();
  // return statement assumed to be 'this'
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};


// using .bind .call .apply will be useful


// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// dancer.setPosition(top, left);

// refactor below code
// var dancer = {};

// // use jQuery to create an HTML <span> tag
// dancer.$node = $('<span class="dancer"></span>');

// dancer.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(dancer.step, timeBetweenSteps);
// };
// dancer.step();

// dancer.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   dancer.$node.css(styleSettings);
// };

// // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// // this one sets the position to some random default point within the body
// dancer.setPosition(top, left);

// return dancer;