function question11() { 
    let x = 240;
    let y = 120;
    let gcd; 
    let divisor;
    for (let i = 2; i < x; i++){
        if (x % i === 0){
            divisor = y % i;
            if (divisor === 0) {
                gcd = i;
            }
        }
        
    }
    console.log(gcd + " is the GCD");
}