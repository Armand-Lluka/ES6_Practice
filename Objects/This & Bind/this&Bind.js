// A basic Object that has some functionality with a 'talk' method, and some data like 'woof' 

let dog = {
    sound: "woof",
    talk: function() {
        console.log(this.sound)
    }
} 

dog.talk() // It will woof 

let talkFunction = dog.talk // We take the dog.talk method and we assign it to a talkFunction variable 

talkFunction()  
// undefined????? WTF ??? 

/*  
    * This is the functional nature of Javascript clashing with it's object oriented nature. In functional languages there is no concept of this "This". 
    * In object oriented languages "This" is needed to refer to the object itself.
    * When the 'Method' of 'dog.talk' is moved to the left in 'talkFunction' it is no longer a method of an object, it just a free flowing function, the context of has been 'this' is lost. 
*/ 

/* 
    let talkFunction = function() {
        console.log(this.sound)      // There is no longer a context for 'this'
    }
*/ 

let boundFunction = talkFunction.bind(dog)  // The bind keyword gives context to the talkFunction when you give the dog object as an argument
boundFunction() // There is 'woof'ing 


// Another example 

let button = document.getElementById('coolButton')

button.addEventListener(
    'click',
    dog.talk // When click is called, "this", in the context of the eventListner is not going to be the same 'this' as in the dog object
    //dog.talk.bind(this)  A new instance of dog.talk is passed into the event listner 
)