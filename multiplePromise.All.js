//managing multiple promises with Promise.all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 has resolved');
    }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('something went wrong');
    }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 has resolved');
    }, 3000)
})
Promise.all([promise1, promise2, promise3])
.then(result => console.log(result))
.catch(error => console.log(error));
//has to resolve all promises to get all resolved result 
//if any one of them reject then only gives reject message ( error)
