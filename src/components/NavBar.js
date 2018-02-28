import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item>
          <img src='../img/logo-wh.png' />
          Cryptocurrency Lister
        </Menu.Item>
      </Menu>
    )
  }
}
