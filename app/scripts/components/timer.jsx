import React from 'react';

class Timer extends React.Component {

  constructor(){
    super();
  }

  render() {
    var time = this.props.time;

    return (
      <div>
        { time }
      </div>
    );
  }

}

Timer.propTypes = {
  time : React.PropTypes.string
}

export default Timer;
