import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
    document.title = "Mentorship | About Us";
    
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/Home">Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
