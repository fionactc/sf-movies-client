import React, { Component } from 'react';
import './App.css';

import GoogleMap from 'google-map-react';
import Autocomplete from 'react-autocomplete';

import MapMarker from './MapMarker';

const items = [
  { label: 'apple' },
  { label: 'banana' },
  { label: 'pear' }
];

class App extends Component {
  static defaultProps = {
    // center: ['37.773972', '-122.431297'],
    // zoom: 9
    // center: {lat: 59.95, lng: 30.33},
    zoom: 13
  }

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onChildClick = (key, childProps) =>{
  }

  render() {
    let center = [37.778317, -122.418920]
    let value = '';
    return (
      <div className="app">
        <div className="control">
          <Autocomplete
            wrapperStyle={{ width: '100%' }}
            value={this.state.value}
            items={items}
            getItemValue={(item)=>item.label}
            onSelect={(val) =>this.setState({ value: val})}
            onChange={(event, value)=>{
              this.setState({value})
              clearTimeout(this.requestTimer)
              // request
            }}
            renderInput={(props)=>{
              return <input 
                className="search-input" {...props} 
                placeholder="Search movie name"
                />
            }}
            renderItem={(item, isHighlighted) =>
              <div key={item.label} 
                style={{ background: isHighlighted ?
                  'lightgray' : 'white' }}
                className="search-item"
              >
                {item.label}
              </div>
            }
          />

          <div className="result">
            <p className="result-caption">5 locations for "Age of Adaline"</p>
            <br />
            <div className="result-movie">
              <h3 className="title">Age of Adaline</h3>
              <p className="year">Release Year: 2015</p>
              <p className="director">Director: Lee Toland Krieger</p>
            </div>
            <br />
            <div className="list-group">
              <a href="#" className="list-group-item">
                1. Pier 50- end of the pier
              </a>
              <a href="#" className="list-group-item">
                2. Plate Shots SF streets various
              </a>
              <a href="#" className="list-group-item">
                3. Driving various SF Streets
              </a>
              <a href="#" className="list-group-item">
                4. Montgomery/Green
              </a>
            </div>
          </div>
        </div>
        <div className="map">
          <GoogleMap
            id="hello"
            center={center}
            zoom={this.props.zoom}
            onChildClick={this.onChildClick}
          >
            <MapMarker lat={37.773937} lng={-122.384802} text={'A'} />
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default App;
