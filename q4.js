function question4() { 
    let num1 = Number(prompt("first number"));
    let num2 = Number(prompt("second number"));
    let num3 = Number(prompt("third number"));
    let num4 = Number(prompt("fourth number"));
    let num5 = Number(prompt("fifth number"));
    if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
        alert(num1 + " is the largest number" );
    }   else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5){
        alert(num2 + " is the largest number" );
    }    else if (num3 >= num2 && num3 >= num1 && num3 >= num4 && num3 >= num5){
        alert(num3 + " is the largest number" );
    }    else if (num4 >= num2 && num4 >= num3 && num4 >= num1 && num4 >= num5){
        alert(num4 + " is the largest number" );
    }    else if (num5 >= num2 && num5 >= num3 && num5 >= num4 && num5 >= num1){
        alert(num5 + " is the largest number" );
    }
}