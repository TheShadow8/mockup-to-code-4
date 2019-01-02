import React from 'react';
import PropsTypes from 'prop-types';

export default function Image(props) {
  return (
    <div className="imgBox">
      <img src={props.imgLink} alt="bf" />
    </div>
  );
}

Image.propTypes = {
  imgLink: PropsTypes.string.isRequired
};
