// SideBar.jsx
import '../App.css'; // Import the CSS file

function SideBar() {
  return (
    <aside className="sidebar-container">
      <div className="profile-section">
        <h1>Profile</h1>
        <ul className="profile-list">
          <li><a href="#profile">View Profile</a></li>
          <li><a href="#CreateSchool">Create School</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
      <div className="logout">
        <button>Logout</button>
      </div>
    </aside>
  );
}

export default SideBar;
