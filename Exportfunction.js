var list = []; 

let numList = function(num) {
  list.push(num);
};

let sortedList = function(list) {
  list.sort(sortRules);
    return list;
};

function sortRules(a, b) {
  return a-b;
  };

module.exports = {
  numList,
  list,
  sortedList
};

