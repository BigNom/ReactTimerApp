var React = require('react');
var Nav = require('Nav');

var Timer = (props) => {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            Timer
          </div>
        </div>
      </div>
    );
  }

module.exports = Timer;
