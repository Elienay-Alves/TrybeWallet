import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserInfo } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleButton = (event) => {
    const { dispatchUpdateUserInfo, history } = this.props;
    const { email } = this.state;

    event.preventDefault();
    dispatchUpdateUserInfo({ email });
    history.push('/carteira');
  }

  validationEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  }

  validationPassword = (password) => {
    const minimumPasswordLength = 6;
    return password.length >= minimumPasswordLength;
  }

  render() {
    const { email, password } = this.state;
    const allClear = this.validationEmail(email) && this.validationPassword(password);

    return (
      <div>
        <h3>Login</h3>
        <div>
          <form onSubmit={ this.handleButton }>
            <input
              type="email"
              name="email"
              value={ email }
              data-testid="email-input"
              onChange={ this.handleChange }
            />
            <input
              type="password"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
            <button type="submit" disabled={ !allClear }>Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchUpdateUserInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchUpdateUserInfo: (userInfo) => dispatch(updateUserInfo(userInfo)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
