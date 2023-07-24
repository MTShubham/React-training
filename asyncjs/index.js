// This works similar to setInterval 1000ms
// setInterval - if 100ms is specified and code execution takes 30ms, then after 70ms interval it will run. 
// But in this case it will exclude the code execution time. So it's a better approach.
const printName = (name)=>{
    console.log("inside setTimeout", name);
    setTimeout(printName, 1000, "name");
}
setTimeout(printName, 1000, "shubham");


/* --------------------- PROMISE -------------------- */

const promise = new Promise((resolve, reject) => {
    let status = true;
    status ? resolve(status) : reject(status);
});

console.log(promise);

// In this case error has not been caught by reject callback function as there is no catch()
promise.then((result) => {
    console.log("then", result);
    throw new Error("It's an error");
},(error) => {
    console.log("catch", error);
})

console.log("outside promise");



/* -------------------- Promise.all ------------------- */

const promise1 = new Promise((resolve, reject) => {
    let status = false;
    status ? resolve(status) : reject(status);
});

const promise2 = new Promise((resolve, reject) => {
    let status = true;
    status ? resolve(status) : reject(status);
});

const promise3 = new Promise((resolve, reject) => {
    let status = true;
    status ? resolve(status) : reject(status);
});

// If all the promises fulfilled then it prints all the success values (n promises -> n values). 
// If any one 1 promise rejects then it will reject and catch() will be called and only rejected value is printed. (n promises -> 1 value)
// In any 1 reject, it returns only single value, not array
Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));



/* -------------------- Promise.allSettled ------------------- */

const promise4 = new Promise((resolve, reject) => {
    let status = true;
    status ? resolve(status) : reject(status);
});

const promise5 = new Promise((resolve, reject) => {
    let status = false;
    status ? resolve(status) : reject(status);
});

const promise6 = new Promise((resolve, reject) => {
    let status = true;
    status ? resolve(status) : reject(status);
});

// If all the promises fulfilled then it prints all the success values (n promises -> n values). 
// If any one 1 promise rejects then also it will execute all the promises and return all the values (n promises -> n value)
// It always returns array. 
Promise.allSettled([promise4, promise5, promise6])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));



/* -------------------- Promise.allSettled ------------------- */

const promise7 = new Promise((resolve, reject) => {
    let status = true;
    status ? resolve(status) : reject(status);
});

const promise8 = new Promise((resolve, reject) => {
    let status = false;
    status ? resolve(status) : reject(status);
});

// It returns 1st fulfilled or reject promise only. Not all
Promise.race([promise7, promise8])
    .then((values) => console.log("race", values))
    .catch((error) => console.log("race", error));




const resolveFunc1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved from func1");
        }, 2000);
    })
}

const resolveFunc2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved from func2");
        }, 1000);
    })
}

async function sequential() {
    const resolve1 = await resolveFunc1();
    console.log(resolve1);

    const resolve2 = await resolveFunc2();
    console.log(resolve2);
}
// sequential();

async function concurrent() {
    const resolve1 = resolveFunc1();
    const resolve2 = resolveFunc2();

    console.log(await resolve1);
    console.log(await resolve2);
}
// concurrent();

function parallel() {
    Promise.all([
        (async () => console.log(await resolveFunc1()))(),
        (async () => console.log(await resolveFunc2()))(),
    ])
}
// parallel()