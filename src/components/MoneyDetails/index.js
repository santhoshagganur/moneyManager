// Write your code here
import './index.css'

const MoneyDetails = props => {
  return (
    <div className="your-account-details">
      <li className="list-item-1">
        <div className="money-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="image"
            />
          </div>
          <div>
            <p className="balance"> Your Balance </p>
            <p className="balance-amount"> Rs 0 </p>
          </div>
        </div>
      </li>

      <li className="list-item-2">
        <div className="money-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="image"
            />
          </div>
          <div>
            <p className="balance"> Your Income </p>
            <p className="balance-amount"> Rs 0 </p>
          </div>
        </div>
      </li>

      <li className="list-item-3">
        <div className="money-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
              className="image"
            />
          </div>
          <div>
            <p className="balance"> Your Expenses </p>
            <p className="balance-amount"> Rs 0 </p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetails
