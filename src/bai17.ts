async function domo() {
    const promies = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ];
    for await (const element of promies) {
        console.log(element)
    }
}
domo();