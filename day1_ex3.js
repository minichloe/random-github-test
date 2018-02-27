// Adjust all the comparisons below to display true.  You should see true 10 times

var chocolateCake = "ChocolateCake";
var oneHundred = 100;

// 0
console.log("Hello World".length * 30 > 222);
// 1
console.log(9*3 === 27);
// 2
console.log(19 < 22);
// 3
console.log(8*2 !== 24);
// 4: Hint: Look up Math.abs();
console.log(Math.abs(-22) !== -22);
// 5: What is the value returned from chocolateCake.slice(start, end);
console.log(chocolateCake.slice(5,"ChocolateCake".length) !== 8);
// 6
console.log("YankeesWin!"[5] === "e");
// 7
console.log("USA WORLD CUP!" !== "usa world cup!");
// 8
console.log(8>7 && 9<10);
// 9: What is typeof? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
console.log(("foo".length > 2 && 10%5 === 2) || typeof oneHundred.toString() !== 'number');
