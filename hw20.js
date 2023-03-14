// Завдання 1 
// let firstnumber =prompt('Enter first number');
// while(!Number(firstnumber)){
//    alert ('Please, enter you first number')
//    firstnumber = prompt('Enter first number')
// };

// let secondnumber =prompt('Enter second number');
// while(!Number(secondnumber)){
//    alert ('Please, enter you second number')
//    secondnumber = prompt('Enter secondnumber')
// };
// function maxNumber(a, b){
//    if(a > b){
//       return a
//    }
//    else if(a < b){
//       return b
//    }
// return(a+'='+b)
// };
// let res = maxNumber(firstnumber,secondnumber);
// alert('YOU RESULT : ' + res);

// // Завдання 2
// let usNum = prompt('Enter the number: ')
// while(!Number(usNum)){
//       alert ('Please, enter only number')
//       usNum = prompt('Enter number')
//    };
//  function resers(a){
//    if (+a){
//       return -a
//    }
//    else if(-a){
//       return +a
//    };
//    return 'number none'
//  };
// let result= resers(usNum)
// alert (result)

// // Завдання 3
// let useNumber = Number(prompt('Enter number'));
// let useCount = Number(prompt('Enter count'));

// function tree( _argNumber, _argCount){
//    let iteration = 0;
//    while(useCount > iteration){
//    _argNumber +=3;
//    iteration++;
// }
// return ('You result : '+_argNumber)
// };
// alert(tree(useNumber, useCount))

// Завдання 4
let userNumber = prompt( 'Enter Quantity')
while(!Number(userNumber)){
   alert ('Please, enter corect quantity')
   userNumber = prompt('Enter Quantity')
};

let chooseMetric= prompt( 'M & cm?');

function KmToM(_argmertic){
    let resultM =_argmertic *=1000;
return resultM
};

function KmToCm(_argmertric){
    let resultCM =_argmertric *=100000;
return resultCM
};

function getMetric(mertic, km,m,cm){
    if(chooseMetric == 'm' || chooseMetric == 'M' ){
       return KmToM
    }
    else if(chooseMetric == 'cm'  || chooseMetric == 'CM'){
        return KmToCm
    }
 
return
};

alert(getMetric)

