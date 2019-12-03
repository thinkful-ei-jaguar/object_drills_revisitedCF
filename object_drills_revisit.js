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