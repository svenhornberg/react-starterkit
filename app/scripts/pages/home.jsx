import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';

import Timer from '../components/timer.jsx';
import TimeStore from '../stores/timeStore';
import TimeActions from '../actions/timeActions';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false,
      time : ''  //edit1
    };
  }

  componentDidMount() {

    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    this.unsubscribe = TimeStore.listen(this.onStatusChange.bind(this));
    
    ItemActions.loadItems();
    TimeActions.currenttime();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div>
        <h1>Home Area</h1>
        <ItemList { ...this.state } />
        <Timer { ...this.state } />
      </div>
    );
  }
}

export default Home;
