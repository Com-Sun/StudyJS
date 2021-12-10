function getFirstValue() {
    return Number(prompt("첫 번째 숫자를 입력해주세요."));
}

function getSecondValue() {
    return Number(prompt("두 번째 숫자를 입력해주세요."));
}

function getOperator() {
    return prompt("연산자 혹은 q를 입력해주세요. q입력시 종료");
}

function calculate() {
    let num;
    switch (getOperator()) {
        case "+" :
            num = getFirstValue() + getSecondValue();
            break;
        case "-":
            num = getFirstValue() - getSecondValue();
            break;
        case "*":
            num = getFirstValue() * getSecondValue();
            break;
        case "/":
            num = getFirstValue() / getSecondValue();
            break;
        default :
            break;
    }
    return num;
}

function print(input) {
    return document.write(input);
}

function main() {
    let fin = 0;
    while (true) {
        fin += calculate();
        if (getOperator()=== "q") {
            break;
        }
    }
    print(fin);
}

main();