// 1)sum adlı funksiya yazın. Funksiya ədədlərdən ibarət bir array i parametr
// kimi qəbul etməli və array ın bütün elementlərinin cəmini qaytarmalıdır:
function sum(){
  let sumNum=0;
  for(let i=0;i<arguments.length;i++){
    sumNum+=arguments[i];
  }
  return sumNum;
}

// 2)random adlı funksiya yazın. Funksiya lower və upper adlı iki parametr
// qəbul etməli və həmin iki ədəd arasında (hər ikisi daxil olmlaqla) ixtiyari
// bir natural ədəd qaytarmalıdır:
function random(lower,upper){
  if(upper>lower)
  return Math.floor(Math.random()*upper+lower);
  return Math.floor(Math.random()*lower+upper);
}

// 3)arithmeticMean adlı funksiya yazın. Funksiyanız ədədlərdən ibarət bir
// array i parametr kimi qəbul etməli və array in elementlərinin ədədi
// ortasını qaytarmalıdır:
function arithmeticMean(){
  let sumOfNum=0;
  for(let i=0;i<arguments.length;i++){
    sumOfNum+=arguments[i];
  }
  return sumOfNum/arguments.length;
}

// 4)geometricMean adlı funksiya yazın. Funksiyanız ədədlərdən ibarət bir
// array i parametr kimi qəbul etməli və array in elementlərinin həndəsi
// ortasını qaytarmalıdır:
function geometricMean(){
  let total=1;
  for(let i=0;i<arguments.length;i++){
    total*=arguments[i];
  }
  return Math.pow(total,1/arguments.length);
}

// 5)euclideanDistance adlı funksiya yazın. Funksiya iki vektoru parametr
// kimi qəbul etməli və onlar arasındakı Evklid məsafəsini qaytarmalıdır.
// Vektor dedikdə içərisində iki element olan array dən söhbət gedir.
// Arrayin birinci elementi x ikinci elementi isə y i bildirir: [x, y] .
function euclideanDistance(x1,y1,x2,y2){
  return Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
}

// 6)pickOne adlı funksiya yazın. Funksiya bir ədəd array qəbul etməli və
// içərisindən ixtiyari bir elementi qaytarmalıdır:
function pickOne(array){
  const randomIndex=random(0,array.length-1);
  return array[randomIndex];
}

// 7)includes adlı funksiya yazın. Funksiya bir ədəd array və bir ədəd axtarış
// üçün dəyər qəbul etməlidir. Əgər həmin dəyər array in içərisində
// mövcuddursa,true əks halda false qaytarmalıdır:
function includes(arr,obj){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===obj){
    return true;}
  }
  return false;
}

// 8)unique adlı funksiya yazın. Funksiya bir ədəd array i parametr kim qəbul
// etməli, içərisində təkrar elementlər olmayan yeni bir array qaytarmalıdır:
function unique(x){
  let obj = {};
  for (let i = x.length-1; i >= 0; i--)
     obj[x[i]] = x[i];
  let rest = []
  for (let k in obj) {
      rest.push(obj[k]);
  }
  return rest;
}

// 9)intersection adlı funksiya yazın. Funksiya iki array i parametr kimi
// qəbul etməli və onların kəsişməsini yeni array olaraq qaytarmalıdır:
function intersection(a,b){
  let ai=0;
  let bi=0;
  let result=[ ];
  while(ai<a.length && bi<b.length){
    if(a[ai]<b[bi]){ai++;}
    else if(a[ai]>b[bi]){bi++;}
    else
    {
      result.push(a[ai]);
      ai++;
      bi++;
    }
  }
  return result;
}

// 10)flat2D adlı funksiya yazın. Funksiya bir ədəd iki ölçülü array i
// parametr kimi qəbul etməli və bir ölçülü yeni bir array qaytarmalıdır:
let arrToConvert = [[0, 0, 1], [2, 3, 3], [4, 4, 5]];
function flat2D(arr){
    let result = new Array();
    for (let x = 0; x < arr.length; x++){
        for (let y = 0; y < arr[x].length; y++){
        result.push(arr[x][y])
        }
    }
    return result
}

// 11)union adlı funksiya yazın. Funksiya iki array i parametr kimi qəbul
// etməli və onların birləşməsini yeni array olaraq qaytarmalıdır:
function union(x,y) {
  let obj = {};
  for (let i = x.length-1; i >= 0; i--)
     obj[x[i]] = x[i];
  for (let i = y.length-1; i >= 0; i--)
     obj[y[i]] = y[i];
  let rest = []
  for (let k in obj) {
      rest.push(obj[k]);
  }
  return rest;
}

// 12)reverse adlı funksiya yazın. Funksiya bir ədəd array i parametr kimi
// qəbul etməli və onun tərsini yeni bir array kimi qaytarmalıdır:
function reverse(num){
  let reversed='';
  for(let i=num.length-1;i>=0;i--){
    reversed+=num[i];
  }
  return reversed;
}

// 13)map adlı funksiya yazın. Funksiya bir ədəd array i və bir ədəd
 // funksiyanı parametr kimi qəbul etməli, funksiyanın nəticəsini arrayın
 // hər bir elementinə tətbiq etməli və yeni bir array qaytarmalıdır:
const numbers=[];
function fn(number){
  return {
    tag:'div',
    textContent:number,
  }
}
map(numbers,fn);

// 14)filter adlı funksiya yazın. Funksiya bir array i və bir funksiyanı
// parametr kimi qəbul etməli və geriyə yeni bir array qaytarmalıdır.
//  Verilmiş callback funksiyası arrayin hər bir elementini yoxlamalı və
//   onun true qaytardığı bütün elementlər yeni arrayə daxil edilməlidir:
let arrays=[''];
let netice=array=>{
  return array[i]>0;
  }
filter(arrays,netice);

// 15)find adlı funksiya yazın. Funksiya bir ədəd array i və bir funksiyanı
// parametr kimi qəbul etməlidir. Verilmiş callback funksiyası arrayin hər bir
// elementini yoxlamalı və onun true qaytardığı ilk element find funksiyasını
// cavabı olmalıdır:

// 16)some adlı funksiya yazın. Funksiya bir ədəd array i və bir funksiyanı
 // parametr kimi qəbul etməli və geriyə Boolean tipli dəyər qaytarmalıdır.
 // Verilmiş callback funksiyası arrayin hər bir elementini yoxlamalı və
 // əgər ən azı bir element belə true nəticəsi versə, some funksiyasının cavabı
 //  true olmalıdır. Bütün digər hallarda some funksiyası false qaytarmalıdır:
function isBiggerThan13(element,index,array){
  return element>13;
}
some([],isBiggerThan13);

// 17)every adlı funksiya yazın. Funksiya bir ədəd array i və bir funksiyanı
 // parametr kimi qəbul etməli və geriyə Boolean tipli dəyər qaytarmalıdır.
 // Verilmiş callback funksiyası arrayin hər bir elementini yoxlamalı və əgər
 // bütün elementlər true nəticəsi versə, every funksiyasının nəticəsi true
 //  olmlalıdır. Qalan bütün hallarda every funksiyası false qaytarmalıdır:
 function isBiggerThan13(element,index,array){
   return element>13;
 }
 every([],isBiggerThan13);

 // 18)reduce adlı funksiya yazın. Funksiya bir ədəd array və biri ədəd
 // callback funksiyasını parametr kimi götürməli və geriyə yeni dəyər
 // qaytarmalıdır. reduce funksiyasının necə işləməli olduğunu öyrənmək üçün
 // reduce funksiyasının dokumentasiyasını oxuyun.

// 19)generatePassword adlı funksiya yazın. Funksiya passwordLength adlı bir
 // parametr götürməli və həmin uzunluqda şifrə generasiya etməlidir. Şifrə
 // rəqəmlərdən, böyük və kiçik ingilis hərflərindən ibarət olmalıdır:
 const generatePassword = passwordLength => {
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = upperCase.toLowerCase();
    let numbers = '0123456789';
    let chars = upperCase + lowerCase + numbers;
    let psswrd = '';
    for (let i = 0; i < passwordLength; i++){
        psswrd += chars[Math.floor(Math.random()*chars.length)];
    }
    return psswrd;
}

// 20)ceasarCipher adlı funksiya yazın. Funksiya bir ədəd string i və açar
// rəqəmi parametr kimi qəbul etməlidir. Verilən stringin ingilis hərflərindən
// ibarət bir cümlə olduğunu nəzərə alaraq, onu Sezar şifrəsi ilə şifrələyin
// və nəticəni başqa bir string kimi qaytarın.
function rot13(str) {
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_",
     ".", "&","?", "!", "@", "#", "/"];
    var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".",
     "&","?", "!", "@", "#", "/"];
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
  };
  rot13("SERR CVMMN!");
