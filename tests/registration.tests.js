describe('Registration Numbers', function() {
  it('should return registration number from paarl', function() {
    var reg = RegFactory()
    reg.TownReg('CJ 123')
    reg.TownReg('CJ 0987')
    assert.deepEqual({'CJ 123':0, 'CJ 0987':0}, reg.getRegNum());
   });
     it('should return registration number from Malmesbury', function() {
       var reg = RegFactory()
       reg.TownReg('CK 4523')
       reg.TownReg('CK 5587')
       assert.deepEqual({'CK 4523':0, 'CK 5587':0}, reg.getRegNum());
      });
      it('should return registration number from Stellenbosch', function() {
        var reg = RegFactory()
        reg.TownReg('CL 4523')
        reg.TownReg('CL 6587')
        assert.deepEqual({'CL 4523':0, 'CL 6587':0}, reg.getRegNum());
});
it('should return registration number from all the towns', function() {
  var reg = RegFactory()
  reg.TownReg('CJ 4523')
  reg.TownReg('CK 6587')
  reg.TownReg('CL 4523')
  assert.deepEqual({'CJ 4523':0, 'CK 6587':0, 'CL 4523':0}, reg.getRegNum());
});
});
