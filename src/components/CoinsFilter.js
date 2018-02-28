import React from 'react'

const CoinsFilter = (props) => {
  return (
    <div>
      Filter:
      <input type="text" value={props.coinFilter} placeholder="Filter by name" onChange={props.handleFilter} />
      Sort by name:
      <button onClick={props.sortAz}>A-Z</button>
      <button onClick={props.sortZa}>Z-A</button>
      Sort by price:
      <button onClick={props.sortPriceHigh}>High-Low</button>
      <button onClick={props.sortPriceLow}>Low-High</button>
      Default:
      <button onClick={props.sortByDefault}>Default</button>
    </div>
  )
}

export default CoinsFilter
