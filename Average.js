    
    document.getElementById('gradeForm').onsubmit = function(event) {
        event.preventDefault();
    
        const subject1 = Number(document.getElementById("subject1").value);
        const subject2 = Number(document.getElementById("subject2").value);
        const subject3 = Number(document.getElementById("subject3").value);
        const Result = document.getElementById("Result");
        const Remarks = document.getElementById("Remarks");
    
        let gpa = (subject1 + subject2 + subject3) / 3;
        Result.textContent = `Your GPA is ${gpa.toFixed(2)}`;
    
        if (gpa > 100) {
            Remarks.textContent = `Invalid`;
        } else if (gpa >= 98) {
            Remarks.textContent = `with Highest Honors`;
        } else if (gpa >= 95) {
            Remarks.textContent = `with High Honors`;
        } else if (gpa >= 90) {
            Remarks.textContent = `with Honors`;
        } else if (gpa >= 75) {
            Remarks.textContent = `Achiever`;
        } else {
            Remarks.textContent = `Failed`;
        }
    }
    
    const subject1 = Number(document.getElementById("subject1").value);
    const subject2 = Number(document.getElementById("subject2").value);
    const subject3 = Number(document.getElementById("subject3").value);
    const Result = document.getElementById("Result");
    const Remarks = document.getElementById("Remarks");

function compute(){


    let gpa = (subject1 + subject2 + subject3) / 3;
    Result.textContent = `Your GPA is ${gpa.toFixed(2)}`;

    if(gpa > 100){
        Remarks.textContent = Invalid;
    }
    else if (gpa <= 100 && gpa >=98){
        Remarks.textContent = `with Highest Honors`;
    }
    else if (gpa >= 95 && gpa <=97){
        Remarks.textContent = `with High Honors`;
    }
    else if (gpa >= 90 && gpa <=94){
        Remarks.textContent = `with Honors`;
    }
    else if (gpa <=89 && gpa >= 75){
        Remarks.textContent = `Achiever`;
    }
    else if (gpa>75){
        Remarks.style.color("green");
        Remarks.textContent = `Failed`;
      
    }

}