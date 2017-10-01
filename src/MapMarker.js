import React, { Component } from 'react';

class MapMarker extends Component {
  render() {
    return (
      <div className="marker">
        <div className="marker-details">
          <h4>Pier 50- end of the pier</h4>
          <p>Established in 1867, Buena Vista Park is the oldest official park in San Francisco</p>
        </div>
        {this.props.text}
      </div>
    )
  }
}

export default MapMarker;
