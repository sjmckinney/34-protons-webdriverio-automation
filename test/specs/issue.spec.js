'use strict';
 
describe(`custom-test`, function () {
  let tries = 0;

  it(`passes`, function () {
    if (tries < 1) {
      ++tries;
      //chai.expect(true).to.be.false;
      chai.expect(false).to.be.false;
    }
 
    chai.expect(true).to.be.true;
  });
});