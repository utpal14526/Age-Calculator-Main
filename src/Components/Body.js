import React, { useState } from "react";

export default function Body() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [result, setResult] = useState("");

    const handleChange1 = (e) => {
        setValue1(e.target.value);
    };

    const handleChange2 = (e) => {
        setValue2(e.target.value);
    };

    const calculateDifference = () => {
        if (!value1 || !value2) {
            alert("Please select both dates.");
            return;
        }

        const dob = new Date(value1);
        const ageAtDate = new Date(value2);


        if (ageAtDate < dob) {
            alert("Error: Age At the Date should be greater than Date of Birth.");
            return;
        }


        let years = ageAtDate.getFullYear() - dob.getFullYear();
        let months = ageAtDate.getMonth() - dob.getMonth();
        let days = ageAtDate.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(ageAtDate.getFullYear(), ageAtDate.getMonth(), 0).getDate();
            days += prevMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        console.log(years);


        setResult(`Age: ${years} years, ${months} months, and ${days} days.`);

    };

    return (
        <div className="main-body">
            <div className="inner-body">
                <h2 style={{ color: "#003366" }}>Age Calculator</h2>
                <p style={{ marginTop: "15px", fontWeight: 470 }}>
                    The Age Calculator can determine the age or interval between two dates.
                    The calculated age will be displayed in years, months, weeks, days, hours,
                    minutes, and seconds.
                </p>

                {
                    result.length ? (<>
                        <div style={{
                            backgroundColor: "#518428",
                            marginTop: "20px",
                            padding: "7px",
                            color: "white",
                            fontWeight: 500,
                            fontSize: "20px",
                            marginBottom: "10px"
                        }}>Result</div>
                    </>) : (<></>)
                }

                <p style={{
                    fontWeight: 600,
                    fontSize: "20px"
                }}>{result}</p>


                <div className="body-mid-container">
                    <span>Modify The Values and Click the Calculate Button to Use</span>
                </div>

                <div className="body-date-calculator">
                    <div className="input-group">
                        <label className="input-label">Date of Birth</label>
                        <input
                            type="date"
                            value={value1}
                            onChange={handleChange1}
                            className="date-input"
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Age At the Date of</label>
                        <input
                            type="date"
                            value={value2}
                            onChange={handleChange2}
                            className="date-input"
                        />
                    </div>

                    <button type="button" className="btn" onClick={calculateDifference}>
                        Calculate
                    </button>
                </div>


                <p style={{
                    fontSize: "16px",
                    marginTop: "30px"
                }}>
                    The  age of a person can be counted differently in different cultures. This calculator is based on the most common age system. In this system, age increases on a person's birthday. For example, the age of a person who has lived for 3 years and 11 months is 3, and their age will increase to 4 on their next birthday one month later. Most western countries use this age system.

                </p>
                <p style={{
                    fontSize: "16px",
                    marginTop: "5px"
                }}>In some cultures, age is expressed by counting years with or without including the current year. For example, a person who is twenty years old is the same age as another person who is in their twenty-first year of life. In one of the traditional Chinese age systems, people are born at age 1 and their age increases up at the Traditional Chinese New Year rather than their birthday. For example, if one baby is born just one day before the Traditional Chinese New Year, 2 days later, the baby will be 2 even though he/she is only 2 days old.</p>
                <p style={{
                    fontSize: "16px",
                    marginTop: "5px"
                }}>In some situations, the months and day result of this age calculator may be confusing, especially when the starting date is the end of a month. For example, we count Feb. 20 to Mar. 20 to be one month. However, there are two ways to calculate the age from Feb. 28, 2022 to Mar. 31, 2022. If we consider Feb. 28 to Mar. 28 to be one month, then the result is one month and 3 days. If we consider both Feb. 28 and Mar. 31 as the end of the month, then the result is one month. Both calculation results are reasonable. Similar situations exist for dates like Apr. 30 to May 31, May 30 to June 30, etc. The confusion comes from the uneven number of days in different months. In our calculations, we use the former method.</p>


            </div>
        </div>
    );
}



