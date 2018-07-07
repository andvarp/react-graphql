import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className={'row'}>
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field">
            <input
              placeholder="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
            />
          </div>

          <div className="input-field">
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </div>

          <div className={'input-field errors'}>
            {this.props.errors.map(err => <div key={err}>{err}</div>)}
          </div>

          <button className={'btn'}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
