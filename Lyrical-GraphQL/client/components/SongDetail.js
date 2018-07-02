import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Song Detail</h3>
        {this.props.data.song.id} <br />
        {this.props.data.song.title}
      </div>
    );
  }
}

// const mutation = gql`
//   mutation AddSong($title: String) {
//     addSong(title: $title) {
//       id
//       title
//     }
//   }
// `;

export default graphql(query, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
