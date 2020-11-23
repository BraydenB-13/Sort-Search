describe('Sort', function () {
 var sort;
 beforeEach(function () {
   sort = new Sort();
 });
 describe('selection', () => {
   it('should sort 1,2,4,3 into 1,2,3,4', function () {
     expect(sort.selection([1,2,4,3])).toEqual([1,2,3,4]);
   });
   it('should sort 5,4,3,2,1 into 1,2,3,4,5', function () {
    expect(sort.selection([5,4,3,2,1])).toEqual([1,2,3,4,5]);
   });
   it('should sort 5,2,4,1,3 into 1,2,3,4,5', function () {
    expect(sort.selection([5,2,4,1,3])).toEqual([1,2,3,4,5]);
   });
   it('should sort 3,1 into 1,3', function () {
    expect(sort.selection([3,1])).toEqual([1,3]);
   });
  });
 });