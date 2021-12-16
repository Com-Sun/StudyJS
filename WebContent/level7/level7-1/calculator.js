const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i ++) {
    btns[i].addEventListener("click", clickBtn);
} // 모든 버튼에 이벤트리스너 부착

function random(number) {
    return Math.floor(Math.random()*number);
}

input = {};
input.clickBtn = function(e) {

}

function clickBtn (e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    const str = e.target.innerHTML;
    console.log(str);
}


let a = clickBtn();
alert(a);