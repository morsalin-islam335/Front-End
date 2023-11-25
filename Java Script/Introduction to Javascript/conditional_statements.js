/// Objective of this program is know about conditional statements


var num = 10;

if(num <10){
    console.log("less than 10");

}
else if(num == 10)
{
    console.log("Ten");
}
else{
    console.log("greater than 10");
}



var man = {
    eye: 2, 
    leg: 2,
    good_manner:{
        truthful: true,
        ishonest: true,
    }



}


console.log(Object.keys(man));
console.log(Object.values(man));
console.log(man.good_manner.ishonest);
console.log(Object.entries(man));


var my_array = [];
console.log(my_array);


my_array.push(10);  // stack operation
console.log(my_array)
my_array.unshift(12);
my_array.unshift(12);
console.log(my_array)

my_array.shift()
my_array.shift()
my_array.shift()
my_array.shift()
my_array.shift()
console.log(my_array)

