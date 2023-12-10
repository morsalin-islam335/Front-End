// // API fetch syntax:

    fetch("https://fakestoreapi.com/products/1").then(res => res.json()).then(data => {
        console.log(data)
    }).catch((error) => console.log(error))

fetch("https://fakestoreapi.com/products/1").then(response => response.json()).then((data) =>{
    console.log(data)  // it will be  return response result
}).catch((arr) => {   // if promise not works
    console.log(arr)

});

// ############ just Fetch and server send data ##########
fetch("https://fakestoreapi.com/products/1").then(response => console.log(response));


// ######### Fetch and resolve data #############
fetch("https://fakestoreapi.com/products/1").then(response => response.json())

.then(result => result)


//  ########### Fetch ar reject data #######
fetch("https://fakestoreapi.com/products/1").then(response => response.json())
.then(data=> console.log(data))
.catch(error => console.log(error))




// ############ Fetch >> receive data >> send data >> then(if resolve) >> catch(if reject)

console.log(1)
console.log(2)
console.log(3)
fun(12)
console.log(6)
console.log(7)
console.log(8)

function fun(x)
{
    setTimeout(() => console.log(x))  // asymcronous behavior


}

console.log("Ajka amar porikha aca")

console.log("Ajka porikha valo hoba");
console.log("ajka amar mon valo na");
;




// In javascript new keyword is used to crate instance



function myFunction(value1, value2)  // create instance
{
    this.value1 = value1;
    this.value2 = value2; 
}


let instance = new myFunction(10,20)

console.log("first value: ",  instance.value1, "second value: ",instance.value2);




// promise


let getData = new Promise(function(resolve, reject){

    return resolve(40);
    
})


getData.then(data => console.log(data))



let getData2 = new Promise(function(promise, rejection){
    return rejection("No data found");
})


getData2.then(data => console.log(data))
.catch(error => console.log(error))



// asynchronous function

const loadData = async() => {
    const response = await fetch("https://fakestoreapi.com/products/1");

    // const data = response.json();
    // console.log(data)

    const data = await response.json();

    console.log(data)
}

loadData()
