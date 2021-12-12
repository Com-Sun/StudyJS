let input = {};
input.init = function (str) {
    this.list = str.split(" ");
}
input.empty = function() {
    return this.list.length === 0;
}
input.getValue = function () {
    let str = this.list.shift();
    return Number(str);
}
input.getOperator = function() {
    let op = this.list.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        return op;
    } else {
        return "$";
    }
}

output = {
    out: document.getElementById("output"),
    print: function (input) {
        this.out.innerHTML = input;
    }
};

calculator = {
    calculate: function (first, second, op) {
        let num = 0;
        switch (op) {
            case "+" :
                num = first + second;
                break;
            case "-":
                num = first - second;
                break;
            case "*":
                num = first * second;
                break;
            case "/":
                num = first / second;
                break;
            default:
                alert("제대로된 값을 입력해주세요")
                break;
        }
        return num;
    }
}

function main() {
    let str = document.getElementById("input").value;
    input.init(str);
    let result = input.getValue();

    while (!input.empty()) {
        let op = input.getOperator();
        let second = input.getValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);
}
