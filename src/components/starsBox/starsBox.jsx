import React from "react";

const StarsBox = ({stars , img}) => {
  return (
    <div>
      <div style={{ width: "400px", height: "370px", display : 'flex' , alignItems : 'center', flexDirection : 'column', justifyContent : 'space-between', gap : '20px'}}>
        <img style={{}} src={stars} alt="" />
        <p style={{width : '55%', lineHeight : '30px',textAlign : 'center', fontSize : '22px'}}>
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </p>
        <aside style={{width : '60%', height : '100px' ,display : "flex", alignItems : 'center', gap : '20px'}}>
            <img src={img} alt="" />
            <h4 style={{fontSize : '20px', fontFamily : 'sans-serif', color : 'rgba(35, 166, 240, 1)'}}>Regina Miles<h4 style={{color : 'black'}}>Designer</h4></h4>
        </aside>
      </div>
    </div>
  );
};

export default StarsBox;
