//managing multiple promises with Promise.race
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 has been resolved');
    }, 5000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error');
    }, 2000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 has been resolved');
    }, 3000)
})
Promise.race([promise1, promise2, promise3])
.then(result => console.log(result))
.catch(error => console.log(error));
//promise2 is first settling promise but Promise.race does not care about whether it's resolve or reject, rather it give output which one is first settled and avoid after promises