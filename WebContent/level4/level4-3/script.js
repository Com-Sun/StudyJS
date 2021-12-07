function Gugudan (num) {
    this.dan = Number(num);
    this.calculate = function (num) {
        for(let i = 1; i < 10; i ++) {
            document.write(i * num + "<br>");
        }
    }
}

function main () {
    for (let i = 2; i < 10; i ++) {
        let guguArr = [];
        guguArr[i] = new Gugudan(i);
        document.write("<h2>" + guguArr[i].dan + "단: </h2>");
        guguArr[i].calculate(i);
    }
}

main();