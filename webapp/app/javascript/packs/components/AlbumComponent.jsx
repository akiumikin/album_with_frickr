import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Swiper from "react-id-swiper";
import "react-id-swiper/src/styles/css/swiper.css";

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
      <tr key={album.id} className="p-detailTable__underLine">
        <td>{album.id}</td>
        <td>{album.name}</td>
        <td>
          <button onClick={() => this.moveToDetail(album.id)} className="c-btn__base">
            詳細
          </button>
        </td>
        <td>
          <button onClick={() => this.moveToEdit(album.id)} className="c-btn__base">
            編集
          </button>
        </td>
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
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    }

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
            <button onClick={() => this.moveToAlbumNew()} className="c-btn__base">
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
