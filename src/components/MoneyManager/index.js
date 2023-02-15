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
  render() {
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
        </div>
      </div>
    )
  }
}

export default MoneyManager
