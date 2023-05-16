import React from 'react';
import { Link } from 'react-router-dom';

const Others = () => {
    return (
        <div>
            <h3>Here is our terms and condition</h3>
            <p>Go back to registration<Link to="/register">Register</Link></p>
        </div>
    );
};

export default Others;