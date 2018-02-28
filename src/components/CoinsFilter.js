import React from 'react'

const CoinsFilter = (props) => {
  return (
    <div>
      <input type="text" value={props.coinFilter} placeholder="Filter" onChange={props.handleFilter} />
      <button onClick={props.sortAlphabeticaly}>Sort Alphabeticaly</button>
      <button onClick={props.sortByWorth}>Sort By Worth-Descending</button>
      <button onClick={props.sortByDefault}>Sort By Default</button>
    </div>
  )
}

export default CoinsFilter
