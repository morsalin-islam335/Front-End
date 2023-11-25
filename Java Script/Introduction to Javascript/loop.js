my_array =[10,20,5,11, 13]

for(var i = 0; i<my_array.length; i++)
{
    console.log(my_array[i]+" " )
}


my_array.sort(function(a,b){
    return a -b;
})
my_array.sort()

var result = ""
for(var i  = 0; i< my_array.length; i++)
{
    result+= my_array[i] + " "
}

console.log(result)