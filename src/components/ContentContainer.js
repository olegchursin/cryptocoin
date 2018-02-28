import React from 'react';
import CoinsFilter from './CoinsFilter';
import CoinsList from './CoinsList';
import NavBar from './NavBar'

class ContentContainer extends React.Component {
  state = {
    coins: [],
    coinFilter: '',
    coinsSort: ''
  }

  sortAz = () => {
    this.setState({
      coinsSort: 'Az'
    })
  }
  sortZa = () => {
    this.setState({
      coinsSort: 'Za'
    })
  }
  sortPriceHigh = () => {
    this.setState({
      coinsSort: 'PriceHigh'
    })
  }
  sortPriceLow = () => {
    this.setState({
      coinsSort: 'PriceLow'
    })
  }
  sortByDefault = () => {
    this.setState({
      coinsSort: ''
    })
  }

  componentDidMount = () => {
    fetch('https://api.coinmarketcap.com/v1/ticker/')
    .then(res => res.json())
    .then((coinsArr) => {
      this.setState ({
        coins: coinsArr
      }, () => console.log("initial", this.state.coins))
    })
  }

  handleFilter = (e) => {
    this.setState({
      coinFilter: e.target.value
    })
  }


  render(){
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="ui main container">
          <h1 className="ui header header-top">Cryptocurrency lister</h1>
          <CoinsFilter
            handleFilter={this.handleFilter}
            sortAz={this.sortAz}
            sortZa={this.sortZa}
            sortPriceHigh={this.sortPriceHigh}
            sortPriceLow={this.sortPriceLow}
            sortByDefault={this.sortByDefault}
             />
          <CoinsList
            {...this.state}
            coins={this.state.coins} />
        </div>
      </div>
    )
  }

}

export default ContentContainer;
