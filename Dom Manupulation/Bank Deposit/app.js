function deposit()
{
    var setBalance = document.getElementById("taka").innerText
    var money = parseInt(setBalance)
    var extraMoney = document.getElementById("deposit-2").value
    document.getElementById("deposit-2").value = "";
    var add_money = parseInt(extraMoney);

    document.getElementById('taka').innerText = add_money + money;

}