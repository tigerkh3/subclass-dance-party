var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // call on makeDancer parent class
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// create prototype
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

// assign a constructor maybe
// assigning a constructor ensures that
// when a look up falls through to the blinkyDancer it'll
// stop here and report the right constructor and not fall through
// back into dancer
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// new step function
makeBlinkyDancer.prototype.step = function () {
  // the old call
  makeDancer.prototype.step.call(this);
  // new call
  this.$node.toggle(this.timeBetweenSteps);
};

//lineUp method
makeBlinkyDancer.prototype.lineUp = function() {
  // change the style position
  var styleSettings = {
    top: 0,
    left: 0,
  };
  $('.dancer').css(styleSettings);
  $('.dancer').css('display', 'inline-block');
  $('.dancer').css('position', 'static');
};



// var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

// // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// // so we must keep a copy of the old version of this function

// var oldStep = blinkyDancer.step;

// blinkyDancer.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   blinkyDancer.$node.toggle();
// };

// return blinkyDancer;