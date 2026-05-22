import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
      <div className="container-fluid">
        {/* 1. Brand/Logo (Left) */}
        <a className="navbar-brand fw-bold text-uppercase" href="#" style={{ letterSpacing: '1px' }}>
          <span className="text-primary">VE</span>NUS
        </a>
        
        {/* Responsive Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links & Action Wrapper */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          {/* 2. Main Links (Perfectly Centered)
              Using 'mx-auto' tells Bootstrap to push everything else away from both sides, 
              forcing this exact group into the dead center */}
          <div className="navbar-nav gap-3 mx-auto text-center my-3 my-lg-0">
            <a className="nav-link active fw-medium text-primary" aria-current="page" href="#">Home</a>
            <a className="nav-link mx-2 fw-medium text-white-50" href="#">Explore</a>
            <a className="nav-link mx-2 fw-medium text-white-50" href="#">About Us</a>
            <a className="nav-link mx-2 fw-medium text-white-50" href="#">Contact Us</a>
          </div>
          
          {/* 3. Action Button (Far Right) 
              Sitting outside the main navbar-nav group so it stays on the right edge */}
          <div className="text-center">
            <button className="btn btn-outline-primary btn-sm px-4 rounded-pill fw-semibold">
              Log In
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;