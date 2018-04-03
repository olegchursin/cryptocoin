import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <Menu inverted>
        <Menu.Item>
          <img src='../img/logo-wh.png' alt="img"/>
          Cryptocurrency Lister
        </Menu.Item>
      </Menu>
    )
  }
}
