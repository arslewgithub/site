if (localStorage.getItem('scoresStorage') > 0) {
    var score = Number(localStorage.getItem('scoresStorage'));
    document.getElementById('gamescore').innerHTML = score
}
else {
    localStorage.setItem('scoresStorage', '0');
    var score = 0;
    document.getElementById('gamescore').innerHTML = score
}

document.getElementById('gamehelp').onclick = function() {
    location.href = '/gsh2023/gsh8668/zh_TW/gamehelp.html'
}

var gameaudio = document.createElement("audio");
gameaudio.setAttribute("src", "assets/audio/catch.mp3");

for (i = 0; i < document.getElementsByClassName('gamebutton').length; i++) {
    document.getElementsByClassName('gamebutton')[i].onclick = function () {
        score += 7;
        localStorage.setItem('scoresStorage', score);
        document.getElementById('gamescore').innerHTML = score;
        this.parentNode.innerHTML = ''
        gameaudio.currentTime = 0
        gameaudio.play();
    }
}

function if666(){
    if (score == 666){
        alert('溜溜溜~ 你作弊啊? 666是無法被7整除的');
    }
}

if666()