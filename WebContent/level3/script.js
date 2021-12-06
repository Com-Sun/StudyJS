numbers = {};
numbers.all = [];
numbers.prime = [];

numbers.addAll = function (max_num) {
    for (let i = 1; i <= max_num; i++) {
        this.all.push(i);
    }
};
numbers.isPrime = function (number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
numbers.addPrime = function () {
    for (let i = 0; i < this.all.length; i++) {
        if (this.isPrime(i)) {
            this.prime.push(i);
        }
    }
};
numbers.getAllPrimes = function () {
    let strPrime = "";
    strPrime += "<h2> 전체 소수의 개수: " + this.prime.length + "</h2>"
    for (let i = 2; i < this.prime.length; i ++) {
        strPrime += this.prime[i] + "<br>";
    }
    return strPrime;
};

numbers.addAll(10000);
numbers.addPrime();
document.getElementById("result").innerHTML = numbers.getAllPrimes();
