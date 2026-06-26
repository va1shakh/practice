//creating a promise that reject
const promise = new Promise((resolve, reject ) => {
    setTimeout(() => {
        true ? reject('something went wrong'):resolve('Hello');
    }, 2000)
})
promise.then(result => console.log(result));
promise.catch(error => console.log(error));