const items = ["a", "b", "c", "d"];

;(async function() {
    const promiseFunction = async(element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`);
        });
    }

    const itemMapped = promiseFunction('x');
    console.log(itemMapped);
    console.log(await itemMapped);

    const itemMappedPromise = items.map(promiseFunction);

    const itemMapped2 = await Promise.all(itemMappedPromise);

    console.log(`\n${itemMapped2}`);
})()