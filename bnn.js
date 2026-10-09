// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }

// outer();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   set name(name) {
//     this._name = name;
//   }
// }
// let A1 = new Animal('dog');
// A1.name = 'cat';
// console.log(A1._name);

// class car{
//   constructor(brand){
//     this.brand = brand;
//   }
//   set brand(brand){
//     if (!brand){
//       console.log('brand cannot be empty');
//     }
//     else if(brand.length < 2){
//       console.log('Brand is too short');
//     }
//     else{
//       this._brand = brand;
//     }
//   }
// }
// let myCar = new car('Honda');
// myCar.brand = '';
// myCar.brand = 'A';
// myCar.brand = 'Toyota';
// console.log(myCar._brand);

class shapes {
  property(){
    console.log('This is a shape');
  }
  job(){
    console.log('Shapes are used in design and art');
  }
}

class circle extends shapes {
  property(){
    console.log('This is a circle');
  }
  job(){
    console.log('Circles are used in wheels and clocks');
  }
}

shapes.prototype.color = 'red';


let myShape = new shapes();
myShape.property();
myShape.job();

let myCircle = new circle();
myCircle.property();
myCircle.job();
console.log(myCircle.color);