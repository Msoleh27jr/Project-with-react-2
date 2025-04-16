import React from 'react';
import './boxs.css';

const Boxs = ({ name, img, text, textCol, bgCol }) => {
  return (
    <div>
      <div className="box" style={{ backgroundColor: bgCol }}>
        <img src={img} alt="" />
        <h2 className="box-title" style={{ color: textCol }}>{name}</h2>
        <hr className="box-line" style={{ borderColor: textCol }} />
        <p className="box-text" style={{ color: textCol }}>{text}</p>
      </div>
    </div>
  );
};

export default Boxs;
