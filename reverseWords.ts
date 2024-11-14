var reverseWords: (a: string) => string = function (s) {
  return s.trim().split(/\s+/g).reverse().join(' ');
};
