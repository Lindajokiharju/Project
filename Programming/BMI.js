// 1. Declare variables
var massMark=78;
var massJohn=91;
var heightMark=1.69;
var heigtJohn=1.95;


// 2. Calculate the BMIs
var bmiMark = (massmark)/(heightmark * heightmark);
var bmiJohn = (massjohn)/(heightjohn * heightjohn);


function calcBMI(mass,height){
    return mass / (height * height);
}

var bmiJohn = calcBMI(massJohn, heightJohn);
var bmiMark = calcBMI(massMark, heightMark);

// 3. Compare the BMIs with a Boolean
var markHigherBMI = bmiMark > bmiJohn;
    // console.log(markHigherBMI);
    // true


// 4. Print the result
console.log('Is Mark\'s BMI higher than John\'s?' + " " + markHigherBMI);


