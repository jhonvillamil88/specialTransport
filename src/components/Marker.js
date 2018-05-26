import React, { Component } from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import MapView,{Callout} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';

var me =null;
export default class Marker extends Component {


  render() {
    //let pathIcon = ('../../resources/images/'+this.props.icon).toString();
    let pathIcon = require('../../resources/images/person.png');
    switch(this.props.icon){
      case "movil":
          pathIcon = require('../../resources/images/car.png');
          break;
    }

   return (
     
        <MapView.Marker 
          title={this.props.title}  
          description={this.props.description} 
          image={pathIcon} coordinate={this.props.location}  >
          <Callout  >
                <View style={styles.viewCallout}>
                  <Text style={styles.textTitle}>{this.props.title}</Text>
                  <Text  style={styles.textDescription}>{this.props.description}</Text>
                </View>
            </Callout> 
        </MapView.Marker>
    );
  }


}


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  viewCallout:{
    backgroundColor:'gray',
    width:130,
    height:150,
    borderRadius:10
  },
  textTitle:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:16,
    color:'black'

  },
  textDescription:{
    textAlign:'justify',
    color:'white',
    paddingHorizontal:10
  }
});
