var makeSlideDancer = function (top, left, timeBetweenSteps) {
  // Create the object

  makeDancer.apply(this, arguments);

  this.$node.addClass('slideDancer');

};

// link prototype
makeSlideDancer.prototype = Object.create(makeDancer.prototype);

// link the constructor
makeSlideDancer.prototype.constructor = makeSlideDancer;

makeSlideDancer.prototype.step = function () {

  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideToggle('slow');
};