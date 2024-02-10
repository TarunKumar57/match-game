import './index.css'

const TabList = props => {
  const {tabDetails, onTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const style = isActive ? 'tab-btn active-tab-btn' : 'tab-btn'
  const onClickTab = () => {
    onTab(tabId)
  }
  return (
    <li>
      <button type="button" onClick={onClickTab} className={style}>
        {displayText}
      </button>
      {isActive && <hr />}
    </li>
  )
}

export default TabList
