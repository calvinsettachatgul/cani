function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  
//   this.greeting = function(){
//       console.log("this is the objects greeting")
//   }
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

function Teacher(first, last, age, gender, interests, subject){
    Person.call(this, first, last, age, gender, interests);
    
    this.subject = subject
    
}

// Teacher.prototype.constructor => Teacher function
// Person.protype.constructor => Person function

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.greeting = function(){
  console.log("this is Teacher greeting")
}


// Teacher.prototype.greeting = Person.prototype.greeting

let per1 = new Person("per1", "set", 30, "male", ['studying'])
let cal = new Person("cal", "set", 30, "male", ['studying'])
let teach1 = new Teacher("cal", "set", 30, "male", ['reading'], 'english')
teach1.greeting()
// console.log(teach1)

// console.log(Object.getOwnPropertyNames(Teacher.prototype))
// console.log(Object.getOwnPropertyNames(Person.prototype))

// console.log(Teacher.prototype.constructor)
// console.log(teach2)

// console.log(cal)
// per1.greeting()

// cal.greeting();