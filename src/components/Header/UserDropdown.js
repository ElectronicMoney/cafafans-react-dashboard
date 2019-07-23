import React from 'react';
import { Dropdown, Image, Icon } from 'semantic-ui-react';
import faker from 'faker';

//User Icon
const userText = () => {
  return (
    <span>      
        <Icon  circular name='user' />
        Your Profile
    </span>
  );
};

//Account Icon
const accountText= () => {
    return (
      <span>      
          <Icon  circular name='user secret' />
          Your Account
      </span>
    );
  };


  //Account Icon
const inboxText = () => {
    return (
      <span>      
          <Icon  circular name='inbox' />
          Your Inbox
      </span>
    );
  };


  //Account Icon
const profileSettingText = () => {
    return (
      <span>      
          <Icon  circular name='setting' />
          Profile Settings
      </span>
    );
  };

  //Account Icon
const accountSettingText = () => {
    return (
      <span>      
          <Icon  circular name='setting' />
          Account Settings
      </span>
    );
  };


  //Account Icon
const lockAccountText = () => {
    return (
      <span>      
          <Icon  circular name='lock' />
          Lock Account
      </span>
    );
  };


  //Account Icon
const logoutText = () => {
    return (
      <span>      
          <Icon  circular name='logout' />
          Log Out
      </span>
    );
  };


const trigger = (
  <span>
    <Image avatar src={faker.internet.avatar()}  />
      {faker.name.findName()}
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>{faker.name.findName()}</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: userText },
  { key: 'account', text: accountText },
  { key: 'inbox', text: inboxText },
  { key: 'profileSettings', text: profileSettingText },
  { key: 'accountSettings', text: accountSettingText },
  { key: 'signOut', text: lockAccountText },
  { key: 'signOut', text: logoutText },
]

const UserDropdown = () => <Dropdown trigger={trigger} options={options} />

export default UserDropdown;