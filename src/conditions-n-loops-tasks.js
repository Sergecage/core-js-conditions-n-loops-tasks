/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (queen.x === queen.y && king.x === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b && a + b > c && c !== 0) {
    return true;
  }
  if (a === c && a + c > b && b !== 0) {
    return true;
  }
  if (b === c && b + c > a && a !== 0) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const arrRoman = ['X', 'IX', 'V', 'IV', 'I'];
  const arrArabic = [10, 9, 5, 4, 1];
  let romanNum = '';
  let searchNum = 0;
  let newNum = num;
  while (newNum > 0) {
    if (newNum >= arrArabic[searchNum]) {
      romanNum += arrRoman[searchNum];
      newNum -= arrArabic[searchNum];
    } else searchNum += 1;
  }
  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const numTostring = (num) => {
    switch (num) {
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '0':
        return 'zero';
      case '-':
        return 'minus';
      case '.':
        return 'point';
      case ',':
        return 'point';
      default:
        return false;
    }
  };

  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const num = numberStr[i];
    switch (result.length) {
      case 0:
        result += numTostring(num);
        break;
      default:
        result += ` ${numTostring(num)}`;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const strLength = str.length;
  for (let i = 0; i < strLength / 2; i += 1) {
    if (str[i] !== str[strLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numContains = false;
  for (let i = 0; i <= String(num).length; i += 1) {
    if (String(num)[i] === String(digit)) {
      numContains = true;
    }
  }
  return numContains;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    rightSum -= arr[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiralMatrix = [];
  let counter = 0;
  for (let i = 0; i < size; i += 1) {
    spiralMatrix[i] = [];
  }

  let [startRow, endRow] = [0, size];
  let [startColumn, endColumn] = [0, size];
  while (startRow < endRow && startColumn < endColumn) {
    for (let i = startRow; i < endRow; i += 1) {
      counter += 1;
      spiralMatrix[startColumn][i] = counter;
    }
    startColumn += 1;

    for (let i = startColumn; i < endColumn; i += 1) {
      counter += 1;
      spiralMatrix[i][endRow - 1] = counter;
    }
    endRow -= 1;

    for (let i = endRow - 1; i >= startRow; i -= 1) {
      counter += 1;
      spiralMatrix[endColumn - 1][i] = counter;
    }
    endColumn -= 1;

    for (let i = endColumn - 1; i >= startColumn; i -= 1) {
      counter += 1;
      spiralMatrix[i][startRow] = counter;
    }
    startRow += 1;
  }
  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedMatrix = [...matrix];
  const testMatrix = [];

  for (let i = 0; i < rotatedMatrix.length; i += 1) {
    testMatrix[i] = [];
  }
  for (let i = rotatedMatrix[0].length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < rotatedMatrix.length; j += 1) {
      testMatrix[j][rotatedMatrix.length - 1 - i] = rotatedMatrix[i][j];
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      rotatedMatrix[i][j] = testMatrix[i][j];
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 1) {
    return arr;
  }
  const newArr = arr;
  const arrAsc = arr[arr.length - 1];
  const startArr = [];
  const endArr = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < arrAsc) {
      startArr[startArr.length] = arr[i];
    } else {
      endArr[endArr.length] = arr[i];
    }
  }
  const arrSorted = [...sortByAsc(startArr), arrAsc, ...sortByAsc(endArr)];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = arrSorted[i];
  }
  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let shuffledChar = str;
  for (let i = 0; i < iterations; i += 1) {
    let oddChar = '';
    let evenChar = '';
    for (let j = 1; j < shuffledChar.length; j += 2) {
      evenChar += shuffledChar[j - 1];
      oddChar += shuffledChar[j];
    }
    shuffledChar = evenChar + oddChar;
  }
  return shuffledChar;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arrNum = Array.from(String(number), Number);
  let invertedNum = arrNum.length - 1;

  while (invertedNum > 0 && arrNum[invertedNum - 1] >= arrNum[invertedNum]) {
    invertedNum -= 1;
  }
  if (invertedNum <= 0) {
    return number;
  }
  let backwardInver = arrNum.length - 1;
  while (arrNum[backwardInver] <= arrNum[invertedNum - 1]) {
    backwardInver -= 1;
  }
  [arrNum[invertedNum - 1], arrNum[backwardInver]] = [
    arrNum[backwardInver],
    arrNum[invertedNum - 1],
  ];

  backwardInver = arrNum.length - 1;
  while (invertedNum < backwardInver) {
    [arrNum[invertedNum], arrNum[backwardInver]] = [
      arrNum[backwardInver],
      arrNum[invertedNum],
    ];
    invertedNum += 1;
    backwardInver -= 1;
  }
  return Number(arrNum.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
