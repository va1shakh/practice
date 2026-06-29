//managing multiple promises with Promise.allSettled
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('rejcted');
    }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 3000)
})
Promise.allSettled([promise1, promise2, promise3])
.then(result => console.log(result))
.catch(error => console.log(error));
//it settled all promises whether it's resolved or rejected 