import React from 'react'
import Coin from './Coin'

const CoinsList = (props) => {
  let allCoins = props.coins

  let filteredCoins = allCoins.filter(c => {

    return c.name.toLowerCase().includes(props.coinFilter.toLowerCase())

  })

  if(props.coinsSort === 'Alphabeticaly'){
    filteredCoins.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
  }

  if(props.coinsSort === 'Worth'){
    filteredCoins.sort((a,b)=>{
      return a.price_usd - b.price_usd
    }).reverse()
  }

  return (
    filteredCoins.map(c => {
      return <Coin key={c.id} coin={c} />
    })
  )
}

export default CoinsList
