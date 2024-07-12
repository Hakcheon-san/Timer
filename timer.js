document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start').onclick = countDown;
});

function countDown() {
    var min = document.getElementById('min').value - 1;
    var sec = 60;
    var minute;
    var second;
    setInterval(timer, 1000)
    function timer(){
        if(min == 0 && sec == 0){
            document.querySelector('h1').innerHTML = "게임 종료!!";
            return 0;
        }
        if(sec == 0){
            min--;
            sec = 60;
        }
        sec--;
        if(min >= 10)
            minute = min.toString();
        else
            minute = "0" + min.toString();
        if(sec >= 10)
            second = sec.toString();
        else
            second = "0" + sec.toString();
        
        document.querySelector('h1').innerHTML = minute + " : " + second;
    }
}
