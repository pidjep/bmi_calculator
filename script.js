function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const result = document.getElementById('result');
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        alert('Please enter valid weight and height');
    }
}
