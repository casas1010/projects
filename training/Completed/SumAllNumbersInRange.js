/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

*/

var sum = 0;
var big;
var small;


function sumAll(arr) {

    findSnL(arr);//find biggest ans smallest numbers
    sumi();
    return sum;

}




function sumi() {
    for (i = small; i <= big; i++) {
        sum += i;
    }

}
// find biggest ans smallest numbers
function findSnL(arr) {

    if (arr[0] > arr[1]) {
        big = arr[0];
        small = arr[1];

    }
    else if ((arr[0] < arr[1])) {
        big = arr[1];
        small = arr[0];

    }
    else {
        sum = arr[0] + arr[1];
    }


}

var ans = sumAll([10, 5]);
var fool = 3;
