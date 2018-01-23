const expect = require('chai').expect
const spies = require('chai-spies');
const chai = require('chai');
chai.use(spies);

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
      expect(duration).to.be.closeTo(1000, 50);
      done()
    }, 1000)

  });
})


describe('spying on stuff', function() {
  it('spies on a forEach function', function() {
    var array = [1, 2, 3, 4, 5]
    function logNum(val) {
      console.log(val);
    }
    logNum = chai.spy(logNum)
    array.forEach(logNum);
    expect(logNum).to.have.been.called.exactly(array.length);
  })
})
