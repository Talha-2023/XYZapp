import { useState } from "react";
import DisplayContainer from "../../DisplayContainer";
import styles from "./BMICalculator.module.css";
const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male"); // Default to male
  const [bmi, setBMI] = useState("00:00");
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
    setGender("male");
    setBMI("00:00");
    setError("");
  };

  return (
    <DisplayContainer>
      <div className={styles.mainContainer}>
        <div className={styles.semiContainer}>
          <div className={styles.height_box}>
            <p>Height</p>
            <input
              type="number"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              placeholder="Feet"
              className={styles.feet}
            />
            <input
              type="number"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              placeholder="Inches"
              className={styles.inches}
            />
          </div>
          <div className={styles.weightAndAge_box}>
            <div className={styles.weight}>
              <p> Weight</p>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="In KG"
              />
            </div>
            <div className={styles.age}>
              <p> Age</p>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
              />
            </div>
          </div>
          <div className={styles.gender_box}>
            <div className={styles.male}>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <p>Male</p>
            </div>
            <div className={styles.female}>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <p>Female</p>
            </div>
          </div>
          <div className={styles.button_box}>
            <div onClick={reset} className={styles.reset}>
              <p>Reset</p>
            </div>

            <div onClick={calculateBMI} className={styles.sumbit}>
              <p> Calculate BMI</p>
            </div>
          </div>
          <center>{error && <p className={styles.error}>{error}</p>}</center>
        </div>

        <div className={styles.result}>
          <div className={styles.bmi_conatiner}>
            <h3>Your BMI: </h3>
            <div className={styles.bmi_box}>
              <div>
                <h2>{bmi}</h2>
              </div>
              <div className={styles.bmi}>
                <p>
                  {bmi == "00:00"
                    ? "Interpretation"
                    : bmi < 18.5
                    ? "Underweight"
                    : bmi < 24.9
                    ? "Normal Weight"
                    : bmi < 29.9
                    ? "Overweight"
                    : bmi < 39.9
                    ? "Obese"
                    : "Extreme Obese"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //------------------------ */}
      <div className={styles.what}>
        <h1>What is BMI?</h1>
        <p>
          Body Mass Index (BMI) is a measure used to assess an individual's body
          weight in relation to their height. It's calculated by dividing a
          person's weight in kilograms by the square of their height in meters.
          This calculation results in a numerical value that categorizes
          individuals into different weight categories: underweight, normal
          weight, overweight, or obese. While BMI is a convenient tool for
          screening purposes, it has several limitations. One major limitation
          is that it doesn't account for the distribution of body fat or
          distinguish between fat mass and muscle mass. This means that
          individuals with high muscle mass, such as athletes, may have a high
          BMI despite being healthy and fit.
          <p>BMI = weight (kg) / (height (m) * height (m))</p>
          <img src="/bmi.jpeg" alt="" style={{ width: "100%" }} />
          Additionally, BMI doesn't consider other important factors like age,
          sex, or ethnicity, which can influence body composition and health
          risks. Despite these limitations, BMI remains widely used in
          healthcare settings and public health initiatives as a quick and
          accessible way to assess weight status and identify potential health
          risks associated with excess body weight. However, it's important to
          interpret BMI alongside other health indicators and consider
          individual circumstances for a comprehensive understanding of an
          individual's health status.
        </p>
      </div>
    </DisplayContainer>
  );
};

export default BMICalculator;
