import React from 'react';

import './Content.scss';
import ContentLayout from '../Layout/ContentLayout';

export default function Content(props) {
  return (
    <ContentLayout>
      <div className="header">
        <p>{props.header}</p>
      </div>
      <div className="main">
        <h1 className="main__title">{props.title}</h1>
        <div className="main__detail">{props.detail}</div>
        <div className="main__btn">
          <span>></span> Book Now
        </div>
      </div>
    </ContentLayout>
  );
}
