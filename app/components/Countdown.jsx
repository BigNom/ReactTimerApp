var React = require('react');
var Nav = require('Nav');

var Countdown = (props) => {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            Countdown
          </div>
        </div>
      </div>
    );
  }

module.exports = Countdown;
