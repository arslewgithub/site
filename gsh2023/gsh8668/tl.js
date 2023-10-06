/* 網站入口按鈕 */
var sysmb = "";
sysmb = (navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.sysmbtemLanguage).toLowerCase();
if(sysmb == "en"|| sysmb == "en-usen-gb" || sysmb == "en-au"|| sysmb == "en-ca"|| sysmb == "en-nz"|| sysmb == "en-ie"|| sysmb == "en-za"|| sysmb == "en-jm"|| sysmb == "en-bz"|| sysmb == "en-tt"){
    document.getElementsByClassName('mdl')[0].innerHTML = '<div class="mdlbt"><button id="menter" class="button primary fit" onclick="location.href=\'en/\'">Enter Main page&nbsp;&gt;&gt;</button></div><p class="center">Tap the Beasts & Score</p>'
} else if (sysmb == "zh-tw"|| sysmb == "zh-tw" ) {
    document.getElementsByClassName('mdl')[0].innerHTML = '<div class="mdlbt"><button id="menter" class="button primary fit" onclick="location.href=\'zh_TW/\'">按此進入首頁&nbsp&nbsp;&gt;&gt;</button></div><p class="center">點擊神獸獲得分數</p>'
} else{
    document.getElementsByClassName('mdl')[0].innerHTML = '<div class="mdlbt"><button id="menter" class="button primary fit" onclick="location.href=\'en/\'">Enter Main page&nbsp;&gt;&gt;</button></div><p class="center">Tap the Beasts & Score</p>'
}

/* 網站入口標題 */
var sysmt = "";
sysmt = (navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.sysmbtemLanguage).toLowerCase();
if(sysmt == "en"|| sysmt == "en-usen-gb" || sysmt == "en-au"|| sysmt == "en-ca"|| sysmt == "en-nz"|| sysmt == "en-ie"|| sysmt == "en-za"|| sysmt == "en-jm"|| sysmt == "en-bz"|| sysmt == "en-tt"){
    document.title = 'Visit the Old Street of South Taichung to Find the Sacred Beasts in the Movie Shang-Chi and the Legend of the Ten Rings - Home'
} else if (sysmt == "zh-tw"|| sysmt == "zh-tw" ) {
    document.title = '來南屯老街訪電影《尙氣與十環傳奇》神獸 - 專題網站'
} else{
    document.title = 'Visit the Old Street of South Taichung to Find the Sacred Beasts in the Movie Shang-Chi and the Legend of the Ten Rings - Home'
}

var cfpb = 0
document.getElementsByClassName('cmb')[0].onclick = function (){
	if (cfpb == 0) {
        cfpb = 1;
        document.getElementsByClassName('cfpb2023mp')[0].style = 'transform: translate(0% ,0%);';
        document.getElementsByClassName('cmb')[0].style = 'background: url(zh_TW/images/arrow-l.png); background-repeat: round;';
    }
    else {
        document.getElementsByClassName('cfpb2023mp')[0].style = '';
        document.getElementsByClassName('cmb')[0].style = '';
        cfpb = 0;
    }
}

document.getElementById('mainpagevideo').muted = false;