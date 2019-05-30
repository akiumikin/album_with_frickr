import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Swiper from "react-id-swiper";
import "react-id-swiper/src/styles/css/swiper.css";

export default class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.album ? props.album.name : '',
      image_urls: props.album ? props.album.album_images.map(image => image.url) : []
    };
  }

  albumCreateOrUpdate() {
    this.props.createOrUpdate(this.props.type, this.state.name, this.state.image_urls);
  }

  onChangeAlbumName(event) {
    this.setState({name: event.target.value})
  }

  onChangeAddImage(url) {
    // 同一の画像を再選択された時には一旦過去の画像を消して最後に付け加える
    const urls = this.state.image_urls.filter(state_url => state_url != url)
    urls.push(url)
    this.setState({image_urls: urls})
  }

  onChangeDeleteImage(delete_url) {
    const urls = this.state.image_urls.filter(url => url != delete_url)
    this.setState({image_urls: urls})
  }

  // アルバムに登録する画像の一覧
  imageList() {
    const urls = this.state.image_urls;
    const imageList = urls.map((url) =>
      this.imageListRow(url)
    );

    return imageList
  }

  imageListRow(url) {
    return (
      <div key={url}>
        <img src={url} width='150px'/>
        <button onClick={() => this.onChangeDeleteImage(url)} className="c-btn__base">
          ×
        </button>
      </div>
    );
  }

  imageSwiper() {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
    }
    const images = this.props.ficker_images;
    const imageItems = images.map((image) =>
      this.imageItem(image)
    );

    return (
      <Swiper {...params}>
        {imageItems}
      </Swiper>
    );
  }

  imageItem(image) {
    return (
      <div key={image.url_h} onClick={() => this.onChangeAddImage(image.url_h)}>
        <img src={image.url_h} width='300px'/>
      </div>
    );
  }

  render() {
    return (
      <section className="container__wrap">
        <div className="header">
          <h2 className="heading">アルバム{this.props.type == 'create' ? '作成' : '更新'}</h2>
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
          <div>
            画像：
            {this.imageList()}
          </div>
          <button onClick={() => this.albumCreateOrUpdate(this.state.name)} className="btn__base">
            アルバムを{this.props.type == 'create' ? '作成' : '更新'}
          </button>
        </div>
        <div>下記のスライダーから追加したい画像をクリック</div>
        <div>（ドラッグアンドドロップでスワイプできる）</div>
        <div>
          {this.props.ficker_images.length > 0 ? this.imageSwiper() : ''}
        </div>
      </section>
    );
  }
}

Form.propTypes = {
  ficker_images: PropTypes.array,
  album: PropTypes.object,
  createOrUpdate: PropTypes.func
};
