function getNum () {
    let strNum = prompt("구구구구단을 만들기 위해 숫자쌍 하나를 입력해주세요. (예: 2,4");
    if (strNum.indexOf(",") === -1) {
        alert("조건에 맞는 값을 입력해주세요.")
        getNum();
    }
    let numArr = strNum.split(",");
    Number(numArr);
    return numArr;
}

function gugudan () {
    let numArr = getNum();
    for (let i = 1; i <= numArr[0]; i ++) {
        document.write("<h2> "+ i + "단 </h2>");
        for (let j = 1; j <= numArr[1]; j ++) {
            document.write(i * j + "<br>");
        }
    }
}

function main () {
    gugudan();
}

main();