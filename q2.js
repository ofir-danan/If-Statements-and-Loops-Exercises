function question2() { 
    let num1 = Number(prompt("first number"));
    let num2 = Number(prompt("second number"));
    let num3 = Number(prompt("third number"));
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        alert("The sign is +");
    }   else if (num1 < 0 && num2 > 0 && num3 > 0){
        alert("The sign is -");
    }   else if (num1 > 0 && num2 < 0 && num3 > 0){
        alert("The sing is -");
    }   else if (num1 > 0 && num2 > 0 && num3 < 0){
        alert("The sing is -");
    }   else if (num1 > 0 && num2 < 0 && num3 < 0){
        alert("The sing is +");
    }   else if (num1 < 0 && num2 > 0 && num3 < 0){
        alert("The sing is +");
    }   else if (num1 < 0 && num2 < 0 && num3 > 0){
        alert("The sing is +");
    }   else if (num1 < 0 && num2 < 0 && num3 < 0){
        alert("The sing is -");
    }
}