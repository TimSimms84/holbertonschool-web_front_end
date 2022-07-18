/* Write a function named countPrimeNumbers:

It will return the number of prime numbers from 2 to 100
Log to the console the time in milliseconds to execute the function in this format: Execution time of printing countPrimeNumbers was <time used> milliseconds.*/
function countPrimeNumbers() {
  let prime_count = 0;
  for (let i = 2; i <= 100; i++) {
    let prime = true;
    for (let n = 2; n < i; n++) {
      if (i % n === 0) {
        prime = false;
      }
    }
    if (prime)
      prime_count += 1;
  }
  return prime_count;
}


const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of priting countPrimerNumbers was ${t1 - t0} milliseconds.`); 
