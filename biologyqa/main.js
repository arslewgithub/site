var data = {};
if (localStorage.getItem('qsn') == null) {
    data.aqsn = 5;
}
else {
    data.aqsn = Number(localStorage.getItem('qsn'));
}
data.qst = [];
data.nqsn = 0;
data.cacheset = undefined;
data.selectarr = [];
fetch("question.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data.qa = myJson;
        for (let i = 0; i < data.aqsn; i++) {
            data.qst.push(data.qa.splice(Math.floor(Math.random() * data.qa.length), 1));
        }
        show();
    });
function show() {
    lq.innerHTML = '已完成: ' + data.nqsn + '/' + data.aqsn;
    btframe.innerHTML = '';
    qsframe.innerHTML = data.qst[data.nqsn][0].question;
    var s = [];
    for (let i = 0; i < data.qst[data.nqsn][0].selection.length; i++) {
        s.push(document.createElement('button'));
        s[i].innerHTML = "(" + (i + 10).toString(36).toUpperCase() + ") " + data.qst[data.nqsn][0].selection[i];
        s[i].onclick = () => {
            data.cacheset = i;
            document.querySelectorAll('button.selected').forEach((e) => { e.classList.remove('selected') })
            s[i].classList.add('selected');
        }
        btframe.appendChild(s[i]);
    }
}
submitbt.onclick = function () {
    data.selectarr.push(data.cacheset)
    data.cacheset = undefined;
    if (data.nqsn < data.aqsn - 1) {
        data.nqsn += 1;
        show();
    }
    else {
        document.body.innerHTML = '';
        var t = document.createElement('div');
        t.classList.add('top-info')
        t.innerHTML = '<a href="start"><button id="back"></button></a><span>檢視答題結果</span>';
        document.body.appendChild(t);
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
            } else {
                s.classList.add('false');
            }
            m.innerHTML = k;
            s.classList.add('block');
            document.body.appendChild(s);
            s.appendChild(m);
        }
    }
}