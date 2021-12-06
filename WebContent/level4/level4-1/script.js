let arr = []
for(let i = 1; i  < 10; i ++) {
    arr += "<h2>" + i + "단 </h2>";
    for(let j = 2; j < 10; j ++) {
        arr += i + "*" + j + "=" + i*j + "<br>";
    }
}

document.write(arr);