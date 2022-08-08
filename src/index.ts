//nullable Types
// function greet(name:string){
//   console.log(name.toUpperCase())
// }
// greet (null) issue raise that toUpperCase() can't process null


// function greet(name:string|null){//union type 
//   if(name)
//     console.log(name.toUpperCase())
//   else
//     console.log('hello')  
//   }
//   greet(undefined)now this will cause issue 

function greet(name:string|null|undefined){//union type 
  if(name)
    console.log(name.toUpperCase())
  else
    console.log('hello')  
  }
  
  greet("usama")