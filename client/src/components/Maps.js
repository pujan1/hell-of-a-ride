import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


export default class Maps extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyBmy6fB8rpp0Nb7TSHGdfnfH8TQyMBayrQ"
      >
        <GoogleMap
          id="marker-example"
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
          zoom={11}
          center={{
            lat: 37.772,
            lng: -122.214
          }}
        >
          <Marker
            onLoad={marker => {
              console.log('marker: ', marker)
            }}
            position={{
              lat: 37.772,
              lng: -122.214
            }}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}