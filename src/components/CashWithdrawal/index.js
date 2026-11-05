import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updatedAmountValue = value => {
    const {amount} = this.state
    this.setState({
      amount: amount - value,
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <button className="profile" type="button">
              s
            </button>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="amount-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amount-sub-container">
              <p className="amount-color">{amount}</p>
              <p className="rupees-para-first">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="rupees-para-second">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachOne => (
              <DenominationItem
                key={eachOne.id}
                denominationDetails={eachOne}
                updatedAmountValue={this.updatedAmountValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
