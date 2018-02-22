import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="center-align">
            <h1>
                Emaily!
            </h1>
            <Link to="/surveys">
                Collect feedback from your users
            </Link>
        </div>
    );
}

export default Landing;