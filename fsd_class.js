console.log(age);
let age =14;  //the period between enetring a scope and intialising are let and const variable is called temporal dead zone
//Closure
console.log(n);          //reference error due to temperaral dead zone(the period bw entering a scope and initializing const variable )
var n="rishi";

// closures->the inner function has access to the outer function's variables and parameters even after the outer function has returned.
function outer(){
    let a=10;
    function inner(){          
        a++; 
        console.log("a:"+a);
    }
    return inner;
}
let increament=outer();
increament();
increament();
// Higher order function
// a function that accepts other functin as an arg or return a function is called a higher order function.
function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
function multiply(x,y){
    return x*y;
}
console.log()
//DOT Map
let numbers=[1,2,3,4,5];
let square=numbers.map(function(number)){
    return number*number;
}
console.log(numbers);
console.log(square);
//arrow function
let numbers=[1,2,3,4,5];
let square=numbers.map(function(number=>number*number)){
    console.log(s);
    //.filter
    let numbers=[1,2,3,4,5];
let even=numbers.filter(number=>number%2==0){
    console.log(even);
    //.reduce//combing all elements of arr in single value
     let numbers=[1,2,3,4,5];
     let sum=number.reduce((sum,number)=>{
        return sum+number;
     },0);
     console.log(sum);
     // find maximum number
     // max value using reduce
let num4=[1,2,3,4,5];
let max=num4.reduce((acc,curr)=>{
    return curr>acc?curr:acc;
},0);
console.log(max);


