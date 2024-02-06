var reduce = function (nums, fn, init) {
  let result = init;
  nums.forEach((item, idx) => {
    result = fn(result, item);
  });

  return result;
};