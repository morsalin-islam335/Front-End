// Objective is know about Arrow Function

const fun= () => "hello world";

let output = fun()

console.log(output)



// Multiple arrow function

const fun2 = (parameter) => {
    console.log(parameter)
    return  "Ending Function"
}



let letsFun = fun2(10)

console.log(letsFun)



// destructing array

const arr = [10,20,30, {
    name: "Morsalin Islam",
    roll : 635575
}
]

console.log(arr[3])

const [value1, value2, value3] = arr;
console.log(value1, value2, value3 ); // now we can use them as normal variable


let obj = {
    name: "Morsalin Islam",
    roll : 635375,
    semester : "2nd"
}


const {name, roll, semester} = obj;
console.log(name)
console.log(roll)


