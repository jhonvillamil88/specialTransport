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
      coords : {
        latitude:0,
        longitude:0
      },
      name:'Yo',
      description:'Dame un momento estoy determinando donde estas!'
    };
    //this.findAddres = this.findAddres.bind(this);

    setTimeout(()=>this.findDataMovils(),3000);
    //this.findDataMovils();
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

  findAddres =  (coor) =>{
    let PT = {
      lat: coor.latitude,
      lng: coor.longitude
      
    }
    //this.setState({description:'Hola, me encuento en: '});
    Geocoder.geocodePosition(PT).then(res => {
        // res is an Array of geocoding object (see below)
        let addres = res[0].formattedAddress;
        //console.log(me);
        //alert(addres);
        this.setState({flagh:true,description:'Hola, me encuento en: '+addres});
    })
    .catch(err => console.log(err))
  }

  findDataMovils = ()=>{
    console.log("Hola");
    /*fetch('https://apiservice.servertrack.co:3000')  
    .then(function(response) {
      console.log(response);
      return response.json();
    })*/
    //import data from './src/components/config/data.json';
    var data = require('./src/components/config/data.json');
    console.log(data);

  }

}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
