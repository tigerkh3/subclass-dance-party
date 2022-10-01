// create a new function called makePizzaDancer
makePizzaDancer = function (top, left, timeBetweenSteps) {
  // make a call to dancer using .call
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// designate the prototype
makePizzaDancer.prototype = Object.create(makeDancer.prototype);

// assign the constructor
makePizzaDancer.prototype.constructor = makePizzaDancer;

// re-define the step function
// keep reference to old step
// add gif file to node

makePizzaDancer.prototype.step = function () {
  // the old call
  makeDancer.prototype.step.call(this);
  // adding new image file to pizzaDancer node
  this.$node = $('<img src=pictures/pizza.gif>');
  this.$node.attr('class', 'pizza');
};

// create lineUp method
makePizzaDancer.prototype.lineUp = function() {
  // change the style position
  var styleSettings = {
    top: 0,
    left: 0,
  };
  $('.pizza').css(styleSettings);
  $('.pizza').css('position', 'relative');
};

makePizzaDancer.prototype.groupUp = function() {
  var styleSettings = {
    top: 400,
    left: 0,
  };
  $('.pizza').css(styleSettings);
  $('.pizza').css('position', 'relative');
};
