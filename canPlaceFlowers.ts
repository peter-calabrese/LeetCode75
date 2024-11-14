var canPlaceFlowers: (flowerbed: number[], n: number) => boolean = function (
  flowerbed,
  n
) {
  flowerbed.forEach((bed, index) => {
    if (flowerbed[index - 1] === 1 || flowerbed[index + 1] === 1 || n === 0) {
      return;
    }
    if (bed === 0) {
      flowerbed[index] = 1;
      n--;
    }
  });
  return n === 0;
};
