// var is a functional variable where let is a block scope and const is a immutable variable

function fun()
{
    if(true)
    {
        var x = "hello world"
    }
    console.log(x)
}

fun()

// ############# lef #############

function fun2()
{
    if(true)
    {
        let y = "hey programmer"

    }
    // console.log(y);  This line will be throw an error
}

fun2()


const z = "1010"

// z = "131";  this is immutable


