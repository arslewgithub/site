var permissions = 0
//var bodyhtml = document.body.innerHTML
//var headhtml = document.head.innerHTML
const loginac = localStorage.getItem('account');
const loginpw = localStorage.getItem('password');
if ((loginac == 'arsdev') && (loginpw == 'arsadmin')) {
    permissions = 1;
    if (!window.Notification) {
    }
    else if (Notification.permission === "granted") {
        let notification = new Notification("登入成功!", {
            body: "登入帳號: arsdev\n登入密碼: *********",
            icon: "images/logo.svg",
            image: "images/logo.svg",
            requireInteraction: true,
        });
    }
    else if (Notification.permission === "denied") {
        //alert("建議您允許通知，以收到重要訊息");
    }
    else if (Notification.permission === "default") {
        Notification.requestPermission()
    }
}
else {
    //document.body.innerHTML = "";
    //document.head.innerHTML = "";
    if (!window.Notification) {
    }
    else if (Notification.permission === "granted") {
        let notification = new Notification("登入失敗!", {
            body: "未登入\n\n  存取遭到拒絕",
            icon: "images/logo.svg",
            image: "images/logo.svg",
            requireInteraction: true,
        });
    }
    else if (Notification.permission === "denied") {
        //alert("建議您允許通知，以收到重要訊息");
    }
    else if (Notification.permission === "default") {
        Notification.requestPermission()
    }
}

function login() {
    localStorage.setItem('account', 'arsdev')
    localStorage.setItem('password', 'arsadmin')
}

function logout() {
    localStorage.removeItem('account')
    localStorage.removeItem('password')
}
