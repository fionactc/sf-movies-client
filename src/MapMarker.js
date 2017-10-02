import React, { Component } from 'react';

class MapMarker extends Component {
  render() {
    return (
      <div className="marker">
        <div className={this.props.$hover ? 'marker-details visible' : 'marker-details'}>
          <h4>{this.props.item.locations}</h4>
          <p>{this.props.item.fun_facts}</p>
        </div>
        {this.props.text}
        {this.props.$hover}
      </div>
    )
  }
}

export default MapMarker;
