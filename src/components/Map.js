import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


import Marker from '../components/Marker';
import DefaultValues from '../config/defaultValues';

const defaultMarkers = DefaultValues._DEFAULT_MARKERS_;
let ctrl = 1;
export default class Map extends Component {



  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: DefaultValues._DEFAULT_LAT_,
        longitude: DefaultValues._DEFAULT_LON_,
        latitudeDelta: DefaultValues._DEFAULT_DELTA_LAT_,
        longitudeDelta: DefaultValues._DEFAULT_DELTA_LON_,
      }
    };
  }
  render() {

    return (
      <MapView
        renderMarker={renderMarker}
        style={styles.map}
        region={this.state.region}
      >
      { defaultMarkers.map((row)=><Marker key={ctrl=ctrl+1} icon="movil.png" location={row}/>)}
      </MapView>
    );
  }
}
function renderMarker({ location }) {
  return (
    <MapView.Marker
      image={image}
      coordinate={location}
    >
      <MapView.Callout>
        <Text>BiG BiG Callout</Text>
      </MapView.Callout>
    </MapView.Marker>
  );
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
