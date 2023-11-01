```javascript
// src/utils/errorHandler.js

export function displayError(error) {
    console.error(error);
    return {
        type: 'DISPLAY_ERROR',
        payload: error.message
    };
}

export function handleRequestError(error) {
    console.error(error);
    return {
        type: 'REQUEST_ERROR',
        payload: error.message
    };
}

export function handleGPT3Error(error) {
    console.error(error);
    return {
        type: 'GPT3_ERROR',
        payload: error.message
    };
}
```