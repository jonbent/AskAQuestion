import React from 'react';
import * as SessionUtil from '/imports/util/SessionUtil';

import '/imports/scss/Navbar.scss'

const Navbar = ({currentUser, loggedIn}) => {
    const handleLogin = () => {
        SessionUtil.login()
    };
    const handleLogout = () => {
        SessionUtil.logout()
    };
    return (
        <div id="navbar">
            <div className="nav-item">
                <div className="title">Ask A Question</div>
            </div>
            {currentUser && <div className="nav-item">
                <div>
                    <span className="greeting">Hey, {currentUser.profile.name}</span>
                    <div className="logout" onClick={handleLogout}>Logout</div>
                </div>
            </div>}
            {!currentUser && <div className="nav-item">
                    <div className="login" onClick={handleLogin}>Login</div>
            </div>}
        </div>
    );
};

export default Navbar;