var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return a;
}
function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b);
  return a;
}
function accessElementInArray(a, b) {
  return a[b];
}
function destructivelyRemoveElementFromBeginningofArray(a) {
  a.shift;
  return a;
}
function removeElementFromBeginningOfArray(a) {
var slice = a.slice(1);
return slice;
}
function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}
