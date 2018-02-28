import React from 'react'

const Coin = (props) => {
  return (
    <div className="ui segment raised">
      <h1>{props.coin.name}</h1>
      <h5>{props.coin.symbol}</h5>
      <h3>{props.coin.price_usd} USD</h3>
    </div>
  )
}

export default Coin
