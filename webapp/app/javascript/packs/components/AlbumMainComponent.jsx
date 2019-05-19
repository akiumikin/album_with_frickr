import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Album extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAlbum();
  }

  render() {
    const albums = this.props.albums;
    const albumList = albums.map((album) =>
      <AlbumRow key={album.id} album={album} />
    );

    return (
      <div className="c-container">
        <section className="c-container__wrap">
          <div className="p-header">
            <h2 className="c-heading">アルバム一覧</h2>
          </div>
          <div>
          <table className="p-detailTable">
            <thead>
              <tr className="p-detailTable__head">
                <th>id</th>
                <th>名前</th>
              </tr>
            </thead>
            <tbody>
              {albumList}
            </tbody>
          </table>
        </div>
        </section>
      </div>
    );
  }
}

const AlbumRow = (prop) => {
    return (
      <tr className="p-detailTable__underLine">
        <td>{prop.album.id}</td>
        <td>{prop.album.name}</td>
      </tr>
    );
  };

Album.propTypes = {
  // ToDo arrayの中身の型定義
  // https://github.com/akiumikin/album_with_frickr/issues/10
  albums: PropTypes.array,
};
