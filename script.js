function fizzBuzz(phoneNumber) {
    const digitsSum = phoneNumber.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  
    for (let i = 1; i <= digitsSum; i++) {
      if (i % 4 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 4 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
  // Call the function with the provided phone number
  fizzBuzz(9304009381);