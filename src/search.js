class Search {
  binary(arr, val) {
    let first = 0;
    let last = arr.length-1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if(arr[mid] === val) {return true;}
    else if(arr[mid < val]) first = mid + 1;
    else last = mid-1;
  }

  return false;
  }

  jump(arr, val) {
    let length = arr.length;
    let move = Math.floor(Math.sqrt(length));
    let index = Math.min(move, length)-1;
    let low = 0;

  while(arr[index] < val){
    low = move;
    move += move;
    if(low >= length) return false;
  }

  let high = Math.min(move,length);

  while(arr[low] < val){
    low++;
    if(low == high) return false;
  }

  if(arr[low] == val){
    return true;
  }

  return false;
 }
}