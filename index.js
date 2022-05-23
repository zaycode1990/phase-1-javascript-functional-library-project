function myEach (collection, cb) {

    const collectionArr = Object.values(collection)
    for (const value of collectionArr) {
        cb(value)
      }
      return collection
}

console.log(myEach([1, 2, 3, 4], console.log))

function myMap(collection) {
    let popArr = []

}

function myMap(collection, cb) {
    let newArr = []
    const collectionArr = Object.values(collection)
  for (const value of collectionArr) {
    
 const modifiedValue = cb(value)
 newArr.push(modifiedValue)
}
 return newArr
}

function myReduce(collection, cb, acc) {
    let collectionArr = Object.values(collection)
   if(acc === undefined) {
       acc = collectionArr[0]
        for (let i = 1; i < collectionArr.length; i++) {
         acc = cb(acc, collectionArr[i], collection)
        }
        return acc
   }
else{ 
    acc === acc
   for (let i = 0; i < collectionArr.length; i++){
       acc = cb(acc, collectionArr[i], collection)
       
   }
  return acc
}
}

function myFind(collection, predicate) {
    const collectionArr = Object.values(collection)
    for (let i = 0; i <collectionArr.length; i++) {
        if (predicate(collectionArr[i])) 
            return collectionArr[i]
    }
     return undefined
    }

    function myFilter(collection, predicate) {
        const filteredArr = []
        const collectionArr = Object.values(collection)
        for (let i = 0; i <collectionArr.length; i++) {
            if (predicate(collectionArr[i])) 
                filteredArr.push(collectionArr[i])
        }
         return filteredArr
    }

    function mySize(collection){
        const collectionArr = Object.values(collection)
        return collectionArr.length
    }
    const myFirst = function(arr, stop=false) {
        return (stop) ? arr.slice(0, stop) : arr[0];
      }


      const myLast = function(arr, start=false) {
        return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
      }

  function myKeys(obj) {
    let objKeys = Object.keys(obj);
    return objKeys

  }

  function myValues(obj) {
      let objValues = Object.values(obj)
      return objValues
  }