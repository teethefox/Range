function range(first, last, increment) {
  var current = first;
  var counter;
  if (increment === 0) {
    counter = 1;
  } else {
    counter = increment;
  }

  if (counter > 0) {
    while (current <= last) {
      console.log(current);
      current += counter;
    }
  } else if (counter < 0) {
    while (current >= last) {
      console.log(current);
      current += counter;
    }
  }
}
range();
