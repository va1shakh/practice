//promise that randome success or failure
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        randomNumber > 0.5 ? resolve('success'):reject('error');
    }, 2000)
})
promise.then(success => console.log(success));
promise.catch(error => console.log(error));
