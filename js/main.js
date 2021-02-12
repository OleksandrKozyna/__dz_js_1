var myNum = 10,
myStr = 'строка',
myBool = true,
myArr = [1,2,3,4,5]
var myObj = {first: "First Name", last: "Last Name"};
var decimal2 = myNum.toFixed(2);
var i = 10;
console.log (++i);
var i = 10;
console.log (i++);
var i = 10;
console.log (i--);
var i = 10;
console.log (--i);
var myTest = 20;
myTest+=10;
myTest-=10;
myTest*=10;
myTest/=10;
myTest%=10;
var myPi = Math.PI;
console.log (Math.PI);
var myRound = 89;
console.log(Math.round);
var myRandom = 2;
console.log(Math.random()*100);
var myPow = 243;
console.log(Math.pow(3,3));
var strObj = {str:'Мама мыла раму, рама мыла маму'};
strObj.length =strObj.str.length;
var isRamaPos = strObj.str.indexOf('рама')
console.log (isRamaPos);
var strReplace =strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
console.log (strReplace);
console.log(strObj.str.toUpperCase());
console.log(strObj.str.toLowerCase());