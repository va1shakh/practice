//fake download with callback function
function download(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        console.log("Download Complete");
        callback();
    }, 3000);
}

download(() => {
    console.log("Callback executed!");
});