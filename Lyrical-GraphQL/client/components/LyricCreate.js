import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
// import query from '../queries/fetchSong';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
        // refetchQueries: [{ query, variables: { id: this.props.songId } }]
      })
      .then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          onChange={ev => this.setState({ content: ev.target.value })}
          value={this.state.content}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
