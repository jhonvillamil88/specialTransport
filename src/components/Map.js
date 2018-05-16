import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoder';


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
        // Position Geocoding
        var PT = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        Geocoder.geocodePosition(PT).then(res => {
            // res is an Array of geocoding object (see below)
            let addres = res[0].formattedAddress;
            this.setState({description:'Actualmente estas en '+addres})
        })
        .catch(err => console.log(err))
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
      { defaultMarkers.map((row)=><Marker title = {row.movil} key={ctrl=ctrl+1} icon="movil" location={row}/>)}
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
