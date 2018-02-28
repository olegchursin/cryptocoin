import React from 'react';
import CoinsFilter from './CoinsFilter';
import CoinsList from './CoinsList';

class ContentContainer extends React.Component {
  state = {
    coins: [],
    coinFilter: '',
    coinsSort: ''
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

  handleSort = (e) => {
    this.setState({
      coinSort: e.target.value
    })
  }

  render(){
    return (
      <div>
        <CoinsFilter
          handleFilter={this.handleFilter}
          handleSort={this.handleSort} />
        <CoinsList {...this.state} coins={this.state.coins} />
      </div>
    )
  }

}

export default ContentContainer;
