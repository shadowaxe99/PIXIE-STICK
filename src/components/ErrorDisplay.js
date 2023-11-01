```javascript
// Import React library
import React from 'react';

/**
* The ErrorDisplay component displays an error message.
* It consists of a main wrapper element with an id of "errorDisplay" that encapsulates
* an h2 tag to signify error and a paragraph tag for displaying the actual error message.
* @param {Object} props - properties passed to the component.
* @param {string} props.errorMessage - The error message to be displayed.
* @return {React.Element} Returns a JSX element that displays an error message.
*/
const ErrorDisplay = ({ errorMessage }) => {
    return (
        // Main wrapper element with id "errorDisplay"
        <div id="errorDisplay">
           // Represents "Error" heading
           <h2>Error</h2>
           // Represents the actual error message passed as a prop
           <p>{errorMessage}</p>
        </div>
        // end of main wrapper element
    );
    //end of function
};
// Exports the ErrorDisplay component to be used in other parts of application
export default ErrorDisplay;
```