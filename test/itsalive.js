const expect = require('chai').expect;

describe('simple test adder', function() {
  it('adds 2 and 2 and returns 4', function() {
    expect(2 + 2).to.equal(4);
  });
})


describe('timeOut tester', function() {
  it('tests setTimeout', function(done) {
      var start = new Date();
    setTimeout(function() {
      var duration = new Date() - start;
      done()
    }, 1000)
      expect(duration).to.be.closeTo(1000, 50)
  });
})



