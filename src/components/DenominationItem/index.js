import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatedAmountValue} = props
  const {value} = denominationDetails
  const buttonValue = () => {
    updatedAmountValue(value)
  }
  return (
    <li className="btn-container">
      <button className="btn" onClick={buttonValue} type="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
