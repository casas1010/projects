
var inASCCIval;
var len;




function telephoneCheck(input) {
    var len = input.length;

    //valindate input values

    //---------------------------------------------------------------------
    for (i = 0; len - 1 >= i; i++) {
        inASCCIval = input[i].charCodeAt(0);

        // check if input is number
        if ((inASCCIval >= 48) && (inASCCIval <= 57)) {
            continue;
        }

        else if (inASCCIval == 45) {// - check
            continue;
        }

        else if (inASCCIval == 32) {// space check
            continue;
        }

        else if (inASCCIval == 40) {//  ( check
            continue;
        }

        else if (inASCCIval == 41) {// ) check
            continue;
        }

        else {
            return false;
        }
    }
    //---------------------------------------------------------------------
    // check format of the first 4 digits (right to left)

    for (i = len - 1; i >= counter; i--) {
        inASCCIval = input[i].charCodeAt(0);

        //if ((inASCCIval >= 48) && (inASCCIval <= 57)) {

        if ((inASCCIval >= 48) && (inASCCIval <= 57)) {
            continue;
        }



        else {
            return false;
        }




    }
    // check the 5th number for space or -
    var counter = len - 1 - 3 - 1;

    var val = input[counter];   // check for number, space or -

    if (len==8){

    }

    else {

    
    var at5 = val.charCodeAt(0);

 

    if ((val == "-") || (val == " ")) {
        ar = "ar";
    }


    else if ((at5 >= 48) && (at5 <= 57)) {
        ar = "ar";

    }


    else {
        return false;
    }


    // check the 9th number for space or -
    var counter = len - 1 - 3 - 5;

    

    var val = input[counter];   // check for number, space or -
    

    var at5 = val.charCodeAt(0);

    if ((val == "-") || (val == " ")) {
        ar = "ar";
    }


    else if ((val == ")")) {
        ar = "ar";
    }

    else if ((at5 >= 48) && (at5 <= 57)) {
        ar = "ar";

    }
    else {
        return false;
    }


    if (len==15){
       if (input[0]==1 && input[1]==" " ){
       }
       else if (input[1]=="("){}
       else {
           return false;
       }
        
    }

}//


/*

    if ((val == "-") || (val == " ")) {
        ar = "ar";


        if ((val == ")")) {
            ar = "ar";

            if ((at5 >= 48) && (at5 <= 57)) {
                ar = "ar";

            }
        }

    }

    */

 








return true;

}

var tele = "5555555"  ;
var ans = telephoneCheck(tele);
var ww = '';
  // 0 has code of 48
  // 9 has code of 57


//  check if input is a number, space, or ()
//  verify that input is in acceptable format


/*

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

*/

