function calculatebmi() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight / (height * height)) * 703;

    document.getElementById('heading').innerHTML = "Your BMI is:";
    document.getElementById('bmiOutput').innerHTML = bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = "You are Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById('message').innerHTML = "You are Normal";
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById('message').innerHTML = "You are Overweight";
    } else {
        document.getElementById('message').innerHTML = "You are Obese";
    }
}

function reload() {
    window.location.reload();
}