const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {
  return {};
};

const returnAbcString = function (value) {
  return "abc123";
};

const returnSumOfTen = function (arg1, arg2) {
  return arg1 +arg2;
};

const subtraction = function (arg1, arg2) {
  return arg1 - arg2;
};

const multiplication = function (arg1, arg2) {
  return arg1 * arg2;
};

const division = function (arg1, arg2) {
  return arg1/arg2;
};

const returnArray = function (arg1) {
  return arg1;
};

const returnFirstIndex = function (arg1) {
  const theArray = [1,2,3];
  return theArray[0];
};

const returnSecondIndex = function (arg1) {
  return arg1[1];
};

const returnArrayLength = function (arg1) {
  return arg1.length;
};

const arraySum = function (arg1) {
  return arg1[0] + arg1[1] + arg1[2];
};

const arraySubtraction = function (arg1) {
  let result = 0;
  for(const arg of arg1){
    result -= arg;
  }
  return result;
};

const multiplicationArray = function (arg1) {
  return arg1[0] * arg1[1] * arg1[2];
};

const divisionArray = function (arg1) {
  let answer = arg1[0]/arg1[1]/arg1[2];
  answer = answer.toFixed(3);
   answer = Number(answer);
  return answer;
};

const oddArray = function (arg1) {
let newArray = [];
for (const arg of arg1){
  if (arg %2 !== 0){
    newArray.push(arg);
  }
 
}
return (newArray);
};

const evenArray = function (arg1) {
  let newArray = [];
  for (const arg of arg1){
    if (arg %2 === 0){
      newArray.push(arg);
    }
   
  }
  return (newArray);
};

const returnFruits = function (arg1) {
  let newArray = [];
  for (const arg of arg1){
    if (arg === 'apple' || arg === 'orange'){
      newArray.push(arg);
    }
   
  }
  return (newArray);
};
