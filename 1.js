//creating a promise to resolve after 2s with a message

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        true ? resolve('hello'):reject('something went wrong');
    }, 2000)
})
promise.then(result => console.log(result));
promise.catch(error => console.log(error));