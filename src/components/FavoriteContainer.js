import React from 'react'
import Coin from './Coin'

const FavoriteContainer = (props) => {
  const favoriteCoins = props.favoriteCoins
  return (
    <div className="ui segment raised inverted">
      <h4>Favorite Coins</h4>
      <p>Click on a coin below to add it to your favorites.</p>
      {
        favoriteCoins.map(c => {
          return <div key={c.id}><Coin coin={c} executeAction={props.removeFromFavorites}/></div>
        })
      }
    </div>
  )
}

export default FavoriteContainer;
