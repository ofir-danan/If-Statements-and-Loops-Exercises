function question3() { 
    let num1 = Number(prompt("first number"));
    let num2 = Number(prompt("second number"));
    let num3 = Number(prompt("third number"));
    if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
        alert(num1 + "," + num2 + "," + num3);
    }   else if (num1 >= num2 && num1 >= num3 && num2 <= num3){
        alert(num1 + "," + num3 + "," + num2);
    }    else if (num2 >= num1 && num2 >= num3 && num3 >= num1){
        alert(num2 + "," + num3 + "," + num1);
    }    else if (num2 >= num1 && num2 >= num3 && num1 >= num3){
        alert(num2 + "," + num1 + "," + num3);
    }    else if (num3 >= num2 && num3 >= num1 && num2 >= num1){
        alert(num3 + "," + num2 + "," + num1);
    }    else if (num3 >= num2 && num3 >= num1 && num1 >= num2){
        alert(num3 + "," + num1 + "," + num2);
    }
}