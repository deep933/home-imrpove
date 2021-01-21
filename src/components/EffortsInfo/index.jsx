import './index.css'
const EffortsInfo = ({ efforts }) => {
  return (
    <div className="efforts-block tag-list">
      <div className="tag number-tag">
        Estimated Efforts<div className="number">{efforts.estimated}</div>
      </div>
      <div className="tag number-tag highlight">
        Actual Efforts
        <div className="number">{efforts.actual ? efforts.actual : '-'}</div>
      </div>
    </div>
  )
}

export default EffortsInfo
