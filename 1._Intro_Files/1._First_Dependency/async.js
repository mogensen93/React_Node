function ringingCustomerUp(name) {
    console.log("Help wanted?", name);
}

function itHelpDesk (name, callback) {
    callback(name);
}

itHelpDesk("nick", ringingCustomerUp);



new Promise( (resolve, reject) => {
        try {
            setTimeout (() => {
            resolve("works");
            }, 4000)
        } catch(error) {
            reject("Didnt work");

        }
}).then(message => {
    console.log(message)
}).catch(error => {
    console.log(error)
});


function myPromise () {
    return new Promise( (resolve, reject) => {
        try {
            setTimeout (() => {
                resolve("my Promise works");
                }, 4000)

        } catch (error) {
            reject("didnt work tho");

        }
    }).then(message => {
        console.log(message)
    }).catch(error => {
        console.log(error)
    })}

    // async await
    async function callMyPromise() {
        const message = await myPromise();
        console.log(message);
    }

    callMyPromise();

    const asyncAwaitArrowFunction = async() => {
        const message = await myPromise();
        console.log(message, "den her asyncArrow function")
    }