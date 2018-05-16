import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
      coords : {},
      name:'Yo',
      description:'Dame un momento estoy determinando donde estas!'
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({coords:position.coords});
      }, (error) => {
          alert(JSON.stringify(error))
      }, {
          enableHighAccuracy: true,
          timeout: 20000
      });
  }
  render() {

    return (
      <MapView
        style={styles.map}
        region={this.state.region}
      >
       <Marker  location={this.state.coords} title = {this.state.name} description = {this.state.description}> 
            
       </Marker> 
      { defaultMarkers.map((row)=><Marker key={ctrl=ctrl+1} icon="movil" location={row}/>)}
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
