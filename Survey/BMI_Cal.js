document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const weight = document.getElementById('weight').value;

    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('result').innerHTML = `
        <p>Your BMI is <strong>${bmi}</strong></p>
        <p>You are classified as <strong>${category}</strong></p>
    `;

    // Visualization (example using ASCII art)
    let visual = '';
    const ranges = [
        { min: 0, max: 18.4, label: 'Underweight', color: 'text-blue-500' },
        { min: 18.5, max: 24.9, label: 'Normal weight', color: 'text-green-500' },
        { min: 25, max: 29.9, label: 'Overweight', color: 'text-yellow-500' },
        { min: 30, max: 100, label: 'Obese', color: 'text-red-500' },
    ];

    ranges.forEach(range => {
        if (bmi >= range.min && bmi <= range.max) {
            visual += `<div class="${range.color} font-bold">${range.label} (${range.min}-${range.max})</div>`;
        } else {
            visual += `<div class="text-gray-400">${range.label} (${range.min}-${range.max})</div>`;
        }
    });

    document.getElementById('result').innerHTML += `<div class="mt-4">${visual}</div>`;
});