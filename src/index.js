module.exports = function toReadable (num) {
    let mapOfNumbers = new Map([
        [0, "zero"] , [1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"],
        [6, "six"], [7, "seven"], [8, "eight"], [9, "nine"], [10, "ten"],
        [11, "eleven"], [12, "twelve"], [13, "thirteen"], [14, "fourteen"], [15, "fifteen"],
        [16, "sixteen"], [17, "seventeen"], [18, "eighteen"], [19, "nineteen"], [20, "twenty"],
        [30, "thirty"], [40, "forty"], [50, "fifty"], [60, "sixty"], [70, "seventy"], 
        [80, "eighty"], [90, "ninety"]
    ]);
    let arr = [];
    if (num >= 0 && num <= 20 )
    {
    return mapOfNumbers.get(num);
    }
    else if (num >= 21 && num <= 99) {
      if (num % 10 === 0)
      return mapOfNumbers.get(num);

      arr.unshift(num % 10);
      num -= num % 10;
      arr.unshift(num);
      return mapOfNumbers.get(arr[0]) + " " + mapOfNumbers.get(arr[1]);
    }
      else if (num >= 100 && num <= 999) {
      if (num % 100 === 0) return  mapOfNumbers.get(num / 100) + " hundred";
       arr.push(Math.floor(num / 100)); 
       num = num % 100;

       if (num > 0 && num < 20) return mapOfNumbers.get(arr[0]) + " hundred " + mapOfNumbers.get(num);
       
       arr.push(num - (num % 10));
       arr.push(num % 10);
       
       if (arr[2] === 0)
       return mapOfNumbers.get(arr[0]) + " hundred " + mapOfNumbers.get(arr[1]);
       else return mapOfNumbers.get(arr[0]) + " hundred " + mapOfNumbers.get(arr[1]) + " " + mapOfNumbers.get(arr[2]);
  }
}

