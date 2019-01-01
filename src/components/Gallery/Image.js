import React from 'react';

export default function Image(props) {
  return (
    <div className="imgBox">
      <img src={props.imgLink} alt="bf" />
    </div>
  );
}
