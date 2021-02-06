//business logic

function isPrime(n) {
  //2 is an exception
  if ((n <= 1) || n % 2 == 0) {
    return false;
  } else {
    return true;
  };
};

function showPrime(n) {
  let numbies = []
  for (let i = 0; i < n; i++) {
    if (isPrime(i) === true) {
      numbies.push(i);
    }
  }
  return numbies
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    n = $("input#numberInput").val();
    $(".show").append("These are the prime numbers: " + showPrime(n) + " ");
  });
});