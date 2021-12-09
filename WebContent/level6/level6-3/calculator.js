function calculate () {
    let num = document.getElementById("num").value;
    let numArr = num.split(" ");

    for(let i = 0; i < 2; i ++) {
        numArr[i] = Number(numArr[i]);
    }

    let op = document.getElementById("operator").value;
    if (op === "+") {
        document.write("+ 는 :" + (numArr[0] + numArr[1]) + "<br>");
    }
    if (op === "-") {
        document.write("- 는 :" + (numArr[0] - numArr[1]) + "<br>");
    }
    if (op ==="*") {
        document.write("* 는 :" + (numArr[0] * numArr[1]) + "<br>");
    }
    if (op ==="/") {
        document.write("/ 는 :" + (numArr[0] /numArr[1]) + "<br>");
    }
}

