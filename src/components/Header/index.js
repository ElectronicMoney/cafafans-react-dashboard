import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import UserDropdown from './UserDropdown';
import NotificationDropdown from './NotificationDropdown';

class Header extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='tiny'>
        <Menu.Item name='logo' active={activeItem === 'logo'} onClick={this.handleItemClick} />
        <Menu.Item
          name='bar'
          active={activeItem === 'bar'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <UserDropdown />
          </Menu.Item>

          <Menu.Item>
            <NotificationDropdown />
          </Menu.Item>

          <Menu.Item>
              <Icon name='tasks' size="big"/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;