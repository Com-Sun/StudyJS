let readInput = function () {
    let input = document.getElementById("input1");
    console.log(input.value);
}

let btn2_input = document.createElement("input");
btn2_input.id = "input_2";
let btn2 = document.createElement("button");
btn2.innerHTML = "휘릭!";
let test = document.getElementById("btn_2");
test.appendChild(btn2_input)
test.appendChild(btn2);
