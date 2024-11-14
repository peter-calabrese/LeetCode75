var kidsWithCandies: (candies: number[], extraCandies: number) => boolean[] =
  function (candies, extraCandies) {
    let largestCandyCount: number = Math.max(...candies);
    const arr: boolean[] = [];
    for (let candy of candies) {
      arr.push(candy + extraCandies >= largestCandyCount);
    }
    return arr;
  };
