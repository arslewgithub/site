var menus1 = document.getElementById('ms1')
var menus2 = document.getElementById('ms2')
var menus3 = document.getElementById('ms3')
var menus4 = document.getElementById('ms4')
var menus5 = document.getElementById('ms5')
var menus6 = document.getElementById('ms6')
var menus7 = document.getElementById('ms7')
var menus8 = document.getElementById('ms8')
var menus9 = document.getElementById('ms9')
var menunum1 = 0
var menunum2 = 0
var menunum3 = 0
var menunum4 = 0
var menunum5 = 0
var menunum6 = 0
var menunum7 = 0
var menunum8 = 0
var menunum9 = 0

function mselect1() {
    if (menunum1 == 0) {
        menunum1 = 1;
        menus1.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        menus1.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus1.style = '' }, 350)
        menunum1 = 0;
    }
}

function mselect2() {
    if (menunum2 == 0) {
        menunum2 = 1;
        menus2.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        closem2()
        menus2.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus2.style = '' }, 350)
        menunum2 = 0;
    }
}

function mselect3() {
    if (menunum3 == 0) {
        menunum3 = 1;
        menus3.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        closem3()
        menus3.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus3.style = '' }, 390)
        menunum3 = 0;
    }
}

function mselect4() {
    if (menunum4 == 0) {
        menunum4 = 1;
        menus4.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        menus4.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus4.style = '' }, 390)
        menunum4 = 0;
    }
}

function mselect5() {
    if (menunum5 == 0) {
        menunum5 = 1;
        menus5.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        menus5.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus5.style = '' }, 390)
        menunum5 = 0;
    }
}

function mselect6() {
    if (menunum6 == 0) {
        menunum6 = 1;
        menus6.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        menus6.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus6.style = '' }, 390)
        menunum6 = 0;
    }
}

function mselect7() {
    if (menunum7 == 0) {
        menunum7 = 1;
        menus7.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        menus7.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus7.style = '' }, 390)
        menunum7 = 0;
    }
}

function mselect8() {
    if (menunum8 == 0) {
        menunum8 = 1;
        menus8.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        menus8.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus8.style = '' }, 390)
        menunum8 = 0;
    }
}

function mselect9() {
    if (menunum9 == 0) {
        menunum9 = 1;
        menus9.style = 'display: block; animation: moad 0.4s 1';
    }
    else {
        menus9.style = 'display: block; animation: moau 0.4s 1;';
        setTimeout(function () { menus9.style = '' }, 390)
        menunum9 = 0;
    }
}

function closem2(){
    menus3.style = '';
    menunum3 = 0;
    menus4.style = '';
    menunum4 = 0;
    menus5.style = '';
    menunum5 = 0;
    menus6.style = '';
    menunum6 = 0;
    menus7.style = '';
    menunum7 = 0;
    menus8.style = '';
    menunum8 = 0;
    menus9.style = '';
    menunum9 = 0;
}

function closem3(){
    menus4.style = '';
    menunum4 = 0;
    menus5.style = '';
    menunum5 = 0;
    menus6.style = '';
    menunum6 = 0;
    menus7.style = '';
    menunum7 = 0;
    menus8.style = '';
    menunum8 = 0;
    menus9.style = '';
    menunum9 = 0;
}