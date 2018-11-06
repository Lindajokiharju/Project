// 1. Create an object for John
    // Properties within the object - instead of the equal sign use (:)
    var john = {
        fullName: "John Smith",
        mass: 92,
        height: 1.95,
        bmi: 0,
        calcBMI: function (){
            this.bmi = this.mass / (this.height * this.height);
        }
    }    
john.calcBMI();
console.log(john);

// 2. Create an object for Mark

var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    bmi: 0,
    calcBMI: function (){
    this.bmi = this.mass / (this.height * this.height);  // <-- function to calculate the BMI
    }
    } 


// 3. Call functions
john.calcBMI();
mark.calcBMI();

console.log(john,mark);
 
// 4. Print to the console

if (john.bmi > mark.bmi) {
    console.log(john.fullname + ' has a giher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullname + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('they have the same bmi');
}



