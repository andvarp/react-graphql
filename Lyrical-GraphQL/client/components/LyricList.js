import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({ variables: { id } }).then(() => {});
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li key={id} className={'collection-item'}>
        <strong>{content}</strong>
        <br />
        <div className={'vote-box'}>
          <i className={'material-icons'} onClick={() => this.onLike(id)}>
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }

  render() {
    // if (this.props.data.loading) {
    //   return <div>Loading....</div>;
    // }

    return <ul className={'collection'}>{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
