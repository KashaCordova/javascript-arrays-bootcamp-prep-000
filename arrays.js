var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return a;
}
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return a;
}
function accessElementInArray(array, element) {
  return array[element];
}
function destructivelyRemoveElementFromBeginningofArray(array) {
  array.shift;
  return a;
}
function removeElementFromBeginningOfArray(array) {
array.slice(1);
return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return a;
}
