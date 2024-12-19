import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Body() {
    const today = new Date();

    const [dob, setDob] = useState({
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    });
    const [ageAtDate, setAgeAtDate] = useState({
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    });
    const [result, setResult] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [finalDate, setFinalDate] = useState(null);

    const handleDateChange = (setter, field, value) => {
        setter((prev) => {
            let updated = { ...prev, [field]: value };

            if (field === "month" || field === "year") {
                const maxDay = getDaysInMonth(updated.year, updated.month);
                if (updated.day > maxDay) {
                    updated.day = maxDay;
                }
            }

            return updated;
        });
    };

    const getDaysInMonth = (year, month) => {
        if (!year || !month) return 31;
        return new Date(year, month, 0).getDate();
    };

    const calculateDifference = () => {
        if (
            !dob.year ||
            !dob.month ||
            !dob.day ||
            !ageAtDate.year ||
            !ageAtDate.month ||
            !ageAtDate.day
        ) {
            Swal.fire({
                icon: "error",
                title: "Incomplete Input",
                text: "Please select all fields for both dates.",
                confirmButtonColor: "#003366",
            });
            return;
        }

        const dobDate = new Date(dob.year, dob.month - 1, dob.day);
        const ageAtDateObj = new Date(ageAtDate.year, ageAtDate.month - 1, ageAtDate.day);

        if (ageAtDateObj < dobDate) {
            Swal.fire({
                icon: "error",
                title: "Invalid Date Selection",
                text: "Age At the Date should be greater than Date of Birth.",
                confirmButtonColor: "#003366",
            });
            return;
        }

        setStartDate(dobDate);
        setFinalDate(ageAtDateObj);

        const totalMs = ageAtDateObj - dobDate;
        const seconds = Math.floor(totalMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30.4375);
        const years = Math.floor(months / 12);

        const remMonths = months % 12;
        const remDays = days - (years * 365 + Math.floor(remMonths * 30.4375));

        setResult(`
            ${years} years ${remMonths} months ${remDays} days
            or ${months} months ${remDays} days
            or ${weeks} weeks ${days % 7} days
            or ${days} days
            or ${hours} hours
            or ${minutes} minutes
            or ${seconds} seconds
        `.trim());

        renderCalendar(startDate);
        renderCalendar(finalDate);
    };

    const generateDropdownOptions = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((value) => (
            <option key={value} value={value}>
                {value}
            </option>
        ));
    };

    const renderCalendar = (currdate) => {
        if (!currdate) return null;

        const year = currdate.getFullYear();
        const month = currdate.getMonth();
        const markedDay = currdate.getDate();

        const daysInMonth = getDaysInMonth(year, month + 1);
        const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

        return (
            <div className="calendar-container">
                <h3>{`${currdate.toLocaleString("default", { month: "long" })} ${year}`}</h3>
                <div className="calendar-grid">
                    {days.map((day) => (
                        <div
                            key={day}
                            className={`calendar-day ${day === markedDay ? "marked-day" : ""}`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="main-body" style={{ textAlign: "left", paddingLeft: "120px" }}>
            <div className="inner-body" style={{ maxWidth: "600px" }}>
                <h2 style={{ color: "#003366" }}>Age Calculator</h2>

                {!result && (
                    <p style={{ marginTop: "15px", fontWeight: 470 }}>
                        The Age Calculator can determine the age or interval between two dates.
                        The calculated age will be displayed in years, months, weeks, days, hours,
                        minutes, and seconds.
                    </p>
                )}

                {
                    result.length > 0 ? (<>

                        <div style={{
                            width: "100%",
                            height: '35px',
                            backgroundColor: '#518428',
                            paddingTop: "6px",
                            paddingLeft: '6px',
                            fontWeight: 500,
                            color: 'white',
                            marginBottom: '20px'
                        }}>Result</div>
                    </>) : (<></>)
                }

                <p
                    style={{
                        fontWeight: 500,
                        fontSize: "20px",
                        textAlign: "left",
                        whiteSpace: "pre-line",
                    }}
                    dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, "<br/>") }}
                ></p>

                <div className='calender-container'>
                    {startDate && renderCalendar(startDate)}
                    {finalDate && renderCalendar(finalDate)}

                </div>

                <div className="inner-datepicker-container ">

                    <div className="input-group" style={{ marginBottom: "15px" }}>
                        <label style={{ fontWeight: "bold" }}>Date of Birth</label>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <select
                                value={dob.year}
                                onChange={(e) => handleDateChange(setDob, "year", +e.target.value)}
                            >
                                <option value="">Year</option>
                                {generateDropdownOptions(1900, today.getFullYear())}
                            </select>
                            <select
                                value={dob.month}
                                onChange={(e) => handleDateChange(setDob, "month", +e.target.value)}
                            >
                                <option value="">Month</option>
                                {generateDropdownOptions(1, 12)}
                            </select>
                            <select
                                value={dob.day}
                                onChange={(e) => handleDateChange(setDob, "day", +e.target.value)}
                            >
                                <option value="">Day</option>
                                {generateDropdownOptions(1, getDaysInMonth(dob.year, dob.month))}
                            </select>
                        </div>
                    </div>

                    <div className="input-group" style={{ marginBottom: "15px" }}>
                        <label style={{ fontWeight: "bold" }}>Age At the Date of</label>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <select
                                value={ageAtDate.year}
                                onChange={(e) => handleDateChange(setAgeAtDate, "year", +e.target.value)}
                            >
                                <option value="">Year</option>
                                {generateDropdownOptions(1900, today.getFullYear() + 10)}
                            </select>
                            <select
                                value={ageAtDate.month}
                                onChange={(e) => handleDateChange(setAgeAtDate, "month", +e.target.value)}
                            >
                                <option value="">Month</option>
                                {generateDropdownOptions(1, 12)}
                            </select>
                            <select
                                value={ageAtDate.day}
                                onChange={(e) => handleDateChange(setAgeAtDate, "day", +e.target.value)}
                            >
                                <option value="">Day</option>
                                {generateDropdownOptions(1, getDaysInMonth(ageAtDate.year, ageAtDate.month))}
                            </select>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn"
                        onClick={calculateDifference}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            backgroundColor: "#003366",
                            color: "white",
                            border: "none",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                    >
                        Calculate
                    </button>

                </div>


            </div>
            <style>{`
                .calendar-container {
                    margin-top: 20px;
                    text-align: center;
                   
                }
                .calendar-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 25px);
                    gap: 4px;
                    justify-content: center;
                    
                }
                .calendar-day {
                    padding: 2px;
                    background-color: #f0f0f0;
                    text-align: center;
                    border-radius: 5px;
                }
                .marked-day {
                    background-color: #ff9800;
                    color: white;
                    font-weight: bold;
                    border-radius: 50%;
                }
            `}</style>
        </div >
    );
}
