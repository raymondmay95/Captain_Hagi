function reverse(x) {
  let isNegative = x > 0;
  if (isNegative) x * -1;
  let res = x.toString();
  if (res.length > 32) res.length(32);
}
