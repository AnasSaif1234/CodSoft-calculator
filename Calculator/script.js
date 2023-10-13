document.addEventListener("DOMContentLoaded", () => {
    const resultInput = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.innerText;

            if (buttonText === "C") {
                clear();
            } else if (buttonText.match(/[0-9\.]/)) {
                appendNumber(buttonText);
            } else if (buttonText === "=") {
                calculate();
            } else {
                setOperator(buttonText);
            }
        });
    });

    function clear() {
        currentInput = "";
        operator = "";
        previousInput = "";
        resultInput.value = "";
    }

    function appendNumber(number) {
        currentInput += number;
        resultInput.value = currentInput;
    }

    function setOperator(op) {
        if (currentInput === "") return;
        if (previousInput !== "") {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = "";
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = prev / current;
                break;
            default:
                return;
        }

        clear();
        resultInput.value = result;
    }
});
