// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//Req 3-a
let revWord1 = (str) => {
  let arr = str.split(" ");
  let result = " ";
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};
let revWords1 = (sent) => {
  let arr = sent.split(" ");
  let result = " ";
  for (var i = 0; i < arr.length; i++) {
    result = revWord1(arr[i]) + result;
  }
  return result;
};

// Req 3-b
let revWord2 = (str) => {
  let arr = str.split(" ");
  let result = " ";
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};
let revWords2 = (sent) => {
  let arr = sent.split(" ");
  let result = " ";
  arr.forEach((char) => {
    result = revWord2(char) + result;
  });
  return result;
};


//Req 3-c
let revWord3 = (str) => {
  let arr = str.split(" ");
  let result = " ";
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};
let revWords3 = (sent) => {
  let arr = sent.split(" ");
  let result = " ";
  for (char of arr) {
    result = revWord3(char) + result;
  }
  return result;
};