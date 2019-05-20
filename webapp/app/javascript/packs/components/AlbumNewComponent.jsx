import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Swiper from "react-id-swiper";
import "react-id-swiper/src/styles/css/swiper.css";

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image_urls: []
    };
  }

  componentDidMount() {
    this.props.getFickerImages();
  }

  albumCreate() {
    this.props.createAlbum(this.state.name, this.state.image_urls);
    // 登録後にこの画面に残る意味がないのでアルバム一覧に遷移
    location.href=`/`;
  }

  onChangeAlbumName(event) {
    this.setState({name: event.target.value})
  }

  onChangeAddImage(url) {
    const urls = this.state.image_urls
    urls.push(url)
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
        <img src={image.url_h} width='350px'/>
      </div>
    );
  }

  render() {
    return (
      <div className="c-container">
        <section className="c-container__wrap">
          <div className="p-header">
            <h2 className="c-heading">アルバム作成</h2>
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
            <button onClick={() => this.albumCreate(this.state.name)} className="c-btn__base">
              アルバム作成
            </button>
          </div>
          <div>下記のスライダーから追加したい画像をクリック</div>
          <div>現在Swiperの調整中、一度検証窓を閉じたり開いたりしてみると動く（なぜ？）</div>
          <div>
            {this.imageSwiper()}
          </div>
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  // ToDo arrayの中身の型定義
  // https://github.com/akiumikin/album_with_frickr/issues/10
  ficker_images: PropTypes.array,
};
