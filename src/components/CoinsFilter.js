import React from 'react'
import { Input } from 'semantic-ui-react'

const CoinsFilter = (props) => {
  return (
    <div>
      <div >
        <Input className="filter" type="text" value={props.coinFilter} placeholder="Filter by name" onChange={props.handleFilter}/>
      </div>
      <div className="sort">
        <button class="ui button black" onClick={props.sortPriceHigh}>
          <i class="sort amount down icon"></i>
          High-Low
        </button>
        <button class="ui button black" onClick={props.sortPriceLow}>
          <i class="sort amount up icon"></i>
          Low-High
        </button>
      </div>
      <div className="sort">
        <button class="ui button black" onClick={props.sortAz}>
          <i class="sort alphabet down icon"></i>
          A-Z
        </button>
        <button class="ui button black" onClick={props.sortZa}>
          <i class="sort alphabet up icon"></i>
          Z-A
        </button>
      </div>
      <div className="sort">
        <button class="ui button black"onClick={props.sortByDefault}>
          <i class="sync icon"></i>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default CoinsFilter
