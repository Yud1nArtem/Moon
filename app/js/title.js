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
}

setTimeout(addSpan, 500);