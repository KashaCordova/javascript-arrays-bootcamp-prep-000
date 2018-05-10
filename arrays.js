var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
}
function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a;
}
function addElementToEndOfArray(a, b) {
  var newPushArray = a.push(b);
  return newPushArray;
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
