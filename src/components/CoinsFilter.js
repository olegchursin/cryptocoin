import React from 'react'
import { Input } from 'semantic-ui-react'

const CoinsFilter = (props) => {
  return (
    <div>
      <div >
        <Input className="filter" type="text" value={props.coinFilter} placeholder="Filter by name" onChange={props.handleFilter}/>
      </div>
      <div className="sort">
        <button className="ui button black" onClick={props.sortPriceHigh}>
          <i className="sort amount down icon"></i>
          High-Low
        </button>
        <button className="ui button black" onClick={props.sortPriceLow}>
          <i className="sort amount up icon"></i>
          Low-High
        </button>
      </div>
      <div className="sort">
        <button className="ui button black" onClick={props.sortAz}>
          <i className="sort alphabet down icon"></i>
          A-Z
        </button>
        <button className="ui button black" onClick={props.sortZa}>
          <i className="sort alphabet up icon"></i>
          Z-A
        </button>
      </div>
      <div className="sort">
        <button className="ui button black"onClick={props.sortByDefault}>
          <i className="sync icon"></i>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default CoinsFilter
