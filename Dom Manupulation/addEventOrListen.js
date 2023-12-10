// add event 

var event = document.getElementById("select").addEventListener('click', function(e){
    console.log("Enroll Successfully")
    var input = document.getElementById("input").value
    console.log(input)
})

// blur event

var value = document.getElementById("input-2").addEventListener("blur", inputValue);  // By calling inputValue function all  activities will be same 

function inputValue(e){
    // console.log(e) to access value we should use e.target.value

    console.log("You type that your  point is", e.target.value);
}


function nam(e){
    console.log("You Type that your name is", e.target.value);
}



function nam(e){
    console.log("You Type that your name is");
}