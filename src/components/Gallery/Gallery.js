import React, { Component } from 'react';
import classNames from 'classnames';

import './Gallery.scss';
import GalleryLayout from '../Layout/GalleryLayout';
import Image from './Image';

export default class Gallery extends Component {
  state = {
    imgIndex: 0,
    prev: false,
    next: true
  };

  prevClick = () => {
    if (this.state.imgIndex > 0) {
      if (this.state.imgIndex - 1 === 0) {
        this.setState({ imgIndex: this.state.imgIndex - 1, prev: false });
      }
      this.setState({ imgIndex: this.state.imgIndex - 1, next: true });
    }
  };

  nextClick = () => {
    if (this.props.images.length - 1 > this.state.imgIndex) {
      if (this.props.images.length - 2 === this.state.imgIndex) {
        this.setState({ imgIndex: this.state.imgIndex + 1, next: false });
      }
      this.setState({ imgIndex: this.state.imgIndex + 1, prev: true });
    }
  };
  render() {
    let indexBar = this.props.images.map((image, i) => {
      const imgNumber = (i + 1).toString().padStart(2, '0');
      if (i === this.state.imgIndex) {
        return (
          <div key={imgNumber} className="ctr__index--current">
            {imgNumber}
          </div>
        );
      }
      return (
        <div
          key={imgNumber}
          onClick={() => {
            if (i === this.props.images.length - 1) {
              this.setState({ imgIndex: i, next: false, prev: true });
            } else if (i === 0) {
              this.setState({ imgIndex: i, next: true, prev: false });
            } else {
              this.setState({ imgIndex: i, next: true, prev: true });
            }
          }}
        >
          {imgNumber}
        </div>
      );
    });
    const { imgLink } = this.props.images[this.state.imgIndex];
    return (
      <GalleryLayout>
        <div className="gallery">
          <Image imgLink={imgLink} />
          <div className="ctr">
            <div className="ctr__index">{indexBar}</div>
            <div className="ctr__btn">
              <div className="ctr__btn--prev" onClick={this.prevClick}>
                <i
                  className={classNames('fas fa-arrow-left', {
                    'ctr__btn--disable': this.state.prev === false
                  })}
                />
              </div>
              <div className="ctr__btn--next" onClick={this.nextClick}>
                <i
                  className={classNames('fas fa-arrow-right', {
                    'ctr__btn--disable': this.state.next === false
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </GalleryLayout>
    );
  }
}
