
function calculatebmi(){
    var age=document.getElementById("age").value;
    var male=document.getElementById("male").checked;
    var female=document.getElementById("female").checked;
    var height=document.getElementById("heightnum").value;
    var weight=document.getElementById("weightnum").value;
    if(age==''||height==''||weight==''||(male==false&&female==false)){
        alert("Please fill in all fields and select your gender.");
    }
    height=height/100;
    var bmi = weight / (height * height);
    document.getElementById("result").textContent=bmi.toFixed(2);
    var comment = document.querySelector(".comment");
    if (bmi < 18.5) {
        comment.textContent = "Underweight";
        comment.style.display = "block";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        comment.textContent = "Normal weight";
        comment.style.display = "block";
    } else if (bmi >= 25 && bmi <= 29.9) {
        comment.textContent = "Overweight";
        comment.style.display = "block";
    } else if (bmi >= 30) {
        comment.textContent = "Obesity";
        comment.style.display = "block";
    }
}
// Function to clear the form and result
function clearForm() {
    document.getElementById("age").value = '';
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("heightnum").value = '';
    document.getElementById("weightnum").value = '';
    
    document.getElementById("result").textContent = '00.00';
    
    var comment = document.querySelector(".comment");
    comment.textContent = '';
    comment.style.display = 'none'; 
}

