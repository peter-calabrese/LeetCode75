const mergeAlternately: (word1: string, word2: string) => string = function (
  word1: string,
  word2: string
) {
  const greatestLen = Math.max(word1.length, word2.length);
  var merged = '';
  for (let i = 0; i < greatestLen; i++) {
    if (i < word1.length) {
      merged += word1[i];
    }
    if (i < word2.length) {
      merged += word2[i];
    }
  }
  return merged;
};
