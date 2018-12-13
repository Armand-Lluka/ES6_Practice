// More examples of this & bind 

// Uncomment out each block of code to see examples

// Example 1

// function talk(sound){
//     console.log(sound)
// }
// talk('nooooo') // Should see 'noooo' in the console

// Example 1.1

// function talk(){
//     console.log(this.sound) // What is 'this'? Just like in normal english, it doesn't mean anything without context 
// } 
// talk('Hello') // Should return 'undefined', there is no context. Try removing the sound property from this, see what you get. 