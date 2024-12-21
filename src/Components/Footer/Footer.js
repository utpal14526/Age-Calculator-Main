import React from "react";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="footer-span">
                    <a>About Us</a>
                    <a>Terms of Use</a>
                    <a>Privacy Policy</a>
                </span>
                <br />
                <span style={{ marginTop: "20px" }}>© {new Date().getFullYear()} Age Calculator. All Rights Reserved.</span>
                <br />
                <span>
                    Built with ❤️ by{" "}
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        Utkarsh Raj
                    </a>
                </span>
            </div>
        </footer>
    );
}
