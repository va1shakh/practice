//promise using fetch
fetch('https://jsonplaceholder.typicode.com/invalid')
.then(response => response.json())
.then(result => console.log(result.title))
.catch(error => console.log('something went wrong'));