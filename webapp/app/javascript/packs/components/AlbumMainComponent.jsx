import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {name: ''};
  }

  componentDidMount() {
    this.props.getAlbum();
  }

  albumDelete(id) {
    this.props.deleteAlbum(id);
  }

  albumCreate(name) {
    this.props.createAlbum(name)
  }

  onChangeAlbumName(event) {
    this.setState({name: event.target.value})
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
      <tr key={album.id} className="p-detailTable__underLine">
        <td>{album.id}</td>
        <td>{album.name}</td>
        <td>
          {/* ToDo 削除確認をするポップアップかモーダルを設定する */}
          {/* https://github.com/akiumikin/album_with_frickr/issues/15 */}
          <button onClick={() => this.albumDelete(album.id)} className="c-btn__base">
            ×
          </button>
        </td>
      </tr>
    );
  }

  render() {
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
            <div>
              アルバム名：
              <input
                type='text'
                value={this.state.name}
                onChange={(event => this.onChangeAlbumName(event))}
              />
            </div>
            <button onClick={() => this.albumCreate(this.state.name)} className="c-btn__base">
              アルバム作成
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
