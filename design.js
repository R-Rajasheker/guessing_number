var num = (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function findnumber()
{
    var numUser = parseInt(document.getElementById("Num").value);
    if(numUser == num)
    {
        document.getElementById("res").textContent = "Congratulations!!! You guessed the number in "+count+" tries.";
        document.getElementById("res").style.backgroundColor="green";

    }
    else if(numUser > num)
    {
        document.getElementById("res").textContent = "Try with the smaller number";
    }
    else
    {
        document.getElementById("res").textContent = "Try with the greater number";
    }
    document.getElementById("tries").textContent = count;
    count++;
}
