var reverseVowels: (s: string) => string = function (s) {
  let left = 0;
  let arr = s.split('');

  let right = arr.length - 1;

  while (left < right) {
    if (!['a', 'e', 'i', 'o', 'u'].includes(arr[left].toLowerCase())) {
      left++;
    } else if (!['a', 'e', 'i', 'o', 'u'].includes(arr[right].toLowerCase())) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
};
