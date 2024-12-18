import React, { useState } from 'react';

export default function Body() {
    const [value1, setValue1] = useState(''); // Initialize as empty string
    const [value2, setValue2] = useState('');

    const handleChange1 = (e) => {
        const selectedDate = e.target.value;
        console.log("Selected Date (DOB):", selectedDate);
        setValue1(selectedDate);
    };

    const handleChange2 = (e) => {
        const selectedDate = e.target.value;
        console.log("Selected Date (Age At):", selectedDate);
        setValue2(selectedDate);
    };

    return (
        <div className='main-body'>
            <div className='inner-body'>
                <h2 style={{ color: "#003366" }}>Age Calculator</h2>
                <p style={{ marginTop: "15px", fontWeight: 470 }}>
                    The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, weeks, days, hours, minutes, and seconds.
                </p>
                <div className='body-mid-container'>
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

                    <button type="submit" className="btn">Calculate</button>
                </div>
            </div>
        </div>
    );
}
