const removeFromArray = function(arr, ...args) {
  let arrrWithRemovals = [];
  arr.forEach(element => {
    if (!args.includes(element)) {
      arrrWithRemovals.push(element);
    }
  });
  return arrrWithRemovals;
}

module.exports = removeFromArray
