
function check_even_odd(num)
{
    switch(num%2)
    {
        case 1:
            return 'odd';
        case 0:
            return "even";
        default:
            return "even"  // this line is unnecessary
    }
}

console.log(check_even_odd(130))