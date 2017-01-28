const chai = require('chai');

// TODO remove
describe('test', function() {

    chai.should();

    it('should pass', function() {
      [1,2,3].indexOf(4).should.equal(-1);
    });

    it('should fail', function() {
      [1,2,3].indexOf(4).should.equal(-0);
    });

});