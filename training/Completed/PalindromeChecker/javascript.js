var answer;
function palindrome(str) {
    var str = str.replace(/\s+/g, '');
    str = str.replace(/\s+/g, '+');
    str  = str.replace(/[^a-zA-Z0-9+]/g, "");
    str=str.toLowerCase();
    var len = str.length - 1;
    var i, n;
    answer = "";
    for (i = 0; i - 1 < len; i++) {
      if (str[i] == str[len - i]) {
        answer= 1;
      } else {
        answer = -1;
        break;
      }

    }
    if (answer==1){answer=true;}
    else{answer=false;}
    return Boolean(answer)
  }


