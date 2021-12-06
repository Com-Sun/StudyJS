function calculate (num) {
    let numArr = "";
    for (let i = 1; i < 10; i ++) {
        numArr += num * i + "<br>";
    }
    return numArr;
}

function main () {
    for (let i = 2; i <10; i ++) {
        document.write("<h2> " + i + "단: </h2>" + calculate(i));
    }
}

main()