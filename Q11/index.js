let num=2

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++){
    if(num%i==0) return false
  }
  return true
}
console.log(isPrime(num));


if (num % 2 == 0) {
  console.log("even")
} else {
  console.log("odd")
}
