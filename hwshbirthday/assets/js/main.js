const firebaseConfig = {
    apiKey: "AIzaSyB_qjjfuawRzKMKzW2L4ECTc8eb7fuNkmo",
    authDomain: "garden-party-19d43.firebaseapp.com",
    projectId: "garden-party-19d43",
    storageBucket: "garden-party-19d43.appspot.com",
    messagingSenderId: "63492103924",
    appId: "1:63492103924:web:f1408217b35c82ce7948a1",
    measurementId: "G-5ZE5FV7ZM4"
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
    return db.collection(String(collection)).doc(String(doc)).onSnapshot((dbdoc) => {dbt = dbdoc.data()});
}