import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import { LoactionDetailsForm } from './components/LoactionDetailsForm';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

class App extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    name: 'Minhazur Rahman',
  };

  locationDetails = {
    lat: 23.170664,
    lng: 89.212418,
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  render() {
    const { selectedPlace, name } = this.state;

    if (!this.props.loaded) return <div>Loading...</div>;
    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '100vh', position: 'relative', width: '100vw' }}
        initialCenter={this.locationDetails}
        center={this.locationDetails}
        zoom={15}
      >
        <Marker
          name="Jashore"
          onClick={this.onMarkerClick}
          position={this.locationDetails}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <LoactionDetailsForm myName={name} location={selectedPlace} />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: `${API_KEY}`,
})(App);
