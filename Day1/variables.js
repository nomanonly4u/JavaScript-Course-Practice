// Javascrpit is  Dynamically typed language :-
//     -It mean you can change tyoe of variable in runtime for eg you cn change string into number or array or object etc in runtime

 // Javascript is not Static Typed Language :-
 //   - Means you have to declare type of variable before using it for eg :- int , String , floating number etc 
 //   - for eg C language is static typed language 

// Variable Examples:-
   // var keyword example
   var a = 10;
   console.log(a);
   
      // you can re declare variable with same variable name through var keyword
   var a = 20;
   console.log(a);
   
     // you can also change type of variable in runtime through var keyword
    a = "Hello"
    console.log(typeof(a))
   console.log(a);
  
   
   // let 0noman = 10; // this is not allowed because name cannot start with digit and throws syntex error
   
   // let var = 10; // this is not allowed because it is reserved keyword and throws syntex error
   
   // var keyword was used before ES6 but now we should avoid it
   // var innitialed with undefined
   // var keyword is golabal scoped 
   // var can be re declared within its scope
   // var can be updated within its scope
   b = 2   // will be automatically innitialized
   var b = 25;
   var b = 30;
   b = 32;
   console.log(b)
   console.log(typeof(b))
   {
     var b = 28;
     var b = 35;
     b = 37;
     console.log(b);
   }
   console.log(b)
   
   
   // let keyword is block scoped 
   // let can be updated or re aasigned within its scope
   // let can not be re declared within its scope
   // let can not be used before declaration
   // let can be used after declaration
   // let will not innitiated with undefined
   // we should always use let keyword instead of var keyword
   let c;    // can be innitialed with undefined
   c = 10;    // can be declared later
    // let c = 25;
   // let c = 30; throws syntax error
   // const c = 30; throws syntax error
   // var c = 30; throws syntax error
   c = 32;  
   console.log(c)
   {
     let c = 28;
     c = 35;
     // let c = 30; throws syntax error
     // const c = 30; throws syntax error
     // var c = 30; throws syntax error
     console.log(c);
   }
   console.log(c)
   
   
   
   // const keyword is block scoped
   // const can not be updated or re aasigned within its scope
   // const can not be re declared within its scope
   // we should always use const keyword instead of let keyword
   // const must be initialized during declaration unlike let and var
   // const d;  throws error because not declared when innitialize must be declared during inniatialization
   const d = 25;
   // const d = 30; // throws syntax error
   // let d = 32; // throws syntax error
   // var d = 32; // throws syntax error
   // d = 32; // throws syntax error
   console.log(d);
   {
     const d = 28; 
     // const d = 35; throws syntax error
     // d = 37; throws syntax error
     console.log(d);
     
   }
   console.log(d);
   