let input = {
    getFirstValue: function () {
        return Number(prompt("첫 번째 숫자를 입력해주세요."));
    },
    getSecondValue: function () {
        return Number(prompt("두 번째 숫자를 입력해주세요."));
    },
    getOperator: function () {
        return prompt("연산자 혹은 q를 입력해주세요. q 입력시 종료");
    }
};

output = {
    print: function (input) {
        return document.write(input);
    }
};

calculator = {
    calculate: function (first, second, op) {
        let num = 0;
        switch (op) {
            case "+" :
                num += first + second;
                break;
            case "-":
                num += first - second;
                break;
            case "*":
                num += first * second;
                break;
            case "/":
                num += first / second;
                break;
            default:
                alert("제대로된 값을 입력해주세요")
                break;
        }
        return num;
    }
}

function main() {
    let result = input.getFirstValue();
    while (true) {
        let op = input.getOperator();
        if (op === "q") {
            break;
        }
        let second = input.getSecondValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);
}

main()