let i = 1;
let arr = [];
function addSpan () {
    let a = 10;
    if (i <= 9) {
        let val = document.querySelector('span:nth-child(' + i +')');
        arr.push(val);
        val.classList.add('active');
        setTimeout(addSpan, 500, ++i);
    }
    else if (a > 9) {
        let val = document.querySelector('span:nth-child(' + a +')');
        arr.pop(val);
        val.classList.remove('active');
        setTimeout(changeSpan, 500, --a);
    }
}

setTimeout(addSpan, 500);