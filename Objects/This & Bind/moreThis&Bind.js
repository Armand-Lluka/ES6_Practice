// More examples of this & bind 

// Comment out the completed example, while uncommenting out the next example to work your way through. 

// Example 1

    function talk(sound){
        console.log(sound)
    }
    talk('nooooo') // Should see 'noooo' in the console

// Example 1.1

    // function talk(){
    //     console.log(this.sound) // What is 'this'? Just like in normal english, it doesn't mean anything without context 
    // } 
    // talk('Hello') // Should return 'undefined', there is no context.

// Example 1.2 (the window Object) 

    // function talk(){
    //     console.log(this) // This without any context will fall back to an object higher up in the chain, in this context it's the Global.Object
    // }                     // The Global.Object/Window.Object is the space all created Javascript objects exist in, commonly refered to as the Global Scope. 
    // talk()  
    
// Example 1.3 

    // function talk(){
    //     console.log(this.sound)
    // }

    // let anakin = {
    //     sound: " I don't like sand. It's coarse and rough and irritating and it gets everywhere. Not like here. Here everything is soft and smooth"
    // }
    // let talkBoundToAnakin = talk.bind(anakin) // Gives context to talk with an Anakin object, let's us be very explicity about what 'this' is.
    // talkBoundToAnakin()                     // Copy of talk where it is bound to a specific value 
    // talk()                                 // Binding talk to anakin does not change the talk function it will still return undefined without it's given context 

// Example 1.4 

    // function talk(){
    //     console.log(this.sound)
    // }

    // let anakin = {
    //     cringe: talk, 
    //     sound: " I don't like sand. It's coarse and rough and irritating and it gets everywhere. Not like here. Here everything is soft and smooth"
    // } 
    // anakin.cringe()              // We are calling a property on an object and Javascript will infer the context on the anakin object
    // talk()                       // Nothing about talk is being changed it's still undefined without context. 
    // let awkward = anakin.cringe  // What do you think this will return?? undefined
    // awkward()                    // It's undefined! That's because we assigned talk to awkward, upon reassighnment it's lost it's context again, unless we bind it again. 

// Example 1.5 

    // function talk(){
    //     console.log(this.sound)
    // } 

    // let anakin = {
    //     sound: "I don't like sand. It's coarse and rough and irritating and it gets everywhere. Not like here. Here everything is soft and smooth"
    // }
    // anakin.cringe = talk.bind(anakin) // creates a 'speak' property in anakin object and binds to it a method of 'talk' 
    // let awkward = anakin.cringe       
    // awkward()   // Thanks to bind there is now context 
    // talk()      // Talk has not be modified, it will still return undefined as always 


// Example 1.6 

    // function talk() {
    //     console.log(this.sound)
    // }

    // let obiwan = {
    //     speak: talk, 
    //     sound: "I have the highground anakin, it's over!"
    // } 

    // let anakin = {
    //     speak: obiwan.speak,   // What do you think this will return? 
    //     sound: 'You underestimate me'
    // } 

    // anakin.speak() //'You underestimate me'  
    //                // This is because functions are just values, they live on their own. When we called obiwan.speak we are just calling the talk() function, and since 'This' in the context of 
    //                // being called in the anakin object, it will use the 'this.sound' found in it's local context
    
// Some Rules 
    
    // 1.) Is the function called with new (new binding)? If so, this is the newly constructed object.
    // 2.) Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.
    // 3.) Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.
    // 4.) Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object. 
    
    //    https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes﻿