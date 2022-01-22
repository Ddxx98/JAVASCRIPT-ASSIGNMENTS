function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
    let n = arr.length
    var newA = []
    for(let i = 0; i < n; i++){
        if(arr[i]%2 == 0){
            newA.push(arr[i])
        }
    }
    return newA
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
    let m = arr.length
    var newA = []
    for(let i = 0; i < m; i++){
        newA.push(arr[i]*n)
    }
    return newA
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
    let m = arr.length
    var newA = []
    for(let i = 0; i < m; i++){
        if(i != n){
            newA.push(arr[i])
        }
    }
    // arr.splice(n,1)
    return newA
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}