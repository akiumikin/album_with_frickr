import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from './AlbumFormComponent';

export default class Album extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      image_urls: props.ficker_images
    };
  }

  componentDidMount() {
    this.props.getFickerImages();

    const id = this.props.match.params.id
    if (id) {
      this.props.getAlbum(id);
    };
  }

  select_form_create_or_update() {
    const id = this.props.match.params.id
    const album = this.props.album

    if (id && album) {
      return <Form album={this.props.album} ficker_images={this.props.ficker_images} createOrUpdate={(i, j, k) => { this.albumCreateOrUpdate(i, j, k); }} type='update'/>
    } else if (id) {
      return // データ取得中は何も表示させない
    } else {
      return <Form ficker_images={this.props.ficker_images} createOrUpdate={(i, j, k) => { this.albumCreateOrUpdate(i, j, k); }} type='create'/>
    }
  }

  albumCreateOrUpdate(type, name, urls) {
    const id = this.props.match.params.id
    this.props.createOrUpdateAlbum(type, name, urls, id);
  }

  render() {
    return (
      <div className="container">
        {this.select_form_create_or_update()}
      </div>
    );
  }
}

Album.propTypes = {
  ficker_images: PropTypes.array,
  album: PropTypes.object,
};
