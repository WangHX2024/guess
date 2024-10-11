var randomnum = Math.floor(Math.random() * 100) + 1;
var count = 0;

function restart()
{
    randomnum = Math.floor(Math.random() * 100) + 1;
    count = 0;
    document.getElementById("guess").value = "";
    document.getElementById("count").textContent = 0;
    document.getElementById("history").textContent = "\n";
    document.getElementById("result").textContent = "";
    document.getElementById("final").textContent = "";
    document.getElementById("final").style.backgroundColor = "white";
    document.getElementById("btnsubmit").disabled = false;
}

function guess()
{
    var guessnum = parseInt(document.getElementById("guess").value);
    if(isNaN(guessnum) || guessnum < 1 || guessnum > 100)
    {
        document.getElementById("result").textContent = "无效的输入！";
        document.getElementById("guess").value = "";
        return;
    }
    document.getElementById("count").textContent = ++count;
    if(guessnum == randomnum)
    {        
        document.getElementById("btnsubmit").disabled = true;
        document.getElementById("history").textContent += (guessnum + "（猜中了）\n");
        document.getElementById("result").textContent = guessnum +"：猜中了！";
        document.getElementById("final").textContent = "恭喜你猜对了，游戏结束！";
        document.getElementById("final").style.backgroundColor = "green";
    }
    else if(guessnum > randomnum)
    {
        document.getElementById("history").textContent += (guessnum + "（猜大了）\n");
        document.getElementById("result").textContent = guessnum +"：猜大了！";
        if(count == 10)
            gamefinish();
        else
            document.getElementById("guess").value = "";
    }
    else
    {
        document.getElementById("history").textContent += (guessnum + "（猜小了）\n");
        document.getElementById("result").textContent = guessnum +"：猜小了！";
        if(count == 10)
            gamefinish();
        else
            document.getElementById("guess").value = "";
    }
}

function gamefinish()
{
    document.getElementById("final").textContent = "猜测次数已用完，请重新开始游戏！";
    document.getElementById("final").style.backgroundColor = "red";
    document.getElementById("btnsubmit").disabled = true;
}

document.getElementById("guess").addEventListener("keydown", function(event) {
    if (event.key === "Enter") 
    {
        if(document.getElementById("btnsubmit").disabled == false)
            guess();
        else
            restart();
    }
});

restart();