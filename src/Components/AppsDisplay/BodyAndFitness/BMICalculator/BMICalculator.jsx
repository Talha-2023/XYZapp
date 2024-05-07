import { useState } from "react";
import DisplayContainer from "../../DisplayContainer";
const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("0");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male"); // Default to male
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (!age) {
      setError("Please enter age.");
      return;
    }
    if (!feet || !inches) {
      setError("Please enter height.");
      return;
    }
    if (!weight) {
      setError("Please enter weight.");
      return;
    }

    const heightInInches = parseInt(feet) * 12 + parseInt(inches); // Convert feet and inches to inches
    const heightInMeters = heightInInches * 0.0254; // Convert inches to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);
    setError("");
  };

  const reset = () => {
    setWeight("");
    setFeet("");
    setInches("");
    setAge("");
    setGender("");
    setBMI("");
  };

  return (
    <DisplayContainer>
      <div>
        <h2>BMI Calculator</h2>
        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kilograms"
            />
          </label>
        </div>
        <div>
          <label>
            Height:
            <input
              type="number"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              placeholder="Feet"
            />
            <input
              type="number"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              placeholder="Inches"
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />{" "}
            Male
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />{" "}
            Female
          </label>
        </div>
        <br></br>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <button onClick={reset}>Reset</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {bmi && (
          <div>
            <h3>Your BMI: {bmi}</h3>
            <p>
              Interpretation:{" "}
              {bmi < 18.5
                ? "Underweight"
                : bmi < 24.9
                ? "Normal"
                : bmi < 29.9
                ? "Overweight"
                : "Obese"}
            </p>
          </div>
        )}
      </div>{" "}
      <br /> <br />
      <img src="/bmi.jpeg" alt="" style={{ width: "100%" }} />
      <h1>What is BMI</h1>
      <p>
        BMI stands for Body Mass Index. It's a simple numeric calculation that's
        used to classify individuals into different weight categories based on
        their height and weight. It's widely used as an indicator of body
        fatness and health risk. BMI is calculated using the following formula:
        BMI = weight (kg) height (m) 2 BMI= height (m) 2 weight (kg) ​ Where:
        Weight is measured in kilograms (kg). Height is measured in meters (m).
        BMI categories typically include: Underweight: BMI less than 18.5 Normal
        weight: BMI between 18.5 and 24.9 Overweight: BMI between 25 and 29.9
        Obesity: BMI 30 or greater While BMI is a useful screening tool for
        assessing body weight relative to height, it's important to note that it
        doesn't directly measure body fat or health. For example, it doesn't
        distinguish between lean body mass (muscle) and fat mass, and it doesn't
        account for differences in body composition, bone density, or
        distribution of fat. Despite its limitations, BMI is widely used in
        clinical practice and public health research as a convenient and
        inexpensive tool for assessing weight status and identifying individuals
        who may be at increased risk for weight-related health problems.
        However, it's often used in conjunction with other measures and clinical
        assessments for a more comprehensive evaluation of an individual's
        health status.
      </p>
    </DisplayContainer>
  );
};

export default BMICalculator;
