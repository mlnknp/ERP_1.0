// Header.jsx
import '../App.css'; // Import the CSS file

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <img src="path/to/your/logo.png" alt="School Logo" className="logo-image" />
      </div>
      <div className="school-name">
        <h1>School Name</h1>
        <h3>Address</h3>
      </div>
    </header>
  );
}

export default Header;
