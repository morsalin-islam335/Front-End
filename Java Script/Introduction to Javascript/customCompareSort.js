// program to implement custom compare sort function in javascript

let myArray = [
    {
        name: "John",
        age: 23
    },
    {
        name: "Don",
        age: 40
    },
    {
        name: "Rony",
        age: 19
    },
    {
        name: "Alimun",
        age: 29
    }

]


myArray.sort(function(a,b){
    return b.age - a.age
})

console.log(myArray)
