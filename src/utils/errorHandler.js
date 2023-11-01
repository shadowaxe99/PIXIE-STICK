```javascript
import React, { useState } from 'react';

const SketchPad = () => {
  const [drawing, setDrawing] = useState([]);
  
  const handleDraw = (event) => {
    const { clientX, clientY } = event.touches[0];
    setDrawing([...drawing, { x: clientX, y: clientY }]);
  }
  
  const handleFinishDrawing = () => {
    const websiteCode = generateWebsiteCode();
    console.log(websiteCode);
    setDrawing([]);
  }
  
  const generateWebsiteCode = () => {
    // Logic to convert drawing to website code
    // ...
    return "Website code generated from drawing";
  }
  
  return (
    <div>
      <div
        onTouchMove={handleDraw}
        onTouchEnd={handleFinishDrawing}
        style={{ border: '1px solid black', width: '500px', height: '500px' }}
      >
        {/* Render drawing */}
        {drawing.map((point, index) => (
          <div key={index} style={{ position: 'absolute', left: point.x, top: point.y, width: '5px', height: '5px', backgroundColor: 'black' }} />
        ))}
      </div>
    </div>
  );
}

export default SketchPad;
```