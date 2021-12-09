function calc() {
    let str1 = document.getElementById('n1').value;
    let str2 = document.getElementById('n2').value;
    let n1 = Number(str1);
    let n2 = Number(str2);

    let str = "";

    str += "더하기 : " + (n1 + n2) + "<br>";
    str += "빼기 : " + (n1 - n2) + "<br>";
    str += "곱하기 : " + (n1 * n2) + "<br>";
    str += "나누기 : " + (n1 / n2) + "<br>";

    document.write(str);
}

calc();
