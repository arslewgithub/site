const firebaseConfig = {
    apiKey: "AIzaSyAf9DnH-DXzlXmeyqCniQopqP6VC-k0B-c",
    authDomain: "garden-party2.firebaseapp.com",
    projectId: "garden-party2",
    storageBucket: "garden-party2.appspot.com",
    messagingSenderId: "235268083051",
    appId: "1:235268083051:web:374a29c4d8bc035abf902e",
    measurementId: "G-B3T6VJ26XV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
function dbset(collection, doc, setContent) {
    return db.collection(String(collection)).doc(String(doc)).set(setContent);
}
function dbget(collection, doc) {
    return db.collection(String(collection)).doc(String(doc)).get();
}
function dbupdate(collection, doc, updateContent) {
    return db.collection(String(collection)).doc(String(doc)).update(updateContent);
}
function dbSnapshot(collection, doc) {
    return db.collection(String(collection)).doc(String(doc)).onSnapshot((dbdoc) => { dbt = dbdoc.data() });
}

function getCopyUserData() {
    var list = {};
    db.collection('userdata')
        .get().then(qS => {
            qS.forEach(doc => {
                var c = doc.data();
                list[JSON.stringify(doc.id)] = JSON.parse(JSON.stringify(c));
            });
        });
    return list;
}

function getCopyDatabase() {
    var list = {};
    db.collection('database')
        .get().then(qS => {
            qS.forEach(async doc => {
                var c = doc.data();
                list[String(doc.id)] = JSON.parse(JSON.stringify(c));
            });
        });
    return list;
}

var cdataarr = {}, cuserarr = {};

db.collection('database')
    .onSnapshot(qS => {
        qS.forEach(doc => {
            var c = doc.data();
            cdataarr[String(doc.id)] = JSON.parse(JSON.stringify(c));
            document.querySelector('main').style = '';
            try { wait.remove(); } catch (e) { };
        });
    });
db.collection('userdata')
    .onSnapshot(qS => {
        qS.forEach(doc => {
            var c = doc.data();
            cuserarr[JSON.stringify(doc.id)] = JSON.parse(JSON.stringify(c));
        });
    });
prompt()
function setCantake(num, p) {
    var arrbs = cdataarr.arraybase.order;
    var n = cdataarr.noodle.nowok;
    var fn = cdataarr.fi_noodle.nowok;
    var bn = cdataarr.beef_noodle.nowok;
    var r = cdataarr.brpss.nowok;
    var s = cdataarr.salad.nowok;
    switch (p) {
        case 1:
            n + num;
            break;
        case 2:
            r + num;
            break;
        case 3:
            fn + num;
            break;
        case 4:
            bn + num;
            break;
        case 5:
            s + num;
            break;
        default:
            break;
    }
    carray = [];
    for (var i = 0; i < arrbs.length; i++) {
        var tf = false;
        const cus = cuserarr[JSON.stringify(arrbs[i])];
        if (n >= cus.noodle && fn >= cus.fi_noodle && bn >= cus.beef_noodle && r >= cus.brpss && s >= cus.salad) {
            tf = true;
            n -= cus.noodle;
            fn -= cus.fi_noodle;
            bn -= cus.beef_noodle;
            s -= cus.salad;
            r -= cus.brpss;
        }
        else {
            if (n < cus.noodle) {
                n = 0;
            }
            if (fn < cus.fi_noodle) {
                fn = 0;
            }
            if (bn < cus.beef_noodle) {
                bn = 0;
            }
            if (r < cus.brpss) {
                r = 0;
            }
            if (s < cus.salad) {
                s = 0;
            }
        }
        carray.push(tf);
        if (cus.cantake != tf) {
            dbupdate('userdata', arrbs[i], {
                cantake: tf
            })
        }
    }
    dbupdate('database', 'arraybase', { cantakelist: carray })
}

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}