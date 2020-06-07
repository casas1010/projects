var ans, ans1 = '', ans2 = '', ans3, len, mul, i, val, pos, delta, _A = 0, _B = 0, A = 0, B = A + 1;
var inArray = [];
var ansString = '';
var counter = 0;

function ansObj(val, pos) {
    this.value = val;
    this.position = pos;
}


var dictionary = {
    name: ["I", "V", "X", "L", "C", "D", "M"],
    nValue: [1, 5, 10, 50, 100, 500, 1000]
}


//dictionary.nValue[0] =1
//dictionary.nValue[1] =5

//convertToRoman(379);
//inArray[0]=9


convertToRoman(379);

function loops() {
    for (i = 0; _A > i; i++) {
        ans1 += dictionary.name[A];
    }

    for (i = 0; _B > i; i++) {
        ans2 += dictionary.name[B];
    }

    ans = ans1 + ans2;
    ansString += " "+ans;
    ansString = ansString;
    deltaValue = 0;
    _A = 0;
    _B = 0;
    A++;
    B = A + 1;





}


function endFunction() {


    if (_A < 0) {
        _A = -_A;

        loops();



    }
    else {
        loops();
        //break;


    }


}

function calcDelta() {
    partA = dictionary.nValue[A] * (_A);
    partB = dictionary.nValue[B] * (_B);
    dicSum = dictionary.nValue[A] * (_A) + dictionary.nValue[B] * (_B);
    delta = inArray[A] - dicSum;
    if (delta == 0) {
        endFunction();

    }

    return delta;
}

function varFind() {
    _A = (inArray[A] - dictionary.nValue[B] * (_B)) / dictionary.nValue[A];
    calcDelta();
}

function convertToRoman(input) {
    // Turn numberal input into a string
    answer = input.toString();
    len = answer.length;
    i = len - 1;
    // Turn string into a array
    for (i = len - 1, Q = 1; i >= 0; i--, Q = Q * 10) {
        var modValue = Q * answer[i];
        inArray.push(modValue);
    }


    for (; _A <= len;) {

        var deltaValue = calcDelta();

        if (deltaValue > 0) {

            if ( _A == 3 ) {
                _A = 0;
                _B++;
                flip = true;
            }
            if ( _B >= 3 ){
                _A=0;
                _B=0;
                A++;
            }


            else {
                ++_A;
                continue;
            }
            if (flip != true) {
                ++_A;
                
            }
            flip = false;
        }





        if (deltaValue < 0 ) {
            varFind();
        }


    }
}



/*
function loops() {
    //loop 1
    for (; 3 >= _A;) {
        inArray = inArray[A];
        dicValue = dictionary.nValue[A];

        dicSum = dictionary.nValue[A] * (_A) + dictionary.nValue[B] * (_B);

        delta = inArray - calc;

        if (delta == 0) {
            ans1 = "";
            ans2 = "";
            for (i = 0; _A > i; i++) {
                ans1 += dictionary.name[A];

            }
            for (i = 0; _B > i; i++) {
                ans2 += dictionary.name[B];

            }
            ans = ans2 + ans1;
            return ans;
        }


        if (delta != 0) {
            delta = 0;
            calc = 0;
            if ((3 == _A) || (3 == _A) && (3 == _B)) {

                _A = 0;
                break;
            }
        }



        if (3 != _A) {
            _A++
            continue;
        }







    }




    for (; 3 >= _B; _B++) {
        inArray = inArray[A];
        dicValue = dictionary.nValue[A];

        calc = dictionary.nValue[A] * (_A) + dictionary.nValue[B] * (_B);
        delta = inArray - calc;
        if (delta != 0) {
            delta = 0;
            calc = 0;
            _B++;

            break;

        }
        if (delta === 0) {
            break;
        }
        else {
            delta = 0;
            break;

        }
    }

}
    }

    */