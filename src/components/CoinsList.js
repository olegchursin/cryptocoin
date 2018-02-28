import React from 'react'
import Coin from './Coin'

const CoinsList = (props) => {
  let allCoins = props.coins

  let filteredCoins = allCoins.filter(c => {
    console.log("name",c.name)
    console.log("props",props.coinFilter)

    return c.name.toLowerCase().includes(props.coinFilter.toLowerCase())

  })



  return (
    filteredCoins.map(c => {
      return <Coin key={c.id} coin={c} />
    })
  )
}

export default CoinsList
