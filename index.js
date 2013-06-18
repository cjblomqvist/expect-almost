module.exports = function (expect) {
  /**
     * Checks if the obj almost equals another, optionally providing a max absolute difference.
     *
     * @api public
     */
  expect.Assertion.prototype.approximately = expect.Assertion.prototype.approximatelyEqual = expect.Assertion.prototype.almostEqual = function (obj, maxDiff) {
    var allowedDiff = maxDiff
        ;

    if(typeof(allowedDiff)=="undefined") {
      allowedDiff = 0.0001;
    }

    allowedDiff = Math.abs(allowedDiff);

    return this.within(obj - allowedDiff, obj + allowedDiff);
  };

  /**
     * Assert within start to finish (inclusive). 
     *
     * @param {Number} start
     * @param {Number} finish
     * @api public
     */
  expect.Assertion.prototype.within = function (start, finish) {
    var range = start + '..' + finish
        ;

    this.assert(
        this.obj >= start && this.obj <= finish
      , 'expected ' + expect.stringify(this.obj) + ' to be within ' + range
      , 'expected ' + expect.stringify(this.obj) + ' to not be within ' + range);

    return this;
  };

  return expect;
}
