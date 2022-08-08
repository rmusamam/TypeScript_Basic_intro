//Union Type
function kgToLbs (weight: number|string):number{
  if (typeof weight === 'number'){
    console.log(weight)
    return weight*2.2
  }
  else{
    return parseInt(weight)*2.2
  }

  kgToLbs(5)
    
}
