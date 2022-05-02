import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { thunk } from '../actions/index';

class Form extends Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { allCurrencies } = this.props;

    return (
      <div>
        <form action="">
          <label htmlFor="value">
            Valor
            <input type="text" data-testid="value-input" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" data-testid="description-input" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select data-testid="currency-input" id="currency">
              { allCurrencies.map((currency) => (
                <option key={ currency }>{ currency }</option>))}
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de Pagamento
            <select data-testid="method-input" id="payment-method">
              <option value="money">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria
            <select data-testid="tag-input" id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(thunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  getCurrency: Proptypes.func.isRequired,
  allCurrencies: Proptypes.arrayOf(Proptypes.string).isRequired,
};
