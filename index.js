function myEach(collection, callback) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}
function myMap(collection, callback) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  let result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i]));
  }
  return result;
}
function myReduce(collection, callback, acc) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  let startIdx = 0;
  if (acc === undefined) {
    acc = values[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}
// ...existing code...

function myFind(collection, predicate) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      return values[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  let result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      result.push(values[i]);
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length;
  }
  return 0;
}
// ...existing code...
// ...existing code...

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}
// ...existing code...
// ...existing code...

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
// ...existing code...
// ...existing code...

function mySortBy(array, callback) {
  // Create a shallow copy to avoid mutating the original array
  let arrCopy = array.slice();
  return arrCopy.sort(function(a, b) {
    let aVal = callback(a);
    let bVal = callback(b);
    if (aVal > bVal) return 1;
    if (aVal < bVal) return -1;
    return 0;
  });
}
// ...existing code...