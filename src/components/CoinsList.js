import React from 'react'
import Coin from './Coin'

const CoinsList = (props) => {
  let allCoins = props.coins
  let filteredCoins = allCoins.filter(c => {
    return c.name.toLowerCase().includes(props.coinFilter.toLowerCase())
  })

  if(props.coinsSort === 'Az'){
    filteredCoins.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
  }

  if(props.coinsSort === 'Za'){
    filteredCoins.sort((a,b)=>{
      return b.name.localeCompare(a.name)
    })
  }

  if(props.coinsSort === 'PriceHigh'){
    filteredCoins.sort((a,b)=>{
      return a.price_usd - b.price_usd
    }).reverse()
  }

  if(props.coinsSort === 'PriceLow'){
    filteredCoins.sort((a,b)=>{
      return a.price_usd - b.price_usd
    })
  }

  return (
    <div className="ui grid container">
      {
        filteredCoins.map(c => {
          return <Coin key={c.id} coin={c} executeAction={props.addToFavorites}/>
        })
      }
    </div>
  )
}

export default CoinsList
