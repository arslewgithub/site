function searchClear() {
    if (event.keyCode == 13) {
        setTimeout('document.getElementById("gsearch").value = ""', 10)
    }
}

document.getElementById('gsearch').onkeydown = searchClear;

function initialization() {
    var xl = document.getElementsByClassName('x').length
    for (let e = 0; e < xl; e++) {
        document.getElementsByClassName('x')[xl - e - 1].classList.remove('x');
    }
    var ind = document.getElementsByTagName('img').length
    for (let a = 0; a < ind; a++) {
        document.getElementsByTagName('img')[a].draggable = false;
    }
    var and = document.getElementsByTagName('img').length
    for (let p = 0; p < and; p++) {
        document.getElementsByTagName('a')[p].draggable = false;
    }

    for (let w = 1; w < document.getElementsByClassName('funbt').length; w++) {
        document.getElementsByClassName('funbt')[w].onclick = function(){
            alert('❌此功能正在開發中，尚未開放使用！\n❓如果對於其他功能使用有問題，請洽詢開發人員！\n')
        };
    }
}

initialization()

