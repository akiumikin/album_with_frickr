import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Album extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // this.props.getEmployee();
  }

  render() {
    return (
      <div className="c-container">
        <section className="c-container__wrap">
          <div className="p-header">
            <h2 className="c-heading">ユーザー詳細</h2>
          </div>
        </section>
      </div>
    );
  }
}

Album.propTypes = {
};
