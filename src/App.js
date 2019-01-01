import React, { Component } from 'react';
import './App.scss';
import Content from './components/Content/Content';
import Gallery from './components/Gallery/Gallery';

const data = {
  header: 'Feature',
  title: 'Bed & Breakfast',
  detail:
    'From $77 per person, spend the night and fuel up for an adventure-filled day at Snowbrid',
  images: [
    { imgId: 1, imgLink: 'img/bf-1.jpg' },
    { imgId: 2, imgLink: 'img/bf-2.jpg' },
    { imgId: 3, imgLink: 'img/bf-3.jpg' },
    { imgId: 4, imgLink: 'img/bf-1.jpg' },
    { imgId: 5, imgLink: 'img/bf-2.jpg' },
    { imgId: 6, imgLink: 'img/bf-3.jpg' }
  ]
};
class App extends Component {
  render() {
    const { header, title, detail, images } = data;
    return (
      <div className="App">
        <Content header={header} title={title} detail={detail} />
        <Gallery images={images} />
      </div>
    );
  }
}

export default App;
