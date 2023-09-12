// 建立水波紋元素
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("div");
    button.appendChild(circle);

    // 計算水波紋的位置和大小
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;

    // 啟動動畫
    circle.classList.add("ripple");
    setTimeout(() => circle.remove(), 1000);
}

function initialization() {
    document.querySelectorAll('.x').forEach(element => {
        element.classList.remove('x');
    });

    document.querySelectorAll('img').forEach(img => {
        img.draggable = false;
    });

    document.querySelectorAll('a').forEach(link => {
        link.draggable = false;
    });
}


var page = 1;

function changePage(n) {
    page = n + 1;
    document.querySelectorAll('.select').forEach(element => {
        element.classList.remove('select');
    });
    document.querySelectorAll('.funbt')[n].classList.add('select');
    pagelr(n);
}

function pagelr(p) {
    document.querySelectorAll('.main').forEach((element, index) => {
        element.classList.remove('right-page', 'left-page');
        if (index < p) {
            element.classList.add('left-page');
        }
        if (index > p) {
            element.classList.add('right-page');
        }
    });
}

document.querySelectorAll('.cp').forEach((btani) =>
btani.onmousedown = () => createRipple(event)
);

document.querySelectorAll('.funbt').forEach((btani) =>
btani.onmousedown = () => createRipple(event)
);

document.querySelectorAll('.funbt').forEach((element, w) =>
    element.onclick = () => changePage(w)
);

try {
    initialization()
}
catch (e) {
    console.error(e)
}

window.onload = () => {
    document.body.style = '';
}

function pageUD(event) {
    if ((event.keyCode == 33) && (page !== 1)) {
        document.querySelectorAll('.funbt')[page - 2].click()
        return false;
    }

    else if ((event.keyCode == 34) && (page !== document.querySelectorAll('.funbt').length)) {
        document.querySelectorAll('.funbt')[page].click()
        return false;
    }
}
document.onkeydown = pageUD