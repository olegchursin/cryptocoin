import React from 'react'

const CoinsFilter = (props) => {
  return (
    <div>
      <input type="text" value={props.coinFilter} placeholder="Filter" onChange={props.handleFilter} />
    </div>
  )
}

export default CoinsFilter
