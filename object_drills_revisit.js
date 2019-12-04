'use strict';

// Object Creator Drill

function createMyObject() {
    return { 
    foo: "bar",
    answerToUniverse: 42,
    "olly olly": "oxen free",
    sayHello: function() {
        return "Hello!"; 
        }
    }
}

//Object Updater

function updateObject(obj) {
    obj.foo = "foo"; //remember that updating the key/value pairs is done with = and NOT : !! 
    obj.bar = "bar";
    obj.bizz = "bizz";
    obj.bang = "bang";
    return obj;
}

//Self-Reference 

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() {
          return `${this.firstName} ${this.lastName}`
      },
    };
    return person;
  }

  //Deleting Keys

  const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete sampleObj.foo;
    delete sampleObj.bar;
    return sampleObj; 
  }

  // Make Student Reports

  function makeStudentReport(data) {
     return data.map(function(item) {
         return `${item.name}: ${item.grade}` //initially used "this.name", but item is correct as it is passing through .map()
     });
  }

  //Enroll In Summer School

  const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    return students.map(student => { //you can do this because studentData is an ARRAY OF OBJECTS.
        return {
            name: student.name, // originally had as "students.name", but once again have to use param passing in .map()! 
            status: "In Summer School", 
            course: student.course
        };
    });
  }

  //Find by ID

  const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {
    for (let x = 0; x < items.length; x++) { 
        if (items.id[i] === idNum) {
            return items [x];
        }
    }
  } //when time permits, try this drill again with the .find() function. 

//Validate Object Keys 

const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  

  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    if (Object.keys(object).length !== expectedKeys.length) { //if length of all key/value pairs does not match 2nd param's length
        return false; //objectB won't work because lengths dont match the expectation
    }
    for (let i = 0; i < expectedKeys.length; i++) {
      if (!Object.keys(object).find(key => key === expectedKeys[i])) { //in the loop, if object's keys are MORE than expected value, also false
            return false;
            }
        }
    return true; //after the if and loop filters out everything that doesn't meet critiera, remaining params are TRUE.
}   
  