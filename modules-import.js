let storeInList = require("./Exportfunction.js");
var testArray = [7,12,32,1,3];

for (let i = 0; i < testArray.length; i++) {
  storeInList.numList(testArray[i]);
};

storeInList.sortedList(storeInList.list);

console.log(storeInList.list);

