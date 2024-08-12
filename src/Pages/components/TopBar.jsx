import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

export default function TopBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <div className="container-fluid">
                {/* Logo on the left */}
                <div className='d-flex w-100 align-items-center justify-content-between'>
                    <a className="navbar-brand" href="#">
                        <img src="img/logo.png" alt="logo" className="logo" />
                    </a>

                    {/* Search bar in the center with responsive width */}
                    
                            <form className='mx-auto position-relative'>
                                <input
                                    className="form-control search-input" // Add a custom class
                                    type="search"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                                <FaSearch className="search-icon" />
                            </form>

                    {/* Profile icon on the right */}
                    <div className="d-flex align-items-center">
                        <a href="#" className="text-white">
                            <FaUserCircle size={30} />
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    );
}
