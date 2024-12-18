import React from "react";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Age Calculator. All Rights Reserved.</p>
                <p>
                    Built with ❤️ by{" "}
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        Utkarsh Raj
                    </a>
                </p>
            </div>
        </footer>
    );
}
