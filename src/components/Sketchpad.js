```jsx
import React, { useRef, useEffect } from 'react';

/**
 * Sketchpad Component, provides a HTML5 Canvas that can be drawn on.
 * Upon Mouse Down, Drawing starts until Mouse Up.
 */
const Sketchpad = () => {
  // Initialize a Ref for the Canvas and its Context for later use
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // Boolean state to check if the Mouse is Pressed (and so if we should draw)
  const [isDrawing, setIsDrawing] = React.useState(false);

  // On Component Mounting, init the canvas size and context attributes
  useEffect(() => {
    const canvas = canvasRef.current;
    
    // Set Canvas to Full Screen Size in High Quality Scaling (2x)
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    
    // Save this context to the referenced variable
    contextRef.current = context;
  }, []);

  // Function to start drawing when the Mouse gets Pressed
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    
    // Update State to Drawing
    setIsDrawing(true);
  };

  // Function to stop drawing on Mouse Release
  const finishDrawing = () => {
    contextRef.current.closePath();
    
    // Update State to Not Drawing
    setIsDrawing(false);
  };

  // Function to draw on the Canvas each time the Mouse Moves while Pressed
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <canvas
      onMouseDown={startDrawing} // On Mouse Press, start drawing
      onMouseUp={finishDrawing} // On Mouse Release, end drawing
      onMouseMove={draw} // On Mouse Move, if drawing, draw
      ref={canvasRef} // Reference to this Canvas for other functions
    />
  );
};

export default Sketchpad;
```