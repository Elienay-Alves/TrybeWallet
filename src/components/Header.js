import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const sum = expenses.length <= 0 ? 0 : expenses
      .map((expense) => expense.exchangeRates[expense.currency].ask * expense.value)
      .reduce((acc, curr) => acc + curr, 0).toFixed(2);

    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ sum }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  sum: state.wallet.total,
  currencies: state.wallet.currencies,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, null)(Header);
