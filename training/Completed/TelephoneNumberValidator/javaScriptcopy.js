var input = "(555)5(55?)-5555";
var inputP = input[0]; //
var inputLen = input.length;
var input2 = "";
var input3 = "";
// A -> 65
// Z -> 90
// a -> 97
// z -> 122

/*
"555-555-5555" pass
"1 555-555-5555" pass
//"1 (555) 555-5555" pass
//"555-555-5555" pass
// (555)555-5555 pass
// 1(555)555-5555 pass
// 555-5555 pass
// 5555555 pass
// 1 555)555-5555 pass
"1 555 555 5555"
"1 456 789 4444"
"(6054756961)"
"2 (757) 622-7382"
"0 (757) 622-7382"
"-1 (757) 622-7382"
"10 (757) 622-7382"
"2(757)6227382"
*/



var answer = telephoneCheck(input);
console.log(answer);

function formCheck(input2) {


    if (((inputLen >= 14) && (input[0] == 1)) || ((inputLen >= 14) && (input[0] == "("))) {


        switch (input2) {

            case ("(555) 555-5555"):
                return true;
            case ("(555) 555 5555"):
                return true;

            case ("(555)-555-5555"):
                return false;

            case ("(555) 555 5555"):
                return true;

            case ("5 555 555 5555"):
                return true;


            case ("5(555)555-5555"):
                return true;

            case ("5 (555) 555-5555"):
                return true;

            case ("5 555-555-5555"):
                return true;

            case ("5 (555)555-5555"):
                return true;

            case ("5(555)555-5555"):
                return true;
                default:
                    return false;
            r

        }
    }

    switch (input2) {
        case ("555-555-5555"):
            // code block
            return true;
        case ("(555)555-5555"):
            // code block
            return true;
        case ("(555) 555-5555"):
            return true;
        case ("555 555 5555"):
            return true;
        case ("5555555555"):
            return true;

        case ("1(555)555-5555"):
            return true;
        case ("1 555 555 5555"):
            return true;
        default:
            return false;
    }

}

function telephoneCheck(input) {
    if (numReplace(input) == true) {

        return formCheck(input2);
    }

    else {
        return false;
    }


}

function numReplace(input) {
    for (i = 0; inputLen - 1 >= i; i++) {
        inputASCCIval = input[i].charCodeAt(0);

        // check if input is number
        if ((inputASCCIval >= 48) && (inputASCCIval <= 57)) {
            input2 += 5;

        }
        else {
            input2 += input[i];

            if ((inputASCCIval >= 65) && (inputASCCIval <= 90)) {
                return false;
            }
            else if ((inputASCCIval >= 97) && (inputASCCIval <= 122)) {
                return false;

            }

        }

    }
    return true;
}

var p = 3;
var pp = 2;

