restart.onclick = start;
subans.onclick = crack;
ret.oninput = diffif;
AA.oninput = function (){
    if (String(AA.value).length > 1){
        AA.value = String(AA.value).slice(1);
    }
    if (Number(AA.value) + Number(BB.value) > 4){
        AA.value = 4 - Number(BB.value);
    }
};
BB.oninput = function (){
    if (String(BB.value).length > 1){
        BB.value = String(BB.value).slice(1);
    }
    if (Number(AA.value) + Number(BB.value) > 4){
        BB.value = 4 - Number(AA.value);
    }
};
ans.oninput = function (){
    if (String(ans.value).length > 4){
        ans.value = String(ans.value).slice(1);
    }
};
rrt.oninput = function (){
    if (String(rrt.value).length > 4){
        rrt.value = String(rrt.value).slice(1);
    }
};

var clist = getList();

start();

function start () {
    clist = getList();
    rrt.value = clist[0];
    AA.value = '';
    BB.value = '';
    ans.value = String(getList()[Math.floor(Math.random()*getList().length)]);
    ret.value = '';
    rur.innerHTML = '0A0B'
    console.clear()
}

function getList () {
    var list = [];
    for (var i = 123; i < 9877; i++) {
        var t = i.toString();
        if (t.length < 4) {
            t = "0" + t;
        }
        if (t[0] != t[1] && t[0] != t[2] && t[0] != t[3] &&
            t[1] != t[2] && t[1] != t[3] && t[2] != t[3]) {
            list.push(t);
        }

    }
    return list;
}

function diff (s1, s2) {
    var a = 0;
    var b = 0;
    
    for (var i =0; i < 4; i++) {
        if(s1[i] == s2[i]){
            a += 1; //a++;
        }
        var idx = s2.indexOf(s1[i]);
        if(idx != -1 && idx != i){
            b += 1; //b++;
        }
    }
    return {a: a, b: b};
}

function crack () {
	var clistl = rrt.value;
	result = {a: Number(AA.value), b: Number(BB.value)};
    if(result.a == 4){
        return start();
    }
    for (var j = 0; j < clist.length; j++) {
        var result2 = diff(clist[j], clistl);
        if(result.a != result2.a || result.b != result2.b){
            clist.splice(j, 1);
            j--;
        }
    }
    console.log(clist)
    rrt.value = clist[0];
    AA.value = '';
    BB.value = '';
}

function diffif(){
    if (String(ret.value).length > 4){
        ret.value = String(ret.value).slice(1);
    }
    var r = diff(ans.value, ret.value)
    rur.innerHTML = r.a + 'A' + r.b + 'B';
}