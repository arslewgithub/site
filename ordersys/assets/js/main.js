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
            try { wait.remove(); } catch (e) {};
        });
    });
db.collection('userdata')
    .onSnapshot(qS => {
        qS.forEach(doc => {
            var c = doc.data();
            cuserarr[JSON.stringify(doc.id)] = JSON.parse(JSON.stringify(c));
        });
    });
 
function setCantake(num) {
    var arrbs = cdataarr.arraybase.order;
    var n = cdataarr.noodle.nowok + num;
    var fn = cdataarr.fi_noodle.nowok + num;
    var bn = cdataarr.beef_noodle.nowok + num;
    var r = cdataarr.brpss.nowok + num;
    var s = cdataarr.salad.nowok + num;
    carray = [];
    for (var i = 0; i < arrbs.length; i++) {
    	var tf = false;
        if (n >= cuserarr[JSON.stringify(arrbs[i])].noodle && fn >= cuserarr[JSON.stringify(arrbs[i])].fi_noodle && bn >= cuserarr[JSON.stringify(arrbs[i])].beef_noodle && r >= cuserarr[JSON.stringify(arrbs[i])].brpss && s >= cuserarr[JSON.stringify(arrbs[i])].salad) {
            tf = true;
        }
        carray.push(tf);
        n -= cuserarr[JSON.stringify(arrbs[i])].noodle;
        fn -= cuserarr[JSON.stringify(arrbs[i])].fi_noodle;
        bn -= cuserarr[JSON.stringify(arrbs[i])].beef_noodle;
        s -= cuserarr[JSON.stringify(arrbs[i])].salad;
        r -= cuserarr[JSON.stringify(arrbs[i])].brpss;
        if (cuserarr[JSON.stringify(arrbs[i])].cantake != tf) {
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
		
/*
{"arraybase":{"order":[],"cantakelist":[]},"beef_noodle":{"previewcount":50,"unok":0,"nowok":0},"brpss":{"nowok":0,"previewcount":60,"name":"魯肉飯","unok":0},"fi_noodle":{"previewcount":120,"name":"炒泡麵","unok":0,"nowok":0},"noodle":{"unok":0,"previewcount":80,"nowok":0,"name":"肉燥麵"},"numberbase":{"allmoey":0},"salad":{"previewcount":90,"unok":0,"nowok":0}}
*/