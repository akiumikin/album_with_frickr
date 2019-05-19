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

  render() {
    return (
      <div className="c-container">
        <section className="c-container__wrap">
          <div className="p-header">
            <h2 className="c-heading">アルバム詳細({this.props.albums}</h2>
          </div>
        </section>
      </div>
    );
  }
}

AlbumShow.propTypes = {
  albums: PropTypes.array,
};
