// map

const nums = [10,20,30,40]
//map

// const square = nums.map()

// let print = nums.map(number => console.log(number))


// #############  map   ##########

const square = nums.map(x => x *x)
console.log(square)



let products = [
    {id:1, name: "Apple", price: 10000},
    {id:4, name: "Samsung", price: 20000},
    {id:2, name: "Xiaomi", price: 30000},
    {id:3, name: "Tesla", price: 20000}
]

let result = products.filter(product => product.price == 20000)

console.log(result[0].name)




// ############## Find ##########
 products = [
    {id:1, name: "Apple", price: 10000},
    {id:4, name: "Samsung", price: 20000},
    {id:2, name: "Xiaomi", price: 30000},
    {id:3, name: "Tesla", price: 20000}
]


let output = products.find(Product => Product.price == 20000)

console.log(output.name)

// $$$$$$$$$$$ for Each  ##############
const  product_container = document.getElementById("product-container");


const result2 = products.forEach((myFunction) => {
    console.log(myFunction)
    const h1 = document.createElement("h1")
    h1.innerText = myFunction.name;
    product_container.appendChild(h1)
    

})
