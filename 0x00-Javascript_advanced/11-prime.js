function countPrimeNumbers() {
  let prime_numbers = [];
  for (let i = 2; i <= 100; i++) {
      let prime = true;
      for (let n = 2; n < i; n++) {
          if (i % n === 0) {
              prime = false;
          }
      }
      if (prime)
        prime_numbers.push(i);
  }
  return prime_numbers;
}


const t0 = performance.now();
setTimeout(() => { for (let i = 0; i <= 100; i++) countPrimeNumbers();});
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`); 
