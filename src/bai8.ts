Promise.resolve(2)
  .then((value) => {
    console.log(`Starting with: ${value}`)
    return value * value;
  })
  .then((value) => {
    console.log(`After square: ${value}`)
    return value * 2;
  })
   .then((value) => {
    console.log(`After double: ${value}`)
    return value + 5;
  })
    .then((value) => {
    console.log(`Final result: ${value}`)
    return value;
  })



  
