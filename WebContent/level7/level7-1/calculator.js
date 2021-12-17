const btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", clickBtn);
} // 모든 버튼에 이벤트리스너 부착

function random(number) {
    return Math.floor(Math.random() * number);
}

function clickBtn(e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;

    const str = e.target.innerHTML;
    if (str === "bs") {
        input.array.pop();
    } else if (str === "+" || str === "-" || str === "*" || str === "/") {
        input.array.push(" " + str + " ")
    } else if (str === "=") {
        input.prepareCalculate();

        let result = input.getValue();

        while (!input.isEmpty()) {
            var op = input.getOperator();
            var second = input.getValue();
            result = calculator.calculate(result, second, op);
        }
        output.print(result);
        input.removeAll(result);
    } else {
        input.array.push(str);
    }

    output.display();
}

// input & output 시작
let input = {
    "array": []
};

input.getInput = function () {
    return this.array.join("");
};

input.removeAll = function (value) {
    this.array = [];
    this.array.push(value);
};

input.isEmpty = function () {
    return this.array.length === 0;
};

input.prepareCalculate = function () {
    this.array = this.array.join("").split(" ");
};

input.getValue = function () {
    let str = this.array.shift();
    let n = Number(str);
    return n;
}


input.getOperator = function () {
    let op = this.array.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        return op;
    } else {
        return "$";
    }
};

let output = {
        text: document.getElementById("result"),
        display: function () {
            this.text.innerHTML = input.getInput();
        },
        print: function (str) {
            this.text.innerHTML = str;
        }
    }
;


// input & output end

let calculator = {};
calculator.calculate = function (first, second, op) {
    let ret;
    switch (op) {
        case "+":
            ret = first + second;
            break;
        case "-":
            ret = first - second;
            break;
        case "*":
            ret = first * second;
            break;
        case "/":
            ret = first / second;
            break;
        default:
            return NaN;
    }
    return ret;
}

// calculator