function factorial(n)
{

  // Calculate the factorial here
  try {
  if  (n < 0) throw new RangeError();
} catch (e) {
console.log('Out of range!');
}
if (n === 0) return 1;
return n * factorial(n-1);
}