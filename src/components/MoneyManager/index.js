import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: 0,
    type: '',
    total: 0,
    expenses: 0,
    balance: 0,
    transactionsList: [],
  }

  submitDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
    }))
  }

  setTitle = event => {
    this.setState({title: event.target.value})
  }

  setAmount = event => {
    this.setState({amount: event.target.value})
  }

  setType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {title, amount, type} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="user-details">
            <h1 className="user-name"> Hi, Richard </h1>
            <p className="user-description">
              Welcome back to your
              <span className="special"> Money Manager </span>
            </p>
          </div>
          <ul className="money-details-container">
            <MoneyDetails />
          </ul>
          <div className="user-transactions-history-container">
            <div className="user-transactions">
              <h1 className="transaction-heading"> Add Transaction </h1>
              <form className="form-control" onSubmit={this.submitDetails}>
                <label htmlFor="title" className="title">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="TITLE"
                  className="input-el"
                  onChange={this.setTitle}
                  value={title}
                />
                <label htmlFor="amount" className="title">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  placeholder="TITLE"
                  className="input-el"
                  onChange={this.setAmount}
                  value={type}
                />
                <label className="title" htmlFor="selection">
                  TYPE
                </label>
                <select
                  className="input-el"
                  id="selection"
                  onChange={this.setType}
                  value={type}
                >
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId}>{each.displayText}</option>
                  ))}
                </select>
                <button className="add" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="transaction-heading"> History </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
