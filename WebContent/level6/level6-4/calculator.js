function calculator () {
    let fin = 0;
    while (true) {
        let num = prompt("연산을 입력해주세요. q 입력시 end, 반드시 띄어쓰기로 구분 ");
        if (num === "q") {
            break;
        }

        let numArr = num.split(" ");
        let numbers = [];
        let ops = [];
        for (let i = 0; i < numArr.length; i++) {
            if (i < (numArr.length / 2)) {
                numbers[i] = Number(numArr[i * 2]);
                ops[i] = numArr[i * 2 + 1];
            }

            else {
                break;
            }
        }


        for (let i = 0; i < numbers.length - 1; i ++) {
            switch (ops[i]) {
                case "+" : fin += numbers [i] + numbers[i + 1];
                    break;
                case "-" : fin += numbers [i] - numbers[i + 1];
                    break;
                case "*" : fin += numbers [i] * numbers[i + 1];
                    break;
                case "/" : fin += numbers [i] / numbers[i + 1];
                    break;
                default : document.write("error");
                    break;
            }
        }
    }
    document.write(fin.toString());
}