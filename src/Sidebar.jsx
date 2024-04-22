import React from 'react';

const Sidebar = ({ onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav className="navbar navbar-expand-md sidebar-sticky">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <div className="navbar-nav">
            <ul className="nav flex-column">
              <li className="nav-item text-center p-4 img1">
                <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/admin.jpg" alt="Profile" height={100} width={100} /><br /><br />
                <span>Amar Singh</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('dashboard')}>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('students')}>Students</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handlePageChange('professors')}>Professors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Library</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Staff</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Holiday</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fees</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Attendance</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
