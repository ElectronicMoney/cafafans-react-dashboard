import React from 'react';
import { Dropdown, Icon, Label } from 'semantic-ui-react';

//User Icon
const checkCircleText = () => {
  return (
    <span>      
        <Icon  circular name='check circle' color="green" />
        Your have a new follower
    </span>
  );
};

//Account Icon
const timesCircleText= () => {
    return (
      <span>      
          <Icon  circular name='times circle' color="red" />
          Your Payment Failed!
      </span>
    );
  };


  //Account Icon
const plusCircleText = () => {
    return (
      <span>      
          <Icon  circular name='plus circle' color="blue" />
          You have a new Payment
      </span>
    );
  };

    //Account Icon
const plusCircleYellowText = () => {
  return (
    <span>      
        <Icon  circular name='plus circle' color="yellow" />
        You have a new Pending Payment notification!
    </span>
  );
};


    //Account Icon
const loadMoreText = () => {
  return (
    <span>      
        <Icon  circular name='arrow alternate circle down' color="green" />
        Load More...
    </span>
  );
};



const trigger = (
  <span>
      <Icon name='bell' size="big" color="blue"/>
      <Label circular color='red' floating>
        22
      </Label>
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
         <strong>NOTIFICATIONS</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'check', text: checkCircleText },
  { key: 'times', text: timesCircleText },
  { key: 'check', text: checkCircleText },
  { key: 'plusYellow', text: plusCircleYellowText },
  { key: 'plus', text: plusCircleText },
  { key: 'check', text: checkCircleText },
  { key: 'loadMore', text: loadMoreText },
]

const NotificationDropdown = () => <Dropdown trigger={trigger} options={options} />

export default NotificationDropdown;