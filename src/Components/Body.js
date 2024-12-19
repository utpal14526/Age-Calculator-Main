body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}




.highlight {
  background-color: #ffeb3b;
  /* Highlight color */
  border-radius: 50%;
  /* Circular highlight */
  color: black;
  /* Text color */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.navbar {
  height: 60px;
  width: 100%;
  background-color: #003366;
  box-sizing: border-box;
  padding-left: 120px;
  padding-top: 8px;
  font-size: 20px;
}

/* 
.main-body {
  margin-top: 27px;
  padding-left: 80px;
}

.inner-body {
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 65%;
}

.body-mid-container {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  background-color: #4c87c3;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
  font-weight: 500;
}

.body-date-calculator {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
}

.input-label {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
  margin-right: 5px;
}

.date-input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
}

.date-input:focus {
  border-color: #007bff;
}

.btn {
  background-color: #003366;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  display: block;
}

.btn:hover {
  background-color: #00509E;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.btn:active {
  background-color: #002244;
  transform: translateY(0px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}


*/

/* General Styling */
body {
  font-family: 'Arial', sans-serif;

  margin: 0;
  padding: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  height: 100vh;
}

.main-body {
  width: 80%;
  margin-top: 25px;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  color: #003366;
}

p {
  color: #000000;
  line-height: 1.2;
  text-align: center;
}

.inner-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 65%;


  border-radius: 10px;
  padding: 10px;


}

/* Result Section */
div[style*="background-color: #518428"] {
  width: 100%;
  text-align: center;
  border-radius: 5px;
}

.result-text {
  margin: 10px 0;
  color: #333;
  font-weight: bold;
  font-size: 18px;
}

/* Input Section */
.body-date-calculator {
  margin-top: 20px;
  width: 100%;
}

.input-group {
  margin-bottom: 20px;
}

.input-label {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

.dropdown-group {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

select {
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
  color: #333;
  outline: none;
  transition: border 0.3s ease-in-out;
}

select:focus {
  border-color: #518428;
}

/* Button Styling */
.btn {
  background: #003366;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  width: 100%;
  text-align: center;
}

.btn:hover {
  background: #00509e;
}

.btn:active {
  background: #003366;
  transform: scale(0.98);
}

/* Responsive Design */
@media (max-width: 500px) {
  .dropdown-group {
    flex-direction: column;
    gap: 15px;
  }

  select {
    width: 100%;
  }

  .btn {
    padding: 12px;
  }
}

.result-container {
  text-align: left;
  /* Aligns text to the left */
  padding: 10px;
  /* Adds some padding for better spacing */
  line-height: 1.6;
  /* Adjusts spacing between lines */
  font-size: 18px;
  /* Adjust the font size for better readability */
  color: #333;
  /* Use a neutral color for text */
}

.footer {
  margin-top: 30px;
  background-color: #003366;
  color: white;
  text-align: center;
  padding: 15px 10px;
  position: relative;
  bottom: 0;
  width: 100%;
  font-size: 14px;
}

.footer a {
  color: #66b2ff;
  text-decoration: none;
  font-weight: bold;
}

.footer-span a {
  color: white;
  margin-left: 20px;

}

.footer-span {
  margin-top: 20px;

}




.footer a:hover {
  text-decoration: underline;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.inner-datepicker-container {
  width: 100%;

  height: fit-content;
  padding: 20px;
  background-color: #f8f9fa;
  border: 0.5px solid black;
  border-radius: 5px;
}

.extra-content {
  margin-top: 60px;
  text-align: left;
  /* Ensures text starts from the left */
  margin-left: 0;
  /* Removes any left margin, if any */
  padding-left: 0;
  /* Removes any left padding, if any */
}

@media screen and (max-width: 500px) {
  .inner-body {
    width: 100%;
  }

  .main-body {
    padding: 10px;
  }
}
