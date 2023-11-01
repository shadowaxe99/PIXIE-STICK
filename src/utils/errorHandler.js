```javascript
// src/utils/errorHandler.js

/**
 * displayError function logs the provided error to the console
 * and returns an action object used for error handling in a Redux-like architecture.
 * @param {Object} error - The error object
 * @return {Object} - The action object with type 'DISPLAY_ERROR' and payload as the error message
 */
export function displayError(error) {
    console.error(error);
    return {
        type: 'DISPLAY_ERROR',
        payload: error.message
    };
}

/**
 * handleRequestError function logs the provided error to the console
 * and returns an action object intended specifically for request errors.
 * This can be used in a context where the error originates from a failed HTTP request.
 * @param {Object} error - The error object
 * @return {Object} - The action object with type 'REQUEST_ERROR' and payload as the error message
 */
export function handleRequestError(error) {
    console.error(error);
    return {
        type: 'REQUEST_ERROR',
        payload: error.message
    };
}

/**
 * handleGPT3Error function is a specific error handler for GPT-3 related errors.
 * It logs the error and returns an action object with more specific information about the error.
 * @param {Object} error - The error object
 * @return {Object} - The action object with type 'GPT3_ERROR' and payload as the error message
 */
export function handleGPT3Error(error) {
    console.error(error);
    return {
        type: 'GPT3_ERROR',
        payload: error.message
    };
}
```