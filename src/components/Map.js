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
      },
      latitude:0,
      longitude:0
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
        },
        (error) => {
          console.log(error);
          console.log(error);
        }
      );
    } catch(e) {
      console.log("2 "+e);
    }
  }
  render() {

    return (
      <MapView
        renderMarker={renderMarker}
        style={styles.map}
        region={this.state.region}
      >
      <Marker location={{latitude:this.state.latitude, longitude:this.state.longitude}}/>
      { defaultMarkers.map((row)=><Marker key={ctrl=ctrl+1} icon="movil" location={row}/>)}
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
