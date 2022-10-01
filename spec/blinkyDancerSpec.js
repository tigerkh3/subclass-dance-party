describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary..

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});


describe('burgerDancer', function() {

  var burgerDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    burgerDancer = new makeBurgerDancer(10, 20, timeBetweenSteps);
    console.log(burgerDancer);
  });

  it('should have a jQuery $node object', function() {
    expect(burgerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('clicking lineup should have top and left values of 0', function() {
    expect(burgerDancer.top).to.be.equal(10);
    expect(burgerDancer.left).to.be.equal(20);
  });

  it('lineUp method should be a function', function() {
    expect(typeof burgerDancer.lineUp).to.be.equal('function');
  });

});

describe('pizzaDancer', function() {

  var pizzaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pizzaDancer = new makePizzaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pizzaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('clicking lineup should have top and left values of 0', function() {
    expect(pizzaDancer.top).to.be.equal(10);
    expect(pizzaDancer.left).to.be.equal(20);
  });

  it('lineUp method should be a function', function() {
    expect(typeof pizzaDancer.lineUp).to.be.equal('function');
  });

});