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