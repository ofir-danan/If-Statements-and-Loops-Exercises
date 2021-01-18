function question9() { 
    for (let i = 100; i < 1000; i++) {
        let armstrongNum = i.toString().split('').map(i => i * i * i);
        let sum = armstrongNum.reduce((accumulator, currentItem) => accumulator + currentItem, 0);
        if (sum === i){
            console.log(i + " is a armstrong number");
        } 
    }
}