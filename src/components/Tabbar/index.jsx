import { useState } from 'react'
import './index.css'

const Tabbar = ({ tabs, activeTab, handleTabChange }) => {
  const [active, setActive] = useState(activeTab)

  const handleTabClick = tab => {
    setActive(tab)
    handleTabChange(tab)
  }

  return (
    <div className="tabbar">
      {tabs.map(tab => {
        return (
          <div
            className={`tab ${active === tab ? 'active' : 'inactive'}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        )
      })}
    </div>
  )
}

export default Tabbar
