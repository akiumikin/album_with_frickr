import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AlbumShow extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getAlbum(id);
  }

  imageDelete(image_id) {
    this.props.deleteImage(image_id);
  }

  imageList() {
    const images = this.props.album && this.props.album.album_images || [];
    const imageList = images.map((image) =>
      this.imageRow(image)
    );

    return imageList
  }

  imageRow(image) {
    return (
      <div key={image.id} className="detailTable_div">
        <img src={image.url} width='350px'/>
        <button onClick={() => this.imageDelete(image.id)} className="btn__base">
          ×
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <section className="container__wrap">
          <div className="header">
            <h2 className="heading">アルバム詳細</h2>
          </div>
          <h3>アルバム名：{this.props.album && this.props.album.name}</h3>
          <div>{this.imageList()}</div>
        </section>
      </div>
    );
  }
}

AlbumShow.propTypes = {
  album: PropTypes.object,
};
