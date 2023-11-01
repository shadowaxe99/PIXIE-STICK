import React from 'react';

const ErrorDisplay = ({ errorMessage }) => {
    return (
        <div id="errorDisplay">
            <h2>Error</h2>
            <p>{errorMessage}</p>
        </div>
    );
};

export default ErrorDisplay;