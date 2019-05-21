import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Album extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  albumDelete(id) {
    this.props.deleteAlbum(id);
  }

  moveToDetail(id) {
    location.href=`/${id}`;
  }

  moveToEdit(id) {
    location.href=`/edit/${id}`;
  }

  moveToAlbumNew() {
    location.href=`/new`;
  }

  albumList() {
    const albums = this.props.albums;
    const albumList = albums.map((album) =>
      this.albumRow(album)
    );

    return albumList
  }

  albumRow(album) {
    return (
      <tr key={album.id} className="detailTable__tr">
        <td>{album.id}</td>
        <td>{album.name}</td>
        <td>
          <button onClick={() => this.moveToDetail(album.id)} className="btn__base">
            詳細
          </button>
        </td>
        <td>
          <button onClick={() => this.moveToEdit(album.id)} className="btn__base">
            編集
          </button>
        </td>
        <td>
          {/* ToDo 削除確認をするポップアップかモーダルを設定する */}
          {/* https://github.com/akiumikin/album_with_frickr/issues/15 */}
          <button onClick={() => this.albumDelete(album.id)} className="btn__base">
            ×
          </button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container">
        <section className="container__wrap">
          <div className="header">
            <h2 className="heading">アルバム一覧</h2>
          </div>
          <div>
            <table className="detailTable">
              <thead>
              <tr className="detailTable__head">
                <th>id</th>
                <th>名前</th>
                  {/* 下の１行は削除枠を確保のため */}
                  <th></th>   
              </tr>
              </thead>
              <tbody>
              {this.albumList()}
              </tbody>
            </table>
          </div>
          <div>
            <button onClick={() => this.moveToAlbumNew()} className="btn__base">
              アルバム新規作成
            </button>
          </div>
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  // ToDo arrayの中身の型定義
  // https://github.com/akiumikin/album_with_frickr/issues/10
  albums: PropTypes.array,
};
