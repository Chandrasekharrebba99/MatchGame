import './index.css'

const MatchGameItems = props => {
  const {array, clickTabItem} = props
  const {tabId, displayText} = array

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button className="btn" type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default MatchGameItems
