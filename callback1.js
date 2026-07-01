//learning callback function
function greet(delay, callback){
    setTimeout(() => {
        console.log('Hello');
        callback();
    }, delay)
}
greet(2000, () => {
    console.log('world');
})