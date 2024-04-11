function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key, coll) => {
      result.push(callback(value, key, coll));
    });
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0));
  }
  
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const x = callback(a);
      const y = callback(b);
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  function myFlatten(array, shallow = false, newArr = []) {
    if (shallow) {
      return newArr.concat(...array);
    }
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        myFlatten(array[i], false, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return myMap(myKeys(object), key => object[key]);
  }