import React from 'react';
import './boxSale.css';

const BoxSale = ({ img, name, text, star, install, about }) => {
  return (
    <div>
      <div className="box-sale">
        <img className="box-sale-img" src={img} alt="" />
        <aside className="box-sale-content">
          <h3 className="box-sale-header">
            English Department <img src={star} alt="" />
          </h3>
          <h4 className="box-sale-title">{name}</h4>
          <p className="box-sale-text">{text}</p>
          <h4 className="box-sale-sales">
            <img src={install} alt="" /> 15 Sales
          </h4>
          <h4 className="box-sale-price">
            $16.48 <span className="discount-price">$6.48</span>
          </h4>
          <img src={about} alt="" />
          <button className="learn-more-btn">Learn More</button>
        </aside>
      </div>
    </div>
  );
};

export default BoxSale;
