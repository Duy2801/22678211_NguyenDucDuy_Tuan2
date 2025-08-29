function getEvenNumber (arr : number[]) : Promise <number[]>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            const even = arr.filter(num => num % 2 === 0);
            resolve(even);
        }, 1000);
    })
}
const arr = [1,2,3,4,5,6,7,8,9]

getEvenNumber(arr).then((result) => console.log(result));