import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { thunk, userExpenses } from '../actions/index';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = async () => {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await fetchApi.json();
    const { toSaveExpenses } = this.props;
    const expenses = { ...this.state, exchangeRates: result };
    toSaveExpenses(expenses);
    const { id } = this.state;
    this.setState({
      id: id + 1,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    });
  }

  render() {
    const { allCurrencies } = this.props;
    const {
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;

    return (
      <div>
        <form action="">
          <label htmlFor="value">
            Valor
            <input
              type="number"
              name="value"
              data-testid="value-input"
              id="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              data-testid="description-input"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              data-testid="currency-input"
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              { allCurrencies.map((theCurrency) => (
                <option key={ theCurrency }>{ theCurrency }</option>))}
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de Pagamento
            <select
              data-testid="method-input"
              id="payment-method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesas
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allCurrencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(thunk()),
  toSaveExpenses: (value) => dispatch(userExpenses(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  getCurrency: Proptypes.func.isRequired,
  allCurrencies: Proptypes.arrayOf(Proptypes.string).isRequired,
  toSaveExpenses: Proptypes.func.isRequired,
};
