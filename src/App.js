import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from 'google-map-react';
import Autocomplete from 'react-autocomplete';

import { fetchTitles, fetchMovie } from './actions';

import MapMarker from './MapMarker';
import './App.css';

const MENU_STYLES = {
  borderRadius: '3px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '90%',
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '50%', 
  zIndex: '3'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 13,
      value: '',
      titles: [],
      map: ''
    }
  }

  componentWillReceiveProps(props) {
    if (props.titles) {
      this.setState({ titles: props.titles })
    }
  }

  renderMarkers = ()=>{
    if (this.props.locations) {
      return this.props.locations.map((item, idx)=>{
        return (
          <MapMarker key={idx} 
            lat={item.coordinates.lat} 
            lng={item.coordinates.lng} 
            item={item}
            text={idx+1}
          />
        )
      })
    }
  }

  renderLocations = ()=>{
    if (this.props.locations) {
      return this.props.locations.map((item, idx)=>{
        return (
          <div className="list-group-item" key={idx}>
            {idx+1}. {item.locations}
          </div>
        )
      })
    }
  }

  render() {
    let center = [37.778317, -122.418920]
    return (
      <div className="app">
        <div className="control">
          <Autocomplete
            wrapperStyle={{ width: '100%' }}
            value={this.state.value}
            items={this.state.titles}
            getItemValue={(item)=>{
              return item.title
            }}
            onSelect={(val) =>{
              this.setState({ value: val, titles: [ {title: val} ]})
              this.props.fetchMovie(val);
            }}
            onChange={(event, value)=>{
              this.setState({value})
              if (value)
                this.props.fetchTitles(value);
            }}
            menuStyle={MENU_STYLES}
            renderInput={(props)=>{
              return <input 
                className="search-input" {...props} 
                placeholder="Search movie name"
                />
            }}
            renderItem={(item, isHighlighted) =>
              <div key={item.title} 
                style={{ background: isHighlighted ?
                  'lightgray' : 'white' }}
                className="search-item"
              >
                {item.title}
              </div>
            }
          />

        {
          this.props.locations &&
          <div className="result">
            <p className="result-caption">{this.props.locations.length} locations for "{this.props.locations[0].title}"</p>

            <br />
            <div className="result-movie">
              <h3 className="title">{this.props.locations[0].title}</h3>
              <p className="year">Release Year: {this.props.locations[0].release_year}</p>
              <p className="director">Director: {this.props.locations[0].director}</p>
            </div>
            <br />
            <div className="list-group">
              { this.renderLocations() }
            </div>
          </div>
        }
        </div>
        <div className="map">
          <GoogleMap
            bootstrapURLKeys={{ 
              key: process.env.REACT_APP_MAP_KEY,  
              language: 'en'
            }}
            center={center}
            zoom={this.state.zoom}
          >
            { this.renderMarkers() }
          </GoogleMap>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles,
    locations: state.locations
  }
}

export default connect(mapStateToProps, { fetchTitles, fetchMovie })(App);
