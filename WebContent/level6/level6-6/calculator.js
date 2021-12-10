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
    calculate: function () {
        let isTrue = true;
        let num = 0;
        while (isTrue) {
            switch (input.getOperator()) {
                case "+" :
                    num += input.getFirstValue() + input.getSecondValue();
                    break;
                case "-":
                    num += input.getFirstValue() - input.getSecondValue();
                    break;
                case "*":
                    num += input.getFirstValue() * input.getSecondValue();
                    break;
                case "/":
                    num += input.getFirstValue() / input.getSecondValue();
                    break;
                case "q":
                    isTrue = false;
                    break;
                default:
                    alert("제대로된 값을 입력해주세요")
                    break;
            }
        }
        return num;
    }
}

function main() {
    let fin;
    fin = calculator.calculate();
    output.print(fin);
}

main()