import React, { useState } from "react";
import Swal from "sweetalert2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Body() {
    const today = new Date();

    const [showCalendar, setShowCalendar] = useState(false);
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

        setShowCalendar(true);

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
    };

    const generateDropdownOptions = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((value) => (
            <option key={value} value={value}>
                {value}
            </option>
        ));
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

                {result && (
                    <div
                        style={{
                            backgroundColor: "#518428",
                            marginTop: "20px",
                            padding: "7px",
                            color: "white",
                            fontWeight: 500,
                            fontSize: "20px",
                            marginBottom: "10px",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        Result
                    </div>
                )}

                <p
                    style={{
                        fontWeight: 500,
                        fontSize: "20px",
                        textAlign: "left",
                        whiteSpace: "pre-line",
                    }}
                    dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, "<br/>") }}
                ></p>

                <div>
                    {showCalendar && (
                        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                            <div>
                                <h4 style={{ textAlign: "center", color: "#003366" }}>Date of Birth</h4>
                                <Calendar

                                    value={new Date(dob.year, dob.month - 1, dob.day)}
                                    tileClassName={({ date }) =>
                                        date.toDateString() ===
                                            new Date(dob.year, dob.month - 1, dob.day).toDateString()
                                            ? "highlight"
                                            : null
                                    }

                                    className="custom-calendar"
                                />
                            </div>
                            <div>
                                <h4 style={{ textAlign: "center", color: "#003366" }}>Age At Date</h4>
                                <Calendar
                                    value={new Date(ageAtDate.year, ageAtDate.month - 1, ageAtDate.day)}
                                    tileClassName={({ date }) =>
                                        date.toDateString() ===
                                            new Date(ageAtDate.year, ageAtDate.month - 1, ageAtDate.day).toDateString()
                                            ? "highlight"
                                            : null
                                    }
                                    className="custom-calendar"
                                />
                            </div>
                        </div>
                    )}

                    <style>{`
                        .highlight {
                            background: #ff9800;
                            color: white !important;
                            border-radius: 50%;
                        }
                        button.btn:hover {
                            background-color: #0055a3;
                        }
                        button.btn:active {
                            background-color: #003366;
                        }
                    `}</style>
                </div>



                <div className="body-date-calculator" style={{ textAlign: "left" }}>

                    <div className="inner-datepicker-container">
                        <div className="input-group" style={{ marginBottom: "15px" }}>
                            <label style={{ fontWeight: "bold" }}>Date of Birth</label>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <select
                                    value={dob.year}
                                    onChange={(e) => handleDateChange(setDob, "year", e.target.value)}
                                >
                                    <option value="">Year</option>
                                    {generateDropdownOptions(1900, today.getFullYear())}
                                </select>
                                <select
                                    value={dob.month}
                                    onChange={(e) => handleDateChange(setDob, "month", e.target.value)}
                                >
                                    <option value="">Month</option>
                                    {generateDropdownOptions(1, 12)}
                                </select>
                                <select
                                    value={dob.day}
                                    onChange={(e) => handleDateChange(setDob, "day", e.target.value)}
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
                                    onChange={(e) => handleDateChange(setAgeAtDate, "year", e.target.value)}
                                >
                                    <option value="">Year</option>
                                    {generateDropdownOptions(1900, today.getFullYear() + 10)}
                                </select>
                                <select
                                    value={ageAtDate.month}
                                    onChange={(e) => handleDateChange(setAgeAtDate, "month", e.target.value)}
                                >
                                    <option value="">Month</option>
                                    {generateDropdownOptions(1, 12)}
                                </select>
                                <select
                                    value={ageAtDate.day}
                                    onChange={(e) => handleDateChange(setAgeAtDate, "day", e.target.value)}
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


                    <div className='extra-content'>
                        <span>
                            Age calculation differs significantly across cultures, reflecting diverse traditions and perspectives. The most common system, used in many Western countries, measures age by birthdays. For example, a person who has lived for three years and eleven months is considered three years old until their next birthday, when they turn four. This method aligns age increments with personal milestones, offering simplicity and clarity.
                        </span>
                        <br />
                        <br />
                        <span>
                            In contrast, some cultures approach age differently. In one traditional Chinese system, individuals are considered one year old at birth, with their age increasing at the Chinese New Year, rather than on their birthday. For instance, a baby born a day before the Chinese New Year would be two years old just two days after birth. This approach ties age to collective traditions, emphasizing cultural milestones like the start of a new year.
                        </span>
                        <br />
                        <br />
                        <span>
                            Other systems include or exclude the current year when counting age. For example, a person considered twenty in one culture may be seen as in their twenty-first year in another. Such variations highlight how seemingly minor distinctions can influence our understanding of age.
                        </span>

                        <br />
                        <br />

                        <span>Calculating age across months of different lengths can also present challenges. For instance, the span from February 28 to March 31 could be counted as either one month or one month and three days, depending on the method used. To address such complexities, this calculator uses a precise system that ensures accurate results for any range of dates.

                            By offering results in years, months, days, weeks, hours, and even seconds, this tool provides a comprehensive and culturally adaptable solution. Understanding these differences in age calculation not only highlights diverse traditions but also underscores the value of clarity and accuracy in measuring life’s milestones.</span>

                    </div>




                </div>
            </div>
        </div>
    );
}
