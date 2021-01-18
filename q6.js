function question6() { 
    let davidGrade = 80;
    let vinothGrade = 77;
    let divyaGrade = 88;
    let ishithaGrade = 95;
    let thomasGrade = 68;
    let gradeSum = davidGrade + vinothGrade + divyaGrade + ishithaGrade + thomasGrade;
    if ((gradeSum / 5) < 60 ){
        alert("F");
    } else if ((gradeSum / 5) < 70){
        alert("D");
    } else if ((gradeSum / 5) < 80) {
        alert("C");
    } else if ((gradeSum / 5) < 90) {
        alert("B");
    } else if ((gradeSum / 5) <100) {
        alert("A");
    }
}