const firebaseConfig = {
    apiKey: "AIzaSyB_qjjfuawRzKMKzW2L4ECTc8eb7fuNkmo",
    authDomain: "garden-party-19d43.firebaseapp.com",
    projectId: "garden-party-19d43",
    storageBucket: "garden-party-19d43.appspot.com",
    messagingSenderId: "63492103924",
    appId: "1:63492103924:web:f1408217b35c82ce7948a1",
    measurementId: "G-5ZE5FV7ZM4"
};

/*
const firebaseConfig = {
    apiKey: "AIzaSyAf9DnH-DXzlXmeyqCniQopqP6VC-k0B-c",
    authDomain: "garden-party2.firebaseapp.com",
    projectId: "garden-party2",
    storageBucket: "garden-party2.appspot.com",
    messagingSenderId: "235268083051",
    appId: "1:235268083051:web:374a29c4d8bc035abf902e",
    measurementId: "G-B3T6VJ26XV"
};
*/

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
            qS.forEach(async doc => {
                var c = doc.data();
                list[String(doc.id)] = JSON.parse(JSON.stringify(c));
            });
        });
    return list;
}

async function setCantake(num) {
    var userarr = getCopyUserData();
    await dbget('database', 'arraybase').then(async (v) => {
        arrbs = v.data().order;
        await dbget('database', 'noodle').then(async (k) => {
            var n = k.data().nowok + num;
            carray = [];
            for (var i = 0; i < arrbs.length; i++) {
                if (userarr[arrbs[i]].cantake != (n - userarr[arrbs[i]].noodle >= 0)) {
                    dbupdate('userdata', arrbs[i], {
                        cantake: (n - userarr[arrbs[i]].noodle >= 0)
                    })
                }
                carray.push((n - userarr[arrbs[i]].noodle >= 0))
                n -= userarr[arrbs[i]].noodle;
            }
            dbupdate('database', 'arraybase', { cantakelist: carray })
        })
    })
}
