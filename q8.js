function question8() { 
let limit = 5;
for (let i = 1; 0 < limit; i++){
    let loopIndicator = 1;
    let num = 7;
    while(num !== 1 && loopIndicator % num !== 0){
        num = i;
       loopIndicator *= num;
       let sum = 0;
       while(num > 0) {
           let digit= num % 10;
           sum += digit * digit;
           num = (num - digit) / 10;
       }
       num = sum;
       console.log(num);
    }
limit--
}
} 

