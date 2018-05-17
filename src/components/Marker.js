import React, { Component } from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import MapView,{Callout} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';

var me =null;
export default class Marker extends Component {

  constructor(props){
    super(props);
    this.state = {
      description: 'Estoy buscando...',
      flagh:false
    }
    

  }

  render() {
    //let pathIcon = ('../../resources/images/'+this.props.icon).toString();
    let pathIcon = require('../../resources/images/person.png');
    switch(this.props.icon){
      case "movil":
          pathIcon = require('../../resources/images/car.png');
          break;
    }

    me = this;
    //alert("Paso");
    /*
       <!-- <Callout tooltip={true} >
                <View style={styles.viewCallout}>
                  <Text style={styles.textTitle}>{this.props.title}</Text>
                  <Text style={styles.textDescription}>{this.state.description}</Text>
                </View>
            </Callout> -->
    */ 
   //this.setState({description:'Hola, me encuento en: '});
   console.log(this.state); 
   return (
        <MapView.Marker 
          title={this.props.title}  
          description={this.state.description} 
          image={pathIcon} coordinate={this.props.location} 
          onPress={(event) => {this.findAddres.call(this,this.props.location)}} >
          <Callout tooltip={this.state.flagh} >
                <View style={styles.viewCallout}>
                  <Text style={styles.textTitle}>{this.props.title}</Text>
                  <Text tooltip={this.state.flagh}  style={styles.textDescription}>{this.state.description}</Text>
                </View>
            </Callout> 
        </MapView.Marker>
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
