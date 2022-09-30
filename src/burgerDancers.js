// create a new function called makeBurgerDancer
makeBurgerDancer = function (top, left, timeBetweenSteps) {
  // make a call to dancer using .call
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// designate the prototype
makeBurgerDancer.prototype = Object.create(makeDancer.prototype);

// assign the constructor
makeBurgerDancer.prototype.constructor = makeBurgerDancer;

// re-define the step function
// keep reference to old step
// add gif file to node

makeBurgerDancer.prototype.step = function () {
  // the old call
  makeDancer.prototype.step.call(this);
  // adding new image file to pizzaDancer node
  this.$node = $('<img src=pictures/burger.gif>');
  this.$node.attr('class', 'burger');
};

// add our line up method
makeBurgerDancer.prototype.lineUp = function() {
  // change the style position
  var styleSettings = {
    top: 0,
    left: 0,
  };
  // access the style setting to move it
  $('.burger').css(styleSettings);
  $('.burger').css('position', 'static');
};
