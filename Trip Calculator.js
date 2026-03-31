



let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let cheakBtn = document.getElementById("cheak");
let totalValue = document.querySelector(".total-value");

function calculator() {
    let num1value = number1.value;
    let num2value = number2.value;

    let sum = Number(num1value) + Number(num2value);
    totalValue.innerHTML = `$${sum.toFixed(2)}`;

    number1.value = "";
    number2.value = "";

}

cheakBtn.addEventListener("click", calculator);











