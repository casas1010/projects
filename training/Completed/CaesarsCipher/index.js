




var ans='';

var d='';
var charFromString="";
var charFromStringCode="";
var ModcharFromStringCode="";
var ModcharFromString_String="";



function rot13(str) {
    // get char values from input
    var len = str.length;

    
    for (i = 0; len-1>= i; i++) {
        
        charFromString = str[i];

        charFromStringCode = str[i].charCodeAt(0);
        
        
        if( charFromStringCode>77 && charFromStringCode<=90 ) {
            ModcharFromStringCode=charFromStringCode-13;
        }
        else if( (65 <= charFromStringCode) && (charFromStringCode<=77) ) {
            ModcharFromStringCode = charFromStringCode+13;
        }
        else {ModcharFromStringCode=charFromStringCode;}
        
        ModcharFromString_String= String.fromCharCode(ModcharFromStringCode);
        
        ans+=ModcharFromString_String;
    }
    return ans;


}

var poop=rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
var a=3;

