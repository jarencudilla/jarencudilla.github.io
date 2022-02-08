// 8 Kyu
// Counting sheep... (TypeScript)

// Initially I thought that it would be a different syntax from my JS solution but logically it's still an array with unknown length and the purpose is to count the total number of sheep in the array 

// Solution:

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
 let count = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]) count += 1
    }
    return count
}

// Find Maximum and Minimum Values of a List (TypeScript)

// I thought I would have a hard time with typescript but as I'm doing more TypeScript exercises along with my JavaScript exercises gaining more and more confidence in learning. 

// Solution:

export const min = (list: number[]): number => {
  return Math.min(...list)
};

export const max = (list: number[]): number => {
  return Math.max(...list)
};

// Beginner - Reduce but Grow (TypeScript)

// First time I read "Given a non-empty array of integers" I was thinking now is the time to use `.reduce()`

// Solution:

export function grow(arr: number[]): number {
  return arr.reduce((a,b)=> a*b);
}

// Invert values (TypeScript)

// Given an array with positive and negative values I would need to make positive to negative and vice versa
// Need to figure out how to work with positive and negative numbers. I figured adding a positive number to a negative version of itself would equal to 0. 

// 1st Solution:

export function invert(array: number[]): number[] {
    return array.map(num => num * -num)
}

// values just doubled since I multiplied it to itself. So how about multiplying it to -1

export function invert(array: number[]): number[] {
    return array.map(num => num * -1)
}

// Beginner Series #4 Cockroach (TypeScript)

// (cockroachSpeed(1.08), 30);
// (cockroachSpeed(1.09), 30);
// (cockroachSpeed(0), 0);


// What I did is to divide 30 by 1.8  and got 27.7777777778 
// But returning s * 27.7777777778 results in over 30 I tried 27.8 but got less than 30.
// That's when I discovered `Math.floor()` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// Solution:

export function cockroachSpeed(s: number): number{
  return Math.floor(s * 27.778)
}
