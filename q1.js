function question1() { 
    let num1 = Number(prompt("first number"));
    let num2 = Number(prompt("second number"));
    if (num1 > num2) {
        alert(num1);
    } else {
        alert(num2 + " is the bigger number");
    }
}