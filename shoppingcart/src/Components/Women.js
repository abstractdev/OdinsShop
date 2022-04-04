import React from "react";
import '../Styles/Shop.css'

function Women({womenTees, womenHoodies}) {
  const allWomenTees = womenTees.map((e, index) => {
    return (
      <div key={`wTee${index}`} className="women-tee">
        <li data-testid={`wTee${index}`}>
          <div className="item-image-container">
            <img src={e.image} alt="women's tee"/>
          </div>
        </li>
      </div>)
  })
  const allWomenHoodies = womenHoodies.map((e, index) => {
    return (
      <div key={`wHoodie${index}`} className="women-hoodie">
        <li data-testid={`wHoodie${index}`}>
          <div className="item-image-container">
            <img src={e.image} alt="women's hoodie"/>
          </div>
        </li>
      </div>)
  })
  return (
    <>
      {allWomenTees}
      {allWomenHoodies}
    </>
  );
}

export default Women