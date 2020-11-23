describe('Search', function () {
 var search;
 beforeEach(function () {
   search = new Search();
 });
 describe('binary', () =>{
  it('should find "2" inside of 1, 2, 3, 4', function() {
   expect(search.binary([1,2,3,4], 2)).toEqual(true);
  });
  it('should not find "6" inside of 1, 2, 3, 4', function() {
   expect(search.binary([1,2,3,4], 6)).toEqual(false);
  });
 });
 describe('jump', () =>{
  it('should find "2" inside of 1, 2, 3, 4', function() {
   expect(search.jump([1,2,3,4], 2)).toEqual(true);
  });
  it('should not find "6" inside of 1, 2, 3, 4', function() {
   expect(search.jump([1,2,3,4], 6)).toEqual(false);
  });
 });
});