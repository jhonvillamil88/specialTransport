import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

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
        <MapView.Marker  image={pathIcon} coordinate={this.props.location} />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
