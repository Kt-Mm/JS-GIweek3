//EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(run){ //create func. w/ name & argument/paramater()
    return "Today's excercise is:" + run; // here we callback on what our fucntion is doing
} // close bracket to close function.
var run = exercise('running'); //created variable w/ value. for our exercise function

console.log(run); // now we console.log our paramater/argument for our output(return value)



function exerciseTwo(swim){ //create func. w/ name & argument/paramater()
    return "Today's excercise is:" + swim; // here we callback on what our fucntion is doing
} // clsoe bracket to close function
var swim = exercise('swimming'); //created variable w/ value. for our exercise function

console.log(swim); // now we console.log our paramater/argument for our output(return value)

//MEDIUM: Write a function that would allow you to do this:
//var sharePizza = cutPizzaSlices(8);
//console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
//console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(slices){ // create function w/ name: cutpizzaslice giving the paramenter 8 for slices.
    return function(sharePizza){ // returning new func.(sharedpizza) to cutpizzaslice func

var sharePizza = "Each person gets" + (slices / sharePizza) + " " + " slices of pizza";// here we give a new variable to create a operator
                                                                            // to find out how many slices each person will get when we
                                                                            //when we console.log our variable name (sharpizza(2))--> (2) is describing
                                                                            //how many we are sharing by so our operator is (slice/sharedpizza)
                                                                        

        return sharePizza; // we want our function to return the value of our operator when we console.log our sharepizza varable.
}
}
var sharePizza = cutPizzaSlices(8); // variable for pizza prior to cutting

console.log(sharePizza(2)); // out come after cutting & sharing

function cutPizzaSlices(slices){ // create function w/ name: cutpizzaslice giving the paramenter 8 for slices.
    return function(sharePizza1){ // returning new func.(sharedpizza) to cutpizzaslice func

var sharePizza1 = "Each person gets" + (slices / sharePizza1) + " " + " slices of pizza";// here we give a new variable to create a operator
                                                                            // to find out how many slices each person will get when we
                                                                            //when we console.log our variable name (sharpizza(2))--> (2) is describing
                                                                            //how many we are sharing by so our operator is (slice/sharedpizza)
                                                                        

        return sharePizza1; // we want our function to return the value of our operator when we console.log our sharepizza varable.
}
}
var sharePizza1 = cutPizzaSlices(8); // variable for pizza prior to cutting

console.log(sharePizza1(3)); // out come after cutting & sharing

//HARD: Data security exercise. Inside of a closure, create an object 
//called pii (Personally Identifiable Information)that cannot be accessed 
//directly. The object should have at least two properties: name and ssn. 
//Only the name property should be accessible, and it should be called through 
//a public function. The ssn property should not be accessible at all.
//Creating private objects and private properties helps you control who has access 
//to what data and helps you prevent people who shouldn't see important info like 
//social security numbers from getting access to the data.
//You can use 'getName' or other get methods to access data that people might
// need. For example, people addressing a package or email may need a customer's
// name, but they definitely shouldn't have access to their ssn.

var pii = (function(){ // create closure w/ objects
    var pi = { //object
        name: "Mary", // property
        ssn: "999-00-8888" //property
    };
    function getName(){ // create function that is publice with getName method
        return pi.name; // returns the value to the objecr
    }
    return{
        getName: getName
    }; 
})();

console.log(pii.getName()); // pbject.getName allows us to access our private data

//VERY HARD: Object prototype chain and prototypal inheritance exercise.
//1. Create a Person constructor that has three properties: name, job, and age.
//2. Give the Person an 'exercise' method that console logs whatever you want, 
//e.g. "Running is fun! - said no one ever".
//3. Give the Person a 'fetchJob' method that console logs the person's name and 
//job, e.g. "Brad is a    back-end developer".

//4. Create a Programmer constructor that inherits all the members from Person
 //with an additional 'languages' property that is passed in and a busy property 
 //that is NOT passed in and is set to true by default.
//5. Give the Programmer a 'completeTask' method that updates the busy property 
//on that programmer to be false. Also give the Programmer an 'acceptNewTask' 
//method that updates the busy property on that programmer to be true.
//6. Give the Programmer an 'offerNewTask' method that console logs one thing 
//if the programmer is busy and another if the programmer is not, e.g. should 
//initially log out "Mark can't accept any new tasks right now." and "Mark would 
//love to take on a new responsibility." if the programmer is not busy.
//7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add 
//new languages to the programmer and list off all languages the programmer knows.
//8. Test it out - can you create different programmers and run all the methods 
//on them? Does each programmer maintain their own properties properly and 
//independently of the other programmers?
//Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new 
//methods or properties to  incorporate the syntax.
//function Person(name, job, age) { }
//function Programmer(name, job, age, languages) { }

class Person {
constructor () {
    this.name = 'Suzzane';
    this.job = 'CNA';
    this.age = 23;
}
exercise() {
    console.log('It is leg day');
}
fetchJob() {
    console.log('Suzzane is a CNA worker.');
}
}
 //creating a new instance(variable) of Person class
 let suzzane = new Person();

 suzzane.exercise(); //calling the exercises method on object (suzzane)
//output: It is leg day

suzzane.fetchJob(); //calling the exercises method on object (suzzane)
//output: It is leg day

//here we are creating a 2nd person programmer.
class Person2{
    constructor(){
        this.name = 'Kimura'; // constructors properties
        this.job = 'Nail Tech';
        this.age = 18;
        this.languages = ["English", "Khmer", "Thai"];
        this.isBusy = true;  
    }
}

    //creating method
function completeTask() {
        if (this.isBusy === false) {
            console.log(`${this.name} is not busy.`);
        }
    }
    //creating method
function acceptNewTask(){
        if (this.isBusy === true) {
            console.log(`${this.name} is busy.`);
        }
    }
function offerNewTask() {
    if (this.isBusy === true) {
        console.log('Kimura is not accepting new task at this time');
    }else {
        console.log('Kimura would love to help with new task.');
    }
}    
    

//creating learnNewLanguage method()
function learnNewLanguage(){
    this.languages.push("lao", "Spanish");
} 

function listLanguage(){
    learnNewLanguage.call(this);
    console.log(this.languages);
}


//creating new instance(variable) for Person2 object
let kimura = new Person2();

completeTask.call(kimura);

acceptNewTask.call(kimura);

offerNewTask.call(kimura);

listLanguage.call(kimura);



 