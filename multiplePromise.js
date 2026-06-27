//managing multiple promises using promise.any
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 1 resolved');
    }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise 2 resolved');
    }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 3 resolved');
    }, 3000)
})
Promise.any([promise1, promise2, promise3])
.then(result => console.log(result))
.catch(error => console.log(error));
//when we managing multiple promises with Promise.any, this will result success if any one of the promise is resolved
//if all promises are rejected then it gives error