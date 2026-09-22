let marks={80,4,5,3,3};
let lowmarks=marks.some(mark=>mark<40);
console.log(lowmarks);

let highmarks=marks.every(mark=>mark>=40);
console.log(highmarks);