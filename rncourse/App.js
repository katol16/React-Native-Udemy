/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
// conenct połaćzy komponenty z redux-store
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import {
    addPlace,
    deselectPlace,
    deletePlace,
    selectPlace} from './src/store/actions/index'

// import image -  tutaj to jest jakis improtowany obiekt, mozesz wiecej na nim zrobic
import placeImage from './src/assets/zdj.png'

class App extends Component {
  placeAddedHandler = placeName => {
      this.props.onAddPlace(placeName);

      // console możesz sprawdzić w przeglądarce internetowej pod "http://localhost:8081/debugger-ui/" dalej nomrlanie wchodzisz w konsole
      // Pamiętaj tylko, że zeby to zadziałało, to trzeba mieć debuggera włączonego w symulatorze danego urządzenia moblinego
      console.log("place added");

      // Za pomocą debuggera, musisz najpeirw włączyć react-native-debugger
      // Następnei uruchom w symulatorze (np. Androida) "JS Debugging"
      // UWAGA! Only one simulator can be connected at the time (Andorid or IOS)
      // You might experience bugs on the other one. So only actively use one.

    // Używamy redux, wiec tego ponizej już nie potrzebujemy
    // this.setState(prevState => {
    //     return {
    //         places: prevState.places.concat({
    //             key: Math.random(),
    //             name: placeName,
    //             image: placeImage
    //             // Jeśli chciałbyć obrazekz  sieci to:
    //             // UWAGA! Pamiętaj,z e do obrazka z sieci musisz przypisac width i height
    //             // image: {
    //             //     uri: "i tutaj link"
    //             // }
    //         })
    //     };
    // });
  };

  placeDeletedHandler = () => {
      this.props.onDeletePlace();

    // Używamy redux, wiec tego ponizej już nie potrzebujemy
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place =>{
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };

  placeSelectedHandler = key => {
      this.props.onSelectPlace(key);

      // Używamy redux, wiec tego ponizej już nie potrzebujemy
      // this.setState(prevState => {
      //     return {
      //         selectedPlace: prevState.places.find(place => {
      //             return place.key === key;
      //         })
      //     };
      // });
  };

  modalClosedHandler = () => {
      this.props.onDeselectPlace();

      // Używamy redux, wiec tego ponizej już nie potrzebujemy
      // this.setState({
      //    selectedPlace: null
      // });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
            selectedPlace={this.props.selectedPlace}
            onItemDeleted={this.placeDeletedHandler}
            onModalClose={this.modalClosedHandler}
        />
        <PlaceInput
            onPlaceAdded={this.placeAddedHandler}
        />
        <PlaceList
            places={this.props.places}
            onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // dzięki flex:1, nasz contaienr zawiera całą powierzchnie telefonu
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const mapStateToProps = state => {
  return {
      places: state.places.places,
      selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);