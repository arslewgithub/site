var data = {};
if (localStorage.getItem('qsn') == null) {
    data.aqsn = 7;
}
else {
    data.aqsn = Number(localStorage.getItem('qsn'));
}
data.qst = [];
data.nqsn = 0;
data.rt = Number(new Date().getTime()) + (data.aqsn * 10000);
data.cacheset = undefined;
data.selectarr = [];
fetch("question.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (q) {
        data.qa = q;
        for (let i = 0; i < data.aqsn; i++) {
            data.qst.push(data.qa.splice(Math.floor(Math.random() * data.qa.length), 1));
        }
        show();
    });
function show() {
    lq.innerHTML = '已作答: ' + data.nqsn + '/' + data.aqsn;
    btframe.innerHTML = '';
    qsframe.innerHTML = data.qst[data.nqsn][0].question;
    var s = [];
    for (let i = 0; i < data.qst[data.nqsn][0].selection.length; i++) {
        s.push(document.createElement('button'));
        s[i].innerHTML = "(" + (i + 10).toString(36).toUpperCase() + ") " + data.qst[data.nqsn][0].selection[i];
        s[i].onclick = () => {
            data.cacheset = i;
            data.selectarr[data.nqsn] = data.cacheset;
            document.querySelectorAll('button.selected').forEach((e) => { e.classList.remove('selected') })
            s[i].classList.add('selected');
        }
        btframe.appendChild(s[i]);
    }
}
submitbt.onclick = function () {
    backbt.disabled = false;
    data.selectarr[data.nqsn] = data.cacheset;
    data.cacheset = undefined;
    if (data.nqsn < data.aqsn - 1) {
        data.nqsn += 1;
        show();
        if (Number(data.selectarr[data.nqsn]) >= 0 && Number(data.selectarr[data.nqsn]) < data.qst[data.nqsn][0].selection.length) {
            document.querySelectorAll('#btframe button')[data.selectarr[data.nqsn]].classList.add('selected');
            data.cacheset = data.selectarr[data.nqsn];
        }
    }
    else {
        data.nqsn += 1;
        document.body.innerHTML = '';
        var t = document.createElement('div');
        t.classList.add('top-info');
        t.innerHTML = '<a href="start/"><button id="back"></button></a><span>檢視答題結果</span><span id="stime"></span>';
        document.body.appendChild(t);
        var c = 0, e = 0;
        for (let i = 0; i < data.aqsn; i++) {
            var s = document.createElement('div');
            var m = document.createElement('span');
            var k = '';
            k += '題目: ' + data.qst[i][0].question;
            for (let j = 0; j < data.qst[i][0].selection.length; j++) {
                if (data.qst[i][0].answer == data.selectarr[i]) {
                    if (j == data.selectarr[i]) {
                        k += "<br><span style=\"font-weight: bold;\">(" + (j + 10).toString(36).toUpperCase() + ") " + data.qst[i][0].selection[j] + ' </span>';
                    }
                    else {
                        k += "<br>(" + (j + 10).toString(36).toUpperCase() + ") " + data.qst[i][0].selection[j];
                    }
                } else {
                    if (j == data.selectarr[i]) {
                        k += "<br><span style=\"font-weight: bold;\">(" + (j + 10).toString(36).toUpperCase() + ") " + data.qst[i][0].selection[j] + ' </span>';
                    }
                    else if (j == data.qst[i][0].answer) {
                        k += "<br><span style=\"color: #00a500;font-weight: bold;\">(" + (j + 10).toString(36).toUpperCase() + ") " + data.qst[i][0].selection[j] + ' </span>';
                    }
                    else {
                        k += "<br>(" + (j + 10).toString(36).toUpperCase() + ") " + data.qst[i][0].selection[j];
                    }
                }
            }
            if (data.qst[i][0].answer == data.selectarr[i]) {
                s.classList.add('true');
                c++;
            } else {
                s.classList.add('false');
                e++;
            }
            m.innerHTML = k;
            s.classList.add('block');
            document.body.appendChild(s);
            s.appendChild(m);
        }
        stime.innerHTML = '<span style="color: #00a500">' + c + '</span>/<span style="color: #be0000">' + e + '</span>'
    }
}

backbt.onclick = function () {
    if (data.nqsn > 0) {
        if (data.nqsn == 1) {
            backbt.disabled = true;
        }
        data.nqsn -= 1;
        show();
        document.querySelectorAll('#btframe button')[data.selectarr[data.nqsn]].classList.add('selected');
        data.cacheset = data.selectarr[data.nqsn];
    }
}

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}

async function showtime() {
    if (data.nqsn >= data.aqsn || data.rt <= new Date().getTime()) {
        data.nqsn = data.aqsn - 1;
        submitbt.click();
    }
    else {
        var c = data.rt - (new Date().getTime()) + 1E3;
        stime.innerHTML = String(Math.floor(c / 6E4)).padStart(2, '0') + ':' + String(Math.floor(Math.floor(c / 1E3) % 60)).padStart(2, '0');
        await delay(.05);
        return showtime();
    }
}

showtime();