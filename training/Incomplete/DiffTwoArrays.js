/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/





function diffArray(arr1, arr2) {

    arr1Len = arr1.length;  // 
    arr2Len = arr2.length;   // reference array
    ansArray = []; //3              // contains unique values from arr2 not found in arr1
    toRemove4 = []; //4
    arr1_1 = [];    // 1.1
    arr2_2 = [];    // 2.2
    ansArray2 = []; //3.3

    ansArray = findDiff(arr1, arr2);
    arr1Len = arr1_1.length;
    arr2Len = arr2_2.lenght;
    ansArray2 = findDiff(arr1_1,arr2_2)




    return ansArray2;
}





function findDiff(arr1, arr2) {



    for (l = 0; l < arr1Len; l++) { //controls max

        for (i = 0; i < arr2Len; i++) { // controls min


            if (arr1[i] == arr2[l]) {

                toRemove4 += arr1[i];
                break;
            }

            if ((arr1[i] != arr2[l]) && (i + 1 == arr2Len)) {
                ansArray.push(arr2[l]);
                continue;

            }
            else { continue; }



        }
    }
    return ansArray

}

/*
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"]
*/

var a1 = [1, 2, 3];
var a2 = [3, 4, 5];

var ans2 = diffArray(a1, a2);

console.log(ans2);



/*

function diffArray(arr1, arr2) {

    arr1Len = arr1.length;
    arr2Len = arr2.length;
    arr2Len = Math.min(arr1Len, arr2Len);
    arr1Len = Math.max(arr1Len, arr2Len);
    arr2Len = [];
    minArray = [];
    ansArray = [];
    repArray = [];
    counter = 0;


    findMaxMin(arr1, arr2);
    findDiff(minArray, arr2Len);



    return ansArray;




}

function findMaxMin(arr1, arr2) {




    if (arr1Len < arr2Len) {
        this.minArray = arr1;
        this.arr2Len = arr2;
    }
    else {
        this.minArray = arr2;
        this.arr2Len = arr1;
    }




}

function findDiff(arr1, arr2) {





    for (l = 0; l < arr1Len; l++) { //controls max

        for (i = 0; i < arr2Len; i++) { // controls min


            if (this.minArray[i] == this.arr2Len[l]) { break; }

            if ((this.minArray[i] != this.arr2Len[l]) && (i + 1 == arr2Len)) {
                ansArray.push(this.arr2Len[l]);

            }
            if (this.minArray[i] != this.arr2Len[l]) {
                continue;

            }


        }
    }

    return ansArray;








}


var a1 = [1,2,3,4,5];
var a2 = [4,5,6,7,8];

var ans2 = diffArray(a1, a2);

console.log(ans2);
*/



