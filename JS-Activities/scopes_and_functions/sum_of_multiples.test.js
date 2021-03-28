/*A variation on Problem 1 at Project Euler http://projecteuler.net/problem=1*/
const sumOfMultiples = require("./sum_of_multiples");
test("sum to 1", () => {
    expect(sumOfMultiples(1, [3, 5])).toBe(0); 
});
test("sum to 3", () => {
    expect(sumOfMultiples(4, [3, 5])).toBe(3); 
});
test("sum to 10", () => {
    expect(sumOfMultiples(10, [3, 5])).toBe(23);
});
test("sum to 20", () => {
    expect(sumOfMultiples(20, [3, 5])).toBe(78);
});
test("sum to 100", () => {
    expect(sumOfMultiples(100, [3, 5])).toBe(2318);
});
test("sum to 1000", () => {
    expect(sumOfMultiples(1000, [3, 5])).toBe(233168);
});
test("configurable 7, 13, 17 to 20", () => {
    multiples = [7, 13, 17]
    expect(sumOfMultiples(20, multiples)).toBe(51);
});
test("configurable 4, 6 to 15", () => {
    multiples = [4, 6]
    expect(sumOfMultiples(15, multiples)).toBe(30);
});
test("configurable 5, 6, 8 to 150", () => {
    multiples = [5, 6, 8]
    expect(sumOfMultiples(150, multiples)).toBe(4419);
});
test("configurable 43, 47 to 10000", () => {
    multiples = [43, 47]
    expect(sumOfMultiples(10000, multiples)).toBe(2203160);
});