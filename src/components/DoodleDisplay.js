import React from 'react';

const DoodleDisplay = ({ doodleData }) => {
  return (
    <div id="doodleDisplay">
      {doodleData.map((doodle, index) => (
        <div key={index}>
          <img src={doodle.image} alt="Doodle" />
          <p>{doodle.interpretation}</p>
        </div>
      ))}
    </div>
  );
};

export default DoodleDisplay;