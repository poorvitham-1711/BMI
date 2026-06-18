function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  // Convert height from cm to meters
  height = height / 100;

  // BMI formula
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  // Determine category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Display results
  document.getElementById("bmi-result").textContent = bmi;
  document.getElementById("bmi-category").textContent = category;
}
