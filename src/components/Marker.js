import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Marker extends Component {

  render() {
    //let pathIcon = ('../../resources/images/'+this.props.icon).toString();
    let pathIcon = ('../../resources/images/movil.png');
    return (
        <MapView.Marker  image={require(pathIcon)} coordinate={this.props.location} />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
